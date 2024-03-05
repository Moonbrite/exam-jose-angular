import {Component, OnInit} from '@angular/core';
import {VoyageService} from "../../../services/voyage.service";
import {Router, RouterLink} from "@angular/router";
import {Voyage} from "../../../models/voyage";
import {NgForOf, NgIf} from "@angular/common";
import {LoaderComponent} from "../../blocks/loader/loader.component";

@Component({
  selector: 'app-voyage-admin',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    LoaderComponent
  ],
  templateUrl: './voyage-admin.component.html',
  styleUrl: './voyage-admin.component.scss'
})
export class VoyageAdminComponent implements OnInit{

  constructor(
    private voyageService:VoyageService,
    private router:Router) {
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

}
