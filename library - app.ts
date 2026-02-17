// Use appropriate named exports for all classes
// Create a main application file that imports and uses all three classes

import { Book } from "./book";
import { Member } from "./member";
import { LibraryTransaction } from "./transaction";

const book1 = new Book(
  "Typescrpt mastery",
  "jane smith",
  "978-1-234-56789-7",
  true,
);
const member1 = new Member("dorah whali", "698-56", "dorah@gmail.com");
const transaction = new LibraryTransaction();

console.log(book1.getBookInfo());
transaction.borrowBook(book1, member1);
console.log(`Available ${book1.isAvailable}`);
