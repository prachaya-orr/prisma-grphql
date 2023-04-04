
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    id: string;
    name: string;
    email: string;
}

export abstract class IQuery {
    abstract courses(): Nullable<Nullable<Course>[]> | Promise<Nullable<Nullable<Course>[]>>;

    abstract doctors(): Nullable<Nullable<Doctor>[]> | Promise<Nullable<Nullable<Doctor>[]>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export class Course {
    id: string;
    name: string;
    description: string;
    duration: string;
}

export class Doctor {
    id: string;
    name: string;
    email: string;
}

export abstract class IMutation {
    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
