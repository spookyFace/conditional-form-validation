import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable()
export class FormValidatorsService {
  requireTextAreaWhenNeeded(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>
      control.get('select').value === 'key3' && control.get('text').value === ''
        ? {'textAreaRequiredForKey3': 'Please fill out textarea.'}
        : null;
  }
}
