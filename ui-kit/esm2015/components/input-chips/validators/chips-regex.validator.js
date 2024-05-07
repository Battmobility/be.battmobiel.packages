import { isNullOrUndefined } from '@sofico-framework/utils';
export function chipsRegexValidator(regex) {
    return (control) => {
        var _a;
        if (isNullOrUndefined(regex) ||
            isNullOrUndefined(control === null || control === void 0 ? void 0 : control.value) ||
            !Array.isArray(control.value)) {
            return null;
        }
        if ((_a = control.value) === null || _a === void 0 ? void 0 : _a.some(chip => !chip.match(regex))) {
            return { invalidChips: true };
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtcmVnZXgudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1jaGlwcy92YWxpZGF0b3JzL2NoaXBzLXJlZ2V4LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBYTtJQUMvQyxPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTs7UUFDM0QsSUFDRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFDeEIsaUJBQWlCLENBQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssQ0FBQztZQUNqQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUM3QjtZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxVQUFJLE9BQU8sQ0FBQyxLQUFLLDBDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRztZQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hpcHNSZWdleFZhbGlkYXRvcihyZWdleDogUmVnRXhwKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBpZiAoXG4gICAgICBpc051bGxPclVuZGVmaW5lZChyZWdleCkgfHxcbiAgICAgIGlzTnVsbE9yVW5kZWZpbmVkKGNvbnRyb2w/LnZhbHVlKSB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoY29udHJvbC52YWx1ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb250cm9sLnZhbHVlPy5zb21lKGNoaXAgPT4gIWNoaXAubWF0Y2gocmVnZXgpKSkge1xuICAgICAgcmV0dXJuIHsgaW52YWxpZENoaXBzOiB0cnVlIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG4iXX0=