import { Injectable } from '@angular/core';
import { Effect, Actions, ofType,  } from '@ngrx/effects';
import { INCREMENT, DECREMENT, RESET, LOAD } from './counter';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { timer } from 'rxjs/observable/timer';
import { catchError, map, mergeMap, debounceTime, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class LoadingEffect {

    /**
     *Do Some Async operation or http call to server
     *
     */
    constructor( private actions$: Actions) {}

    @Effect()
    loadCounter$: Observable<Action> = this.actions$.pipe(
        ofType('LOAD'),
        switchMap( () => of({type: "INCREMENT"})),
        tap(action => {
            console.log(action);
          })
    );


}
