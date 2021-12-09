import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private serv:PaisService) { }


  ngOnInit(): void {
  }

  get listaPaises():any{
    
    return this.serv.getDatosPais();
  }


 

  
}
