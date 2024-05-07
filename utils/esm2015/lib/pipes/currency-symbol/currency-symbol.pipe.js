import { getCurrencySymbol } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
export class CurrencySymbolPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(code, format = 'narrow') {
        return getCurrencySymbol(code, format, this.locale);
    }
}
CurrencySymbolPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sofCurrencySymbol'
            },] }
];
CurrencySymbolPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktc3ltYm9sLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvcGlwZXMvY3VycmVuY3ktc3ltYm9sL2N1cnJlbmN5LXN5bWJvbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLdkUsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUF5QyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFM0QsU0FBUyxDQUFDLElBQVksRUFBRSxTQUE0QixRQUFRO1FBQzFELE9BQU8saUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxtQkFBbUI7YUFDMUI7Ozt5Q0FFYyxNQUFNLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEN1cnJlbmN5U3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NvZkN1cnJlbmN5U3ltYm9sJ1xufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVN5bWJvbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByb3RlY3RlZCBsb2NhbGU6IHN0cmluZykge31cblxuICB0cmFuc2Zvcm0oY29kZTogc3RyaW5nLCBmb3JtYXQ6ICd3aWRlJyB8ICduYXJyb3cnID0gJ25hcnJvdycpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRDdXJyZW5jeVN5bWJvbChjb2RlLCBmb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgfVxufVxuIl19