
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
    findItem(id: string): T|undefined{
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
        this.allItems.push(item)
    }
    // TODO: Implement search method
    search(query: string): LibraryItem[] {
        return this.allItems.filter(item =>
            item.getTitle().toLowerCase().includes(query.toLowerCase())
        );
    }


    async processCheckedOut(id: string): Promise<string> {
        const item = this.allItems.find(item => item.getId() === id)

        if (!item) {
            return `Item with id ${id} not found `
        }

        if (item.getIsCheckedOut()) {
            return `item ${item.getTitle()} is already checked out`
        }
        item.checkOut()
        return `item ${item.getTitle()} has been checked out successfully`
    }
}

async function main() {
    console.log("=== Library System Test ===");

    
    const manager = new LibraryManager();

    
    const book1 = new Book("B1", "Origin of species", "charles Darwin");
    const book2 = new Book("B2", "OOP Mastery", "Jane Smith");
    const dvd1 = new DVD("D1", "Life in crime", "John Kiriamiti");

    
    manager.addItem(book1);
    manager.addItem(book2);
    manager.addItem(dvd1);

    console.log("\nAll items added successfully.");

    
    console.log("\nSearch results for 'Type':");
    const searchResults = manager.search("Type");
    searchResults.forEach(item => {
        console.log(`${item.getItemType()} - ${item.getTitle()}`);
    });

    console.log("\nChecking out B1...");
    const checkoutMessage = await manager.processCheckedOut("B1");
    console.log(checkoutMessage);

    
    console.log("\nTrying to check out B1 again...");
    const secondAttempt = await manager.processCheckedOut("B1");
    console.log(secondAttempt);

    
    const bookLibrary = new Library<Book>();
    bookLibrary.addItem(book1);
    bookLibrary.addItem(book2);

    console.log("\nAvailable Books:");
    const availableBooks = bookLibrary.getAvailableItems();
    availableBooks.forEach(book => {
        console.log(book.getTitle());
    });
}

main();