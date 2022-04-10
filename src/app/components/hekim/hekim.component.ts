import { Component, OnInit } from '@angular/core';
import { Hekim } from 'src/app/models/hekim';
import { HekimService } from 'src/app/services/hekim.service';

@Component({
  selector: 'app-hekim',
  templateUrl: './hekim.component.html',
  styleUrls: ['./hekim.component.css'],
})
export class HekimComponent implements OnInit {
  hekims: Hekim[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(private hekimService: HekimService) {}

  ngOnInit(): void {
    this.getHekims();
  }
  getHekims() {
    this.hekimService.getHekims().subscribe((response) => {
      this.hekims = response.data;
      this.dataLoaded = true;
    });
  }
}
