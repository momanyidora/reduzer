// Create a Book class in book.ts with properties for title, author, ISBN, and availability status
export class Book {
  title: string;
  author: string;
  ISBN: string;
  isAvailable: boolean;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    isAvailable: boolean,
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isAvailable = true;
  }
  getBookInfo(): string {
    return `${this.title} by ${this.author} isbn: ${this.ISBN}`;
  }
}

