import { login } from './login.js';
import { register } from './register.js';
import { wall } from './wall.js';

const rootDiv = document.querySelector('#root');
let routes = {};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.firstElementChild.remove();
  // rootDiv.innerHTML = '';
  // rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[pathname]);
  // return rootDiv;
};

routes = {
  '/': login(onNavigate),
  '/signup': register(onNavigate),
  '/wall': wall(onNavigate),
};

export const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.firstElementChild.remove();
  rootDiv.append(component);
};
