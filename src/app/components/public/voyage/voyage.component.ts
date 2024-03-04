import { Component } from '@angular/core';
import {VoyageSliderComponent} from "../voyage-slider/voyage-slider.component";

@Component({
  selector: 'app-voyage',
  standalone: true,
  imports: [
    VoyageSliderComponent
  ],
  templateUrl: './voyage.component.html',
  styleUrl: './voyage.component.scss'
})
export class VoyageComponent {

}
