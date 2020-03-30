const should = require('should');
const sinon = require('sinon');

const booksController = require('../controller/booksController');

describe('Book Controller Tests: ', () => {
  describe('post', () => {
    it('should not return an empty title on post', () => {
      const Book = function (book) { this.save = () => { }; };
      const req = {
        body: {
          author: 'Mark'
        }
      };
      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };
      const controller = booksController(Book);
      controller.post(req, res);
      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});