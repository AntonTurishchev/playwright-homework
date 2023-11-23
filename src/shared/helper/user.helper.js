import { faker } from "@faker-js/faker";

const CreateNewUser = function CreateNewUser (firstName, lastName, postalCode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.postalCode = postalCode;
}

export const UserBuilder = function UserBuilder() {
    return {
        setFirstName() { 
            this.firstName = faker.person.firstName();
            return this;
        },
        setLastName() {
            this.lastName = faker.person.lastName()
            return this;
        },
        setPostalCode() {
            this.postalCode = faker.location.zipCode();
            return this;
        },

        build() {
            const user = new CreateNewUser(this.firstName, this.lastName, this.postalCode);
            return user;
        },
    };
};
