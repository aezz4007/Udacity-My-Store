// A model for user data
export class User {
    id: number;
    userName: string;
    userAddress: string;
    cardNumber: string;

    constructor() {
        this.id = 0;
        this.userName = '';
        this.userAddress = '';
        this.cardNumber = '';
    }
}
