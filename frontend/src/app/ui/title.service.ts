import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TitleService {

private _title$: BehaviorSubject<string>;
constructor() { }

// Can't use a setter :()
 setTitle$(title: string) {
this._title$ = new BehaviorSubject<string>(title);
}

get title$(): BehaviorSubject<string>
{
  return this._title$;
}
}
