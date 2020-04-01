const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/database/connections');

const newOng = {
  name: "CCXP",
  email: "contato@teste.com.br",
  whatsapp: "47000000000",
  city: "Gaspar",
  uf: "SC"
}

exports.newOng = newOng;

exports.createOng = async function () {
  return await request(app)
    .post('/ongs')
    .send(newOng)
}

exports.authOng = async function (id) {
  return await request(app)
    .post('/sessions')
    .send({ id })
}

exports.getOng = async function () {
  return await request(app)
    .get('/ongs')
}

exports.getOngId = async function (id) {
  return await request(app)
    .get('/ongs')
    .set('Authorization', id)
}