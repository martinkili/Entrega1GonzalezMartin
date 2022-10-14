export interface Alumno{
    id:number
    apellido: string
    nombre: string
    edad: number
}

export let ListaAlumnos: Alumno[] = [
    {
        id:1,
        apellido: 'gomez',
        nombre:'camilo',
        edad:22
    },
    {
        id:2,
        apellido: 'fernandez',
        nombre:'daniel',
        edad:25
    },
    {
        id:3,
        apellido: 'lopez',
        nombre:'martin',
        edad:26
    },
]
