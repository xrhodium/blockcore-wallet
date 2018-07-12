import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    @HostBinding('class.login') hostClass = 'login';

    constructor(private authService: AuthenticationService, private router: Router) {

    }

    login() {
        this.authService.authenticated = true;
        this.router.navigateByUrl('/dashboard');
    }
}
