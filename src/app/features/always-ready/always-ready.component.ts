import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-always-ready',
  templateUrl: './always-ready.component.html',
  styleUrls: ['./always-ready.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlwaysReadyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
