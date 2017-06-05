import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ConsultasService {
  public headers: Headers;
  constructor( private _http:Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
   }

   getUsuarios(usuario:string, password:string){

     return this._http.post("http://localhost/SUR/server/public/login", JSON.stringify({ usuario: usuario, password: password }),{ headers: this.headers })
      .map(res=>{

        let user = res.json();
                if (user.length>0) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //console.log(user);
                    localStorage.setItem('Usuario', user[0].USR_nombre+' '+user[0].USR_aPaterno+' '+user[0].USR_aMaterno);
                }
      });
  }

 //  loginUser(usuario:string, password:string){
 //    return this._http.post("http://localhost/apisur/public/prueba", JSON.stringify({ usuario: usuario, password: password }),{ headers: this.headers })
 //     .map(res=>{
 //       return  res.json();
 //     });
 // }
}
