import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {switchMap ,tap } from 'rxjs/operators';  //permite rebibir un observable y regresar otro  && tap es un operador que dispara un efecto secundario

//import { url } from 'inspector';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {
  pais! : Country;

  constructor(private activatedRoute : ActivatedRoute,
    private paisService : PaisService,
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap((params):any=> {
      this.paisService.getPaisPorCodigo(params.id);    //switch siempre retorna un observable
    }),
    tap(console.log)
    )
    .subscribe(pais => {
      //console.log(pais);

      this.pais = pais;
    })

    // //suscribiendose a los cambios del url
    // this.activatedRoute.params.subscribe(({id}) =>{
    //   console.log(id);
    //   //suscrie to get a country
    //   this.paisService.getPaisPorCodigo(id).subscribe(pais => {
    //     console.log(pais);
    //   })
    // })
  }

}
