import { isNullOrUndefined } from '../utils/is-null-or-undefined.util';
export function inRangeValidator(min, max) {
    return (control) => {
        const duration = control.value;
        if (isNullOrUndefined(duration)) {
            return null;
        }
        return duration >= min && duration <= max
            ? null
            : { inRange: { min, max } };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tcmFuZ2UudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91dGlscy9zcmMvbGliL3ZhbGlkYXRvcnMvaW4tcmFuZ2UudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXZFLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsR0FBVztJQUN2RCxPQUFPLENBQUMsT0FBd0IsRUFBb0IsRUFBRTtRQUNwRCxNQUFNLFFBQVEsR0FBVyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXZDLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sUUFBUSxJQUFJLEdBQUcsSUFBSSxRQUFRLElBQUksR0FBRztZQUN2QyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy9pcy1udWxsLW9yLXVuZGVmaW5lZC51dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluUmFuZ2VWYWxpZGF0b3IobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uOiBudW1iZXIgPSBjb250cm9sLnZhbHVlO1xuXG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGR1cmF0aW9uKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGR1cmF0aW9uID49IG1pbiAmJiBkdXJhdGlvbiA8PSBtYXhcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IGluUmFuZ2U6IHsgbWluLCBtYXggfSB9O1xuICB9O1xufVxuIl19