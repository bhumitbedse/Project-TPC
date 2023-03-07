import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private USER_KEY:string='';
  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(key:any,user: any): void {
    this.USER_KEY = key;
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }
}
