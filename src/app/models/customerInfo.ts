import { User } from './user';

export class CustomerInfo{

    public constructor(
        public id?: number,
        public fullName?: string,
        public amountOfKids?: number,
        public isMarried?: string,
        public dateOfBirth?: Date,
        public user?: User


    ){}




}