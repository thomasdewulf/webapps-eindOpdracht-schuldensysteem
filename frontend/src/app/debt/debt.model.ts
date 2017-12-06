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

    get price(): number {
        return this._price;
    }


    get title(): string {
        return this._title;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description,
            _price: this._price,
            _dateEntered: this._dateEntered,
            _dateSpent: this._dateSpent
        };
    }


}
