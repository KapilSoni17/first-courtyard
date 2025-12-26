import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})

export class Explore {
  cities = [
    { name: 'Ramgarh', image: 'assets/images/cultural-eveing.jpg' },
    { name: 'Nawalgarh', image: 'assets/images/cultural-eveing.jpg' },
    { name: 'Fatehpur', image: 'assets/images/cultural-eveing.jpg' },
    { name: 'Mahensar', image: 'assets/images/cultural-eveing.jpg' },
    { name: 'Churu', image: 'assets/images/cultural-eveing.jpg' },
    { name: 'Mukungarh', image: 'assets/images/cultural-eveing.jpg' }
  ];
}
