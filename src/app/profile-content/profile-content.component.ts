import { Component, OnInit } from '@angular/core';

interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.sass']
})
export class ProfileContentComponent implements OnInit {

  posts: Post[]
  constructor() {
    this.posts = [
      {
        title: 'Всем привет!',
        text: 'Я зарегистрировался в котограмме'
      },
      {
        title: 'Кошачьи мысли',
        text: 'Куда человек уходит каждое утро?'
      },
    ]
  }

  ngOnInit() {
  }

}
