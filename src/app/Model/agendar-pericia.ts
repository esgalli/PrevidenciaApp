export class Agendar {
    public _data: Date;
    public _hora: number;
    public _presencial: string;
    public _domiciliar: string;


constructor(data: Date, hora: number, presencial: string, domiciliar: string) {
    this._data = data;
    this._hora = hora;
    this._presencial = presencial;
    this._domiciliar = domiciliar;
}
get data(): Date {
    return this._data;
}
get hora(): number {
    return this._hora;
}
get presencial(): string {
    return this._presencial;
}
get domiciliar(): string {
    return this._domiciliar;
}
}  