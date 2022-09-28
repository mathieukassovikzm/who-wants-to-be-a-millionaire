import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { QuestionModel } from '@app/models/question-model';
import { TxtFin } from '@app/models/txt-fin';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'api/questions';  // URL to web api
  private titleUrl = 'api/title';  // URL to web api
  private ageUrl = 'api/age';  // URL to web api
  private TxtFinUrl = 'api/txtfin';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Questions from the server */
  getQuestionsFromServeur(): Observable<QuestionModel[]> {
    return this.http.get<QuestionModel[]>(this.questionsUrl)
      .pipe(
        tap(_ => this.log('fetched Questions')),
        catchError(this.handleError<QuestionModel[]>('getQuestions', []))
      );
  }

  getTitleFromServeur(): Observable<string> {
    return this.http.get<string>(this.titleUrl)
      .pipe(
        tap(_ => this.log('fetched Title')),
        catchError(this.handleError<string>('getTitleFromServeur', ""))
      );
  }

  getAgeFromServeur(): Observable<string> {
    return this.http.get<string>(this.ageUrl)
      .pipe(
        tap(_ => this.log('fetched Age')),
        catchError(this.handleError<string>('getAgeFromServeur', ""))
      );
  }

  getTxtFinFromServeur(): Observable<TxtFin> {
    return this.http.get<TxtFin>(this.TxtFinUrl)
      .pipe(
        tap(_ => this.log('fetched TxtFin')),
        catchError(this.handleError<TxtFin>('getTxtFinFromServeur', <TxtFin>{}))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a QuestionModelService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`QuestionModelService: ${message}`);
  }
}
