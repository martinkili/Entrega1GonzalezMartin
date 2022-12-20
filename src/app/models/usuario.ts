export interface Usuario{

    Id?: number,
    Usuario?: string,
    Contraseña?: string,
    Nombre?: string,
    Admin?: boolean,

}

export let ListaUsuarios : Usuario[] = [

    {
        Id: 1,
        Usuario: 'usuario',
        Contraseña: '1234',
        Nombre: 'Usuario',
        Admin: false,
    },
    {
        Id: 2,
        Usuario: 'admin',
        Contraseña: '1234',
        Nombre: 'Admin',
        Admin: true,
    }

]

    
