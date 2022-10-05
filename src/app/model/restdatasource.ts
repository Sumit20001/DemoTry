import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs/operators";


const PROTOCOL = "http";
const PORT = 8000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token?: string;
    
    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    authenticate(username: string, password: string): Observable<any> {
        
      return this.http.post<any>(this.baseUrl + "api/Employee/Login", { UserName: username, Password: password })
            .pipe(catchError((error) => {
                return error.message;
            }));
    }

  
}