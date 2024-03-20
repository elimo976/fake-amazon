export interface Articolo {
    id: number;
    userId: number;
    title: string;
    text: string;
    published: boolean;
}

// DTO: Data Transfer Object - una convenzione per ricordare a me che ho generato questa classe per trasportare dei dati
export class ArticoloAddDTO {
    constructor(
    public title: string = "",
    public text: string = "",
    public userId: number = 0,
    public published: boolean = false
    ) {
        
}
}

