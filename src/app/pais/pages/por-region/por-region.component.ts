import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe','oceania']
  regionActiva :string = '';
  paises : Country[] = [];
  hayError = false ;

  constructor(private pasiservice : PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region : string) {
    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = []; //purgar respuesta cada vez que cambie de continente
    //TODO hacer el llamado al servicio
    this.pasiservice.getPorRegion(region)
    .subscribe(pais => {
      console.log(this.paises);
      this.paises = pais;
    });

  }

  getClaseCSS(region : string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
