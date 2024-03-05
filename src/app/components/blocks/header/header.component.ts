import {Component, OnInit} from '@angular/core';
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router:Router) {
  }

   user = window.localStorage.getItem("token")

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"])
  }
}
