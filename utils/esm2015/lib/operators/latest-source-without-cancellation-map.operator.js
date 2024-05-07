import { concat, defer, EMPTY, of } from 'rxjs';
import { concatMap, ignoreElements, skipWhile, tap } from 'rxjs/operators';
export const latestSourceWithoutCancellationMap = project => {
    let count = 0;
    return source => source.pipe(tap(() => count++), concatMap((e, i) => concat(defer(() => count === 1 ? project(e, i).pipe(skipWhile(() => count > 1)) : EMPTY), of(0).pipe(tap(() => count--), ignoreElements()))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LXNvdXJjZS13aXRob3V0LWNhbmNlbGxhdGlvbi1tYXAub3BlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvb3BlcmF0b3JzL2xhdGVzdC1zb3VyY2Utd2l0aG91dC1jYW5jZWxsYXRpb24tbWFwLm9wZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQzFELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FDZCxNQUFNLENBQUMsSUFBSSxDQUNULEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUNsQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDakIsTUFBTSxDQUNKLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FDVCxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckUsRUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNSLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUNsQixjQUFjLEVBQUUsQ0FDakIsQ0FDRixDQUNGLENBQ0YsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmNhdCwgZGVmZXIsIEVNUFRZLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBpZ25vcmVFbGVtZW50cywgc2tpcFdoaWxlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBsYXRlc3RTb3VyY2VXaXRob3V0Q2FuY2VsbGF0aW9uTWFwID0gcHJvamVjdCA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIHJldHVybiBzb3VyY2UgPT5cbiAgICBzb3VyY2UucGlwZShcbiAgICAgIHRhcCgoKSA9PiBjb3VudCsrKSxcbiAgICAgIGNvbmNhdE1hcCgoZSwgaSkgPT5cbiAgICAgICAgY29uY2F0KFxuICAgICAgICAgIGRlZmVyKCgpID0+XG4gICAgICAgICAgICBjb3VudCA9PT0gMSA/IHByb2plY3QoZSwgaSkucGlwZShza2lwV2hpbGUoKCkgPT4gY291bnQgPiAxKSkgOiBFTVBUWVxuICAgICAgICAgICksXG4gICAgICAgICAgb2YoMCkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiBjb3VudC0tKSxcbiAgICAgICAgICAgIGlnbm9yZUVsZW1lbnRzKClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xufTtcbiJdfQ==