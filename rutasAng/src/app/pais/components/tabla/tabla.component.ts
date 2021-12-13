import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

 
  paisBuscado:string="";

  constructor(private serv:PaisService) { }

  ngOnInit(): void {
  }


  getPaises(){
    
    console.log("pidiendo servicio   ,," + this.paisBuscado)
    this.serv.getPaises(this.paisBuscado);
  }
}
