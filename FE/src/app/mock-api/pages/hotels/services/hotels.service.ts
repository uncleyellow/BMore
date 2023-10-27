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

    search(address: string): Observable<any> {
        const encodedAddress = encodeURIComponent(address);
        const url = `${this.apiUrl}/search?search=${encodedAddress}`;
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

    updateHotel(hotelData: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${hotelData.id}`, hotelData);
    }
}
