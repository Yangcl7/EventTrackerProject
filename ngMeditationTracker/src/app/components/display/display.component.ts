import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MeditationService } from 'src/app/services/meditation.service';
import { Meditation } from 'src/app/models/meditation';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Output() newMeditation: EventEmitter<Meditation> = new EventEmitter();
  @Output() updatedMeditation: EventEmitter<Meditation> = new EventEmitter();
  @Input() currentMeditation: Meditation;
  @Input() isEdit: boolean;

  constructor(private meditationservice: MeditationService) { }

  ngOnInit() {
  }
  add(name: string, goal: boolean, timeSpent: number, recommendedTime: number, feelingRate: number) {
    console.log(name, goal, timeSpent, recommendedTime, feelingRate);
    if (!name && !goal && !timeSpent && !recommendedTime && !feelingRate){
      alert('Please enter all fields');
    }else{
      this.meditationservice.save({name, goal, timeSpent, recommendedTime, feelingRate} as Meditation).subscribe(meditation => {
        console.log(meditation);
        location.reload();
      });
    }
  }
  update() {
    this.meditationservice.update(this.currentMeditation).subscribe(meditation => {
      console.log(meditation);
      this.isEdit = false;
      this.updatedMeditation.emit(meditation);
    });
  }

}
