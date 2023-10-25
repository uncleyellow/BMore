import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HotelsService {
    private apiUrl = 'https://localhost:7289/api/hotels';
    constructor(
        private http: HttpClient
    ) {

    }

    getHotels() {
        return this.http.get(this.apiUrl);
    }

    searchHotelsByPlace(address: string): Observable<any> {
        const encodedAddress = encodeURIComponent(address);
        const url = `${this.apiUrl}/searchByPlace?address=${encodedAddress}`;
        return this.http.get(url);
    }

    searchHotelsByName(name: string): Observable<any> {
        const url = `${this.apiUrl}/search?name=${name}`;
        return this.http.get(url);
    }

    createHotel(hotel: any): Observable<any> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('accept', 'text/plain');

        return this.http.post(this.apiUrl, hotel, { headers });
    }

    deleteHotel(hotelId: string): Observable<any> {
        const headers = new HttpHeaders().set('accept', '*/*');

        return this.http.delete(`${this.apiUrl}/${hotelId}`, { headers });
    }
}
