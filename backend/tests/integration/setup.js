const db = require('../../src/database/connections');

beforeEach(async () => {
  await db.migrate.down();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.migrate.down();
  await db.destroy();
})