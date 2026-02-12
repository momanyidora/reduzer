





interface Repository<T> {
    save(entity: T): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    update(id: string, entity: Partial<T>): Promise<T>;
    delete(id: string): Promise<boolean>;
}

interface Course {
    id: string;
    title: string;
    instructor: string;
    duration: number;
}

class CourseRepository implements Repository<Course> {
    private courses: Course[] = [];

    async save(entity: Course): Promise<Course> {
        this.courses.push(entity);
        return entity;
    }

    async findById(id: string): Promise<Course | null> {
        return this.courses.find(c => c.id === id) || null;
    }

    async findAll(): Promise<Course[]> {
        return [...this.courses];
    }

    async update(id: string, entity: Partial<Course>): Promise<Course> {
        const index = this.courses.findIndex(c => c.id === id);
        if (index === -1) throw new Error('Course not found');

        this.courses[index] = { ...this.courses[index], ...entity };
        return this.courses[index];
    }

    async delete(id: string): Promise<boolean> {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter(c => c.id !== id);
        return this.courses.length < initialLength;
    }
}


interface Factory<T> {
    create(config: any): T;
    validate(config: any): boolean;

}
interface DatabaseConnection {
    host: string;
    port: number;
    database: string;
    connect(): Promise<void>;

}
interface DatabaseConfig {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
}

class PostgresConnection implements DatabaseConnection {
    constructor(
        public host: string,
        public port: number,
        public database: string
    ) { }

    async connect(): Promise<void> {
        console.log(`Connecting to PostgreSQL at ${this.host}:${this.port}/${this.database}`);
    }
}

class DatabaseFactory implements Factory<DatabaseConnection> {
    create(config: DatabaseConfig): DatabaseConnection {
        if (!this.validate(config)) {
            throw new Error('Invalid database configuration');
        }

        return new PostgresConnection(config.host, config.port, config.database);
    }

    validate(config: DatabaseConfig): boolean {
        return config.host.length > 0 &&
            config.port > 0 &&
            config.database.length > 0;
    }
}