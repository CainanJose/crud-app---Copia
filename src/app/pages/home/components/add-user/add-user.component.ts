import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  cadastroUsuario: FormGroup;
  constructor(private router: Router){
    this.cadastroUsuario = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      sobrenome: new FormControl('', Validators.required),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      opcao: new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    console.log("Cadastrado com sucesso!!");
    console.log(this.cadastroUsuario.value);

    this.router.navigate(["/app/users"])
    
    
  }

}
