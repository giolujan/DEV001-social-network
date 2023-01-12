import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const auth = getAuth();
// const user = auth.currentUser;
export const currentUserInfo = () => auth.currentUser;
export const createUser = (email, password, nickname, onNavigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: nickname,
      }).then(() => {
        // Profile updated!
        // ...
      }).catch(() => {
        // An error occurred
        // ...
      });
      console.log(userCredential.user);
      onNavigate('/wall');
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
