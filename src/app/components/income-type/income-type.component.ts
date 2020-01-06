import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IncomeTypeModel } from "src/app/models/IncomeTypeModel";
import { Subject } from "rxjs";
import { DataTableDirective } from "angular-datatables";
import { ApiService } from "src/app/services/api.service";
import { NotifyService } from "src/app/services/notify.service";
import { IGenericComponent } from "src/app/Interface/IGenericComponent";

@Component({
  selector: "app-income-type",
  templateUrl: "./income-type.component.html",
  styleUrls: ["./income-type.component.scss"]
})
export class IncomeTypeComponent
  implements OnInit,OnDestroy, IGenericComponent<IncomeTypeModel> {
  // DataTable
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Data
  public incomeTypeList: IncomeTypeModel[];

  // Form
  incomeTypeForm = new FormGroup({
    Id: new FormControl(0),
    Name: new FormControl("", [Validators.required])
  });

  // Delete
  public incomeTypeModel: IncomeTypeModel = { Id: 0, Name: "" };

  constructor(private api: ApiService, private notify: NotifyService) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.pageLoad();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  edit(id: number): void {
    this.pageLoad(id);
  }
  


  save(): void {
    this.api
      .IncomeTypeSave(this.incomeTypeForm.value as IncomeTypeModel)
      .subscribe({
        next: () => {},
        complete: () => {
          this.pageLoad();
          this.notify.showDefaultSuccess();
        }
      });
  }

  pageLoad(id?: number): void {
    this.Get();
    if(id != null) { this.GetById(id) }
  }

  preDelete(id: number) {
    console.log(id);
    this.incomeTypeModel = this.incomeTypeList.find(x => x.Id == id); 
  }

  delete(id: number) {
    console.log(id);
  }

  Get(): void {
    this.api.IncomeTypeGet().subscribe({
      next: (model: IncomeTypeModel[]) => {
        this.incomeTypeList = model;
        this.dtTrigger.next();
      }
    });
  }

  GetById(id: number): void {
    const entity = new IncomeTypeModel(id);
    this.api.IncomeTypeGetById(entity).subscribe({
      next: (model: IncomeTypeModel) => {
        this.incomeTypeForm.patchValue({
          Id: model.Id,
          Name: model.Name
        });
      }
    });
  }
}
