export interface Curso {

    Id : number,
    Nombre: string,
    FechaInicio: Date,
    Clases: number,
    Profesor: string,

}

export let ListaCursos: Curso[] = [
    {
        Id: 1,
        Nombre: 'Angular',
        FechaInicio: new Date(2022, 1, 1),
        Clases: 18,
        Profesor: 'Abner'
    },
    {
        Id: 1,
        Nombre: 'React',
        FechaInicio: new Date(2022, 5 , 15),
        Clases: 145,
        Profesor: 'Mark Zukerberg'
    },
    {
        Id: 1,
        Nombre: 'C#',
        FechaInicio: new Date(2022, 8, 22),
        Clases: 5,
        Profesor: 'Bill Gates'
    },
]
