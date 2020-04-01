const {
  newOng,
  createOng,
  authOng,
  getOng,
  getOngId
} = require('../integration/ongData');

describe('ONG', () => {

  it.only('should be able to create a new ONG', async () => {
    const generateOng = await createOng();

    expect(generateOng.body).toHaveProperty('id')
    expect(generateOng.body.id).toHaveLength(8)
  });

  it('should be able to get ONG list', async () => {
    const generateOng = await createOng();
    const listOngs = await getOng();

    expect(getOng.body.length).toBeGreaterThaOrEqual(1)
  });

  it('should be able to create and log in an ONG', async () => {
    const generateOng = await createOng();
    const login = await authOng();

    expect(login.body).toHaveProperty('name');
    expect(login.body.name).toBe(newOng.name);
  });

  it('should be able to get ONG profile data', async () => {
    const generateOng = await createOng()
    const profile = await getOngId()

    expect(profile.body.length).toBeGreaterThaOrEqual(1)
  });

});