import { Book } from "./book";
import { Member } from "./member";

export class LibraryTransaction {
  borrowBook(book: Book, member: Member): boolean {
    if (book.isAvailable) {
      book.isAvailable = false;
      member.borrowedBooks.push(book.ISBN);
      console.log(`${member.name} borrowed ${book.title} `);
    }
    console.log(`${book.title} is not available`);
    return false;
  }
  returnBook(book: Book, member: Member): boolean {
    const bookIndex = member.borrowedBooks.indexOf(book.ISBN);
    if (bookIndex > -1) {
      book.isAvailable = true;
      member.borrowedBooks.splice(bookIndex, 1);
      console.log(`${member.name} returned ${book.title}`);
      return true;
    }
    console.log(`${book.title} is available`);
    return true;
  }
}
