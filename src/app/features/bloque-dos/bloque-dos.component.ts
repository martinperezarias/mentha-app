import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-dos',
  templateUrl: './bloque-dos.component.html',
  styleUrls: ['./bloque-dos.component.sass']
})
export class BloqueDosComponent implements OnInit {

  public cardContent = [
    { title: 'Clientes', body: '+50', icon: 'av_timer' },
    { title: 'Proyectos', body: '+20', icon: 'energy_program_time_used' },
    { title: 'Presencia Global', body: '5', icon: 'account_tree' },
    { title: 'Workshops', body: '+20', icon: 'bolt' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
