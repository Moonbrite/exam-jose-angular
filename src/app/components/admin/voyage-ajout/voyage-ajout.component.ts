import {Component, OnInit} from '@angular/core';
import {VoyageService} from "../../../services/voyage.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Voyage} from "../../../models/voyage";
import {NgForOf, NgIf} from "@angular/common";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {Image} from "../../../models/image";

@Component({
  selector: 'app-voyage-ajout',
  standalone: true,
  imports: [
    NgIf,
    MatFormField,
    MatLabel,
    MatError,
    FormsModule,
    MatInput,
    MatSelect,
    NgForOf,
    MatOption
  ],
  templateUrl: './voyage-ajout.component.html',
  styleUrl: './voyage-ajout.component.scss'
})
export class VoyageAjoutComponent {

  constructor(
    private voyageService:VoyageService,
    private router:Router,
    private _snackBar: MatSnackBar,
  ) {
  }

  voyage :Voyage = new Voyage();

  types = [ 'Mer' ,  'Montagne' ,  'Campagne' ];



  submitForm(voyage:Voyage) {
    console.log(voyage)
    this.voyageService.add(voyage).subscribe(
      data => {
        console.log(data)
        this._snackBar.open("Voyage ajouter","close")
        return this.router.navigate(['/admin'])
      }
    )
  }


  onMainPictureChangeSrc(newValue: string) {
    if (this.voyage.mainPicture === undefined) {
      this.voyage.mainPicture = { src: newValue, alt: "" };
    } else {
      this.voyage.mainPicture.src = newValue;
    }
  }

  onMainPictureChangeAlt(newValue: string) {
    if (this.voyage.mainPicture === undefined) {
      this.voyage.mainPicture = { src: "", alt: newValue };
    } else {
      this.voyage.mainPicture.alt = newValue;
    }
  }


  addPicture() {
    if (this.voyage) {
      if (!this.voyage.pictures) {
        this.voyage.pictures = [];
      }
      this.voyage.pictures.push({ src: '', alt: '' });
    }
  }
}

