import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyB6C16eN10VBjITu20eINoIm3phAZrfyEc",
    authDomain: "firevuechat-67dc1.firebaseapp.com",
    projectId: "firevuechat-67dc1",
    storageBucket: "firevuechat-67dc1.appspot.com",
    messagingSenderId: "58387868502",
    appId: "1:58387868502:web:1db3d05dcf7918dfe504f7"
}

const db = firebase.initializeApp(config)
export default db