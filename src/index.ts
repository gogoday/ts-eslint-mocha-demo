import CreateTestFile from './lib/create_test_file';
import { logger } from './lib/log';

async function run() {
  await CreateTestFile.create();
}

logger.info('this is a log');
