import { EntityModel } from "./Generic/EntityModel";

export class AccountTypeModel implements EntityModel {
  Id: number;
  Name: string;

  constructor(id?: number) {
    this.Id = id;
  }
}
