import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignInService {
    private apiUrl = 'https://localhost:7289/api/users';

    constructor(
        private http: HttpClient
    ) {

    }

    getUsers(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}
