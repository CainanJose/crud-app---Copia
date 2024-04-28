import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  salvar = {
    name: '',
    sobrenome: '',
    email: '',
  };

  save() {
    const msgConsole = 'Novo Usuário Adicionado:' + this.salvar.name +"\n"+ this.salvar.sobrenome+"\n"+ this.salvar.email;
    console.log(msgConsole);
  }
}
