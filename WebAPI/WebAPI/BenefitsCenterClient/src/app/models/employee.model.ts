import { Address } from './address.model';
import { Person } from './person.model';

export class Employee extends Person {
    hireDate: Date;
    salary: number;
    address: Address = new Address();
    spouse: Person;
    dependents: Person[] = [];

    hasSpouse() {
        return this.spouse != null;
    }

    hasDependents() {
        return (this.dependents.length >= 1 && !this.dependents[0].isEmpty());
    }

    createSpouse() {
        if (!this.hasSpouse()) {
            this.spouse = new Person();
        }
    }

    createDependent() {
        const lastDependent = this.dependents[this.dependents.length - 1];
        if (!lastDependent || !lastDependent.isEmpty()) {
            this.dependents.push(new Person());
        }
    }

    removeDependent(index) {
        this.dependents.splice(index, 1);
    }

    isEmployeeValid() {
        const isSpouseValid = !this.spouse || this.spouse.isValid();
        const invalidDependents = this.dependents.filter(value => value.isValid() === false);
        const areDependentsValid = invalidDependents.length > 0 ? false : true;

        return super.isValid() && isSpouseValid && areDependentsValid;
    }
}
