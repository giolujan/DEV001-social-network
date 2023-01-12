import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const emailUser = (email, password, onNavigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      onNavigate('/wall');
    })

    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      } else if (error.code === 'auth/wrong-password') {
        alert('Contraseña incorrecta');
      } else if (error.code) {
        alert('Algo esta saliendo mal');
      }
    });
};
