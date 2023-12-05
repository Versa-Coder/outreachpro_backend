import { EnvConfig, expressConfig } from './config';
import { db } from './config';
import { loggerUtil } from './utils/logger.util';

(async function () {
  try {
    await new EnvConfig().init();
    await db.init();

    await expressConfig.init();
  } catch (err) {
    loggerUtil.error(err);
  }
})();
