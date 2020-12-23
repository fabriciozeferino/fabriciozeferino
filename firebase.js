// import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

import firebase from 'firebase'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyBKUD-O5yTX9cGi50CLNfL7pvseyeNu1YM',
  authDomain: 'localhost',
  projectId: 'portifolio-4e1d3',
  storageBucket: 'portifolio-4e1d3.appspot.com',
  messagingSenderId: '319054845444',
  appId: '1:319054845444:web:25737f78f5bf679c01c751',
  measurementId: 'G-4QY57FV2GL'
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
