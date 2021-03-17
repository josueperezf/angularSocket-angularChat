import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../servicios/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(private websocketService:WebsocketService, private router:Router ){ }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any{
      if(this.websocketService.getUsuario()) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
  }

}
