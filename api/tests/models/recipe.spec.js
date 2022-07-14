const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if summary is null', (done) => {
        Recipe.create({ name: 'Milanesa a la napolitana' })
          .then(() => done(new Error('It requires a summary')))
          .catch(() => done());
      });
      it('should throw an error if health score is null', (done) => {
        Recipe.create({ name: 'Milanesa a la napolitana', summary: 'Almuerzo necesario'})
          .then(() => done(new Error('It requires health score')))
          .catch(() => done());
      });
      it('should work when its a valid name, summary ,health score and at least one diet type', () => {
        Recipe.create({ name: 'Milanesa a la napolitana', summary: 'Almuerzo necesario', health_score: 100 });
      });
    });
  });
});
