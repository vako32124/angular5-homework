import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Users & Products';
  showTitle = false;
  showusers = false;
  showProducts = false;
  showAll = false;

  users = [
    { first_name: 'John', last_name: 'Doe', email: 'john@example.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { first_name: 'Alice', last_name: 'Johnson', email: 'alice@example.com', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { first_name: 'Mike', last_name: 'Brown', email: 'mike@example.com', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }
  ];

  products = [
    { title: 'Smartphone', price: 699.99, category: 'Electronics', image: 'https://usmobi.ge/wp-content/uploads/2024/06/google-pixel-6.png', rating: { rate: 4.5, count: 120 } },
    { title: 'Running Shoes', price: 59.99, category: 'Footwear', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ee18eb38-d735-4ce0-a3ac-6ca94f750027/ZOOM+FLY+5.png', rating: { rate: 4.7, count: 300 } },
    { title: 'Backpack', price: 39.99, category: 'Accessories', image: 'https://solo-ny.com/cdn/shop/files/UBN795-10_HO_c4f17d2f-425f-4fa9-98c1-dc3f06b1933a.jpg?v=1695141176&width=1080', rating: { rate: 4.2, count: 90 } },
    { title: 'Headphones', price: 89.99, category: 'Electronics', image: 'https://s3.zoommer.ge/zoommer-images/thumbs/0186559_razer-gaming-headset-kraken-v3-black_550.jpeg', rating: { rate: 4.8, count: 200 } }
  ];

  toggleUsers() {
    this.showusers = !this.showusers;
    this.showProducts = false;
    this.showAll = false;
  }

  toggleProducts() {
    this.showProducts = !this.showProducts;
    this.showusers = false;
    this.showAll = false;
  }

  toggleAllData() {
    this.showAll = !this.showAll;
    this.showusers = this.showAll;
    this.showProducts = this.showAll;
  }
}