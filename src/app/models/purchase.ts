import { Coupon } from './coupon';
import { Timestamp } from 'rxjs';

export class Purchase{

    public constructor (
        public coupon?: Coupon,
        public amountOfItems?: number,
        public timeStamp?: Date
        
    ){}

}