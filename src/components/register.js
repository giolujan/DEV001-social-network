import { createUser } from '../lib/authentication.js';

export const register = (onNavigate) => {
  const signUpSection = document.createElement('section');
  signUpSection.classList.add('signUp-page');
  signUpSection.innerHTML = `
    <article class="hu-2">
        <header>
            <h1>Registrar</h1>
            <button type="button" class="registerGoogle"><img class="icon-Google" src="images/icon-Google.png"
                    alt="Icono de Google" />Registro con Google</button>
            <hr width="100%">
        </header>
        <main>
            <form id="page-2" class="page-2">
                <input type="text" class="nickname" name="nickname" placeholder="Nickname y Apellido" >
                <input type="date" class="dateBorn" name="dateBorn" placeholder="Fecha de nacimiento/adopción">
                <input type="email" class="email" name="email" placeholder="Correo electrónico" >
                <input type="password" class="password" name="password" placeholder="Contraseña" >
                <input type="password" class="passwordVerified" name="passwordVerified"
                    placeholder="Verificar Contraseña" >
                <button type= "submit" class= "acept">Aceptar</button>
            </form>
            <h3>Al registrarte, aceptas nuestras <a href="" class="go-pageCondition">condiciones</a>, la <a href=""
                        class="go-pagePoliticPrivacity">Politica de privacidad</a> y la <a href=""
                        class="go-pagePoliticCookies">Politica de cookies</a></h3>
            <div class="buttons">
            <button type= "button" class= "return">Volver</button>
            </div>
        </main>
    </article>`;

  const createform = signUpSection.querySelector('#page-2');
  // console.log(createform);
  createform.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const nickname = document.querySelector('.nickname').value;
    createUser(email, password, nickname, onNavigate);
  });
  // <img class="cat-hu2" src="images/cat-hu2.png" alt="Imagen de un gatito"></img>
  // const btnAcept = signUpSection.querySelector('.acept');
  // btnAcept.addEventListener('click', () => {
  //  onNavigate('/wall');
  // });

  const btnReturn = signUpSection.querySelector('.return');
  btnReturn.addEventListener('click', () => {
    onNavigate('/');
  });

  // const linkDos = document.createElement('button');
  // linkDos.classList.add('return');
  // linkDos.textContent = 'Volver';
  // signUpSection.append(linkDos);
  // linkDos.addEventListener('click', () => {
  //  onNavigate('/');
  // });

  // const linktres = document.createElement('button');
  // linktres.classList.add('acept');
  // linktres.textContent = 'Aceptar';
  // signUpSection.append(linktres);
  // linktres.addEventListener('click', () => {
  //  onNavigate('/wall');
  // });
  return signUpSection;
};
