import { Component, OnInit } from '@angular/core';
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
  displayTable(): void {
    this.selected = null;
  }
  setEditMeditation(): void {
    this.editMeditation = Object.assign({}, this.selected);
  }
  updateMeditation(meditation: Meditation): void {
    this.meditationService.update(meditation).subscribe(data => {
      this.reload();
      this.editMeditation = null;
      this.selected = data;
    },
    err => {
      console.error('MeditationListComponent.updateMeditation(): Errror');
      console.error(err);
    }
    );
  }
  deleteMeditation(meditation: Meditation) {
    this.meditationService.destroy(meditation.id).subscribe(data => {
      this.reload();
    },
    err => {
      console.error('MeditationListComponent.deletedMeditation(); Error');
      console.error(err);
    }
    );
  }
  addMeditation(meditation: Meditation) {
    this.meditationService.create(meditation).subscribe(data => {
      this.reload();
    },
    err => {
      console.error('MeditationListComponent.addMeditation(): Error');
      console.error(err);
    }
    );
  }


}
