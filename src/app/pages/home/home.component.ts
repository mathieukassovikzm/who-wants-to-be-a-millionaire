
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/components/button/button.component';
import { TypeSound } from '@app/models/enum-type-sound';
import { AudioService } from '@app/services/audio.service';
import { DatasService } from '@app/services/datas.service';
import { InfosAppStore } from '@app/store/infos-app.store';
import { QuestionsStore } from '@app/store/question.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ButtonComponent],
  standalone: true
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly router = inject(Router);
  readonly infosAppStore = inject(InfosAppStore);
  readonly questionsStore = inject(QuestionsStore);
  readonly audioService = inject(AudioService);

  public title = this.infosAppStore.getTitle();
  public birthday = this.infosAppStore.getAge();

  constructor(
    public questionService: DatasService
  ) {
  }

  ngOnInit(): void {
    this.audioService.picCurrentSound(TypeSound.Theme);
  }

  startGame(): void {
    this.questionsStore.ActNextQuestion();
    this.router.navigate([`/question/0`], {
      queryParams: {},
    });
  }

  continueGame(): void {
    // if (this.questionId !== undefined) {
    //   this.store.dispatch(fromRouterActions.ActRouterNavigation({
    //     payload: {
    //       path: [`/question/${this.questionId}`],
    //       queryParams: {},
    //     }
    //   }));
    // }
  }

  chooseQuestionnaire(): void {
  }

  ngOnDestroy(): void {
  }
}
