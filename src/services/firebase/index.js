import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/auth'

import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import { compose } from 'redux'

import config from './config.json';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(config)
firebase.firestore()

const firebaseEnhancer = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig)
);

export {
  firebase,
  firebaseEnhancer,
};
