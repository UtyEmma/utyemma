import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

    constructor(private _http: HttpClient) { }

    fetchProjects (limit?: number) : Observable <any> {
        return this._http.get<any>(`${environment.apiBaseUrl}/project?limit=${limit}`);
    }

    fetchSingleProject (slug? : string) : Observable <any> {
        return this._http.get<any>(`${environment.apiBaseUrl}/project/${slug}`)
    }

}
