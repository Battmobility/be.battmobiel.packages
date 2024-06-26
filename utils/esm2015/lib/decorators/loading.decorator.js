import { Observable } from 'rxjs';
import { rootInjector } from '../functions/root-injector';
import { HttpStatusService } from '../services/http-status.service';
export function Loading() {
    return (target, key) => {
        target[key] = Observable.create(observer => {
            const service = rootInjector.get(HttpStatusService);
            const sub = service.loading$.subscribe(v => {
                observer.next(v);
            });
            return () => sub.unsubscribe();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvZGVjb3JhdG9ycy9sb2FkaW5nLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVwRSxNQUFNLFVBQVUsT0FBTztJQUNyQixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQVcsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNwRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJvb3RJbmplY3RvciB9IGZyb20gJy4uL2Z1bmN0aW9ucy9yb290LWluamVjdG9yJztcbmltcG9ydCB7IEh0dHBTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaHR0cC1zdGF0dXMuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2FkaW5nKCk6ICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWQge1xuICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgIHRhcmdldFtrZXldID0gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHJvb3RJbmplY3Rvci5nZXQoSHR0cFN0YXR1c1NlcnZpY2UpO1xuICAgICAgY29uc3Qgc3ViID0gc2VydmljZS5sb2FkaW5nJC5zdWJzY3JpYmUodiA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQodik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoKSA9PiBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==