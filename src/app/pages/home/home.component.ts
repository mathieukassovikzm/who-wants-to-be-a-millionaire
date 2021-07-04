import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromRouterActions from '@app/store/actions/router.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<string> = new Observable<string>();

  sound = new Howl({
    src: ['./../../../assets/musics/Theme.mp3'],
    html5: true,
    onend: function() {
      console.log('Finished!');
    }
  });

  constructor(public store: Store<fromStore.AppState>, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title$ = this.store.select<string>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<string>(fromInfosAppSelectors.getInfosAppCurrentYear);

    // Play the sound.
    this.sound.play();
    // Change global volume.
    Howler.volume(1);
  }

  startGame(): void {
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
