import { EntityModel } from './Generic/EntityModel';
import { KeyValue } from './Generic/KeyValue';

export class AccountModel implements EntityModel{
    Id: Number;
    Name: string;
    Amount: Number;
    AccountTypeId: Number;
    IsDefault: Boolean;

    constructor(id?: Number){
        this.Id = id;
    }
}