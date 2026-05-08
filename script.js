const firebaseConfig = {
  apiKey: "AIzaSyB5X95YgL3uFwNb6S7vRbhUMrqpjPj9Udw",
  authDomain: "cyber-web-app.firebaseapp.com",
  projectId: "cyber-web-app",
  storageBucket: "cyber-web-app.appspot.com",
  messagingSenderId: "432294151782",
  appId: "1:432294151782:web:edcf1a74701eea04ae4fa7",
  measurementId: "G-4YXW9NXRFM"
};

// 🔌 INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


// 🔄 LOADING → LOGIN
window.onload = () => {
    setTimeout(() => {
        const loading = document.getElementById("loading");
        const card = document.getElementById("loginCard");

        if (loading) loading.style.display = "none";
        if (card) card.style.display = "block";
    }, 2000);
};


// 🔐 LOGIN FUNCTION
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        alert("Login successful ✅");
        window.location.href = "dashboard.html";
    })
    .catch(error => {
        alert(error.message);
    });
}


// 🆕 SIGNUP FUNCTION
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        alert("Signup successful ✅");
    })
    .catch(error => {
        alert(error.message);
    });
}


// 🔴 GOOGLE LOGIN
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
    .then(() => {
        alert("Google Login successful ✅");
        window.location.href = "dashboard.html";
    })
    .catch(error => {
        alert(error.message);
    });
}