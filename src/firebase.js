import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAyynVi71KQsKtEAEq6WRgGAGfhai_QezU',
  authDomain: 'e-commerce-app-671a6.firebaseapp.com',
  databaseURL: 'https://e-commerce-app-671a6.firebaseio.com',
  projectId: 'e-commerce-app-671a6',
  storageBucket: 'e-commerce-app-671a6.appspot.com',
  messagingSenderId: '114872559938',
  appId: '1:114872559938:web:6f87799c82ba4bfb19c0db',
  measurementId: 'G-5C0P0W2PZN'
}

export const fb = firebase.initializeApp(firebaseConfig)
