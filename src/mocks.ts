import { faker } from "@faker-js/faker";

export function mockPatients(length = 10) {
  return new Promise((resolve) => {
    const patients = Array.from({ length }).map(() => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
      dateOfBirth: faker.date.birthdate().toLocaleDateString(),
    }));
    resolve(patients);
  });
}
