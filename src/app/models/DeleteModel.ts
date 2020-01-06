import { EntityModel } from './Generic/EntityModel';

export class DeleteModel implements EntityModel {
    Id: Number;
    Name: string;

    constructor(id:number,name:string){
        this.Id = id;
        this.Name = name;
    }
}