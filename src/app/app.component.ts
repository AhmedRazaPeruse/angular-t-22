import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitterapp';
  _data = "Ahmed Raza Mustafa"
  _vita = {
    name:"Ali",
    age:"25",
    title:"Khan"
  }

  _sita = {
    name:"Akram",
    age:"30",
    title:"Khan",
    address:"Karachi"
  }

  _dita = [
    {
      name:"Atif",
      age:"32",
      title:"Khan",
      address:"Karachi"
    },
    {
      name:"Arsalan",
      age:"28",
      title:"Zamaan",
      address:"Lahore"
    },
    {
      name:"Atif",
      age:"46",
      title:"Azam",
      address:"Multan"
    },
    {
      name:"Abrar",
      age:"36",
      title:"Alam",
      address:"Islamabad"
    },
    {
      name:"Aslam",
      age:"40",
      title:"Kamran",
      address:"Peshawar"
    },
    {
      name:"Aqrar",
      age:"38",
      title:"Hassan",
      address:"Karachi"
    },
  ]

}
