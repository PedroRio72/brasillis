import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: false
})
export class MediaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
