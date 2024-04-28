import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

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
