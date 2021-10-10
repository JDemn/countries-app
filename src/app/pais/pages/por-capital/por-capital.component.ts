import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {
  paiss    : Country[] = [];
  termino  : string = "";
  hayError :boolean = false;

  constructor(private paissService : PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino : string){
    this.hayError = false;
    this.termino = termino; //"termino" en argumento viene del componente Input, pasado por un evento
    console.log(this.termino);

    this.paissService.porCapital(this.termino).subscribe((pCapital)=>{
      console.log(pCapital);
      this.paiss = pCapital;
    }, (err) => {
      this.hayError = true;
      this.paiss = [];
    });
  }

  /*sugerencias(termino : string){
    this.hayError = false;

    //crear sugerencia
  }*/

}
