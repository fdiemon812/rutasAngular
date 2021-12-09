import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Countries } from '../interfaces/countries.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {


  paisBuscado:string="";

  constructor(private serv:PaisService) { }

  ngOnInit(): void {
  }


  getPaises(){
    
    console.log("pidiendo servicio   ,," + this.paisBuscado)
    this.serv.getPaises(this.paisBuscado);
  }
}
