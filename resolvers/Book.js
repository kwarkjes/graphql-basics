export default {
  author(book, args, context) {
    // console.log({ book, args, context });
    const [ firstName, lastName ] = book.author.split(' ');
    return {
      firstName,
      lastName,
      fullName: book.author,
      age: 33,
    }
  }
}