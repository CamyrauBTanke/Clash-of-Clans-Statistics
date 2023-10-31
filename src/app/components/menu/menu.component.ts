import { Component } from '@angular/core';
import { ClashOfClansService } from 'src/app/service/clash-of-clans';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  protected errors: string = '';
  protected correct: string = '';
  protected clanTag: string = '#2L88GRR8L';

  protected jsonWarLog: any;
  protected jsonMembers: any;
  protected jsonCurrentWar: any;
  protected jsonLeagueGroup: any;
  protected jsonCapitalRaidSeasons: any;

  constructor(private clashOfClansService: ClashOfClansService) {}

  // get clash of clans data
  protected getClanMembers(): void {
    this.errors = ''; this.correct = ''; this.jsonMembers = null;

    this.clashOfClansService.getClanMembers(this.clanTag)
    .subscribe({
      next: response => {
        this.correct = 'Data was upload';
        console.log(response);
        this.jsonMembers = response;
      },
      error: error => {
        console.error(error);
        this.errors = error.status + ' ' + error.error.reason;
      }
    });
  }

  protected getWarLog(): void {
    this.errors = ''; this.correct = ''; this.jsonWarLog = null;

    this.clashOfClansService.getClanWarLog(this.clanTag)
    .subscribe({
      next: response => {
        this.correct = 'Data was upload';
        console.log(response);
        this.jsonWarLog = response;
      },
      error: error => {
        console.error(error);
        this.errors = error.status + ' ' + error.error.reason;
      }
    });
  }

  protected getCurrentWar(): void {
    this.errors = ''; this.correct = ''; this.jsonCurrentWar = null;
    
    this.clashOfClansService.getClanCurrentWar(this.clanTag)
    .subscribe({
      next: response => {
        this.correct = 'Data was upload';
        console.log(response);
        this.jsonCurrentWar = response;
      },
      error: error => {
        console.error(error);
        this.errors = error.status + ' ' + error.error.reason;
      }
    });
  }

  protected getLeagueGroup(): void {
    this.errors = ''; this.correct = ''; this.jsonLeagueGroup = null;
    
    this.clashOfClansService.getClanLeagueGroup(this.clanTag)
    .subscribe({
      next: response => {
        this.correct = 'Data was upload';
        console.log(response);
        this.jsonLeagueGroup = response;
      },
      error: error => {
        console.error(error);
        this.errors = error.status + ' ' + error.error.reason;
      }
    });
  }

  protected getCapitalRaidSeasons(): void {
    this.errors = ''; this.correct = ''; this.jsonCapitalRaidSeasons = null;
    
    this.clashOfClansService.getClanCapitalRaidSeasons(this.clanTag)
    .subscribe({
      next: response => {
        this.correct = 'Data was upload';
        console.log(response);
        this.jsonCapitalRaidSeasons = response;
      },
      error: error => {
        console.error(error);
        this.errors = error.status + ' ' + error.error.reason;
      }
    });
  }

  // current date
  private getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  // download json files
  protected downloadJson(json: any, fileName: string): void {
    const data = JSON.stringify(json, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName + this.getCurrentDate() + '.json';
    a.click();

    window.URL.revokeObjectURL(url);
  }
}