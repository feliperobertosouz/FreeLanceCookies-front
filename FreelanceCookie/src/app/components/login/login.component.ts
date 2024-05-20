import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  constructor (private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
    }
    onLogin() {
      this.http.post('localhost:3000/login', this.loginObj).subscribe((res: any)=>{
        if(res.result) {
          alert("Logado com sucesso");
          this.router.navigateByUrl('/home');
        } else{
          alert(res.message);
        }
      })  
  }
}

export class Login{
   Email: string;
   Password: string;
   constructor(){
    this.Email = '';
    this.Password = '';
   }
}
