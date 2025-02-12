import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  titleInput: string = "";
  contentInput: string = "";

  @Output() addArticle = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();
  @Output() addBroullion = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();

  createArticle(title:string, content:string){
    const obj = {title: title, content: content, author: 'Alexandre', date: new Date, type: 'article'};
    this.addArticle.emit(obj);
  }

  createBroullion(title:string, content:string){
    const obj = {title: title, content: content, author: 'Alexandre', date: new Date, type: 'brouillon'};
    this.addBroullion.emit(obj);
  }
}
