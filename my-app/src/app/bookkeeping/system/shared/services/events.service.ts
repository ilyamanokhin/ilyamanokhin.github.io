import { BaseApi } from 'src/app/bookkeeping/shared/core/base-api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEvent } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class EventsService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }
    addEvent(event: AppEvent): Observable<AppEvent>{
        return this.post('events', event)
    }
}