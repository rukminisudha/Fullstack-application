export class Init {
  load() {
    if (localStorage.getItem('books') === null || localStorage.getItem('books') == undefined) {
      console.log("Creating the initial set of books ...");
      var books = [
                   
				{
                    id:1,
                    title:"Wings Of Fire",
                    author:"A P J Abdul Kalam",
                    isbn:"81-7371-146-1",
                    publicationDate:"1999-01-01",
                    publisher:"Universities Press",
                    price:"260",
                    genre:"	Autobiography",
                    format:"HardCover"
                },
                {
                    id:2,
                    title:"Half Girlfriend",
                    author:"Chetan Bhagat",
                    isbn:"978-81-291-3572-8",
                    publicationDate:"2014-10-03",
                    publisher:"	Rupa & Co.",
                    price:"200",
                    genre:"	Romance",
                    format:"Paperback"   
                },
                {
                    id:3,
                    title:"Harry Potter",
                    author:"J. K. Rowling",
                    isbn:"1234567891078",
                    publicationDate:"1999-07-21",
                    publisher:"Bloomsbury",
                    price:"900",
                    genre:"Fiction",
                    format:"E-book",
            
                }
      ];
      localStorage.setItem('books', JSON.stringify(books));
    }
    else {
      console.log("Loaded the books from local storage ...");
    }
  }
}
