import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
  styles : [
    `
    li {
      cursor : pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {
  paiss   : Country[] = [];
  paisesSugeridos :Country[] = [];
  termino  : string = "";
  hayError :boolean = false;
  mostrarSugerencia : boolean = false;
  

  constructor(private paissService : PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino : string){
    this.hayError = false;
    this.termino = termino; //termino en argumento viene del componente Input, pasado por un evento
    //console.log(this.termino);
    this.mostrarSugerencia = false;
    this.paissService.buscarPais(this.termino).subscribe((pais)=>{
      //console.log(pais);
      this.paiss = pais;
    }, (err) => {
      this.hayError = true;
      this.paiss = [];
    });
  }
  
  sugerencias(termino : string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    //crear sugerencia
    this.paissService.buscarPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0,3),
    (err)=> this.paisesSugeridos = []
    );

  }

  buscarSugerido(termino : string){
    this.buscar(termino);
  }
}
