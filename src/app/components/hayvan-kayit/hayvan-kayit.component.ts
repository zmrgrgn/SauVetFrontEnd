import { Component, OnInit } from '@angular/core';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import {HttpClient} from '@angular/common/http'
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hayvan-kayit',
  templateUrl: './hayvan-kayit.component.html',
  styleUrls: ['./hayvan-kayit.component.css']
})
export class HayvanKayitComponent implements OnInit {

  hayvanKayits:HayvanKayit[]=[];
  dataLoaded=false;
  filterText="";

  constructor(private hayvanKayitService:HayvanKayitService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["hayvanId"]){
        this.getHayvanKayitsByHayvanTedavi(params["hayvanId"])
      }else{
        this.getHayvanKayits()
      }
    })
  }
  getHayvanKayits(){
      this.hayvanKayitService.getHayvanKayits().subscribe(response=>{
        this.hayvanKayits=response.data
        this.dataLoaded=true;
      })
  }
  getHayvanKayitsByHayvanTedavi(hayvanId:number){
   this.hayvanKayitService.getHayvanKayitsByHayvanTedavi(hayvanId).subscribe(response=>{
     this.hayvanKayits=response.data
      this.dataLoaded=true;
    })
}

}
