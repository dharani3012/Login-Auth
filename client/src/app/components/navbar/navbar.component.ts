import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Navbar Toggle code 
	isCollapsed: boolean = true;

	toggleCollapse(): void {
	  this.isCollapsed = !this.isCollapsed;
	}

}
