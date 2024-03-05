import {Component, OnInit} from '@angular/core';
import {LoaderComponent} from "../../blocks/loader/loader.component";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {VoyageService} from "../../../services/voyage.service";
import {Voyage} from "../../../models/voyage";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-voyage-detail',
  standalone: true,
  imports: [
    LoaderComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './voyage-detail.component.html',
  styleUrl: './voyage-detail.component.scss'
})
export class VoyageDetailComponent implements OnInit{
  constructor(
    private activatedRoute :ActivatedRoute,
    private voyageService :VoyageService,
    private sanitizer: DomSanitizer
  ) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }


  mapUrl: SafeResourceUrl;
  voyage?: Voyage;
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    let id:number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));
    this.voyageService.getOne(id).subscribe(data => {
      this.voyage = data;
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.voyage?.longitude},${this.voyage?.lattitude}&hl=fr&z=14&output=embed`);
      this.isLoading = false;
    })
  }

}
