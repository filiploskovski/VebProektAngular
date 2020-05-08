import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth : AuthService,private api: ApiService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.auth.getToken();
        console.log(authToken);
        console.log(req);

        if(req.url == this.api.register || req.url == this.api.login){
            return next.handle(req);
        }else{
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + authToken
                }
            });
            return next.handle(req);
        }
    }
}
