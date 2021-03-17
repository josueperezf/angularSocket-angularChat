import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  public usuario:Usuario = null;
  constructor(private socket: Socket) {
    this.cargarStorage();
    this.chequearStatus();
  }

  chequearStatus() {
    this.socket.on('connect',()=>{
      this.socketStatus = true;
      console.log('se conecto el socket');
    });
    this.socket.on('disconnect',()=>{
      this.socketStatus = false;
      console.log('se desconecto el socket');
    });
  }

  emit(evento:string, payload?: any , callback?: Function ) {
    this.socket.emit(evento,payload, callback);
  }

  escuchar(evento:string) {
    // retorna un  observable
    return this.socket.fromEvent(evento);
  }

  login(nombre: string) {
    return new Promise((resolve, reject)=>{
      this.emit('configurar-usuario', {nombre}, (resp)=>{
        console.log(resp);
        this.usuario = new Usuario(nombre);
        this.guardarStorage();
        resolve(resp);
      } );
    });
  }
  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }
  cargarStorage() {
    if(localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      // cada vez que alguien recargue la pagina, se manda para que configure en el backend
      this.login(this.usuario.nombre);
    }
  }

  getUsuario() {
    return this.usuario;
  }
}
