import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../Service/hotel.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  hotels: any[] = []; 
 
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.fetchHotels();
   
  }

  fetchHotels(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data; 
    });
  }

  //fetch hotels by location
  fetchHotelsByLocation(location: string): void {
    this.hotelService.getHotelsByLocation(location).subscribe(data => {
      this.hotels = data;
    });
  }

}
