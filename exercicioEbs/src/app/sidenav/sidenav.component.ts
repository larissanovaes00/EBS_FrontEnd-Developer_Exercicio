import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuNavService } from '../menu-nav/menu-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

	@ViewChild('sideNav') sideNav: ElementRef;

	sideNavOpened: boolean = false;

	classesIcons = [
		{ 'icon': 'glyphicon-home', 'nome':'HOME'},
		{ 'icon': 'glyphicon-qrcode', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-asterisk', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-plus', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-euro', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-cloud', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-envelope', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-search', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-user', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-zoom-in', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-file', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-road', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-download-alt', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-home', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-asterisk', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-plus', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-euro', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-cloud', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-envelope', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-search', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-zoom-in', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-file', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-road', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-download-alt', 'nome':'TESTE'},
		{ 'icon': 'glyphicon-home', 'nome':'TESTE'}
	]
  
  constructor( private menuSer: MenuNavService ) { }

	ngOnInit(): void {
		this.menuSer.getEvent().subscribe(event => {
		this.toggleSideNav(event)
		})
	}

  toggleSideNav(event){
		if(event){
			this.sideNavOpened = true;
			this.sideNav.nativeElement.classList.add('sidenav-active')
		} else {
			this.sideNavOpened = false;
			this.sideNav.nativeElement.classList.remove('sidenav-active')
		}
	}
}
