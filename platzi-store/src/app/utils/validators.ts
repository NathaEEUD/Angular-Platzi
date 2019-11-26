import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log('validator isPriceValid::::', value);
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }
}
