

const app = require('../src/app')

describe('App', ()=>{
  console.log('eer')
  it('should return 200 "hello world!"', ()=>{
    return supertest(app)
    .get('/')
    .expect(200, 'hello, world!')
    
  })
})