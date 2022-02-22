import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage: number = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Want to go here!',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Can you hear the waves?',
      url: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Look it\'s paradise',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ]


  // add class names evaluated for each item
  // common pattern return string
  // getClass(){
  //   if(something()){
  //     return 'active';
  //   }

  //   if(something()){
  //     return 'someOtherclass'
  //   }

  //   if(somethingYetElse()){
  //     return 'yetAnotherClass'
  //   }
  // }

  // add class names to an array
  // common pattern return array of strings
  // getClass() {
  //   const classes = [];
    
    
  //   if(something()){
  //     classes.push('active');
  //   }

  //   if(somethingElse(){
  //     classes.push('someOtherClass');
  //   }

  //   if(somethingYetElse()){
  //     classes.push('yetAnotherClass')
  //   }

  //   return classes;
  // }


}
