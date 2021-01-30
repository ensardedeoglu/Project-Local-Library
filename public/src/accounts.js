const findAccountById = (accounts, id) => {
  let found = accounts.find((account) => account.id === id)
  return found
};

const sortAccountsByLastName = (accounts) => {
  accounts.sort(function (first, second) {
    if (first.name.last > second.name.last) {
      return 1;
    } if (first.name.last < second.name.last) {
      return -1;
    } if (first.name.last === second.name.last) {
      return 0
    };
  });
  return accounts;
};


const numberOfBorrows = (account, books) => {
  const { id } = account
  let counter = 0;
  for (let i in books) {
    counter += books[i].borrows.filter(borrow => {
      return borrow.id === id
    }).length
  }
  return counter
}

const getBooksPossessedByAccount = (account, books, authors) => {
  let resultFilter = books.filter((book) => book.borrows.some(borrow => borrow.id === account.id && borrow.returned === false));

  return resultFilter.map(book => ({ ...book, author: authors.find(author => author.id === book.authorId) }))
};



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
