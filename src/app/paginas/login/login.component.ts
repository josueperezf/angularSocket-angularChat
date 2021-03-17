import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/servicios/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre = '';
  constructor( public websocketService:WebsocketService, private router:Router ) { }

  ngOnInit(): void {
  }
  ingresar() {
    console.log(this.nombre);
    this.websocketService.login(this.nombre).then((resp)=>{
      this.router.navigateByUrl('/mensajes');
    })
  }
}
