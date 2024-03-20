import { Component } from '@angular/core';
import { ArticoloAddDTO } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrls: ['./articolo-add.component.css']
})
export class ArticoloAddComponent {
  model: ArticoloAddDTO = new ArticoloAddDTO();
  constructor(private blogService: BlogService) { 
    
  }
}
