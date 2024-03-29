import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articolo } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
  styleUrls: ['./articolo-detail.component.css']
})
export class ArticoloDetailComponent implements OnInit {
  articolo?: Articolo;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("articoloId"));
  
    this.blogService.getArticoloById(id)
      .subscribe(articolo => this.articolo = articolo);
  }

  rimuovi() {
    if (confirm("Sei sicuro?")) {
      this.blogService.deleteArticoloById(this.articolo!.id)
        .subscribe(dati => this.router.navigate(['/blog']));
   }
  }
}
