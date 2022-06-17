import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloqueUnoComponent } from './bloque-uno/bloque-uno.component';
import { BloqueDosComponent } from './bloque-dos/bloque-dos.component';
import { BloqueTresComponent } from './bloque-tres/bloque-tres.component';
import { BloqueComentariosComponent } from './bloque-comentarios/bloque-comentarios.component';
import { BloqueContactoComponent } from './bloque-contacto/bloque-contacto.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BloqueUnoComponent,
    BloqueDosComponent,
    BloqueTresComponent,
    BloqueComentariosComponent,
    BloqueContactoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    BloqueUnoComponent,
    BloqueDosComponent,
    BloqueTresComponent,
    BloqueComentariosComponent,
    BloqueContactoComponent
  ]
})
export class FeaturesModule { }
