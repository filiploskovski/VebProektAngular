import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IGenericComponent } from 'src/app/Interface/IGenericComponent';
import { ExpenseTypeModel } from 'src/app/models/ExpenseTypeModel';
import { DeleteModel } from 'src/app/models/DeleteModel';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NotifyService } from 'src/app/services/notify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.scss']
})
export class ExpenseTypeComponent implements OnInit,AfterViewInit,IGenericComponent<ExpenseTypeModel>   {
  
  
  // DataTable
  @ViewChild(DataTableDirective, {static: true})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Data
  public expenseTypeList: ExpenseTypeModel[];

  // Form
  expenseTypeForm = new FormGroup({
    Id: new FormControl(0),
    Name: new FormControl("", [Validators.required])
  });

  // Delete
  public deleteModel: DeleteModel = { Id: 0, Name: "" };
  
  constructor(private api: ApiService, private notify: NotifyService) {}

  ngOnInit() {
    this.pageLoad();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  edit(id: number): void {
    this.pageLoad(id);
  }
  
  save(): void {
    this.api
      .ExpenseTypeSave(this.expenseTypeForm.value as ExpenseTypeModel)
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
    this.deleteModel = this.expenseTypeList.find(x => x.Id == id); 
  }

  delete(id: number) {
    console.log(id);
    this.api.ExpenseTypeDelete(id).subscribe({
      next: () => {},
      complete: () => {
        this.pageLoad();
        this.notify.showDefaultSuccess();
      }
    });
  }

  Get(): void {
    this.api.ExpenseTypeGet().subscribe({
      next: (model: ExpenseTypeModel[]) => {
        this.expenseTypeList = model;
        this.rerender();
      }
    });
  }

  GetById(id: number): void {
    const entity = new ExpenseTypeModel(id);
    this.api.ExpenseTypeGetById(entity).subscribe({
      next: (model: ExpenseTypeModel) => {
        this.expenseTypeForm.patchValue({
          Id: model.Id,
          Name: model.Name
        });
      }
    });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

}
