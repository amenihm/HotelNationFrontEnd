import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../Service/hotel.service';

@Component({
  selector: 'app-destination',
  standalone: false,
  
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {
  hotels: any[] = [];
  hotelsByLocation: { [key: string]: any[] } = {}; // Pour stocker les hôtels par emplacement

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data;
      this.organizeHotelsByLocation();
    });
  }

  organizeHotelsByLocation(): void {
    this.hotels.forEach(hotel => {
      const location = hotel.Location;
      if (!this.hotelsByLocation[location]) {
        this.hotelsByLocation[location] = [];
      }
      this.hotelsByLocation[location].push(hotel);
    });
  }
}
