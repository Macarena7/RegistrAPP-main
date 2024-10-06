import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {

  username: string = '';
  password: string = '';
  phone: string = '';

  private http = inject(HttpClient);
  private router = inject(Router);

  private registrationSuccessSubject = new BehaviorSubject<boolean>(false);
  registrationSuccess$ = this.registrationSuccessSubject.asObservable();

  private registrationFailedSubject = new BehaviorSubject<boolean>(false);
  registrationFailed$ = this.registrationFailedSubject.asObservable();
  registrationSuccess: boolean = false;
  registrationFailed: boolean = false;

  ngOnInit(): void {}

  register(username: string, password: string, phone: string): void {
    const newUser = { username, password, phone };

    this.http.post('https://6702d65abd7c8c1ccd3ffe2d.mockapi.io/usuarios', newUser)
      .subscribe({
        next: (response) => {
          this.registrationSuccess = true;
          this.registrationFailed = false;
          this.router.navigate(['/login']); // Redirect to login after success
        },
        error: () => {
          this.registrationSuccess = false;
          this.registrationFailed = true;
        }
      });
  }

}
