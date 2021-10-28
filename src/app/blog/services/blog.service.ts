import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    constructor(
        private _http: HttpClient
    ) { }

    fetchBlogPosts(limit?: number): Observable <any> {
        return this._http.get<any>(`${environment.apiBaseUrl}/blog${limit ? `?limit=${limit}` : "" }`);
    }

    fetchSinglePost (slug?: string) : Observable <any> {
        return this._http.get<any>(`${environment.apiBaseUrl}/blog/${slug}`);
    }

}
