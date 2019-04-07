import { Pipe, PipeTransform } from '@angular/core';
import { Meditation } from '../models/meditation';

@Pipe({
  name: 'notMet'
})
export class NotMetPipe implements PipeTransform {

  transform(meditations: Meditation[], showAllMeditations: boolean) {
    if (showAllMeditations){
      return meditations;
    }
    const result: Meditation[] = [];

    for (const meditation of meditations) {
      if (meditation.goal === false){
        result.push(meditation);
      }
    }
    return result;
  }

}
