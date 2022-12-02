import { Component } from '@angular/core';

@Component({
  selector: 'app-componenente-pai',
  templateUrl: './componenente-pai.component.html',
  styleUrls: ['./componenente-pai.component.css']
})
export class ComponenentePaiComponent {
  sobrenome = 'da Silva';

  mostraNomeCompleto(nomeCompleto: any) {
    alert(`o nome completo é: ${nomeCompleto}`);
  }
}
