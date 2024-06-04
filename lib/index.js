"use strict";
const { app } = require('./app.ts');
const { logger } = require('./logger.ts');
const port = app.get('port');
const host = app.get('host');
process.on('unhandledRejection', (reason) => logger.error('Unhandled Rejection %O', reason));
app.listen(port).then(() => {
    logger.info(`Feathers app listening on http://${host}:${port}`);
});
//# sourceMappingURL=index.js.map