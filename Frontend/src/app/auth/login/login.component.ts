import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Roles } from 'src/app/contants/Roles';
import { FormValidationService } from 'src/app/service/form-validation.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public roles = Roles.roles;
  constructor(
    private formValidationService: FormValidationService,
    private authService :AuthService,
    private storageService:StorageService,
    private router:Router
  ) { }

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
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.authService.signin(this.loginForm.value)
      .subscribe(responseData=>{
        this.storageService.saveUser(responseData);
        this.router.navigate(['student']);
      })
    }
  }
  ngOnInit(): void {

  }
}
