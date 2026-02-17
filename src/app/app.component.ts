import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AudioComponent } from './components/audio/audio.component';
import { QuestionsStore } from './store/question.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, AudioComponent],
  standalone: true
})
export class AppComponent {
  readonly questionsStore = inject(QuestionsStore);

  constructor() {
    this.questionsStore.ActLoadQuestions();
  }
}
