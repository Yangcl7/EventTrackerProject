import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meditation } from 'src/app/models/meditation';
import { MeditationService } from 'src/app/services/meditation.service';


@Component({
  selector: 'app-meditation-list',
  templateUrl: './meditation-list.component.html',
  styleUrls: ['./meditation-list.component.css']
})
export class MeditationListComponent implements OnInit {
  title = 'Meditation tracker';
  meditations: Meditation[] = [];
  selected: Meditation = null;
  goal = false;
  newMeditation: Meditation = new Meditation();
  editMeditation: Meditation = null;
  showAllMeditations = false;

  constructor(private meditationService: MeditationService) { }

  ngOnInit() {
    this.reload();
  }
  reload() {
    this.meditationService.index().subscribe(data => {
      this.meditations = data;
    },
    err => {
      console.error('MeditationListComponent.reload(): Error');
      console.error(err);
    }
    );
  }
  medCount() {
    return this.meditations.length;
  }
  setEditMeditation(): void {
    this.editMeditation = Object.assign({}, this.selected);
  }
  updateMeditation(meditationForm: NgForm) {
    const localMeditation = new Meditation(
      this.selected.id, meditationForm.value.name, meditationForm.value.goal,
      meditationForm.value.timeSpent, meditationForm.value.recommendedTime,
      meditationForm.value.feelingRate);
    console.log(localMeditation);
    this.meditationService.update(localMeditation).subscribe(
        () => {
          this.reload();
          this.selected = localMeditation;
          this.editMeditation = null;
        },
        error => console.log(error)
      );
  }
  deleteMeditation(id) {
    this.meditationService.delete(id).subscribe(data => {
      this.reload();
    },
    error => console.log(error)
    );
  }
  addMeditation(meditationForm: NgForm) {
    this.meditationService.create(meditationForm.value).subscribe(data => {
      this.reload();
    },
    err => console.error(err)
    );
  }
  displayMeditation = function(meditation) {
    this.selected = meditation;
  };
  displayMed(): void {
    this.selected = null;
  }
}
