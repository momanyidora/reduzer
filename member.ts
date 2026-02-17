// Create a Member class in member.ts with properties for name, membership ID, and contact information
export class Member {
  name: string;
  membershipId: string;
  email: string;
  borrowedBooks: string[];

  constructor(name: string, membershipId: string, email: string) {
    this.name = name;
    this.membershipId = membershipId;
    this.email = email;
    this.borrowedBooks = [];
  }
}
