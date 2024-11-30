export interface IProduct{
    id:string,
    title:string,
    price:number,
    description:string,
}

export type ProductWithoutId = Omit<IProduct, "id">