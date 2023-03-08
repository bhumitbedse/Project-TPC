import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  fieldHasError(fieldName: string, targetForm: any): boolean {
    const formField = targetForm?.controls[fieldName];
    return (formField?.invalid && formField?.touched) ? true : false;
  }


  getErrorMessage(fieldName: string, targetForm: any): string {
    const formField = targetForm?.get(fieldName);
    const fieldErrors = targetForm?.controls[fieldName].errors;
    return formField?.hasError('required')
      ? fieldName + ' is Required'
      : formField?.hasError('email')
      ? 'Invalid Email Address'
      : formField?.hasError('minlength')
      ? `Password must contain at least'
      ${this.getLengthError(fieldErrors?.['minlength'])} characters`
      : formField?.hasError('maxlength')
      ? `Password must contain at most
      ${this.getLengthError(fieldErrors?.['maxlength'])} characters`
      : formField?.hasError('pattern')
      ? 'Password must contain one uppercase, lowercase, number and special character'
      : 'Unknown error';
  }

  private getLengthError(fieldError: any): string {
    return `(${fieldError?.actualLength} / ${fieldError?.requiredLength})`;
  }
}
