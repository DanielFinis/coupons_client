
export class Coupon {
  
    public constructor(
        public title?: string,
        public price?: number,
        public id?: number,
        public availableQuantity?: number,
        public category?: string,
        public startDate?: Date,
        public endDate?: Date,

    ){}

    
}