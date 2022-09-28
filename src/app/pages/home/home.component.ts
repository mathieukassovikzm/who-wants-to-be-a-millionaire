import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromRouterActions from '@app/store/actions/router.actions';
import { AudioService } from '@app/services/audio.service';
import { TypeSound } from '@app/models/enum-type-sound';
import { QuestionService } from '@app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<string> = new Observable<string>();

  constructor(
    public store: Store<fromStore.AppState>,
    public audioService: AudioService,
    public questionService : QuestionService
    ) {
  }

  ngOnInit(): void {
    this.title$ = this.questionService.getTitleFromServeur();
    this.birthday$ = this.questionService.getAgeFromServeur();
    this.audioService.picCurrentSound(TypeSound.Theme);
  }

  startGame(): void {
    this.store.dispatch(new fromStore.ActNextQuestion(0));
    this.store.dispatch(fromRouterActions.ActRouterNavigation({
      payload: {
        path: [`/question/0`],
        queryParams: {},
      }
    }));
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
