// import './lib/sign_up.js';
import './lib/firebase.js';
import { component } from './components/router.js';

// import { login } from './components/router';

const rootDiv = document.querySelector('#root');
// Este es el punto de entrada de tu aplicacion

rootDiv.appendChild(component);
