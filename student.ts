
export class Student {
    name: string;
    email: string;
    studentId: string;

    constructor(name: string, email: string, studentId: string) {
        this.name = name
        this.email = email
        this.studentId = studentId
    }

    getStudentInfo():string{
        return `${this.name} (${this.studentId}) - ${this.email}`
    }
}
const student1 = new Student("dorah","dorah@gmail.com", "104")
console.log(student1.getStudentInfo())
