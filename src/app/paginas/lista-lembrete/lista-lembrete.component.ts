import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembrete: Lembrete[] = []
  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.lembreteService.getListaLembretes().subscribe((lembrete: Lembrete[]) => {
      this.lembrete = lembrete
    }, () => { this.errorMsgComponent.setError('Erro ao buscar lembretes!') })
  }

  delete(id: number) {
    this.lembreteService.deletaLembretes(id).subscribe(() => { this.listar()
     }, () => { this.errorMsgComponent.setError('Erro ao deletar lembrete!') })
  }

  existemLembretes(): boolean {
    return this.lembrete && this.lembrete.length > 0
  }
}
