import { Component, effect, HostListener, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-home',
  imports: [EmblaCarouselDirective, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  heroEmblaRef = viewChild<EmblaCarouselDirective>('heroEmbla');
  serviceEmblaRef = viewChild<EmblaCarouselDirective>('serviceEmbla');

  private heroEmblaApi?: EmblaCarouselType;
  private serviceEmblaApi?: EmblaCarouselType;

  public options = { loop: true };
  public plugins = [Autoplay({ delay: 3000, stopOnInteraction: true })];
  public servicePlugins = [Autoplay({ delay: 3000, stopOnInteraction: true })];

  slides: string[] = [
    'assets/images/slider1.webp',
    'assets/images/slider2.webp',
    'assets/images/slider3.webp'
  ];

  // Text expansion states
  public isDesktop: boolean = window.innerWidth > 1024;
  public showFullAboutText: boolean = this.isDesktop;
  public showFullPaawanaText: boolean = this.isDesktop;

  // Full text content
  public aboutFullText = `First Courtyard is a blend of heritage modern design hotel in Mandawa, Rajasthan, offering a comfortable and authentic stay in the heart of the historic town. Built around a traditional courtyard, the hotel beautifully blends heritage architecture with modern comfort. The rooms are clean, spacious, and thoughtfully designed, featuring handcrafted vintage furniture from the Shekhawati region that reflects the cultural richness of Mandawa. Ideal for couples, families, and cultural travellers, the hotel provides a peaceful atmosphere with personalised hospitality.

Located in the main area of Mandawa, Hotel First Courtyard is close to major attractions such as Mandawa Fort, heritage havelis, local markets, and cultural landmarks. Guests can easily explore the town on foot while enjoying a quiet retreat within the hotel’s serene courtyard. Whether you are visiting Mandawa for heritage tourism, a relaxing getaway, or an authentic Rajasthani experience, Hotel First Courtyard offers one of the best heritage stays in Mandawa with warmth, comfort, and timeless charm.`;

  public aboutShortText = `First Courtyard is a blend of heritage modern design hotel in Mandawa, Rajasthan, offering a comfortable and authentic stay in the heart of the historic town. Built around a traditional courtyard, the hotel beautifully blends heritage architecture with modern...`;

  public paawanaFullText = `Paawana Restaurant at First Courtyard is a place where good food, calm surroundings, and warm hospitality come together naturally. Designed to feel inviting and unhurried, Paawana is ideal for guests who enjoy meaningful meals in a relaxed setting.
The restaurant reflects the heritage charm of the property, with simple yet elegant interiors, soft lighting, and a peaceful atmosphere. Whether you're starting your day with breakfast or winding down in the evening, Paawana offers a comfortable space to sit back and enjoy the moment.
Our menu brings together local flavors and familiar favorites, prepared with care and fresh ingredients. Traditional recipes are thoughtfully balanced with comforting classics, ensuring there's something for every palate. Each dish is cooked with attention to taste, quality, and presentation, making every meal satisfying without being overdone.
Paawana is not just about food—it's about the experience. Guests often find themselves lingering a little longer, sharing conversations, and enjoying the calm pace that defines First Courtyard. Our attentive service adds to the experience, offering warmth without intrusion and making every visit feel personal.`;

  public paawanaShortText = `Paawana Restaurant at First Courtyard is a place where good food, calm surroundings, and warm hospitality come together naturally. Designed to feel inviting and unhurried, Paawana is ideal for guests who enjoy meaningful meals in a relaxed setting...`;

  constructor() {
    effect(() => {
      this.heroEmblaApi = this.heroEmblaRef()?.emblaApi;
      this.serviceEmblaApi = this.serviceEmblaRef()?.emblaApi;
    });
  }
  
  public scrollPrev(): void {
      this.heroEmblaRef()?.scrollPrev();
    }
  
  public scrollNext(): void {
      this.heroEmblaRef()?.scrollNext();
    }

  @HostListener('window:resize', [])
  onResize(): void {
    const wasDesktop = this.isDesktop;
    this.isDesktop = window.innerWidth > 1024;

    // Auto-expand on desktop, auto-collapse on mobile
    if (this.isDesktop && !wasDesktop) {
      this.showFullAboutText = true;
      this.showFullPaawanaText = true;
    } else if (!this.isDesktop && wasDesktop) {
      this.showFullAboutText = false;
      this.showFullPaawanaText = false;
    }
  }

  public serviceOptions = {
    loop: true,
    slidesToScroll: this.isDesktop ? 2 : 1,
  };

  services: Service[] = [
    {
      title: 'Heritage Walk',
      description:
        'Stroll through historic streets and architectural landmarks, guided by stories that reveal the rich cultural and royal legacy of the region.',
      image: 'assets/images/fourth.png'
    },
    {
      title: 'Night Folk Dance',
      description:
        'Experience vibrant folk performances under the open sky, where rhythm, tradition, and celebration come together in an unforgettable evening.',
      image: 'assets/images/night-folk-dance.jpg'
    },
    // {
    //   title: 'Cultural Evenings',
    //   description:
    //     'Embark on a serene camel safari across golden sands, offering breathtaking views and a glimpse into the timeless desert lifestyle.',
    //   image: 'assets/images/cultural-eveing.jpg'
    // },
    {
      title: 'Sightseeing Tours',
      description:
        'Explore nearby forts, palaces, temples, and local markets with curated sightseeing experiences that showcase the essence of the destination.',
      image: 'assets/images/sightseeing-mandawa.png'
    },
    {
      title: 'Courtyard Evenings',
      description:
        'Unwind in our tranquil courtyards with soft lighting, music, and relaxed seating — the perfect setting for quiet conversations and peaceful moments.',
      image: 'assets/images/first-courtyard-evening.png'
    }
  ];

  
  public scrollServicePrev(): void {
    this.serviceEmblaRef()?.scrollPrev();
    
  }
  
  public scrollServiceNext(): void {
    this.serviceEmblaRef()?.scrollNext();
  }

  
  public scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
    elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  rooms: Room[] = [
    {
      name: 'Courtyard Double Room',
      description: `Designed for comfort and calm, the Courtyard Double Room offers a peaceful stay infused with the charm of Mandawa's heritage. Thoughtfully furnished with beautiful vintage pieces from the region, the room reflects timeless Rajasthani elegance. Clean, spacious, and welcoming, it is ideal for couples or solo travelers seeking a cozy retreat after a day of exploration.`,
      image: 'assets/images/delux-room.png',
      bedrooms: 1,
      area: '24 sq. m',
      price: 5000,
      occupancy: 2
    },
    {
      name: 'Heritage Twin Room',
      description: `The Heritage Twin Room blends practicality with old-world charm. Featuring two comfortable separate beds, this room is perfect for friends or companions traveling together. Soft lighting, handcrafted vintage furniture, and a soothing ambiance create a warm and restful environment while preserving the authentic character of this historic town.`,
      image: 'assets/images/twin-room.png',
      bedrooms: 2,
      area: '21 sq. m',
      price: 5000,
      occupancy: 2
    },
    {
      name: 'Family Courtyard Suite',
      description: `Spacious, elegant, and thoughtfully designed, the Family Courtyard Suite is perfect for families or small groups. With two comfortable double beds and ample space to relax, the room combines modern comfort with traditional vintage furniture sourced from the region. Its warm interiors and refined details make it feel like a home rooted in heritage`,
      image: 'assets/images/family-room.png',
      bedrooms: 2,
      area: '64 sq. m',
      price: 7000,
      occupancy: 4
    }
  ];

  // Toggle text expansion (only expands, never collapses)
  public toggleAboutText(): void {
    this.showFullAboutText = true;
  }
  
  public togglePaawanaText(): void {
    this.showFullPaawanaText = true;
  }

  // Get current text based on state
  public get aboutText(): string {
    return this.showFullAboutText ? this.aboutFullText : this.aboutShortText;
  }

  public get paawanaText(): string {
    return this.showFullPaawanaText ? this.paawanaFullText : this.paawanaShortText;
  }
}

export interface Room {
  name: string;
  description: string;
  image: string;
  bedrooms: number;
  area: string;
  price: number;
  occupancy: number;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}
