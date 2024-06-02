import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      senha: ['',Validators.required]
    })
  }

  loginObj = {
    "email": "user@example.com",
    "senha": "password"
  }

  onLogin(event: Event){
    event.preventDefault();
    console.log('Formulário enviado')
    console.log(this.loginForm.value);
    this.http.post<any>('http://localhost:8080/api/auth/login', this.loginForm.value).toPromise().then(
      res => {
        console.log('Resposta do servidor', res);
        if(res.message === 'Logado'){
          console.log('Usuário logado');
          this.router.navigate(['/inicio']);
        }else{
          console.log('Usuário não logado');
        }
      }
    );
    }
  }

