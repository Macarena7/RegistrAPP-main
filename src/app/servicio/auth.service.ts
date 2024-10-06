import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  buscarBD(usuario: string, clave: string){
    if (usuario === 'profesor' && clave === 'profesor'){
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(usuario);
      this.loginFailedSubject.next(false);
    }
    else if (usuario === 'alumno' && clave === 'alumno'){
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(usuario);
      this.loginFailedSubject.next(false);
    }
    else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
    }
  }

  logout(): void {
    this.usuarioSubject.next('');
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);
  }

  isLoggedIn(){
    return this.isAuthenticated$;
  }

}




