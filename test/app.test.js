

const app = require('../src/app')

describe('App', ()=>{
  it('should return 200 "hello world!"', ()=>{
    return supertest(app)
    .get('/')
    .expect(200, 'hello, world!')
  })
})