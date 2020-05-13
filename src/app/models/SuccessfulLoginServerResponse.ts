export class SuccessfulLoginServerResponse {
    public constructor(
        public token?: string,
        public id?: number,
        public userType?: string
    ){}

    
}