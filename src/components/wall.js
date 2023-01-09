import {
  saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask,
} from '../lib/firebase.js';

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
          <form id="comment" class="comment">
          <strong>Peluche_12Lopez</strong><input type="text" placeholder="¡Listo para empezar a comer rico y saludable!" id="commentTitle">
          <textarea id="commentDescription" rows="3" placeholder="Ver comentarios"></textarea>
          <button type= "submit" class="send">Publicar</button>
          </form>
          <div id="taskContainer"></div>
      </section>
  </main>
  <footer class="footerHu3">
      <button class="iconGear"><i class="fa-solid fa-gear"></i></button>
      <div class="icon-profile">
          <img src="images/icon-perfil.png" alt="Foto de perfil">
      </div>
  </footer>
  </article>`;
  const taskContainer = wallSection.querySelector('#taskContainer');
  let editTask = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      let commentext = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        commentext += `
      <div class= "containerComment">
      <p><a>${task.title}</a> ${task.description}<p>
      <button class="btn-delete" data-id="${doc.id}">Delete</button>
      <button class="btn-edit" data-id="${doc.id}">Edit</button>
      <hr width="100%">
      </div>`;
      });
      taskContainer.innerHTML = commentext;
      const btnsDelete = taskContainer.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id);
        });
      });
      const btnsEdit = taskContainer.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          comment.commentTitle.value = task.title;
          comment.commentDescription.value = task.description;
          editTask = true;
          id = e.target.dataset.id;
        });
      });
    });
  });
  const comment = wallSection.querySelector('.comment');
  comment.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = comment.commentTitle;
    const description = comment.commentDescription;
    if (!editTask) {
      saveTask(title.value, description.value);
    } else {
      updateTask(id, {
        title: title.value,
        description: description.value,
      });
      editTask = false;
    }
    comment.reset();
  });
  // const startSesionBtn = document.createElement('button');
  // signUpSection.appendChild(startSesionBtn);
  return wallSection;
};
