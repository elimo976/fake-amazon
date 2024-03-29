export type Prodotto = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

export type Rating = {
    rate: number,
    count: number
}
export interface IProdotto {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
    // comprami(): void; nelle interfacce si possono inserire anche metodi
}
