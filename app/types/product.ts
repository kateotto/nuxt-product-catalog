export interface Product {
    name: string;
    manufacturer: string;
    price: number;
    description: string;
    category: string;
}

export enum ProductStatuses {
    Pending = 'pending',
    Success = "success"
}
