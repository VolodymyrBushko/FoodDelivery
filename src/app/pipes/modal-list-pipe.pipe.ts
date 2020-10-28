import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalListPipe'
})
export class ModalListPipePipe implements PipeTransform {

  transform(obj:Object){
    return (Object.entries(obj));
  }
}
