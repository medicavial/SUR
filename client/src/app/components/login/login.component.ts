import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  mensaje:string ='';
  constructor( private _consultas:ConsultasService, private route: ActivatedRoute,
        private router: Router, private alertService: AlertService)
        {
        }
  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login(){
      this.mensaje = '';
      this.loading = true;
      this._consultas.getUsuarios(this.model.username,  this.model.password)
      .subscribe(
        // data=>{
        //   console.log(data);
        // });
        data => {
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          if(this.returnUrl=='error'|| '/'){
            console.log('error en datos');
            this.mensaje='Error en datos';
          }
          this.router.navigate([this.returnUrl]);
           }
           ,error => {
             console.log('error');
              this.alertService.error(error);
              this.loading = false;
          });
  }
}
