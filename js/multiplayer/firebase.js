// Inicialização do Firebase (adicione suas configs)
export const firebaseConfig = {
  apiKey: "AIzaSyDAm1-pfNQWwU0XkwMgWX49E3B98vdu_30",
  authDomain: "repotools.firebaseapp.com",
  databaseURL: "https://repotools-default-rtdb.firebaseio.com",
  projectId: "repotools",
  storageBucket: "repotools.appspot.com",
  messagingSenderId: "424897022287",
  appId: "1:424897022287:web:3f5169519d4c726e2cdd3a"
};

if (!window.firebase?.apps?.length) {
  firebase.initializeApp(firebaseConfig);
}