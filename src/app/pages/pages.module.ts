import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../shared/shared.module';

import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { GeneradorComponent } from './generador/generador.component';
import { ScannerComponent } from './scanner/scanner.component';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    RecuperarPassComponent,
    DocenteComponent,
    AlumnoComponent,
    AsignaturaComponent,
    GeneradorComponent,
    ScannerComponent,
    RegistrarComponent, // Asegúrate de declarar tu nuevo componente aquí
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    HttpClientModule, // Asegúrate de importar HttpClientModule aquí
  ]
})
export class PagesModule { }
