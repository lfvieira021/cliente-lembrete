import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  public lembrete!: Lembrete

  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent

  constructor(
    private lembreteService: LembreteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getLembrete(this.activatedRoute.snapshot.params['id'])
  }

  getLembrete(id: number) {
    this.lembreteService.getLembretes(id).subscribe((lembrete: Lembrete) => { this.lembrete = lembrete },
      () => { this.errorMsgComponent.setError('Erro ao buscar lembrete!') })
  }

  editar(lembrete: Lembrete) {
    this.lembreteService.atualizaLembretes(lembrete).subscribe(() => {this.router.navigate([''])},
    () => {this.errorMsgComponent.setError('Erro ao editar lembrete!')})
  }
}
