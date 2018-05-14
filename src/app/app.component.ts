import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Andrew\'s Clothing';
  url = '';
  items: any;

  constructor () {
    this.items = [
      {
        name: "home",
        link: "#/home"
      },

      {
        name: "Products",
        link: "#/products"
      },
      {
        name: "Cart",
        link: "#/cart"
      },
      {
        name: "About",
        link: "#/about"
      }
    ]
  }


    add(title, url) {
      if(title !== '' && url !== '') {
        url ="http://" + url;
        this.items.push({
          name: title,
          link: url,
          isNew: true
        });
        // reinitializng variables
        this.title ='';
        this.url = '';
      }
    }
  }

