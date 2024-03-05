import {Component, Inject} from '@angular/core';
import {Voyage} from "../../../models/voyage";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef, MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-modal-confirm-component',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './modal-confirm-component.component.html',
  styleUrl: './modal-confirm-component.component.scss'
})
export class ModalConfirmComponentComponent {

  @Inject(MAT_DIALOG_DATA) public  data?: Voyage;

  constructor(public dialogRef :MatDialogRef<any>) {
  }

  onNoClick(){
    this.dialogRef.close();
  }


}
