import { login } from './login.js';
import { signUp } from './signup.js';
import { wall } from './wall.js';

const rootDiv = document.querySelector('#root');

const routes = {
  '/': login,
  '/signup': signUp,
  '/wall': wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.firstElementChild.remove();
  // rootDiv.innerHTML = '';
  // rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[pathname]());
  // return rootDiv;
};
export const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.firstElementChild.remove();
  rootDiv.append(component());
};