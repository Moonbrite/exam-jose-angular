import {Component, OnInit} from '@angular/core';
import {VoyageService} from "../../../services/voyage.service";
import {Router, RouterLink} from "@angular/router";
import {Voyage} from "../../../models/voyage";
import {NgForOf, NgIf} from "@angular/common";
import {LoaderComponent} from "../../blocks/loader/loader.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalConfirmComponentComponent} from "../../blocks/modal-confirm-component/modal-confirm-component.component";

@Component({
  selector: 'app-voyage-admin',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    LoaderComponent,
    ModalConfirmComponentComponent
  ],
  templateUrl: './voyage-admin.component.html',
  styleUrl: './voyage-admin.component.scss'
})
export class VoyageAdminComponent implements OnInit{

  constructor(
    private voyageService:VoyageService,
    private router:Router,
    private matDialog :MatDialog
    ) {
  }

  voyages?: Voyage[];

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.voyageService.getAll().subscribe(data => {
      this.voyages = data;
      this.isLoading = false
    })
  }

  deleteOne(id?: number) {
    this.voyageService.delete(<number>id).subscribe(data => {
      this.ngOnInit()
    })
  }


  deleteMusicModal(enterAnimationDuration: string, exitAnimationDuration: string, id: number | undefined) {
    let dialog = this.matDialog.open(ModalConfirmComponentComponent,{
      width:'250px',
      enterAnimationDuration,
      exitAnimationDuration
    });
    dialog.afterClosed().subscribe(result =>{
      if (result ) {
        this.isLoading = true;
        this.voyageService.delete(<number>id).subscribe(data =>{
          this.ngOnInit();
        })
      }
    })
  }

}
