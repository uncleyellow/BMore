import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersManagementService {
    private apiUrl = 'https://localhost:7289/api/users';
    constructor(
        private http: HttpClient
    ) {

    }

    getUsers() {
        return this.http.get(this.apiUrl);
    }
}
