import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../Service/hotel.service';
import { Hotel } from '../../../models/hotel.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination',
  standalone: false,
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {
  hotels: Hotel[] = [];
  hotelsByLocation: { [key: string]: Hotel[] } = {};
  locations: string[] = [];
  displayLimit: { [key: string]: number } = {};
  itemsPerLoad = 3;
  loading = false;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchLocation = params['location'];
      if (searchLocation) {
        this.hotelService.getHotelsByLocation(searchLocation).subscribe({
          next: (data: Hotel[]) => {
            this.hotels = data;
            this.organizeHotelsByLocation();
            this.loading = false;
          },
          error: (error) => {
            console.error('Error fetching hotels:', error);
            this.loading = false;
          }
        });
      } else {
        this.fetchHotels();
      }
    });
  }
  fetchHotels(): void {
    this.loading = true;
    this.hotelService.getAllHotels().subscribe({
      next: (data: Hotel[]) => {
        this.hotels = data;
        this.organizeHotelsByLocation();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching hotels:', error);
        this.loading = false;
      }
    });
  }

  organizeHotelsByLocation(): void {
    this.hotelsByLocation = {};
    this.hotels.forEach(hotel => {
      if (!this.hotelsByLocation[hotel.location]) {
        this.hotelsByLocation[hotel.location] = [];
        this.displayLimit[hotel.location] = this.itemsPerLoad;
      }
      this.hotelsByLocation[hotel.location].push(hotel);
    });
    this.locations = Object.keys(this.hotelsByLocation).sort();
  }

  getDisplayedHotels(location: string): Hotel[] {
    return this.hotelsByLocation[location]?.slice(0, this.displayLimit[location]) || [];
  }

  canLoadMore(location: string): boolean {
    return this.hotelsByLocation[location]?.length > this.displayLimit[location];
  }

  loadMore(location: string): void {
    this.displayLimit[location] += this.itemsPerLoad;
  }
}