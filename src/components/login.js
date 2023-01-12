import { emailUser } from '../lib/userLogin.js';

export const login = (onNavigate) => {
  const loginSection = document.createElement('section');
  loginSection.classList.add('login-page');
  loginSection.innerHTML = ` 
  <article class="hu-1">
    <header>
      <img class="logo-hu1" src="images/logo-huella.png" alt="Logo de la aplicacion"/>
      <h1>PetsPerfect</h1>
      <h2>¡Ingresa y deja tus huellitas!</h2>
    </header>
    <main class="page-1">
      <form id="form-1" class="form-1">
        <input type="email" class="email" name="email" placeholder="Correo electrónico" required >
        <input type="password" class="password" name="password" placeholder="Contraseña" required >
        <button type= "submit" class="startSesion">Iniciar Sesión</button>
      </form> 
      <hr width="100%">
      <button type= "button" class="startGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Iniciar Sesión con Google</button>
      <h3>¿No tienes una cuenta? <a class="link">Regístrate</a></h3>  
    </main>
  </article> 
  `;

  const loginforms = loginSection.querySelector('.form-1');
  loginforms.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    emailUser(email, password, onNavigate);
  });

  const linkRegister = loginSection.querySelector('.link');
  linkRegister.addEventListener('click', () => {
    onNavigate('/signup');
  });

  return loginSection;
};
