import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises : Country[] = [];
  @Input() termino : string = '';
  @Input() hError : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
