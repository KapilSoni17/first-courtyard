import { Component, inject } from '@angular/core';
import { BookRoomService } from '../../common/service/book-room';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {
rooms: Room[] = [
    {
      id: 1,
      image: 'assets/images/delux-room.png',
      title: 'Courtyard Double Room',
      description: `Designed for comfort and calm, the Courtyard Double Room offers a peaceful stay infused with the charm of Mandawa's heritage. Thoughtfully furnished with beautiful vintage pieces from the region, the room reflects timeless Rajasthani elegance. Clean, spacious, and welcoming, it is ideal for couples or solo travelers seeking a cozy retreat after a day of exploration.`,
      bedrooms: 1,
      area: '24 sq. m',
      price: 5000,
      occupancy: 2
    },
    {
      id: 2,
      image: 'assets/images/twin-room.png',
      title: 'Heritage Twin Room',
      description: `The Heritage Twin Room blends practicality with old-world charm. Featuring two comfortable separate beds, this room is perfect for friends or companions traveling together. Soft lighting, handcrafted vintage furniture, and a soothing ambiance create a warm and restful environment while preserving the authentic character of this historic town.`,
      bedrooms: 2,
      area: '24 sq. m',
      price: 5000,
      occupancy: 2
    },
    {
      id: 3,
      image: 'assets/images/family-room.png',
      title: 'Family Courtyard Suite',
      description: `Spacious, elegant, and thoughtfully designed, the Family Courtyard Suite is perfect for families or small groups. With two comfortable double beds and ample space to relax, the room combines modern comfort with traditional vintage furniture sourced from the region. Its warm interiors and refined details make it feel like a home rooted in heritage`,
      bedrooms: 2,
      area: '64 sq. m',
      price: 7000,
      occupancy: 4
    }
  ];

  private bookRoomService = inject(BookRoomService);
  
  public navigateToSpider():void {
    this.bookRoomService.navigateToSpider();
  }
}

interface Room {
  id: number;
  title: string;
  description: string;
  image: string;
  bedrooms: number;
  area: string;
  price: number;
  occupancy: number;
}