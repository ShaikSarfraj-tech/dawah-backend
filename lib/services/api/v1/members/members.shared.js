"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersClient = exports.membersMethods = exports.membersPath = void 0;
exports.membersPath = '/api/v1/members';
exports.membersMethods = ['find', 'get', 'create', 'patch', 'remove'];
const membersClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.membersPath, connection.service(exports.membersPath), {
        methods: exports.membersMethods
    });
};
exports.membersClient = membersClient;
//# sourceMappingURL=members.shared.js.map