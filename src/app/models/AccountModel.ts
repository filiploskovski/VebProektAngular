import { EntityModel } from './Generic/EntityModel';
import { KeyValue } from './Generic/KeyValue';
import { IncomeModel } from './IncomeModel';

export class AccountModel implements EntityModel{
    Id: Number;
    Name: string;
    Amount: Number;
    AccountTypeId: Number;
    IsDefault: Boolean;
    Expence: any[];
    Income: IncomeModel[];

    constructor(id?: Number){
        this.Id = id;
    }
}