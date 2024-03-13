import { ofetch } from 'ofetch';
import books from './resolvers/books.js';
import Book from './resolvers/Book.js';
import libraries from './resolvers/libraries.js';

export default {
  Query: {
    books,
    libraries
  },
  Book,
  Library: {
    async books(library, args, context) {
      const bookIds = library.books;
      const res = await ofetch(`https://freetestapi.com/api/v1/books`);
      return res.filter(({id}) => bookIds.includes(id));
    }
  }
};