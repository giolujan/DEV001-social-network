export const wall = (onNavigate) => {
  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = `
  <article class="hu-3">
  <header class="headerHu3">
      <h1>PetsPerfect</h1>
      <button class="iconPaw"><i class="fa-solid fa-paw"></i></button>
      <button class="iconHouse"><i class="fa-solid fa-house"></i></button>
  </header>
  <main>
      <section class="firstPublication">
          <div class="miniheader">
              <div class="icon-profile">
                  <img src="images/icon-perfil.png" alt="Foto de perfil">
              </div>
              <p class ="user"><strong>Peluche_12Lopez</strong><br>Perú</br></p>
              <button class="iconEllipsis"><i class="fa-solid fa-ellipsis"></i></button>
          </div>
          <img class="post" src="images/imagen de publicación.webp" alt="Foto de publicación">
          <div class="iconSet">
              <button class="iconHeart"><i class="fa-solid fa-heart"></i></button>
              <button class="iconMessage"><i class="fa-regular fa-message"></i></button>
          </div>
          <p><strong>53 me gusta</strong></p>
          <p><strong>Peluche_12Lopez</strong> ¡Listo para empezar a comer rico y saludable!</p>
          <p>Ver comentarios</p>
      </section>
  </main>
  <footer class="footerHu3">
      <button class="iconGear"><i class="fa-solid fa-gear"></i></button>
      <div class="icon-profile">
          <img src="images/icon-perfil.png" alt="Foto de perfil">
      </div>
  </footer>
  </article>`;
  // const startSesionBtn = document.createElement('button');
  // signUpSection.appendChild(startSesionBtn);
  return wallSection;
};
