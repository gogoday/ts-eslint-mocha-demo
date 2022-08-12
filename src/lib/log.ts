import log4js from 'log4js';
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'dateFile', filename: 'app.log', pattern: 'yyyy-MM-dd-hh', compress: true },
  },
  categories: { default: { appenders: ['out', 'app'], level: 'info' } },
});

export const logger = log4js.getLogger();
logger.level = 'info';
