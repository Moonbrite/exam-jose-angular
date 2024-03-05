import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VoyageService} from "../../../services/voyage.service";
import {Voyage} from "../../../models/voyage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {LoaderComponent} from "../../blocks/loader/loader.component";

@Component({
  selector: 'app-voyage-modification',
  standalone: true,
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    LoaderComponent
  ],
  templateUrl: './voyage-modification.component.html',
  styleUrl: './voyage-modification.component.scss'
})
export class VoyageModificationComponent implements OnInit{

  constructor(
    private activatedRoute :ActivatedRoute,
    private voyageService :VoyageService,
    private router: Router,
  ) {
  }

  voyage?: Voyage;

  types = [ 'Mer' ,  'Montagne' ,  'Campagne' ];

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = false;
    let id:number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));
    this.voyageService.getOne(id).subscribe(data => {
      this.voyage = data;
      this.isLoading = true;
    })
  }

  submitForm(voyage:Voyage) {
    this.voyageService.edit(voyage,voyage.id).subscribe(
      data => {
        return this.router.navigate(['/admin'])
      }
    )
  }


}
