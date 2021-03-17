import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public websocketService:WebsocketService ) { }

  enviarMensaje(mensaje:string){
    const payload = {
      de:this.websocketService.getUsuario().nombre,
      cuerpo: mensaje
    };
    this.websocketService.emit('mensaje', payload);
  }

  getMensajes(){
    // retorna un observable
    return this.websocketService.escuchar('mensaje-nuevo');
  }
  getMensajesPrivados() {
    return this.websocketService.escuchar('mensaje-privado');
  }

  getUsuariosActivos () {
    return this.websocketService.escuchar('usuarios-activos');
  }
  pedirUsuariosConectados(evento){
    this.websocketService.emit(evento);
  }
}
