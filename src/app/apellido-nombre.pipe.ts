import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellidoNombre'
})

export class ApellidoNombrePipe implements PipeTransform {

  transform(valor: any): unknown {
    return valor.nombre + ' ' + valor.apellido;
  }

}
