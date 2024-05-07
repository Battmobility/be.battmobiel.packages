import { __rest } from "tslib";
import { ReplaySubject } from 'rxjs';
import { rootInjector } from '../functions/root-injector';
import { WindowRefService } from '../services/window-ref.service';
export function GetRouterState() {
    return (target, key) => {
        const secretSub = `_${key}$Sub`;
        const secretObs = `_${key}$Obs`;
        const accessorSub = `${key}$Sub`;
        const accessorObs = `${key}$Obs`;
        Object.defineProperty(target, accessorSub, {
            get() {
                var _a;
                if (this[secretSub]) {
                    return this[secretSub];
                }
                this[secretSub] = new ReplaySubject(1);
                const nativeWindow = rootInjector.get(WindowRefService).nativeWindow;
                if (((_a = nativeWindow.history.state) === null || _a === void 0 ? void 0 : _a.data) !== undefined) {
                    const _b = nativeWindow.history.state, { data } = _b, rest = __rest(_b, ["data"]);
                    this[secretSub].next(data);
                    nativeWindow.history.replaceState(rest, null);
                }
                else {
                    this[secretSub].next(undefined);
                }
                return this[secretSub];
            }
        });
        Object.defineProperty(target, accessorObs, {
            get() {
                if (this[secretObs]) {
                    return this[secretObs];
                }
                this[secretObs] = this[accessorSub].asObservable();
                return this[secretObs];
            }
        });
        Object.defineProperty(target, key, {
            get() {
                return this[accessorObs];
            },
            set() {
                throw new Error('You cannot set this property in the Component if you use @GetRouterState');
            }
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXJvdXRlci1zdGF0ZS5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvZGVjb3JhdG9ycy9nZXQtcm91dGVyLXN0YXRlLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUErQixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE1BQU0sVUFBVSxjQUFjO0lBQzVCLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUU7UUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUVqQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDekMsR0FBRzs7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN4QjtnQkFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZDLE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBRXJFLElBQUksT0FBQSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssMENBQUUsSUFBSSxNQUFLLFNBQVMsRUFBRTtvQkFDbEQsTUFBTSxLQUFvQixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBOUMsRUFBRSxJQUFJLE9BQXdDLEVBQW5DLElBQUksY0FBZixRQUFpQixDQUE2QixDQUFDO29CQUVyRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUUzQixZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQy9DO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDekMsR0FBRztnQkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hCO2dCQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRW5ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRztnQkFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsR0FBRztnQkFDRCxNQUFNLElBQUksS0FBSyxDQUNiLDBFQUEwRSxDQUMzRSxDQUFDO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJvb3RJbmplY3RvciB9IGZyb20gJy4uL2Z1bmN0aW9ucy9yb290LWluamVjdG9yJztcbmltcG9ydCB7IFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy93aW5kb3ctcmVmLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0Um91dGVyU3RhdGUoKTogKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykgPT4gdm9pZCB7XG4gIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VjcmV0U3ViID0gYF8ke2tleX0kU3ViYDtcbiAgICBjb25zdCBzZWNyZXRPYnMgPSBgXyR7a2V5fSRPYnNgO1xuICAgIGNvbnN0IGFjY2Vzc29yU3ViID0gYCR7a2V5fSRTdWJgO1xuICAgIGNvbnN0IGFjY2Vzc29yT2JzID0gYCR7a2V5fSRPYnNgO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgYWNjZXNzb3JTdWIsIHtcbiAgICAgIGdldCgpOiBCZWhhdmlvclN1YmplY3Q8YW55PiB7XG4gICAgICAgIGlmICh0aGlzW3NlY3JldFN1Yl0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tzZWNyZXRTdWJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1tzZWNyZXRTdWJdID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cbiAgICAgICAgY29uc3QgbmF0aXZlV2luZG93ID0gcm9vdEluamVjdG9yLmdldChXaW5kb3dSZWZTZXJ2aWNlKS5uYXRpdmVXaW5kb3c7XG5cbiAgICAgICAgaWYgKG5hdGl2ZVdpbmRvdy5oaXN0b3J5LnN0YXRlPy5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIC4uLnJlc3QgfSA9IG5hdGl2ZVdpbmRvdy5oaXN0b3J5LnN0YXRlO1xuXG4gICAgICAgICAgdGhpc1tzZWNyZXRTdWJdLm5leHQoZGF0YSk7XG5cbiAgICAgICAgICBuYXRpdmVXaW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUocmVzdCwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1tzZWNyZXRTdWJdLm5leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzW3NlY3JldFN1Yl07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBhY2Nlc3Nvck9icywge1xuICAgICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGlmICh0aGlzW3NlY3JldE9ic10pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tzZWNyZXRPYnNdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1tzZWNyZXRPYnNdID0gdGhpc1thY2Nlc3NvclN1Yl0uYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbc2VjcmV0T2JzXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzW2FjY2Vzc29yT2JzXTtcbiAgICAgIH0sXG4gICAgICBzZXQoKTogRXJyb3Ige1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1lvdSBjYW5ub3Qgc2V0IHRoaXMgcHJvcGVydHkgaW4gdGhlIENvbXBvbmVudCBpZiB5b3UgdXNlIEBHZXRSb3V0ZXJTdGF0ZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==