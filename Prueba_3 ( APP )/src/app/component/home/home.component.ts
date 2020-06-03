import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: object = [];
  data:any[];

  constructor( private datosService: DatosService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.datosService.getAll()
    .subscribe( resp => {
      console.log(resp);
      this.data = [];
      this.data = resp;
    });
  }

}
