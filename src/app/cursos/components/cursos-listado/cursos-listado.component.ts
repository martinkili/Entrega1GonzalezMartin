import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-listado',
  templateUrl: './cursos-listado.component.html',
  styleUrls: ['./cursos-listado.component.css']
})
export class CursosListadoComponent implements OnInit {

  cursos$!: Observable<Curso[]>

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private adminGuard: AdminGuard
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.cursos$ = this.cursoService.getAll()
  }

  put(id: number){
    this.router.navigate(['Cursos/Editar/' + id])
  }

  delete(id: number){
    if (confirm("Seguro de eliminar el curso?")){
      this.cursoService.delete(id)
      this.getAll()
    }
  }

}
