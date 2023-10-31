import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClashOfClansService {
  private readonly apiKey: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM2OWE1YTYzLWY5NDAtNGViMS05ZGM4LTExZTUwODczNWJkYSIsImlhdCI6MTY5ODY4MzkzNSwic3ViIjoiZGV2ZWxvcGVyLzQxODc1ZDc1LWE5ZTMtYmFiZS01ODhiLTc5MjRhOTY0M2RkYSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjg4LjIyMi4xODkuMjA2IiwiODIuMTEzLjk4LjEzNCIsIjkwLjEyOS4xOTcuMTkxIl0sInR5cGUiOiJjbGllbnQifV19.K_TrRc0Mbsf1E1MGqq_UfnPjEEoDH0i1vAsEPJCrKGp8Qyun92CEV7Q3xJa1vC7F5JlWJ-6lOe81sbLItLndBw';
  private readonly apiUrl: string = '/api/v1';
  private headers: HttpHeaders = new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` });
  private newApiKey: string | null | undefined = null;

  constructor(private http: HttpClient) {
    this.syncApiKeyFromLocalStorage();
  }

  public syncApiKeyToLocalStorage(newApiKey: string): void {
    localStorage.setItem('newApiKey', JSON.stringify(newApiKey));
  }

  public syncApiKeyFromLocalStorage(): string | null | undefined {
    const newApiKey = localStorage.getItem('newApiKey');
    if (newApiKey)
      this.newApiKey = JSON.parse(newApiKey) as string;
    
    return this.newApiKey;
  }

  public getClanInformation(clanTag: string): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}`, { headers: this.newApiKey !== null || undefined ? new HttpHeaders({ Authorization: `Bearer ${this.newApiKey}` }) : this.headers });
  }

  public getClanWarLog(clanTag: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/warlog`, { headers: this.newApiKey !== null || undefined ? new HttpHeaders({ Authorization: `Bearer ${this.newApiKey}` }) : this.headers });
  }

  public getClanMembers(clanTag: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/members`, { headers: this.newApiKey !== null || undefined ? new HttpHeaders({ Authorization: `Bearer ${this.newApiKey}` }) : this.headers });
  }

  public getClanCurrentWar(clanTag: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/currentwar`, { headers: this.newApiKey !== null || undefined ? new HttpHeaders({ Authorization: `Bearer ${this.newApiKey}` }) : this.headers });
  }

  public getClanCapitalRaidSeasons(clanTag: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/capitalraidseasons`, { headers: this.newApiKey !== null || undefined ? new HttpHeaders({ Authorization: `Bearer ${this.newApiKey}` }) : this.headers });
  }

  public getClanLeagueGroup(clanTag: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/currentwar/leaguegroup`, { headers: this.newApiKey !== null || undefined ? new HttpHeaders({ Authorization: `Bearer ${this.newApiKey}` }) : this.headers });
  }
}