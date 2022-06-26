import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-dos',
  templateUrl: './bloque-dos.component.html',
  styleUrls: ['./bloque-dos.component.sass']
})
export class BloqueDosComponent implements OnInit {

  public cardContent = [
    { title: 'Proyectos', body: '+20', icon: 'task' },
    { title: 'Clientes', body: '+50', icon: 'handshake' },
    { title: 'Presencia Global', body: '5', icon: 'public' },
    { title: 'Workshops', body: '+20', icon: 'business' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
