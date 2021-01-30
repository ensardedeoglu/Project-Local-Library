const totalBooksCount = (books) => {
  let result = books.reduce((count, books) => { return count + 1 }, 0);
  return result;
};


const totalAccountsCount = (accounts) => {
  let result = accounts.reduce((acc, accounts) => { return acc + 1 }, 0);
  return result;
};


const booksBorrowedCount = (books) => {
  let resultFilter = books.filter((book) => book.borrows[0].returned === false);
  return resultFilter.length;
};




const getMostCommonGenres = (books) => {
  let result = books.reduce((acc, book) => {
    if (acc[book.genre] == null) {
      acc[book.genre] = 1;
    } else {
      acc[book.genre]++;
    };
    return acc;
  }, {})
  let output = [];
  for (const name in result) {
    output.push({ 'name': name, 'count': result[name] });
  }
  output.sort(function (less, more) {
    return more.count - less.count;
  });
  return output.slice(0, 5);
};





const getMostPopularBooks = (books) => {
  let output = books.map((book) => {
    return { 'name': book.title, 'count': book.borrows.length }
  })
  let result = output.sort(function (less, more) {
    return more.count - less.count;
  });
  return result.slice(0, 5);
};


const getMostPopularAuthors = (books, authors) => {
  let result = [];
  authors.forEach(author => {
    let returnAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length
      }
    })
    result.push(returnAuthor)
  })
  return result.sort((less, more) => more.count - less.count).slice(0, 5)
};

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
