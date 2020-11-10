import firebase from 'firebase/app'
import 'firebase/analytics'

import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyASB3jN1Kg0hWvxFHTu4fmf_D4Ciy9jA6s',
  authDomain: 'photo-tagging-4457a.firebaseapp.com',
  databaseURL: 'https://photo-tagging-4457a.firebaseio.com',
  projectId: 'photo-tagging-4457a',
  storageBucket: 'photo-tagging-4457a.appspot.com',
  messagingSenderId: '30128479100',
  appId: '1:30128479100:web:e589a35218c495252822f9',
  measurementId: 'G-7HJZWQRGMK',
}

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()
export const db = firebase.firestore()

export default firebase
