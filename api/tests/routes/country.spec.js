/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  summary: 'Almuerzo necesario',
  health_score: 100
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));

  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes')
      .expect(200)
    );
  });

  describe('GET /diets', () => {
    it('should get 16 results', () =>
      agent.get('/diets')
      // .expect(200)
      .then(function (res) {
        expect(res.body).length(16);
      })
    );
  });

});
