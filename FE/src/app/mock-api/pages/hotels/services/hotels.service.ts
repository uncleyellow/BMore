import { HttpClient } from '@angular/common/http';
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

}
