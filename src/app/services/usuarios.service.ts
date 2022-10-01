import { ReqResResponse, Usuario } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  cargarUsuarios(){
    const url = 'https://reqres.in/api/users';

    return this.http.get<ReqResResponse>( url )
                .pipe(
                  map (resp => {
                    return resp.data.map ( user => Usuario.usuarioDesdeJson(user))
                  })
                )

  }
}
