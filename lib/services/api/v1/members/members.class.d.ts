import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../../../declarations';
import type { Members, MembersData, MembersPatch, MembersQuery } from './members.schema';
export type { Members, MembersData, MembersPatch, MembersQuery };
export interface MembersParams extends MongoDBAdapterParams<MembersQuery> {
}
export declare class MembersService<ServiceParams extends Params = MembersParams> extends MongoDBService<Members, MembersData, MembersParams, MembersPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
