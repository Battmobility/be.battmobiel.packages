import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { validatorAddress, validatorPhone } from '../utils/validators.util';
export class FormGroupService {
    constructor(fb) {
        this.fb = fb;
    }
    createPhoneGroup(defaultCountry = null) {
        return this.fb.group({
            country: [defaultCountry],
            zonalPhoneNumber: [''],
            localPhoneNumber: ['']
        }, {
            validator: [validatorPhone()]
        });
    }
    createAddressGroup(defaultCountry = null) {
        return this.fb.group({
            country: [defaultCountry],
            postalCodeAndCity: [null],
            addressLineOne: [''],
            addressLineTwo: ['']
        }, {
            validator: [validatorAddress()]
        });
    }
}
FormGroupService.decorators = [
    { type: Injectable }
];
FormGroupService.ctorParameters = () => [
    { type: FormBuilder }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91dGlscy9zcmMvbGliL3NlcnZpY2VzL2Zvcm0tZ3JvdXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUUsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtJQUFHLENBQUM7SUFFdkMsZ0JBQWdCLENBQUMsaUJBQXdDLElBQUk7UUFDM0QsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDbEI7WUFDRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDdkIsRUFDRDtZQUNFLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzlCLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxpQkFBd0MsSUFBSTtRQUM3RCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUNsQjtZQUNFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6QixjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEIsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3JCLEVBQ0Q7WUFDRSxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ2hDLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTdCRixVQUFVOzs7WUFIRixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHZhbGlkYXRvckFkZHJlc3MsIHZhbGlkYXRvclBob25lIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9ycy51dGlsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBjcmVhdGVQaG9uZUdyb3VwKGRlZmF1bHRDb3VudHJ5OiB7IGNvdW50cnlJZDogc3RyaW5nIH0gPSBudWxsKTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mYi5ncm91cChcbiAgICAgIHtcbiAgICAgICAgY291bnRyeTogW2RlZmF1bHRDb3VudHJ5XSxcbiAgICAgICAgem9uYWxQaG9uZU51bWJlcjogWycnXSxcbiAgICAgICAgbG9jYWxQaG9uZU51bWJlcjogWycnXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWRhdG9yOiBbdmFsaWRhdG9yUGhvbmUoKV1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY3JlYXRlQWRkcmVzc0dyb3VwKGRlZmF1bHRDb3VudHJ5OiB7IGNvdW50cnlJZDogc3RyaW5nIH0gPSBudWxsKTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mYi5ncm91cChcbiAgICAgIHtcbiAgICAgICAgY291bnRyeTogW2RlZmF1bHRDb3VudHJ5XSxcbiAgICAgICAgcG9zdGFsQ29kZUFuZENpdHk6IFtudWxsXSxcbiAgICAgICAgYWRkcmVzc0xpbmVPbmU6IFsnJ10sXG4gICAgICAgIGFkZHJlc3NMaW5lVHdvOiBbJyddXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0b3I6IFt2YWxpZGF0b3JBZGRyZXNzKCldXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19