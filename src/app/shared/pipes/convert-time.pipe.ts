import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime',
})
export class ConvertTimePipe implements PipeTransform {
  transform(value: number): string {
    let min = Math.floor(value / 60);
    let seconds = value % 60;
    return `${min < 10 ? '0' : ''}${min} : ${seconds.toString().padStart(2,'0')}`;
  }
}
