export interface IUser {
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
