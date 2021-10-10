import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl : string = "https://restcountries.eu/rest/v2";

  constructor(private http : HttpClient ) { }
  
  //tener el filtrado de params de forma global
  get httpParams(){
    return new HttpParams()
    .set('fields','fields=name;capital;alpha2Code;flag;population');
  }
  
  //Buscar páis
  buscarPais(termino : string) : Observable <Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url , {params : this.httpParams});
  }

  porCapital(termino : string ) : Observable <Country []>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, {params : this.httpParams});
  }

  getPaisPorCodigo(id: string) :Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  getPorRegion(region : string ) : Observable <Country []>{
    //FILTRADO DE LOS PARÁMETROS SOLO DONDE SE OCUPA
    // const hhtpParams= new HttpParams()
    // .set('fields','fields=name;capital;alpha2code;flag;population');

    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, {params : this.httpParams});
  }
}
