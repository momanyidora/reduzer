// Define the abstract LibraryItem class
abstract class LibraryItem {
    // TODO: Add protected properties and constructor
    protected id: string;
    protected title: string;
    protected isCheckedOut: boolean;

    constructor(id: string, title: string, isCheckedOut: boolean = false) {
        this.id = id
        this.title = title
        this.isCheckedOut = isCheckedOut
    }
    // TODO: Add abstract getItemType method
    abstract getItemType(): string;
    // TODO: Add checkOut, checkIn, and title getter methods
    public checkOut(): void {
        this.isCheckedOut = true
    }
    public checkIn(): void {
        this.isCheckedOut = false
    }
    public getTitle(): string {
        return this.title

    }
    public getId(): string {
        return this.id
    }
    public getIsCheckedOut(): boolean {
        return this.isCheckedOut
    }
    public getDetails(): string {
        return `${this.getItemType()}: ${this.title} (ID: ${this.id})`;
    }
}

// Define the Book class
class Book extends LibraryItem {
    // TODO: Add private author property and constructor
    private author: string;
    constructor(id: string, title: string, author: string) {
        super(id, title)
        this.author = author
    }
    // TODO: Implement getItemType method
    getItemType(): string {
        return "Book"
    }
    // TODO: Add author getter
    public getAuthor(): string {
        return this.author
    }
}

// Define the DVD class
class DVD extends LibraryItem {
    // TODO: Add private director property and constructor
    private director: string;
    constructor(id: string, title: string, director: string) {
        super(id, title)
        this.director = director
    }
    // TODO: Implement getItemType method
    getItemType(): string {
        return "DVD"
    }
    // TODO: Add director getter
    public getDirector(): string {
        return this.director
    }
}

// Define the generic Library class
class Library<T extends LibraryItem> {
    // TODO: Add private items array and constructor
    private items: T[] = [];
    constructor() {
        this.items = [];
    }
    // TODO: Add addItem, findItem, and getAvailableItems methods
    addItem(item: T): void {
        this.items.push(item)
    }
    findItem(id: string): T | undefined {
        return this.items.find(item => item.getId() === id)
    }
    getAvailableItems(): T[] {
        return this.items.filter(item => !item.getIsCheckedOut())
    }
}

// Define the Searchable interface
interface Searchable {
    // TODO: Add search method signature
    search(query: string): LibraryItem[];
}

// Define the LibraryManager class
class LibraryManager implements Searchable {
    // TODO: Add private allItems array and constructor
    private allItems: LibraryItem[];
    constructor() {
        this.allItems = [];
    }
    // TODO: Add addItem method
    addItem(item: LibraryItem): void {
        this.allItems.push(item);
    }
    // TODO: Implement search method
    search(query: string): LibraryItem[] {
        const lowerQuery = query.toLowerCase();
        return this.allItems.filter(item => item.getTitle().toLowerCase().includes(lowerQuery)
        );
    }

    processCheckout(id: string): string {
        const item = this.allItems.find(i => i.getId() === id);

        if (!item) {
            return "Item not found";
        }

        if (item.getIsCheckedOut()) {
            return "Item is already checked out";
        }

        item.checkOut()
        return "Success: Item checked out";
    }
    getAvailableItems(): LibraryItem[] {
        return this.allItems.filter(item => !item.getIsCheckedOut());
    }

}

const book = new Book("B1", "1984", "Orwell");
console.log(book.getItemType());
console.log(book.getAuthor());

const dvd = new DVD("D1", "Inception", "Nolan");
console.log(dvd.getItemType());
console.log(dvd.getDirector());


const manager = new LibraryManager();
manager.addItem(book);
manager.processCheckout("B1");
console.log(manager.getAvailableItems().length);


console.log(manager.search("1984").length);
console.log(manager.processCheckout("B1"));
console.log(manager.processCheckout("XYZ"));  
