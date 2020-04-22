import { Component} from '@angular/core';
import { MenuNavService } from './menu-nav.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})

export class MenuNavComponent {
  
constructor(private menuNavService: MenuNavService) {}

	openSideMenu(){
	  this.menuNavService.toggleMenu()
	}
}
