import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {


  constructor(private datos:PortfolioService) { }
  dataPortfolio:any


  ngOnInit(): void {
    this.datos.cargardatos().subscribe(data =>{
      this.dataPortfolio = data;

    });
  }
}
