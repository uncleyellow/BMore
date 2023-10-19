import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
