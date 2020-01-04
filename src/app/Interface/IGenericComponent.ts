import { Subject } from "rxjs";

export interface IGenericComponent<T> {
  dtOptions: DataTables.Settings;
  dtTrigger: Subject<any>;

  accountTypeList: T[];
  accountTypeModel: T;

  GetById(id: number): void;
  Get(): void;
  save(): void;
  edit(id?: number);
  pageLoad(id?: number);
  preDelete(id: number);
  delete(id: number);
}
