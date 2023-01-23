import {
  saveTask, onGetTasks, deleteTask, getTask, updateTask,
} from '../lib/firebase.js';

export const wall = (onNavigate) => {
  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = `
  <article class="hu-3">
  <header class="headerHu3">
      <h1>PetsPerfect</h1>
      <button class="iconHouse"><i class="fa-solid fa-house"></i></button>
  </header>
  <main>
      <section class="firstPublication">
          <form id="comment" class="comment">
            <input id="commentDescription" class="commentDescription" placeholder="Escribe lo que piensas"></input>
            <button type= "submit" class="send" id="send" >Publicar</button>
          </form>
          <div id="taskContainer"></div>
      </section>
  </main>
  </article>`;
  const taskContainer = wallSection.querySelector('#taskContainer');
  const comment = wallSection.querySelector('.comment');
  let editTask = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      let commentext = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        commentext += `
      <div class= "containerComment">
        <div class="miniheader">
          <div class="icon-profile">
            <img src="images/icon-perfil.png" alt="Foto de perfil">
          </div>
          <p class ="user"><strong>Peluche_12Lopez</strong><br>Perú</br></p>
        </div>
        <p class ="textcoment">${task.description}<p>
        <div class= "containerBtn">
          <button class="btn-delete" data-id="${doc.id}">Delete</button>
          <button class="btn-edit" data-id="${doc.id}">Edit</button>
        </div>
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
          //        comment.commentTitle.value = task.title;
          comment.commentDescription.value = task.description;
          editTask = true;
          id = e.target.dataset.id;
        });
      });
    });
  });

  comment.addEventListener('submit', (e) => {
    e.preventDefault();
    //    const title = comment.commentTitle;
    const description = comment.commentDescription;
    if (!editTask) {
      saveTask(description.value);
    } else {
      updateTask(id, {
        description: description.value,
      });
      editTask = false;
    }
    comment.reset();
  });

  const linkLogin = wallSection.querySelector('.iconHouse');
  linkLogin.addEventListener('click', () => {
    onNavigate('/');
  });
  return wallSection;
};

// const startSesionBtn = document.createElement('button');
// signUpSection.appendChild(startSesionBtn);
// <div class="miniheader">
// <div class="icon-profile">
// <img src="images/icon-perfil.png" alt="Foto de perfil">
// </div>
// <p class ="user"><strong>Peluche_12Lopez</strong><br>Perú</br></p>
// </div>
// <img class="post" src="images/imagen de publicación.webp" alt="Foto de publicación">
// <div class="iconSet">
// <button class="iconHeart"><i class="fa-solid fa-heart"></i></button>
// </div>
// <p><strong>53 me gusta</strong></p>
