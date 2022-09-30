import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any = [];

  constructor( private usuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
        .subscribe( resp => {

          console.log(resp);
          this.usuarios = resp.data;
          
        });

  }

}
