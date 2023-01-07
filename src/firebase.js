import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAA-FS27ZhgwiYM1MQ_nvtgGLCKyJ7J-Wg",
  authDomain: "sample-429a2.firebaseapp.com",
  databaseURL: "https://sample-429a2-default-rtdb.firebaseio.com",
  projectId: "sample-429a2",
  storageBucket: "sample-429a2.appspot.com",
  messagingSenderId: "903895683484",
  appId: "1:903895683484:web:4920999d337dcb11fa7859"
};
	
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
