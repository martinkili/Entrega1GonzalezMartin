import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-detalle',
  templateUrl: './cursos-detalle.component.html',
  styleUrls: ['./cursos-detalle.component.css']
})
export class CursosDetalleComponent implements OnInit {

  curso$!: Observable<Curso>
  
  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: CursosService
  ) { 

  }

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');
      this.curso$ = this.cursoService.get(id);
    })
    
  }

}
