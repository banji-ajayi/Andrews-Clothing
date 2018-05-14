import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  cartProducts:any;

  constructor(private router:Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if((data !== null) || (data !== 'null') ) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
      id:1,
      title: "Ankara",
      description: "Cote'devoire Ankara fabrics",
      img: "../../assets/ankara.jpg",
      price: 800
      },
      {
        id:2,
        title: "Atiku",
        description: "Atiku fabrics",
        img: "../../assets/atiku.jpg",
        price: 600
        },
      {
      id:3,
      title: "Batik",
      description: "Batik fabrics",
      img: "../../assets/batik.jpg",
      price: 750
      },
      {
      id:4,
      title: "Chiffon",
      description: "Chiffon fabrics",
      img: "../../assets/chiffon.jpg",
      price: 1200
      },
      {
      id:5,
      title: "Lace",
      description: "Lace fabrics",
      img: "../../assets/lace.jpg",
      price: 3000
      },
      {
      id:6,
      title: "Silk",
      description: "Silk fabrics",
      img: "../../assets/silk.jpg",
      price: 500
      },
      {
      id:7,
      title: "Tulle",
      description: "Tulle fabrics",
      img: "../../assets/tulle.jpg",
      price: 720
      },{
      id:8,
      title: "Velvet",
      description: "Velvet fabrics",
      img: "../../assets/velvet.jpg",
      price: 850
      },

    ]
  }

  addToCart(index) {
    let product = this.products[index];
    let cartData=[];
    let data = localStorage.getItem('cart');
    if(data !== null) {
      cartData=JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded=true;
  }

  updateCartData(cartData){
    this.cartProducts = cartData;
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }

}
