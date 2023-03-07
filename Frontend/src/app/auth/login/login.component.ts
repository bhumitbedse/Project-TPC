import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/core/service/form-validation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
      Validators.email,

    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    Role: new FormControl('',[
      Validators.required
    ])
  });
  public roles=environment.roles;
  constructor(
    private formBuilder: FormBuilder,
    private formValidationService: FormValidationService,
  ) { }

  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.loginForm);
  }

  getErrorMessage(fieldName: string): string {
    let errors = this.formValidationService.getErrorMessage(
      fieldName,
      this.loginForm
    );
    console.log(errors);
    return errors;
  }

  onLoginSubmit() {
    
  }
  ngOnInit(): void {

  }
}
