import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  frmLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.frmLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  logar(){
    console.log('Enviei !!');
    let email = this.frmLogin.get('email')?.value;
    console.log(email);
    this.router.navigate(['/home']);
  }
}
