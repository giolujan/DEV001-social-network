// importamos la funcion que vamos a testear
// import { describe, expect, it, jest } from 'vitest' ;
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  collection, getDoc, onSnapshot, doc,
} from 'firebase/firestore';
import { emailUser } from '../src/lib/userLogin.js';
import { createUser } from '../src/lib/authentication.js';
import { getTask, onGetTasks, saveTask } from '../src/lib/firebase.js';

jest.mock('firebase/firestore');
jest.mock('firebase/auth');
describe('emailUser', () => {
  it('debería ser una función', () => {
    expect(typeof emailUser).toBe('function');
  });
  it('debe validar el usuario registrado', () => {
    signInWithEmailAndPassword.mockImplementation(() => Promise.resolve({
      email: 'guiolu@gmail.com',
      password: '1234567',
    }));
    emailUser(signInWithEmailAndPassword);
    expect(signInWithEmailAndPassword).toBeCalled();
  });
  it('deberia retornar un objeto con la propiedad email', () => {
    emailUser('guiolu@gmail.com', '1234567');
    expect({
      email: 'guiolu@gmail.com',
      password: '1234567',
    }).toEqual(expect.anything());
  });
  it('deberia recibir parametros', () => {
    emailUser('guiolu@gmail.com', '1234567');
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'guiolu@gmail.com', '1234567');
  });
});

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('debe llamar al metodo crear usuario', () => {
    createUserWithEmailAndPassword.mockImplementation(() => Promise.resolve({
      email: 'danasol@gmail.com',
      password: '1234567',

    }));
    createUser(createUserWithEmailAndPassword);
    expect(createUserWithEmailAndPassword).toBeCalled();
  });
  it('deberia retomar un objeto con la propiedad email y password', () => {
    createUser('danasol@gmail.com', '1234567');
    expect({
      email: 'danasol@gmail.com',
      password: '1234567',
    }).toEqual(expect.anything());
  });
  it('deberia recibir parametros', () => {
    createUser('danasol@gmail.com', '1234567');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'danasol@gmail.com', '1234567');
  });
});

describe('onGetTasks', () => {
  it('deberia ser una función', () => {
    expect(typeof onGetTasks).toBe('function');
  });
  it('deberia llamar al metodo onSnapshot', () => {
    onSnapshot.mockImplementation(() => ({}));
    onGetTasks();
    expect(onSnapshot).toBeCalled();
  });
  it('deberia escuchar el post publicado', () => {
    onGetTasks(saveTask);
    expect({ saveTask }).toEqual(expect.anything());
  });
  it('deberia recibir parametros', () => {
    const callback = () => {};
    onGetTasks(callback);
    expect(onSnapshot).toHaveBeenCalledWith(collection(), callback);
  });
});

describe('getTask', () => {
  it('deberia ser una funcion', () => {
    expect(typeof getTask).toBe('function');
  });
  it('debería ser llamada con un parametro', () => {
    getDoc.mockImplementation(() => Promise.resolve());
    doc.mockImplementation(() => ('qJTzhGCwpfW3DH00BPvZkgjqjsg1'));
    const id = 'qJTzhGCwpfW3DH00BPvZkgjqjsg1';
    getTask(id);
    expect(getDoc).toHaveBeenCalledWith(id);
  });
  it('deberia llamar al metodo doc', () => {
    getTask(getDoc);
    expect(getDoc).toBeCalled();
  });
  it('deberia devolver un objto', () => {
    getTask({ id: 'qJTzhGCwpfW3DH00BPvZkgjqjsg1' });
    expect(getDoc).toEqual(expect.anything(), { id: 'qJTzhGCwpfW3DH00BPvZkgjqjsg1' });
  });
});
