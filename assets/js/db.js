function loadFirebaseSDKs() {
    // Create a script element for the firebase-app.js
    const firebaseAppScript = document.createElement('script');
    firebaseAppScript.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
    firebaseAppScript.defer = true;  // Ensures script is executed after the document is parsed
  
    // Create a script element for the firebase-firestore.js
    const firebaseFirestoreScript = document.createElement('script');
    firebaseFirestoreScript.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js";
    firebaseFirestoreScript.defer = true;
  
    // Append the scripts to the document head
    document.head.appendChild(firebaseAppScript);
    document.head.appendChild(firebaseFirestoreScript);
  
    // Call a function to initialize Firebase after the scripts are loaded
    firebaseFirestoreScript.onload = initializeFirebase;
  }

  
  // Initialize Firebase after loading SDKs
function initializeFirebase() {

    const firebaseConfig = {
        apiKey: "AIzaSyA7VJ3rFda3CWmHj-kFr1g95CdQr5d2X7k",
        authDomain: "atlasvest-e30e2.firebaseapp.com",
        projectId: "atlasvest-e30e2",
        storageBucket: "atlasvest-e30e2.firebasestorage.app",
        messagingSenderId: "7949551103",
        appId: "1:7949551103:web:f4dde8df0655464d9ad3ca",
        measurementId: "G-3E614N8R3J"
      };
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    let response

    async function getUserData(email) {
        try {
            const usersRef = db.collection('users');
            const q = usersRef.where('email', '==', email);
            const snapshot = await q.get();
            let response;

            if (snapshot.empty) {
                response = { message: "User with that email does not exist", status: 404 };
            } else {
                const userData = snapshot.docs.map((doc) => doc.data());
                response = { userData, message: "User data retrieved successfully", status: 200 };
            }
            return response;
        } catch (error) {
            const response = { message: `Error getting user data: ${error.message}`, status: 500 };
            console.error("Error in getUserData:", response.message); // Debugging
            return response;
        }
    }

    async function createUser(data) {
        try {
            console.log("Starting createUser..."); // Debugging
            const userCheck = await getUserData(data.email);
            let response;

            if (userCheck.status === 200) {
                response = { message: "User with that email already exists", status: 422 };
            } else {
                const docRef = await db.collection('users').add({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                });
                response = { message: `User created successfully with ID: ${docRef.id}`, status: 201 };
            }
            return response;
        } catch (error) {
            const response = { message: `Error creating user: ${error.message}`, status: 500 };
            console.error("Error in createUser:", response.message); // Debugging
            return response;
        }
    }

    async function handleSignIn(data) {
        const userCheck = await getUserData(data.email);
        let response;
            if ( userCheck.status == 200 && userCheck.userData[0].password == data.password) {
                console.log('logging in user')
                let auth_detail = { user:email, status:'true' }
                localStorage.setItem('auth_info', JSON.stringify(auth_detail))
                response = {message:'user logged in', status:200}
            } else {
                 response={message:'invalid login detail', status:401}
            }
            return response
    }

    function logOutUser(email) {
            localStorage.removeItem('auth_info')
            window.location.replace('/')
    }

    function checkAuthStatus(email) {
        const detail = JSON.parse(localStorage.getItem('auth_info'))
        if (detail && detail.email==email) {
            return {message:'user is logged in', status:200}
        } else {
            return {message:'error getting login status', status:422}
        }

    }

  
    // Expose the function globally so it can be accessed by other scripts
    window.getUserData = getUserData;   // usage: getUserData(email)
    window.handleSignIn = handleSignIn;  // usage: handleSignIn({email,password}, redirect_to)
    window.checkAuthStatus = checkAuthStatus;  // usage: checkAuthStatus(email)
    window.createUser = createUser;   //create user usage:handleSignUp({email,password,name})

  }
  

  
  // Call the function to load Firebase SDKs
loadFirebaseSDKs();
  