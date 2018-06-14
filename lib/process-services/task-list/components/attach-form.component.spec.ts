/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AttachFormComponent } from './attach-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTestBed } from '@alfresco/adf-core';
import { ProcessTestingModule } from '../../testing/process.testing.module';

describe('AttachFormComponent', () => {
    let component: AttachFormComponent;
    let fixture: ComponentFixture<AttachFormComponent>;
    let element: HTMLElement;

    setupTestBed({
        imports: [
            ProcessTestingModule
        ]
    });

    beforeEach(async(() => {
        fixture = TestBed.createComponent(AttachFormComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    }));

    it('should emit cancel event if clicked on Cancel Button ', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const emitSpy = spyOn(component.cancelAttachForm, 'emit');
            const el = fixture.nativeElement.querySelector('#adf-no-form-cancel-button');
            el.click();
            expect(emitSpy).toHaveBeenCalled();
        });
    }));

    it('should emit complete event if clicked on Complete Button', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const emitSpy = spyOn(component.completeAttachForm, 'emit');
            expect(element.querySelector('#adf-no-form-attach-form-button')).toBeDefined();
            const el = fixture.nativeElement.querySelector('#adf-no-form-attach-form-button');
            el.click();
            expect(emitSpy).toHaveBeenCalled();
        });
    }));

    it('should show the formPreview of the selected form', async(() => {
        component.formKey = 12;
        fixture.detectChanges();
        const formContainer = fixture.debugElement.nativeElement.querySelector('.adf-form-container');
        fixture.whenStable().then(() => {
            expect(formContainer).toBeDefined();
            expect(formContainer).toBeNull();
        });
    }));
});
