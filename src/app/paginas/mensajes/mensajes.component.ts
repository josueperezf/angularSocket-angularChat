import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/servicios/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  constructor(
    public websocketService: WebsocketService
  ) { }

  ngOnInit(): void {
  }
  salir(){
    this.websocketService.logout();
  }
}
