import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { ActivatedRoute } from '@angular/router';
import { DatoModel, CommentModel } from '../../models/dato.models';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  dt: DatoModel = new DatoModel();
  dtCs: object = [];
  data:any;

  constructor( private datosService: DatosService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.getSingle(id);

    this.datosService.getComments( id )
        .subscribe( ( resp: CommentModel ) =>{
          console.log(resp);
          this.dtCs = resp;
        });
  }

  getSingle(id:String) {
    this.datosService.getSingle( id )
    .subscribe( ( resp ) =>{
      console.log(resp);
      this.data = resp;
    });
  }

}
