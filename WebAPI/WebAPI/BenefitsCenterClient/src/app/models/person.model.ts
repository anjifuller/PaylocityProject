export class Person {
    id: string;
    firstName: string;
    lastName: string;
    ssn: string;

    public isEmpty(): boolean {
        return  !(this.firstName || this.lastName || this.ssn);
    }

    public isValid(): boolean {
        if (this.firstName && this.lastName) {
            return true;
        } else {
            return false;
        }
    }
}
