import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HobbyService } from '../hobbies/hobby.service';
import { Book } from '../shared/book.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CanDeactivateComponent } from '../shared/can-deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-hobbies-details',
  templateUrl: './hobbies-details.component.html',
  styleUrls: ['./hobbies-details.component.css']
})
export class HobbiesDetailsComponent implements OnInit, CanDeactivateComponent {
  book: Book;
  books: Book[];
  newBookForm: FormGroup;
  editingAllowed = false;
  changesSaved = false;
  constructor(private route: ActivatedRoute, private hs: HobbyService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
      

    let id = this.route.snapshot.params['id'];
      this.hs.getBooks().subscribe(
      (response:Book[])=>{
        this.books = response;
        this.book = response.find(element=>element.id == id);
        this.createForm();
      },
      (error)=>console.log(error)
    )    
  };
  createForm(){
    this.newBookForm = new FormGroup ({
      title: new FormControl (this.book.title, [Validators.required]),
      author: new FormControl (this.book.author, [Validators.required]),
      year: new FormControl (this.book.year, [Validators.required]),
      cover: new FormControl (this.book.cover, [Validators.required]),
      description: new FormControl (this.book.description)
    });
  };
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
    if(!this.changesSaved  && this.newBookForm.dirty){
      return confirm('Do you want to leave this page? Your changes may be lost.')
    }else{
      return true;
    }
  };

  enableEdit(){
    this.editingAllowed = true;
  };
  onSave(form){
       
    let editedBook = {...this.book, ...form.value};

    this.books.splice(this.books.indexOf(this.book),1,editedBook);
    
    
    this.hs.updateBookList(this.books).subscribe(
      (response)=>{
        console.log('Book list updated');
        this.changesSaved=true;
        this.router.navigate(['/hobbies'])
        },
      (error)=>console.log(error)
    );
    
  };
  onDelete(){  

    this.books.splice(this.books.indexOf(this.book),1);    
    this.hs.updateBookList(this.books).subscribe(
      (response)=>{console.log('Book removed from the book list');
      this.router.navigate(['..'], {relativeTo:this.route})},
      (error)=>console.log(error)
    ); 

  };
  goBack(){
    this.router.navigate(['..'], {relativeTo: this.route});
  };

}
