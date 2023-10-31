import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClashOfClansService {
  private readonly apiKey: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM2OWE1YTYzLWY5NDAtNGViMS05ZGM4LTExZTUwODczNWJkYSIsImlhdCI6MTY5ODY4MzkzNSwic3ViIjoiZGV2ZWxvcGVyLzQxODc1ZDc1LWE5ZTMtYmFiZS01ODhiLTc5MjRhOTY0M2RkYSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjg4LjIyMi4xODkuMjA2IiwiODIuMTEzLjk4LjEzNCIsIjkwLjEyOS4xOTcuMTkxIl0sInR5cGUiOiJjbGllbnQifV19.K_TrRc0Mbsf1E1MGqq_UfnPjEEoDH0i1vAsEPJCrKGp8Qyun92CEV7Q3xJa1vC7F5JlWJ-6lOe81sbLItLndBw';
  private readonly apiUrl: string = '/api/v1';
  private headers: HttpHeaders = new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` });

  constructor(private http: HttpClient) {}

  public getClanWarLog(clanTag: string) {
    return this.http.get(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/warlog`, { headers: this.headers });
  }

  public getClanMembers(clanTag: string) {
    return this.http.get(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/members`, { headers: this.headers });
  }

  public getClanCurrentWar(clanTag: string) {
    return this.http.get(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/currentwar`, { headers: this.headers });
  }

  public getClanCapitalRaidSeasons(clanTag: string) {
    return this.http.get(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/capitalraidseasons`, { headers: this.headers });
  }

  public getClanLeagueGroup(clanTag: string) {
    return this.http.get(`${this.apiUrl}/clans/${encodeURIComponent(clanTag)}/currentwar/leaguegroup`, { headers: this.headers });
  }
}