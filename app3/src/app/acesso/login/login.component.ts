import { Component,OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() public exibirPainel :EventEmitter<string> = new EventEmitter<string>()

  constructor(){ }

  ngOnInit(): void { }

  public exibirPainelCadastro(): void{
    //console.log('Chegamos até aqui')
    this.exibirPainel.emit('cadastro')
  }
}
