import { Injectable } from '@angular/core';
import { AthleteResultModel } from '../models/athlete-result.model';
import { AthleteInputsModel } from '../models/athlete-inputs.model';

@Injectable({
  providedIn: 'root'
})
export class CalculateResultService {

  constructor() { }

  calculateResults(athlete: AthleteInputsModel): AthleteResultModel{
    let result: AthleteResultModel={};
    let sumaPlici:number = athlete.plici[0]!+athlete.plici[1]!+athlete.plici[2]!+athlete.plici[3]!+athlete.plici[4]!;
    result.bodyfatP = sumaPlici! * 0.15 + 5.8 + athlete.bodysurface!;
    result.bodyfatKg = result.bodyfatP * athlete.weight! / 100;
    result.activeMass = athlete.weight! - result.bodyfatKg;
    result.optimalBodyfatKg = athlete.weight! * athlete.X!/100;
    result.optimalWeight = result.optimalBodyfatKg + result.activeMass;
    return result;
  }
}
