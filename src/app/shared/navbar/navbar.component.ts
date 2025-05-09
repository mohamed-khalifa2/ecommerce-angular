import { Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  lastY = 0
  @ViewChild('navbar') navbar!: ElementRef
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > this.lastY) {
      this.navbar.nativeElement.classList.add('lg:hidden')
    } else {
      this.navbar.nativeElement.classList.remove('lg:hidden')
    }
    this.lastY = window.scrollY
  }

  @ViewChild('side') side!: ElementRef
  @ViewChild('blur') blur!: ElementRef
  sideBarToggle() {

    this.side.nativeElement.classList.add('left-[0px]')
    this.blur.nativeElement.classList.remove('hidden')



    console.log('clicked')
  }

  closeSideBar() {
    this.side.nativeElement.classList.remove('left-[0px]')
    this.blur.nativeElement.classList.add('hidden')
  }
}
