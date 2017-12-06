import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TitleService {

title: string;
titleSubject: BehaviorSubject<string>;
private titleSubscription: Subscription;
constructor() {
  this.titleSubject = new BehaviorSubject('Financiën');
}
setNewTitle(title: string)
{
  this.titleSubject.next(title);
}

}
