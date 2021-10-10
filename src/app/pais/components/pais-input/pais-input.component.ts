import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter : EventEmitter<string>= new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter(); 


  @Input() placeholder : string = '';
  
  debouncer : Subject<string> = new Subject(); //es un observable
  
  termino : string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      //console.log(valor);
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( ){
    //console.log(this.termino)
    //LLAMANDO EL OBSERVABLE
    this.debouncer.next(this.termino);
  }
}
