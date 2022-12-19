import { onNavigate } from './router.js';

export const login = () => {
  const loginSection = document.createElement('section');
  loginSection.classList.add('login-page');
  loginSection.innerHTML = ` 
  <article class="hu-1">
    <header>
      <img class="logo-hu1" src="images/logo-huella.png" alt="Logo de la aplicacion"/>
      <h1>PetsPerfect</h1>
      <h2>¡Ingresa y deja tus huellitas!</h2>
    </header>
    <main>
      <form class="page-1">
        <input type="email" class="email" name="email" placeholder="Correo electrónico" required >
        <input type="password" class="password" name="password" placeholder="Contraseña" required >
        <button type= "button" class="startGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Iniciar Sesión con Google</button>
      </form>      
    </main>
  </article> 
  `;

  const link = document.createElement('h3');
  link.classList.add('go-pageRegister');
  link.textContent = '¿No tienes una cuenta? Regístrate';
  const btnStart = document.createElement('Button');
  btnStart.classList.add('startSesion');
  btnStart.textContent = 'Iniciar Sesión';
  loginSection.append(link, btnStart);
  link.addEventListener('click', () => {
    onNavigate('/signup');
  });
  return loginSection;
};
