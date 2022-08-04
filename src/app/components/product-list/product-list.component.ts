import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/model/manga';
import { MangaService } from 'src/app/service/manga.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  mangas: Array<Manga> = [];


  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.getMangas();
  }

  getMangas(): void{
    this.mangaService.getManga().subscribe(resposta => {
      this.mangas = resposta;
    })
  }
}
