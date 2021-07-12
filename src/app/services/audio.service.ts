import { Injectable } from "@angular/core";
import { TypeSound } from "@app/models/enum-type-sound";
import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: "root"
})
export class AudioService {
  private currentSound : TypeSound | undefined;

  private sounds = {
    Theme : {
      sound: new Howl({
        src: ['./../../../assets/musics/Theme.mp3'],
        html5: true,
        onplay: function() {
          console.log('Theme Start!');
        }
      })
    },
    ExplainKnockoutGame : {
      sound: new Howl({
        src: ['./../../../assets/musics/ExplainKnockoutGame.mp3'],
        html5: true,
        onplay: function() {
          console.log('ExplainKnockoutGame Start!');
        }
      })
    },
    FastestFingerFirstOrderReveal : {
      sound: new Howl({
        src: ['./../../../assets/musics/FastestFingerFirstOrderReveal.mp3'],
        html5: true,
        onplay: function() {
          console.log('FastestFingerFirstOrderReveal Start!');
        }
      })
    },
    First5Questions : {
      sound: new Howl({
        src: ['./../../../assets/musics/First5Questions.mp3'],
        html5: true,
        onplay: function() {
          console.log('First5Questions Start!');
        }
      })
    },
    QuestionLose : {
      sound: new Howl({
        src: ['./../../../assets/musics/QuestionLose.mp3'],
        html5: true,
        onplay: function() {
          console.log('QuestionLose Start!');
        }
      })
    },
    QuestionLose2 : {
      sound: new Howl({
        src: ['./../../../assets/musics/QuestionLose2.mp3'],
        html5: true,
        onplay: function() {
          console.log('QuestionLose2 Start!');
        }
      })
    },
    QuestionPicked : {
      sound: new Howl({
        src: ['./../../../assets/musics/QuestionPicked.mp3'],
        html5: true,
        onplay: function() {
          console.log('QuestionPicked Start!');
        }
      })
    },
    QuestionSuspense : {
      sound: new Howl({
        src: ['./../../../assets/musics/QuestionSuspense.mp3'],
        html5: true,
        onplay: function() {
          console.log('QuestionSuspense Start!');
        }
      })
    },
    QuestionSuspense2 : {
      sound: new Howl({
        src: ['./../../../assets/musics/QuestionSuspense2.mp3'],
        html5: true,
        onplay: function() {
          console.log('QuestionSuspense2 Start!');
        }
      })
    },
    QuestionWin : {
      sound: new Howl({
        src: ['./../../../assets/musics/QuestionWin.mp3'],
        html5: true,
        onplay: function() {
          console.log('QuestionWin Start!');
        }
      })
    },
  }

  public picCurrentSound(song: TypeSound): void {
    if(song !== undefined){
      this.currentSound = song;
    } 
  }

  public play(): void {
    if(this.currentSound !== undefined){
      console.log('Play the music')
      this.sounds[TypeSound[this.currentSound]].sound.play();
    } 
  }

  public pause(): void {
    if(this.currentSound !== undefined){
      console.log('Pause the music')
      this.sounds[TypeSound[this.currentSound]].sound.pause();
    } 
  }

  public unload(): void {
    if(this.currentSound !== undefined){
      console.log('unload the music')
      this.sounds[TypeSound[this.currentSound]].sound.unload();
    } 
  }


  public stop(): void {
  }
}