export class Debt {

private _title: string;
private _description: string;
private _price: number;
private _dateEntered: Date;
private _dateSpent: Date;

// TODO: implementatie hiervan bekijken. Voorlopig weglaten.
// private _imageUrl: String;


constructor(title: string, description: string, price: number, dateSpent: Date, dateEntered: Date = new Date()) {
    this._title = title,
    this._description = description,
    this._price = price,
    this._dateSpent = dateSpent,
    this._dateEntered = dateEntered;
}




}
