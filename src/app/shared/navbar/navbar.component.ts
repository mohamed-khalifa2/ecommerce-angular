import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  lastY = 0
  currentSideBar = 'left-[-300%]';
  currentBlur = 'invisible';
  currentNavbar = ''

  @HostListener('window:scroll')
  hideNavbar() {
    if (window.scrollY > this.lastY) {
      this.currentNavbar = 'lg:hidden'
    } else {
      this.currentNavbar = ''
    }
    this.lastY = window.scrollY
  }

  sideBarToggle() {
    if (this.currentSideBar == 'left-[-300%]' && this.currentBlur == 'invisible') {
      this.currentSideBar = 'left-[0]';
      this.currentBlur = 'visible';
    } else {
      this.currentSideBar = 'left-[-300%]';
      this.currentBlur = 'invisible'
    }
  }

}
