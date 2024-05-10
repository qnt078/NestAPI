export class User {
  id?: number;
  username: string;
  password: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    if (user.id !== undefined) {
      this.id = user.id;
    }
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
