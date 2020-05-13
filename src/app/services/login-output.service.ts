import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginOutputService {

  private _loginSource = new Subject<String>();
  login$ = this._loginSource.asObservable();

  private _logOutSource = new Subject<string>();
  logOut$ = this._logOutSource.asObservable();

  constructor() { }

  sendLoginStatus(message: string){
    this._loginSource.next(message);
  }

  sendLogOutMessage(message: string){
    this._logOutSource.next(message);
  }

}
