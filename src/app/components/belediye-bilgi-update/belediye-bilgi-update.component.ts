import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';

@Component({
  selector: 'app-belediye-bilgi-update',
  templateUrl: './belediye-bilgi-update.component.html',
  styleUrls: ['./belediye-bilgi-update.component.css']
})
export class BelediyeBilgiUpdateComponent implements OnInit {
  currentBelediyeBilgi:BelediyeBilgi;
  belediyeBilgiUpdateForm:FormGroup
  constructor(private belediyeBilgiService:BelediyeBilgiService,private toastrService:ToastrService,private updateModal:MatDialogRef<BelediyeBilgiUpdateComponent>) { }

  ngOnInit(): void {
  }

}
