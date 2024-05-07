import { Pipe } from '@angular/core';
import { isNumber } from '../../utils/is-number.util';
export class IsNumberPipe {
    transform(value) {
        return isNumber(value);
    }
}
IsNumberPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sofIsNumber'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvcGlwZXMvaXMtbnVtYmVyL2lzLW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUt0RCxNQUFNLE9BQU8sWUFBWTtJQUN2QixTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFORixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLW51bWJlci51dGlsJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc29mSXNOdW1iZXInXG59KVxuZXhwb3J0IGNsYXNzIElzTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc051bWJlcih2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==