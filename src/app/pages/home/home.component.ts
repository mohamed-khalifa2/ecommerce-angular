import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { GenericHttpService } from '../../services/generic-http.service';

@Component({
  selector: 'app-home',
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private api = inject(GenericHttpService);
  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (res) => { console.log(res) },
      error: (err) => { console.log(err) }
    });
  }

  lastY = 0
  @ViewChild('floating') floating!: ElementRef
  @HostListener('window:scroll', [])
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
