import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  imageUrl = "../.././../assets/images/image-avatar.png"

  modaleValue: boolean = false;

  openModale(): void {
    this.modaleValue = true;
    console.log("open" + this.modaleValue);
  }
  closeModale(): void {
    this.modaleValue = false;
    console.log("close" + this.modaleValue);
  }
}
