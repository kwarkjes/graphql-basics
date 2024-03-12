export default (_, args, context) => {
  // console.log({ _, args, context })
  return [
    {
      name: "Witte Dame",
      address: {
        street: "Wittedamestraat",
        city: "Eindhoven",
        postalCode: "5505LE",
        houseNumber: 11,
      },
      books: [1,2,3,4]
    },
    {
      name: "Vldhoven Citycenter",
      address: {
        street: "Citycenterlaan",
        city: "Velfhoven",
        postalCode: "5699DS",
        houseNumber: 3,
      },
      books: [23, 25]
    },
  ]
}