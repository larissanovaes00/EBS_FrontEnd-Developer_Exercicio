import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MenuNavService {
    private subject = new Subject<boolean>(); 

    openSideNav(data: boolean) {
        this.subject.next(data);
    }

	toggleMenu(data: boolean) {
	this.subject.next(!data)
}
    getEvent(): Observable<any> {
        return this.subject.asObservable();
    }
}
	