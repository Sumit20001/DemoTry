import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RestDataSource } from "./restdatasource";


@NgModule({
    providers:[RestDataSource],
    imports:[HttpClientModule]
})
export class ModelModule{

}