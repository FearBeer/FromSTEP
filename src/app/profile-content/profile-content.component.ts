import { Component, OnInit } from '@angular/core';

interface Article {
  title: string
  text: string
}

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.sass']
})
export class ProfileContentComponent {

  articles: Article[]

  constructor() {
    this.articles = [
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

  addArticle(event : any) {
    event.preventDefault()
    let title = event.target.title.value
    let text = event.target.text.value

    this.articles.push({
      title,
      text
    })
  }
}
