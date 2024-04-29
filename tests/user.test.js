const supertest = require("supertest");
const express = require('express')
const routes = require('../src/routes/routes')

const baseURL = 'http://localhost:3000/'
const userRoute = '/api/users'


const app = express();
const router  = express.Router(); 

// Middleware to parse JSON requests
app.use(express.json());

require('../src/routes/routes')(app);



  describe('Users Routes', () => {

    test("GET /api/users", async () => {
      await supertest(app)
        .get(userRoute)
        .expect(200)
        .then((response) => {

        });
    });
    
    test("POST /api/users", async () => {
        await supertest(app)
          .post(userRoute)
          .expect(201)
          .then((response) => {
  
          });
      });

  });