import { SafeUrl } from "@angular/platform-browser";

export class Product {
    id: number;
    name: string;
    price: number;
    url: SafeUrl;
    description: string;
    addedItem?: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.price  = 0;
        this.url = 'https://www.example.com';
        this.description = '';
    }
}