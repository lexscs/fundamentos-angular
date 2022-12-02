import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componenente-filho',
  templateUrl: './componenente-filho.component.html',
  styleUrls: ['./componenente-filho.component.css']
})
export class ComponenenteFilhoComponent {
  @Input() sobrenome = "";
  @Output() mostraNome = new EventEmitter;

  nome = "";
}
