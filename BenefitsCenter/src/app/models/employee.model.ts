import { Address } from './address.model';
import { Person } from './person.model';

export class Employee extends Person {
    hireDate: Date;
    salary: number;
    address: Address = new Address();
    spouse: Person;
    dependents: Person[] = [];
}
