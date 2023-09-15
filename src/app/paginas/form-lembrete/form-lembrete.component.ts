import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent {
  @Input() lembrete: Lembrete = <Lembrete>{}
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter()

  constructor ( private lembreteService: LembreteService,
    private router: Router ) { }

  onSubmit() {
    this.outputLembrete.emit(this.lembrete)
  }

 



}
