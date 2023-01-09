import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        alert('Email ya esta en uso');
      } else if (error.code === 'auth/invalid-email') {
        alert('Email invalido');
      } else if (error.code === 'auth/weak-password') {
        alert('la contraseña es muy debil');
      } else if (error.code) {
        alert('Algo esta saliendo mal');
      }
    });
};
