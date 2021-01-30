const findAuthorById = (authors, id) => {
  let result = authors.find((author) => author.id === id);
  return result;
};

const findBookById = (books, id) => {
  let result = books.find((book) => book.id === id);
  return result;
}


const partitionBooksByBorrowedStatus = (books) => {
  let find1 = books.filter((book) => book.borrows[0].returned === false);
  let find2 = books.filter((book) => book.borrows[0].returned === true);
  let result = [find1, find2];
  return result;
};

const getBorrowersForBook = (book, accounts) => {
  let result = book.borrows.map(borrower => {
    let result = accounts.find(account => borrower.id === account.id)
    result.returned = borrower.returned
    return result;
  });
  console.log(result);
  return result.filter((borrower, i) => result.findIndex(item => item.id === borrower.id) === i)

};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
