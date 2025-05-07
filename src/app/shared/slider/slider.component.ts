import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


register()
@Component({
  selector: 'app-slider',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  host: {
    class: 'block w-full h-full'
  }
})
export class SliderComponent {
  ngOnInit() {
    this.initSwiper()
  }

  initSwiper() {
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: true,
      injectStyles: [`
        .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          text-align: center;
          opacity: 0.5;
          background: rgba(0, 0, 0,0.2);
          }
  
        .swiper-pagination-bullet-active {
          background: #000;
          }

        .swiper-button-next, .swiper-button-prev{
        display: none;
        width: 10px;
        padding:0px 17px;
        color:white;
        background: rgba(0,0,0,0.6);
        border-radius:100px;
          }
        .swiper:hover{
        .swiper-button-next, .swiper-button-prev {
        display:block;
            }
          }
        }
        

        @media only screen and (max-width: 600px) {
            .swiper-button-next, .swiper-button-prev {
            display:none;
            }
          }
        `],
      pagination: { clickable: true },
      on: {
        init() { },
      },
    };

    const swiperSlider: any = document.querySelector('#mySwiper');

    Object.assign(swiperSlider, swiperParams)

    swiperSlider.initialize()
  }
}
