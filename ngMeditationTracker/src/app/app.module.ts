import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MeditationListComponent } from './components/meditation-list/meditation-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeditationService } from './services/meditation.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MeditationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    MeditationService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
