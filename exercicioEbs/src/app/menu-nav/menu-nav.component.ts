import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuNavService } from './menu-nav.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})

export class MenuNavComponent {

  @Output() open = new EventEmitter();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuNavService: MenuNavService
  ) {}

	openSideMenu(){
	this.menuNavService.openSideNav(true)
	}
}
