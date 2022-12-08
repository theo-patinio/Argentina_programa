import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {

  display = "none";

  mostrar_edit_acerca() {
    this.display = "block";
  }
  ocultar_edit_acerca() {
    this.display = "none";
  }




  constructor() { }

  ngOnInit(): void {
  }

}
