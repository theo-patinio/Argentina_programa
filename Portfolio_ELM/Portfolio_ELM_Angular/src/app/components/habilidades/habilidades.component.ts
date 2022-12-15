import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  constructor(private datos: PortfolioService) { }
  dataPortfolio:any

  ngOnInit(): void {
    this.datos.cargardatos().subscribe(data => {
      this.dataPortfolio = data;
    });
  }

}
