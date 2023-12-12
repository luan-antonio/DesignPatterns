interface User {
  name: string;
  age: number;
}

export class Database {
  private static _instance: Database | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): Database {
    if (!Database._instance) Database._instance = new Database();

    return Database._instance;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  public showUsers(): void {
    this.users.forEach((user) => console.log(user));
  }
}
