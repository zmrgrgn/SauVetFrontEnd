import { Component, OnInit } from '@angular/core';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import {HttpClient} from '@angular/common/http'
import { HayvanKayitResponseModel } from 'src/app/models/hayvanKayitResponseModel';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';

@Component({
  selector: 'app-hayvan-kayit',
  templateUrl: './hayvan-kayit.component.html',
  styleUrls: ['./hayvan-kayit.component.css']
})
export class HayvanKayitComponent implements OnInit {

  hayvanKayits:HayvanKayit[]=[];
  dataLoaded=false;

  constructor(private hayvanKayitService:HayvanKayitService) { }

  ngOnInit(): void {
    this.getHayvanKayits();
  }
  getHayvanKayits(){
      this.hayvanKayitService.getHayvanKayits().subscribe(response=>{
        this.hayvanKayits=response.data
        this.dataLoaded=true;
      })
  }

}
