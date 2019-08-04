import { Component } from '@angular/core';
import { Posts } from './modele/posts'; // Bonus; Créer un type pour les posts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Array <Posts>
  = [
    {
    title: 'Mon premier post',
    content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    loveIts: 1 ,
    created_at: new Date (),
    },
    {
    title: 'Mon 2nd post',
    content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    loveIts: 0 ,
    created_at: new Date(),
    },
    {
    title: 'Mon 3rd post',
    content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    loveIts: -1 ,
    created_at: new Date(),
    }
  ];
}
