import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {}

  setItem(key:string,value:string){
    localStorage.setItem('token',value);
  }
  getItem(key:string){
    localStorage.getItem(key);
  }
  removeItem(key:string){
    localStorage.removeItem(key);
  }

  isAuthenticated():boolean {
    if (localStorage.getItem("token")){
      return true;
    }
    else return false;
  }
}
