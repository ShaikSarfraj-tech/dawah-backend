"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersQueryResolver = exports.membersQueryValidator = exports.membersQuerySchema = exports.membersQueryProperties = exports.membersPatchResolver = exports.membersPatchValidator = exports.membersPatchSchema = exports.membersDataResolver = exports.membersDataValidator = exports.membersDataSchema = exports.membersExternalResolver = exports.membersResolver = exports.membersValidator = exports.membersSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../../../validators");
// Main data model schema
exports.membersSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
    lastMet: typebox_1.Type.String({ format: 'date' }),
}, { $id: 'Members', additionalProperties: false });
exports.membersValidator = (0, typebox_1.getValidator)(exports.membersSchema, validators_1.dataValidator);
exports.membersResolver = (0, schema_1.resolve)({});
exports.membersExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.membersDataSchema = typebox_1.Type.Pick(exports.membersSchema, ['name', 'lastMet'], {
    $id: 'MembersData'
});
exports.membersDataValidator = (0, typebox_1.getValidator)(exports.membersDataSchema, validators_1.dataValidator);
exports.membersDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.membersPatchSchema = typebox_1.Type.Partial(exports.membersSchema, {
    $id: 'MembersPatch'
});
exports.membersPatchValidator = (0, typebox_1.getValidator)(exports.membersPatchSchema, validators_1.dataValidator);
exports.membersPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.membersQueryProperties = typebox_1.Type.Pick(exports.membersSchema, ['_id', 'name', 'lastMet']);
exports.membersQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.membersQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.membersQueryValidator = (0, typebox_1.getValidator)(exports.membersQuerySchema, validators_1.queryValidator);
exports.membersQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=members.schema.js.map