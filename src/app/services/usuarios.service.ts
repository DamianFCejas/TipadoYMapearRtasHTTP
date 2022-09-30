import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  cargarUsuarios(){
    const url = 'https://reqres.in/api/users';

    return this.http.get(url);

  }
}
