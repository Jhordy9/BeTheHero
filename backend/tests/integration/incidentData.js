const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/database/connections');

const newIncident = {
  title: 'Cão atropelado',
  description: 'Ajuda de custo para cirurgia de cão atropelado',
  value: 150
}

const updateIncidentData = {
  ...newIncident,
  title: 'Cão com a pata quebrada',
}

exports.newIncident = newIncident;

exports.createIncident = async function (id) {
  return await request(app)
    .post('/incidents')
    .set('Authorization', id)
    .send(newIncident)
}

exports.updateIncident = async function (id) {
  return await request(app)
    .put('/incidents/1')
    .set('Authorization', id)
    .send(updateIncidentData)
}

exports.deleteIncident = async function (id) {
  return await request(app)
    .delete('/incidents/1')
    .set('Authorization', id)
}

exports.listIncident = async function () {
  return await request(app)
    .get('/incidents')
    .query('page=1')
}