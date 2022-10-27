export interface Usuario{

    Id: number,
    Usuario?: string,
    Contraseña?: string,
    Nombre?: string,
    Admin?: boolean,

}

export let ListaUsuarios : Usuario[] = [

    {
        Id: 1,
        Usuario: 'usuario',
        Contraseña: '12345678',
        Nombre: 'Usuario1',
        Admin: false,
    },
    {
        Id: 2,
        Usuario: 'admin',
        Contraseña: '12345678',
        Nombre: 'Usuario2',
        Admin: true,
    }

]

    
