import { EntityModel } from './Generic/EntityModel';

export class IncomeTypeModel implements EntityModel{
    Id: Number;    
    Name: string;
    
    constructor(id?: number) {
        this.Id = id;
      }

}