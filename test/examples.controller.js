import chai from 'chai';
import request from 'supertest';
import Server from '../server';
const { expect } = chai;
 
describe('Examples', () => {
  it('should get all examples', () => request(Server)
    .get('/api/v1/examples')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('array')
        .of.length(2);
    }));

  it('should add a new example', () => request(Server)
    .post('/api/v1/examples')
    .send({ name: 'test' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('name')
        .equal('test');
    }));

  it('should get an example by id', () => request(Server)
    .get('/api/v1/examples/2')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('name')
        .equal('test');
    }));
});

describe('Users', () => {

  describe('Get all users', () => {
    it('it should get all user', () => request(Server)
      .get('/api/v1/user')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          r.body.forEach(res => {
            expect(res).to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
          })
      }))
  })

  describe('Post a User', () => {
    it('it should add a new user', () => request(Server)
      .post('/api/v1/user')
      .send({ name: 'test'})  
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
        .to.be.an.an('object')
        .to.have.property('username')
        .to.have.property('password')
        .equal('test');
      })
    )
  })
  
  describe('Get user by id', () => {
    it('it should get a user by id', () => request(Server)
      .get('/api/v1/user/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
      })
    )
  })

  describe('Users/userId', () => {
    it('it should get user by user id', () => request(Server)
      .get('/api/v1/user/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(r => {
        expect(r.body)
          .to.be.an.an('Object')
          .to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
      }))
      
    it('it should put user with username', () => request(Server)
      .put('/api/v1/user/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('Object')
          .to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
      })
    )

    it('it should delete user with username', () => request(Server)
      .delete('/api/v1/user/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
      })
    )
  })
})

describe('Auth', () => {
  describe('Login', () => {
    it('it shoud get info user login', () => request(Server)
      .get('/api/v1/auth')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
      }))
    
    it('it should post login', () => request(Server)
      .post('/api/v1/auth')
      .send({name: 'test'})
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .to.have.contain.keys('username', 'password', 'firstname', 'lastname', 'phone')
      })
    )
  })


describe('Logout', () => {
    it('it should get user logout', () => request(Server)
      .delete('/api/v1/auth')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('Object')
          .that.has.property('message').equal('Logout')
          .to.have.status(200)
      })
    )

  })
})

describe('Products', () => {
  it('should get all products', () => request(Server)
    .get('/api/v1/product')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('array')
        r.body.forEach(res => {
          expect(res).to.have.contain.key("name", "price", "photoUrls")
        });
   
    }));
  
  it('should get products by status and tags', () => request(Server)
    .get('/api/v1/product?status=available&tags=cake')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('array')
        r.body.forEach(res => {
          expect(res).to.have.contain.key("name", "price", "photoUrls")
          expect(res).to.have.property('tag').equal('cake')
          expect(res).to.have.property('status').equal('available')
        });
    }));
  it('should add a new product', () => request(Server)
    .post('/api/v1/product')
    .send({ name: 'test' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('message').equal('Pet successfull added!')
        .that.has.property('_id')
        .that.has.property('name')
        .that.has.property('price')
        .that.has.property('photoUrls')
        .that.has.property('status')
        .that.has.property('category')
        .equal('test');
    }));


  it('should get product by id', () => request(Server)
    .get('/api/v1/product/2')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('_id')
        .that.has.property('name')
        .that.has.property('price')
        .that.has.property('photoUrls')
        .that.has.property('status')
        .that.has.property('category')
        .equal('test');
    }))

  it('should update product by id', () => request(Server)
    .put('/api/v1/product/2')
    .send({ name: 'test' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('_id')
        .that.has.property('name')
        .that.has.property('price')
        .that.has.property('photoUrls')
        .that.has.property('status')
        .that.has.property('category')
        .equal('test');
    }));

  it('should delete product by id', () => request(Server)
    .delete('/api/v1/product/2')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('message').equal('Product successfully delete!')
        .equal('test');
    }))
  
})


describe('Images', () => {
  it('should create an order', () => request(Server)
    .post('/api/v1/image')
    .send({ name: 'test' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('file')
        .equal('test');
    }))
})


describe('Orders', () => {
  it('should get orders', () => request(Server)
    .get('/api/v1/order')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('array')
        r.body.forEach(res => {
          expect(res).to.have.contain.key("firstname", "lastname", "country","street","city","phone","email")
        });
    }));
  it('should create an order', () => request(Server)
    .post('/api/v1/order')
    .send({ name: 'test' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('_id')
        .that.has.property('firstname')
        .that.has.property('lastname')
        .that.has.property('country')
        .that.has.property('street')
        .that.has.property('city')
        .that.has.property('phone')
        .that.has.property('email')
        .that.has.property('listProduct')
        .that.has.property('shipDate')
        .that.has.property('status')
        .equal('test');
    }))


it('should get purchase order by id', () => request(Server)
    .get('/api/v1/order/1')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('_id')
        .that.has.property('firstname')
        .that.has.property('lastname')
        .that.has.property('country')
        .that.has.property('street')
        .that.has.property('city')
        .that.has.property('phone')
        .that.has.property('email')
        .that.has.property('listProduct')
        .that.has.property('shipDate')
        .that.has.property('status')
        .equal('test');

    }))

it('should delete purchase order by id', () => request(Server)
    .delete('/api/v1/order/1')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('message').equal('Purchase order successfully delete!')
        .equal('test');
    }))

});




