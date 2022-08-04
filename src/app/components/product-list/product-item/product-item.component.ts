import { Component, Input, OnInit } from '@angular/core';
import { Manga } from 'src/app/model/manga';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() manga!: Manga;

  constructor() { }

  ngOnInit(): void {
  }


}
