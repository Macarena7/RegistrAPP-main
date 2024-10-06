import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { GeneradorComponent } from './generador/generador.component';
import { ScannerComponent } from './scanner/scanner.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'recuperar-pass', component: RecuperarPassComponent},
  { path: 'docente', component: DocenteComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: 'asignatura', component: AsignaturaComponent},
  { path: 'generador', component: GeneradorComponent},
  { path: 'scanner', component: ScannerComponent},
  { path: 'registrar', component: RegistrarComponent },  //componente para registrar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
