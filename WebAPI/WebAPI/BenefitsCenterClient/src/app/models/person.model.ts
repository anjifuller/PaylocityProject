export class Person {
    id: string;
    firstName: string;
    lastName: string;
    ssn: string;

    public isNull(): boolean {
        return  !(this.firstName || this.lastName || this.ssn);
    }
}
