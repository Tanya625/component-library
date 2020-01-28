/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-invalid-this */
/* eslint-disable comma-dangle */
import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    // eslint-disable-next-line max-len
    public languageMap = {'en': 'English', 'es': 'Spanish'};
    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver,
        public translate:TranslateService) { }
}
