import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Countries } from "../pages/interfaces/countries.interface";


@Injectable({
    providedIn: 'root'
  })export class PaisService{

    datosPais:any;
    constructor(private http: HttpClient){}
    

    getPaises(busqueda:string): void{

        console.log(busqueda)
        this.http.get<Countries>("https://restcountries.com/v3.1/name/"+busqueda).subscribe(data=>{

        console.log(data)
        this.datosPais=data;
        })
    }


    getDatosPais(){

        return [...this.datosPais];
    }
}


