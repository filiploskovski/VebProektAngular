import { EntityModel } from "./Generic/EntityModel";

export class AccountTypeModel implements EntityModel {
  Id: number;
  Name: string;

  constructor(theId?: number) {
    this.Id = theId;
  }
}
