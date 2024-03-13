import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AthleteInputsModel } from 'src/app/models/athlete-inputs.model';
import { AthleteResultModel } from 'src/app/models/athlete-result.model';
import { CalculateResultService } from 'src/app/services/calculate-result.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private calculateService: CalculateResultService) { }

  // formControl1 = new FormControl('', [Validators.required, Validators.pattern('^\d*\.?\d+$')]);
  // formControl2 = new FormControl('', [Validators.required, Validators.pattern('^\d*\.?\d+$')]);
  // formControl3 = new FormControl('', [Validators.required, Validators.pattern('^\d*\.?\d+$')]);
  // formControl4 = new FormControl('', [Validators.required, Validators.pattern('^\d*\.?\d+$')]);
  formControl = new FormControl('', [Validators.required]);
  formControl1 = new FormControl('', );
  formControl2 = new FormControl('', [Validators.required]);
  formControl3 = new FormControl('', [Validators.required]);
  formControl4 = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    // this.athlete={
    //   weight: 90,
    //   bodysurface: 2.141,
    //   X: 13.5,
    //   plici: [undefined, undefined, undefined, undefined, undefined],
    // }
    // this.athlete.plici[4]=6;
    // this.athlete.plici[3]=9;
    // this.athlete.plici[2]=8.5;
    // this.athlete.plici[1]=10.5;
    // this.athlete.plici[0]=12.5;
  }

  athlete: AthleteInputsModel = {
    plici: [undefined, undefined, undefined, undefined, undefined],
  }

  calculateResults(): AthleteResultModel{
    let result: AthleteResultModel={};
    result=this.calculateService.calculateResults(this.athlete);
    return result;
  }
  
  hasErrors(): boolean{
    console.log(this.athlete.plici);
    if (this.formControl.hasError('required')||
    this.formControl2.hasError('required')||
    this.formControl3.hasError('required')) {
      return true;
    }
    if (this.athlete.plici.some(plic => plic == undefined)) {
      return true;
    }
    if (this.athlete.plici.some(plic => plic == null)) {
      return true;
    }
    if (this.athlete.plici.some(plic => plic == 0)) {
      return true;
    }
    return false;
  }
  onReset(){
    this.athlete={
      weight: undefined,
      bodysurface: undefined,
      X: undefined,
      plici: [undefined, undefined, undefined, undefined, undefined],
    }
    this.formControl.reset();
    this.formControl1.reset();
    this.formControl2.reset();
    this.formControl3.reset();
  }
}
