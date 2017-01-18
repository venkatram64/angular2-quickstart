import {Component} from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers:[PostsService]

})


export class UserComponent {
   name :string;
   email:string;
   address :Address;
   hobbies:string[];
   showHobbies:boolean;
   posts:Post[];

   constructor(private postsService: PostsService){
        this.name = 'John';
        this.email = 'john@gmail.com';
        this.address = {
            street: '12 Main st',
            city: 'Boston',
            state: 'MA'
        };
        this.hobbies = ['Music','Movies','Sports'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts =>{
            this.posts = posts;
        });
   }

   toggleHobbies():void{
       if(this.showHobbies)
            this.showHobbies = false;
        else
            this.showHobbies = true;
   }

   addHobby(hobby:string):void{
    this.hobbies.push(hobby);    
   }

   deleteHobby(index:number):void{
       this.hobbies.splice(index, 1);
   }
}

interface Address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id:number;
    title:string;
    body:string;
}