const createPerson = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(
        `my name is ${this.firstName} ${this.lastName} and i love js `
      );
    },
  };
};

const Kiran = createPerson('Kiran', 'Pant');
Kiran.fullName();
const Lalit = createPerson('Lalit', 'Pant');
Lalit.fullName();
