import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(
    private msg: MessengerService,
    private CartService: CartService
    ) { }

  ngOnInit(): void {
  }

  handleAddTocart() {
    this.CartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}
