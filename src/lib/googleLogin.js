import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const emailUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      } else if (error.code === 'auth/wrong-password') {
        alert('Contraseña incorrects');
      } else if (error.code) {
        alert('Algo esta saliendo mal');
      }
    });
};
