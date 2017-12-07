export class Debt {

    private _id: string;
    private _title: string;
    private _description: string;
    private _price: number;
    private _dateEntered: Date;
    private _dateSpent: Date;

    // TODO: implementatie hiervan bekijken. Voorlopig weglaten.
    // private _imageUrl: String;

    static fromJSON(json): Debt {
        const rec = new Debt(json.title, json.description, json.price, json.dateSpent, json.dateEntered);
        rec._id = json._id;
        return rec;
    }

    constructor(title: string, description: string, price: number, dateSpent: Date, dateEntered: Date = new Date()) {
            this._title = title,
            this._description = description,
            this._price = price,
            this._dateSpent = dateSpent,
            this._dateEntered = dateEntered;
    }

    get id(): string {
        return this._id;
    }

    get price(): number {
        return this._price;
    }


    get title(): string {
        return this._title;
    }

    get description(): string{
        return this._description;
    }

    get dateSpent(): Date{
        return this._dateSpent;
    }

    get dateEntered(): Date {
        return this._dateEntered;
    }


    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description,
            price: this._price,
            dateEntered: this._dateEntered,
            dateSpent: this._dateSpent
        };
    }


}
