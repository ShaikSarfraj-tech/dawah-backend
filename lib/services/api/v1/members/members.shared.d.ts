import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../../../client';
import type { Members, MembersData, MembersPatch, MembersQuery, MembersService } from './members.class';
export type { Members, MembersData, MembersPatch, MembersQuery };
export type MembersClientService = Pick<MembersService<Params<MembersQuery>>, (typeof membersMethods)[number]>;
export declare const membersPath = "/api/v1/members";
export declare const membersMethods: Array<keyof MembersService>;
export declare const membersClient: (client: ClientApplication) => void;
declare module '../../../../client' {
    interface ServiceTypes {
        [membersPath]: MembersClientService;
    }
}
