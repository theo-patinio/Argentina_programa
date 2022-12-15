import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  constructor(private datos: PortfolioService ) {}


  estudios_list: any;


  ngOnInit(): void {
    this.datos.cargardatos().subscribe(data => {
      this.estudios_list = data.estudios_list;
    });
  }

}
