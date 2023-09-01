<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBeGbEyeABstPgL91W14LMTp1jJ4FyDzAk",
    authDomain: "silent-boomers.firebaseapp.com",
    projectId: "silent-boomers",
    storageBucket: "silent-boomers.appspot.com",
    messagingSenderId: "835608968262",
    appId: "1:835608968262:web:f66d73cbf03a15561b9e47",
    measurementId: "G-BWTX52V0PH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>