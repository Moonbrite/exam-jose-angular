import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../../models/voyage";
import {Router, RouterLink} from "@angular/router";
import {VoyageService} from "../../../services/voyage.service";
import {NgForOf, NgIf} from "@angular/common";
import {LoaderComponent} from "../../blocks/loader/loader.component";

@Component({
  selector: 'app-voyage',
  standalone: true,
  imports: [
    NgForOf,
    LoaderComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './voyage.component.html',
  styleUrl: './voyage.component.scss'
})
export class VoyageComponent implements OnInit{

  constructor(
    private voyageService:VoyageService,
   ) {
  }

  voyages?: Voyage[];

  isLoading = false;

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    this.isLoading = true;
    this.voyageService.getAll().subscribe(data => {
      this.voyages = data;
      console.log(data)
      this.isLoading = false
    })
  }

}
