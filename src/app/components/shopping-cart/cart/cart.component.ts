import { CartService } from './../../../services/cart.service';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId: 1, productName: 'Test1', qty: 4, price: 99.99},
    // { id: 2, productId: 1, productName: 'Test2', qty: 1, price: 39.99},
    // { id: 3, productId: 1, productName: 'Test3', qty: 6, price: 29.99},
    // { id: 4, productId: 1, productName: 'Test4', qty: 5, price: 49.99}
  ];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0;

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
