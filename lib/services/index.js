"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const members_1 = require("./api/v1/members/members");
const services = (app) => {
    app.configure(members_1.members);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map