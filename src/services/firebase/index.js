import React from 'react'
import firebase from 'firebase/app';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import DataProvider from './DataProvider'
import config from './config.json';

// react-redux-firebase config
const rrfConfig = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  },
  createFirestoreInstance, // <- needed if using firestore
}

firebase.initializeApp(config)
const firebaseInit = () => {
  require('firebase/database')
  require('firebase/firestore')
  require('firebase/storage')
  require('firebase/auth')
  firebase.firestore()
}

const FirebaseProvider = ({ children, ...props }) => (
  <ReactReduxFirebaseProvider {...props} {...rrfConfig}>
    <DataProvider>{children}</DataProvider>
  </ReactReduxFirebaseProvider>
)

export {
  firebase,
  firebaseInit,
  FirebaseProvider,
};
