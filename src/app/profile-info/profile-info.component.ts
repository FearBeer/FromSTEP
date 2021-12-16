import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.sass']
})
export class ProfileInfoComponent {
  profilePictureSrc: string
  profileName: string
  dateOfBurn: Date
  breed: string

  constructor() {
    this.profilePictureSrc = './assets/cat.jpg'
    this.profileName = 'Василий'
    this.dateOfBurn = new Date('December 17, 2015')
    this.breed = 'Тигр'
  }

}
