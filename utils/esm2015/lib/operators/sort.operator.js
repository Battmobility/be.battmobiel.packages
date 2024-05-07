import { map } from 'rxjs/operators';
import { sortList } from '../utils/sort-list.util';
export function sort(sortingOrderConfig) {
    return list => list.pipe(map(item => {
        return sortList(item, sortingOrderConfig);
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5vcGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9vcGVyYXRvcnMvc29ydC5vcGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE1BQU0sVUFBVSxJQUFJLENBQ2xCLGtCQUF5QztJQUV6QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQ1osSUFBSSxDQUFDLElBQUksQ0FDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVCxPQUFPLFFBQVEsQ0FBSSxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU29ydGluZ09yZGVyQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMvc29ydGluZy1vcmRlci1jb25maWcudHlwZSc7XG5pbXBvcnQgeyBzb3J0TGlzdCB9IGZyb20gJy4uL3V0aWxzL3NvcnQtbGlzdC51dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnQ8VD4oXG4gIHNvcnRpbmdPcmRlckNvbmZpZzogU29ydGluZ09yZGVyQ29uZmlnPFQ+XG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VFtdPiB7XG4gIHJldHVybiBsaXN0ID0+XG4gICAgbGlzdC5waXBlKFxuICAgICAgbWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gc29ydExpc3Q8VD4oaXRlbSwgc29ydGluZ09yZGVyQ29uZmlnKTtcbiAgICAgIH0pXG4gICAgKTtcbn1cbiJdfQ==