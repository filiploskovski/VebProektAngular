import { EntityModel } from "./Generic/EntityModel";

export class ExpenseTypeModel implements EntityModel {
  Id: number;
  Name: string;

  constructor(theId?: number) {
    this.Id = theId;
  }
}
