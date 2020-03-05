import { EntityModel } from './Generic/EntityModel';

export class ExpenseModel implements EntityModel{
    Id: Number;    
    Name: string;
    Amount: Number;
    AccountId: Number;
    AccountValue: string;
    ExpenseTypeId: Number;
    ExpenseTypeValue: string;
    IsMonthly: Boolean;
    Date: string;

    constructor(id?: number) {
        this.Id = id;
    }
}