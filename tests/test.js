const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('Server is up', (t) => {
  let num = 2;
  t.equal(num, 2, 'Should return 2 - meaning server started');
  t.end(); // Remember to call t.end() after every test call, to ensure tests run in order. You can also investigate t.plan() in the docs
});

test('Home route returns a status code of 200', { timeout:100 }, (t) => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);

      t.equal(res.statusCode, 200, 'Should return 200'); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
      t.end();

    });
});

test('404 not found route returns a status code of 404', { timeout:100 }, (t) => {
    supertest(router)
        .get("/sd")
        .expect(404)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 404, 'Should return 404'); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
            t.end();

        });
});

test('css file route returns a status code of 200', { timeout:100 }, (t) => {
    supertest(router)
        .get("/public/styles/styles.css")
        .expect(200)
        .expect('Content-Type', /css/)
        .end((err, res) => {
            t.error(err);

            t.equal(res.statusCode, 200, 'Should return 200'); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
            t.end();

        });
});

test('API request', { timeout:400 }, (t) => {
    supertest(router)
        .get("/search?s=batman")
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();

        });
});

test('500 error', { timeout:400 }, (t) => {
    supertest(router)
        .get("/selectedss")
        .expect(500)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 500, 'Should return 500');
            t.end();

        });
});

test('handle item', { timeout:500 }, (t) => {
    supertest(router)
        .get("/search?i=batman")
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();

        });
});

test('responsiveness', { timeout:500 }, (t) => {
    supertest(router)
        .get("/public/styles/responsiveness.css")
        .expect(200)
        .expect('Content-Type', /css/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();

        });
});

test('index.html gives 500 error', { timeout:500 }, (t) => {
    supertest(router)
        .get("/public/layouts/index.html")
        .expect(500)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 500, 'Should return 500');
            t.end();

        });
});

test('index.html gives 500 error', { timeout:500 }, (t) => {
    supertest(router)
        .get("/selected")
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();

        });
});
