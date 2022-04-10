import { Component, OnInit } from '@angular/core';
import { Mama } from 'src/app/models/mama';
import { MamaService } from 'src/app/services/mama.service';

@Component({
  selector: 'app-mama',
  templateUrl: './mama.component.html',
  styleUrls: ['./mama.component.css'],
})
export class MamaComponent implements OnInit {
  mamas: Mama[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(private mamaService: MamaService) {}

  ngOnInit(): void {
    this.getMamas();
  }
  getMamas() {
    this.mamaService.getMamas().subscribe((response) => {
      this.mamas = response.data;
      this.dataLoaded = true;
    });
  }
}
