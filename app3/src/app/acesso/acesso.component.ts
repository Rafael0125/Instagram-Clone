import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate,keyframes} from '@angular/animations'

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations:[

    trigger('animacao-banner',[
      state('criado',style({
        opacity:1
      })),
      transition('void =>criado',[
        style({
          opacity:0,
          transform: 'translate(-50px,0px)'
        }),
        animate('500ms 0s ease-in-out')
      ])
    ]),

    trigger('animacao-painel',[
      state('criado',style({opacity:1})),
      transition('void => criado',[
        style({ opacity:0,transform:'translate(50px,0'}), // Ponto A // Void
        animate('1000ms 0s ease-in-out',keyframes([ // Tempo de execução, delay, estilo da animação // 
          style({ offset:0.40,opacity:1,transform:'translateX(0)'}), // Ponto B
          style({ offset:0.60,opacity:1,transform:'translateX(0)'}), // Ponto C
          style({ offset:0.61,opacity:1,transform:'translateY(-20px)'}), // Ponto D
          style({ offset:0.75,opacity:1,transform:'translateY(0)'}), // Ponto E
          style({ offset:0.85,opacity:1,transform:'translateY(20px)'}), // Ponto F
          style({ offset:0.99,opacity:1,transform:'translateY(0)'}) // Ponto G
          
        ]))
      ])
    ])

  ]
})
export class AcessoComponent implements OnInit{

  public estadoBanner : string = 'criado'
  public estadoPainel : string = 'criado'

  public cadastro : boolean = false

  constructor(){ }

  ngOnInit(): void {  }

  public exibirPainel(event:string):void{
    this.cadastro = event === 'cadastro' ? true : false
  }

  public inicioDaAnimacao():void{
    //console.log('Inicio da animação')
  }
  public fimDaAnimacao():void{
    //console.log('Fim da animação')
  }

}
