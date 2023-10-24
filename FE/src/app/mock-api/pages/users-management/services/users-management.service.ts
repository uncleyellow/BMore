import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    createUser(user: any): Observable<any> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('accept', 'text/plain');

        return this.http.post(this.apiUrl, user, { headers });
    }

    deleteUser(userId: string): Observable<any> {
        const headers = new HttpHeaders().set('accept', '*/*');

        return this.http.delete(`${this.apiUrl}/${userId}`, { headers });
    }
}
