import { Component, OnInit } from '@angular/core';
import { HobbyService } from './hobby.service';
import { Router } from '@angular/router';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  books: Book[];
  // bookss: Book[] = [
  //   {title: 'Master and Margaret',
  //     id: 0, 
  //     author: "M.A. Bulgakov", 
  //     year: 1935, 
  //     cover: "https://i.otzovik.com/objects/b/310000/301710.png",
  //     description: 'Good narrative!!!'
  //   },
  //   {title: '1984',
  //     id: 1, 
  //     author: "George Orwell", 
  //     year: 1949, 
  //     cover: 'https://kbimages1-a.akamaihd.net/264004f8-0018-4ec9-a503-eb3a686cb26e/1200/1200/False/j-d-salinger-s-the-catcher-in-the-rye-4.jpg',
  //     description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
  //   },
  //   {title: 'Atlas Shrugged',
  //     id: 3, 
  //     author: "Ayn Rand", 
  //     year: 1957, 
  //     cover: "https://images-na.ssl-images-amazon.com/images/I/A1PlcXIypYL.jpg",
  //     description: "Tremendous in its scope, this novel presents an astounding panorama of human life — from the productive genius who becomes a worthless playboy — to the great steel industrialist who does not know that he is working for his own destruction — to the philosopher who becomes a pirate — to the composer who gives up his career on the night of his triumph — to the woman who runs a transcontinental railroad — to the lowest track worker in her Terminal tunnels."
  //   },
  //   {title: 'For whom the Bell Tolls',
  //     id: 4, 
  //     author: "Ernest Hemingway", 
  //     year: 1940, 
  //     cover: "https://images-na.ssl-images-amazon.com/images/I/A15uwiJuIKL.jpg",
  //     description: "The story of Robert Jordan, a young American in the International Brigades attached to an antifascist guerilla unit in the mountains of Spain, it tells of loyalty and courage, love and defeat, and the tragic death of an ideal. In his portrayal of Jordan's love for the beautiful Maria and his superb account of El Sordo's last stand, in his brilliant travesty of La Pasionaria and his unwillingness to believe in blind faith, Hemingway surpasses his achievement in The Sun Also Rises and A Farewell to Arms to create a work at once rare and beautiful, strong and brutal, compassionate, moving and wise."
  //   },
  //   {title: 'Three Comrades',
  //     id: 5, 
  //     author: "E.M. Remarque", 
  //     year: 1936, 
  //     cover: "https://images-na.ssl-images-amazon.com/images/I/81Yh4fCBfiL.jpg",
  //     description: ""
  //   },
  //   {title: 'The Best Short Stories of O. Henry',
  //     id: 6, 
  //     author: "O. Henry", 
  //     year: 1904, 
  //     cover: "https://i.ebayimg.com/images/i/233185460410-0-1/s-l1000.jpg",
  //     description: "The more than 600 stories written by O. Henry provided an embarrassment of riches for the compilers of this volume.The final selection of the thirty-eight stories in this collection offers for the reader's delight those tales honored almost unanimously by anthologists and those that represent, in variety and balance, the best work of America's favorite storyteller.They are tales in his most mellow, humorous, and ironic moods.They give the full range and flavor of the man born William Sydney Porter but known throughout the world as O. Henry, one of the great masters of the short story."
  //   },
  // ];

  constructor(private hs: HobbyService, 
              private router: Router) { }

  ngOnInit() {

    this.hs.getBooks().subscribe(
      (response: Book[]) => {this.books = response},
      (error) => console.log(error)
    )
  };

  redirect(id){
    this.router.navigate(['/hobbies', id]);
  }

  onAdd(){
    this.router.navigate(['/hobbies/create']);
  }

  onDelete(id){
    const selectedBook = this.books.find(el => el.id == id);
    this.books.splice(this.books.indexOf(selectedBook),1);
    this.hs.updateBookList(this.books).subscribe(
      (response)=>console.log('Book removed from the book list'),
      (error)=>console.log(error)
    )
  }

}
