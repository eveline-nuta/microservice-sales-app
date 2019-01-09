import { NgModule } from '@angular/core';

import { CashdeskSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CashdeskSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CashdeskSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CashdeskSharedCommonModule {}
