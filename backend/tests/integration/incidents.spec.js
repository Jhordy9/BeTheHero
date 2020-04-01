const { createOng } = require('../integration/ongData');
const {
  updateIncident,
  newIncident,
  createIncident,
  listIncident,
  deleteIncident
} = require('../integration/incidentData');

describe('Incident', () => {
  it('should be able to create a new incident', async () => {
    const generateOng = await createOng();
    const generateIncident = await createIncident(generateOng.body.id);

    expect(generateIncident.body).toHaveProperty('id')
  });

  it('should be able to update an incident', async () => {
    const generateOng = await createOng();
    const generateIncident = await createIncident(generateOng.body.id);
    const remadeIncident = await updateIncident(generateOng.body.id);

    expect(remadeIncident.status).toBe(204)
  });

  it('should be able to delete an incident', async () => {
    const generateOng = await createOng();
    const generateIncident = await createIncident(generateOng.body.id);
    const cancelIncident = await deleteIncident(generateOng.body.id);

    expect(cancelIncident.status).toBe(204)
  });

  it('should be able to get all incidents', async () => {
    const generateOng = await createOng();
    const generateIncident1 = await createIncident(generateOng.body.id);
    const generateIncident2 = await createIncident(generateOng.body.id);

    const dataIncident = await listIncident();

    expect(dataIncident.body).toHaveLength(2)

  });
});