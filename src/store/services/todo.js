import fetch from 'cross-fetch';
import { URL_getTodoList } from './url';

export const API = {
  initTodo() {
    return new Promise((resolve, reject) => {
      fetch(URL_getTodoList).then(response => response.json()).then(res => {
        resolve(res)
      });
    })
  }
}
