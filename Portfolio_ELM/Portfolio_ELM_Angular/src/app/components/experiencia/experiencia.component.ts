import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  expList: any;

  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.cargardatos().subscribe(data => {
      this.expList = data.explist;

    });
  }
}