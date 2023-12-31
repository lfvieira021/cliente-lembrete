import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  lembreteUrl = `${environment.baseUrl}`

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]> {

    return this.http.get<Lembrete[]>(this.lembreteUrl)

  }

  getLembretes(id: number): Observable<Lembrete> {

    return this.http.get<Lembrete>(`${this.lembreteUrl}/${id}`)

  }

  addLembretes(lembrete: Lembrete): Observable<Lembrete> {

    return this.http.post<Lembrete>(this.lembreteUrl, lembrete)
  }

  atualizaLembretes(lembrete: Lembrete): Observable<Lembrete> {

    return this.http.put<Lembrete>(`${this.lembreteUrl}/${lembrete.id}`, lembrete)
  }

  deletaLembretes(id: number): Observable<Lembrete> {

    return this.http.delete<Lembrete>(`${this.lembreteUrl}/${id}`)

  }
}
