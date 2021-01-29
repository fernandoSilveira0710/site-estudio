import { Component, HostListener, OnInit } from '@angular/core';
import { MENU } from '../shared/banco-mock';
import { Menu } from '../shared/menu.model';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }
  public menus:Menu[] = MENU
  public redimensionar:string = "container-fluid"

  
  ngOnInit() {
    this.verificaResize(window.innerWidth)
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verificaResize(window.innerWidth)
  }
  
  
  public verificaResize(size:number) 
  {
    console.log(size)
    if (size > 576 && size < 992 )
    {
      this.redimensionar = ""
    }
    else if (size < 576 && size > 992 ) {
      this.redimensionar = "container-fluid"
    }
  }

}
