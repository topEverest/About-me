import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from '../shared/book.model';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})

export class HobbyService{
    constructor(private http: HttpClient){}

    getBooks(){
        return this.http.get('https://my-hobbies-839b0.firebaseio.com/books.json');
    }

    updateBookList(books: Book[]){
        return this.http.put('https://my-hobbies-839b0.firebaseio.com/books.json', books);
    }
}
