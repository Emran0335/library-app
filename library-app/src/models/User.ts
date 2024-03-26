export type User = {
  _id: string;
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
};

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface RegisterUserPayload {
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FetchUserPayload {
  userId: string;
  property: "loggedInUser" | "profileUser";
}

export interface UsersData<User> {
  message: string;
  users: User[];
}


