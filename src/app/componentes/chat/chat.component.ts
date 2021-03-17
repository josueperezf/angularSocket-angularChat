import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajesSubscrito: Subscription;
  mensajes: any [] = [];
  // HTMLElement no se debe importar por que typscript ya lo detecta
  elemento:HTMLElement;
  constructor( private chatService:ChatService ) { }

  ngOnInit(): void {
    this.elemento =  document.querySelector('#chat-mensajes');
    this.mensajesSubscrito = this.chatService.getMensajes().subscribe((mensaje)=>{
      console.log(mensaje);
      this.mensajes.push(mensaje);
      // la siguiente linea espera a que se renderice la informacion, por ello es el 50, luego de ese tiempo hace que el scroll se mueva al final para ver el mensaje mas reciente
      // este scroll automatico se hace en todos los dispositivos que esten en el chat, esto lo puedo personalizar segun donde tenga el foco o el scroll cada dispositivo
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

    });
  }
  ngOnDestroy() {
    // esto 4es para que cuando salga de esta pantalla, el socket deje de escuchar y libere memoria
    this.mensajesSubscrito.unsubscribe();
  }

  enviar() {
    this.texto = this.texto.trim();
    if(this.texto.length > 0) {
      this.chatService.enviarMensaje(this.texto);
      this.texto = '';
    }

  }
}
