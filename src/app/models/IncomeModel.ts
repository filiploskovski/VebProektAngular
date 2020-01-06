import { EntityModel } from './Generic/EntityModel';

export class IncomeModel implements EntityModel{
    Id: Number;    
    Name: string;
    Amount: Number;
    AccountId: Number;
    AccountValue: string;
    IncomeTypeId: Number;
    IncomeTypeValue: string;
    IsMonthly: Boolean;
    Date: string;

    constructor(id?: number) {
        this.Id = id;
    }
}