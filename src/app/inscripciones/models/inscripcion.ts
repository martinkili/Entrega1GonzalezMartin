import { Curso } from "src/app/models/curso";

export interface Inscripcion{
    Id: number;
    IdAlumno: number;
    Curso: Curso;
}