import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



var config = {
    apiKey: "AIzaSyAS1CQKBvWrZiUoiOUYUY59bX7dEbGfnRw",
    authDomain: "ecommerce-app-d4050.firebaseapp.com",
    databaseURL: "https://ecommerce-app-d4050.firebaseio.com",
    projectId: "ecommerce-app-d4050",
    storageBucket: "ecommerce-app-d4050.appspot.com",
    messagingSenderId: "872794977254",
    appId: "1:872794977254:web:c54759bb56e61bcb889c27",
    measurementId: "G-4VDQ6CXPKM"
  };

  export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get;
    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          additionalData
        })
      } catch (error){
        console.log(`Error creating user`, error.message)
      }
    };
    return userRef
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : "select_account"});
  export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

  export default firebase;