import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelLabel',
  standalone: true,
})
export class LevelLabelPipe implements PipeTransform {

  transform(level: number | null): string {
    if (level === null) {
      return 'Государственная';
    }

    if (level === 1) {
      return 'Уровень 1 ⭐';
    }

    if (level === 2) {
      return 'Уровень 2';
    }

    return 'Уровень 3';
  }

}