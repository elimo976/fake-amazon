import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticoloAddDTO } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrls: ['./articolo-add.component.css']
})
export class ArticoloAddComponent {
  model: ArticoloAddDTO = new ArticoloAddDTO();
  constructor(private blogService: BlogService, private router: Router) { 
  }

  aggiungiArticolo() {
    this.blogService.addArticolo(this.model)
      .subscribe(dati => {
        this.model = new ArticoloAddDTO();

        // naviga alla lista degli articoli
        this.router.navigate(["/blog"]);
      })
  }
}
