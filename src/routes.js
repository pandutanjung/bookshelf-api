// Import modules
const {
  // eslint-disable-next-line max-len
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdhandler, deleteBookByIdHandler,
} = require('./handler');

const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBookHandler,
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBooksHandler,
},
{
  method: 'GET',
  path: '/books/{id}',
  handler: getBookByIdHandler,
},
{
  method: 'PUT',
  path: '/books/{id}',
  handler: editBookByIdhandler,
},
{
  method: 'DELETE',
  path: '/books/{id}',
  handler: deleteBookByIdHandler,
}];

// export module
module.exports = routes;
