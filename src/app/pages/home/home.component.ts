
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/components/button/button.component';
import { TypeSound } from '@app/models/enum-type-sound';
import { DatasService } from '@app/services/datas.service';
import { AudioStore } from '@app/store/audio.store';
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
  readonly audioStore = inject(AudioStore);

  public title = this.infosAppStore.getTitle();
  public birthday = this.infosAppStore.getAge();

  constructor(
    public questionService: DatasService
  ) {
  }

  ngOnInit(): void {
    this.audioStore.picCurrentSound(TypeSound.Theme);
  }

  startGame(): void {
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
