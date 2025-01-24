
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'app-crickaterCreateComponent',
    templateUrl:'./cricketercreate.component.html',
    styleUrls:['./cricketercreate.component.scss']
})
export class CricketerCreateComponent implements OnInit {
    cricketerForm: FormGroup;
    successMessage: string | null=null;
    errorMessage: string | null=null;
    
    constructor(private fb:FormBuilder){
    }


    ngOnInit(): void {
        this.cricketerForm = this.fb.group({
            cricketerId:[null,Validators.required, Validators.minLength(1)],
            cricketerName:['',Validators.required, Validators.minLength(2)],
            location: ['',Validators.required],
            ownerName:['',Validators.required,Validators.minLength(2)],
            establishmentYear:[null,Validators.required]
          })
    }

}