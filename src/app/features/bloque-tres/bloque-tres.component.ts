import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-tres',
  templateUrl: './bloque-tres.component.html',
  styleUrls: ['./bloque-tres.component.sass']
})
export class BloqueTresComponent implements OnInit {

  public cardContent = [
    { title: 'Productividad', icon: 'av_timer' },
    { title: 'Huella', icon: 'fingerprint' },
    { title: 'Organización', icon: 'account_tree' },
    { title: 'Energía', icon: 'bolt' },
    { title: 'Equipos', icon: 'groups' },
    { title: 'Sustenibilidad', icon: 'pedal_bike' },
    { title: 'Soluciones IT', icon: 'computer' },
    { title: 'Sostenibilidad', icon: 'public' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
