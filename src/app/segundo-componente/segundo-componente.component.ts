import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = 'Alexander';
  dataNascimento = '1977-10-09'
  urlImagem = './assets/alxwtnb008.jpg';

  mostrarDataNascimento() {
    alert(`A data de nascimento é: ${this.dataNascimento}`)
  }
}
