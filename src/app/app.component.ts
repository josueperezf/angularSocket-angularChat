import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './servicios/websocket.service';
import { ChatService } from './servicios/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basico01';
  constructor(public WebsocketService: WebsocketService, public chatService:ChatService ) {
  }

  ngOnInit() {
    this.chatService.getMensajesPrivados().subscribe((mensaje)=>{
      console.log(mensaje);

    });
  }
}
