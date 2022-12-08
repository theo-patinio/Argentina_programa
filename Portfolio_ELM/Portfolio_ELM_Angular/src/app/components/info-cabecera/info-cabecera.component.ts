import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-info-cabecera',
  templateUrl: './info-cabecera.component.html',
  styleUrls: ['./info-cabecera.component.scss']
})
export class InfoCabeceraComponent implements OnInit {

  display = "none";

  mostrar_edit_contacto() {
    this.display = "block";
  }
  ocultar_edit_contacto() {
    this.display = "none";
  }





  constructor( private datos:PortfolioService) { }
  dataPortfolio:any


  ngOnInit(): void {
    this.datos.cargardatos().subscribe(data =>{
      this.dataPortfolio = data;

    });
  }

}
