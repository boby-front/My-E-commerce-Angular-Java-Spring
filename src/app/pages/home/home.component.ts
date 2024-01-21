import { Component } from '@angular/core';
import { BannerComponent } from '../../component/banner/banner.component';
import { HomeBrowseComponent } from '../../component/home-browse/home-browse.component';
import { HomeProductsComponent } from '../../component/home-products/home-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,HomeBrowseComponent,HomeProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
