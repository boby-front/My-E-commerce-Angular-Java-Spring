import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
@Input() image! :string;
@Input() price! :string;
@Input() title! :string;
@Input() description! :string;
@Input() info? :string;
@Input() promo? :string;

isHovered :boolean = false;

onMouseOver() {
  this.isHovered = true;
}

onMouseLeave() {
  this.isHovered = false;
}

addToCart(e: Event){
e.stopPropagation();
console.log("ok add to cart ! ");

}
}
