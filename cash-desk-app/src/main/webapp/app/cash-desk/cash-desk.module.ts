import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CashDeskComponent, CASH_DESK_ROUTE } from './';
import { CashdeskSharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [CashdeskSharedModule, RouterModule.forChild([CASH_DESK_ROUTE])],
    declarations: [CashDeskComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CashDeskModule {}
