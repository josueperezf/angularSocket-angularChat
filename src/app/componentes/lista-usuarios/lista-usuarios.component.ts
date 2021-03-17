import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuariosActivos:Observable<any>;
  constructor( private chatService:ChatService ) { }

  ngOnInit(): void {
    this.usuariosActivos = this.chatService.getUsuariosActivos();

    // emitir el obtener usuario para que el backend me envie quienes estan en linea, se usa en esta parte porque, solo los quiero en este lugar, puede que justo cuando se loguee no lo necesite ya que estara la aplicacion haciendo el redireccionamiento
    // obtener-usuarios
    this.chatService.pedirUsuariosConectados('obtener-usuarios');
  }

}
