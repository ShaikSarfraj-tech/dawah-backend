import type { Application } from '../../../../declarations';
import { MembersService } from './members.class';
import { membersPath } from './members.shared';
export * from './members.class';
export * from './members.schema';
export declare const members: (app: Application) => void;
declare module '../../../../declarations' {
    interface ServiceTypes {
        [membersPath]: MembersService;
    }
}
