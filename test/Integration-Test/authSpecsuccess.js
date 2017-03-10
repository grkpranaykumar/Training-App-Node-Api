process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import User from '../../app/services/training/model/user';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

let should = chai.should();

chai.use(chaiHttp);

describe('Test User Login and Register', () => {

    /*
     * Test the /POST route for user register
     */
    describe('/POST Register User', () => {
        it('it should  POST a user and save in Database', (done) => {
            let user = {
                name: "123456",
                password: "123456",
                email: "123456@gmail.com",
                varify_password: "123456"
            }
            chai.request(server)
                .post('/auth/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });

    });

    /*
     * Test the /POST route for login
     */
    describe('/POST Register User', () => {
        it('it should  POST a user and save in Database', (done) => {
            let user = {
                password: "123456",
                email: "123456@gmail.com",
            }
            chai.request(server)
                .post('/auth')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
    /*
     * Test the /POST route for login
     */
    describe('Social Auth for User google', () => {
        it('Social Auth for User google ', (done) => {
            chai.request(server)
                .post('/auth/login/google')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });

    describe('Social Auth for User twitter', () => {
        it('Social Auth for User twitter', (done) => {
            chai.request(server)
                .post('/auth/login/twitter')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
});