import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClashOfClansService } from './clash-of-clans';

@NgModule({
  providers: [
    ClashOfClansService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
