import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { HobbyService } from '../hobbies/hobby.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanDeactivateComponent } from '../shared/can-deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, CanDeactivateComponent {
  isSaved: boolean = false;
  newBookForm: FormGroup;
  bookList:Book[];
  

  constructor(private hs: HobbyService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hs.getBooks().subscribe(
      (response:Book[])=>this.bookList = response,
      (error)=>console.log(error)
    );
    this.createForm();
  };
  generateId(booksArray: Book[]): number{
    return booksArray.length > 0 ? Math.max(...booksArray.map(book=>book.id)) + 1 : 1;
  };
  createForm(){
    this.newBookForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      year: [null, Validators.required],
      cover: [null, Validators.required],
      description: [null]
    });
  };
  

  onAdd(form){
    this.isSaved = true;
    let newBook: Book = form.value;
    newBook.id = this.generateId(this.bookList);
    
    this.bookList.push(newBook);
   
    this.hs.updateBookList(this.bookList).subscribe(
      (response)=>{console.log('New Book Added');
      this.router.navigate(['..'], {relativeTo:this.route})
    },
      (error)=>console.log(error)
    )
  };
  goBack(){
    this.router.navigate(['..'], {relativeTo: this.route});
  };
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
    if(this.newBookForm.dirty && this.isSaved == false){
      return confirm('Do you want to leave this page? Your changes may be lost.')
    }else{
      return true;
    }
  };
}
