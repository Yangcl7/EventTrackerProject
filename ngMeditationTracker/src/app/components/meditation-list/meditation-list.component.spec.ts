import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeditationListComponent } from './meditation-list.component';

describe('MeditationListComponent', () => {
  let component: MeditationListComponent;
  let fixture: ComponentFixture<MeditationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
