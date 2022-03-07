import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-switch',
  templateUrl: './diretivas-switch.component.html',
  styleUrls: ['./diretivas-switch.component.css']
})
export class DiretivasSwitchComponent implements OnInit {

  aba: string = 'home';
  constructor() { }

  ngOnInit(): void {
  }

}
