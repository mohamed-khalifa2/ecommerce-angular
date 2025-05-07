import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('floating') floating!: ElementRef
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY >= 350) { this.floating.nativeElement.classList.add('opacity-100') }
    else {
      this.floating.nativeElement.classList.remove('opacity-100')
      console.log('hiding')
    }
  }

  onClickFloating() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
