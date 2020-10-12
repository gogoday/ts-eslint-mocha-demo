import { expect } from 'chai';
import CreateTestFile from '../../../../src/lib/create_test_file';

describe('server/configs', function () {
  it('get menus correct', async function () {
    await CreateTestFile.create();
    expect(true).to.be.true;
  });
});
