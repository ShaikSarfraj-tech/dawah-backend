"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
const schema_1 = require("@feathersjs/schema");
const members_schema_1 = require("./members.schema");
const members_class_1 = require("./members.class");
const members_shared_1 = require("./members.shared");
__exportStar(require("./members.class"), exports);
__exportStar(require("./members.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const members = (app) => {
    // Register our service on the Feathers application
    app.use(members_shared_1.membersPath, new members_class_1.MembersService((0, members_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: members_shared_1.membersMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(members_shared_1.membersPath).hooks({
        around: {
            all: [
                // authenticate('jwt'),
                schema_1.hooks.resolveExternal(members_schema_1.membersExternalResolver),
                schema_1.hooks.resolveResult(members_schema_1.membersResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(members_schema_1.membersQueryValidator), schema_1.hooks.resolveQuery(members_schema_1.membersQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(members_schema_1.membersDataValidator), schema_1.hooks.resolveData(members_schema_1.membersDataResolver)],
            patch: [schema_1.hooks.validateData(members_schema_1.membersPatchValidator), schema_1.hooks.resolveData(members_schema_1.membersPatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.members = members;
//# sourceMappingURL=members.js.map