/* eslint-disable max-len */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {ButtonToggleComponent} from './components/button-toggle/button-toggle.component';
import {InputsComponent} from './components/inputs/inputs.component';
import {SelectComponent} from './components/select/select.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {FabbuttonComponent} from './components/fabbutton/fabbutton.component';


const routes: Routes = [
    {
        path: 'buttons',
        component: ButtonsComponent,
    },
    {
        path: 'buttonsToggle',
        component: ButtonToggleComponent,
    },
    {
        path: 'inputs',
        component: InputsComponent,
    },
    {
        path: 'select',
        component: SelectComponent,
    },
    {
        path: 'tooltip',
        component: TooltipComponent,
    },
    {
        path: 'fabbutton',
        component: FabbuttonComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [ButtonsComponent, ButtonToggleComponent, InputsComponent, SelectComponent, TooltipComponent, FabbuttonComponent];
