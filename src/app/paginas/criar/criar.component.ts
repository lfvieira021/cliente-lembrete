import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {

  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent

  constructor(
    private lembreteService: LembreteService,
    private router: Router
  ) { }
  
  salvar(lembrete: Lembrete) {
    this.lembreteService.addLembretes(lembrete).subscribe(() => {this.router.navigate([''])},
    () => this.errorMsgComponent.setError('Erro ao criar lembrete!'))
    
  }
}
