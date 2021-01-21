import { Component, OnInit } from '@angular/core';
import { TELEFONE } from '../shared/banco-mock';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  public telefoneWA:string = TELEFONE

  constructor() { }

  ngOnInit() {
  }

}
