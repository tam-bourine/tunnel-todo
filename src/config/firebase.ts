import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APPID,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
