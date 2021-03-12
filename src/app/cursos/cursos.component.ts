import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //O certo é criar um serviço, poré, vamos fazer desde aqui pra simplisficar
  cursos: any =[ 
     "Angular",
     "JavaScript",
     "CSS",
     "HTML",
     "Git"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
