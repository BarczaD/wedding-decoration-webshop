export interface Product {
    id: number;
    name: string;
    photo_url: string;
    comments: Array<Comment>;
}