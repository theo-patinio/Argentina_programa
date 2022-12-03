import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-info-cabecera',
  templateUrl: './info-cabecera.component.html',
  styleUrls: ['./info-cabecera.component.scss']
})
export class InfoCabeceraComponent implements OnInit {

  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.cargardatos();
  }

}
