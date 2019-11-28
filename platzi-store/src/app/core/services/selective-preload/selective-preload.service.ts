import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    /**
     * Si tiene habilitada la bandera de la estrategia de precarga
     * Retorna la carga del módulo
     * Si no, retorna un observable vacío 'of()'
     */
    if (route.data && route.data.preload) {
      return load();
    } else {
      return of();
    }
  }
}
