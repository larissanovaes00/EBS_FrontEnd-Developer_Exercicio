import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MenuNavService {
  private subject = new Subject<boolean>(); 
  private isOpen: boolean = false;
    
	toggleMenu() {
    this.isOpen = !this.isOpen;
	  this.subject.next(this.isOpen)
  }
  
  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
	