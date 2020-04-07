import { Component, OnInit } from '@angular/core';
import { ProductService} from './product.service';
import { Product} from './product.model';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  products: Product[];
<<<<<<< HEAD
  recommendedProducts: Product[];
=======
  franchises: string[];
  value = 100;
  min = 0;
  max = 3000;
  autoTicks = false;
  showTicks = false;
  tickInterval = 1;
  franchise = "";
  distributor = "";
  height = 150;
  width = 150;
  recommendedProducts : Product[];
>>>>>>> c8f466c076916bc5c8837d00d53c39862d9f5b4a

  constructor(private router: Router, private service: ProductService, public loginService: LoginService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      products => this.products = products,
<<<<<<< HEAD
      error => console.log(error)
    );
=======
      error => console.log(error + 'hola')
    );    
>>>>>>> c8f466c076916bc5c8837d00d53c39862d9f5b4a
    this.service.getProductsbyRecommendations().subscribe(
      recommendedProducts => this.recommendedProducts = recommendedProducts,
      error => console.log(error)
    );  
  }

  formatLabel(value: number) {
    if (value >= 0) {
      return Math.round(value / 1) + '€';
    }
    return value;
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  sortBy(toDo: string, sort: string) {
    this.service.getProductsbySort(toDo, sort).subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  search(key: string) {
    this.service.getProductsbyKey('search', key).subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  delete(product: Product) {
    this.service.deleteProduct(product).subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

<<<<<<< HEAD
  saveProduct() {
    this.service.saveProduct(this.product).subscribe(
    _ => {}, (error: Error) => console.error('error creating new product: ' + error));
=======
  filter() {
    this.service.getProductsbyFilter(this.franchise,this.distributor,this.width,this.height,this.min,this.value).subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  getFranchises(){
    for(let p of this.products){
      if(!this.franchises.includes(p.franchise))
      this.franchises.concat(p.franchise);
    }
    /*for(let i = 0; i < this.products.length; i++){
      if(!this.franchises.includes(this.products[i].franchise))
      this.franchises.concat(this.products[i].franchise);
    }*/
  }

}

>>>>>>> c8f466c076916bc5c8837d00d53c39862d9f5b4a

}
}
