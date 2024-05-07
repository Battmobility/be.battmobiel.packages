import { Injectable } from '@angular/core';
import { isString } from 'lodash';
import { isNullOrUndefined } from '../utils/is-null-or-undefined.util';
import * as i0 from "@angular/core";
export class DateMapper {
    // The default behavior of the Date constructor with a string of the
    // format YYYY-MM-DD is to interpret this as a UTC date. To keep the same
    // behavior as before with the dateStruct we want this kind of format to be
    // interpreted as a local date. For that we need to use the
    // Date(yearNumber, monthNumber, dateNumber) constructor.
    stringToDate(date) {
        if (date && isString(date) && date.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}')) {
            const [year, month, day] = date.split('-');
            const numberYear = parseInt(year, 10);
            const numberMonth = parseInt(month, 10);
            const numberDay = parseInt(day, 10);
            return new Date(numberYear, numberMonth - 1, numberDay);
        }
        return null;
    }
    // When you have a full string the default Date constructor will see
    // this as a local dateTime. This can also be used with localized
    // dateTime strings.
    fullStringToDate(date) {
        if (date &&
            isString(date) &&
            date.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}')) {
            return new Date(date);
        }
        return null;
    }
    // This will transform the local date to a string in the format YYYY-MM-DD
    dateToString(date) {
        if (!isNullOrUndefined(date)) {
            return `${date.getFullYear()}-${this.getFullNumber(date.getMonth() + 1)}-${this.getFullNumber(date.getDate())}`;
        }
        return null;
    }
    // This will return the local datetime to a string in the format HH:MM:SS
    dateToTimeString(date) {
        if (!isNullOrUndefined(date)) {
            return date.toTimeString().split(' ')[0];
        }
        return null;
    }
    // This transforms single character numbers to double character numbers
    // Used for getting correct formats
    getFullNumber(number) {
        if (!isNullOrUndefined(number)) {
            return ('0' + number).slice(-2);
        }
    }
}
DateMapper.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateMapper_Factory() { return new DateMapper(); }, token: DateMapper, providedIn: "root" });
DateMapper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvbWFwcGVycy9kYXRlLm1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBR3ZFLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLG9FQUFvRTtJQUNwRSx5RUFBeUU7SUFDekUsMkVBQTJFO0lBQzNFLDJEQUEyRDtJQUMzRCx5REFBeUQ7SUFDekQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsRUFBRTtZQUN2RSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXBDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsaUVBQWlFO0lBQ2pFLG9CQUFvQjtJQUNwQixnQkFBZ0IsQ0FBQyxJQUFZO1FBQzNCLElBQ0UsSUFBSTtZQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLEVBQ3BFO1lBQ0EsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxZQUFZLENBQUMsSUFBVTtRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUNoRCxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSxnQkFBZ0IsQ0FBQyxJQUFVO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsbUNBQW1DO0lBQzNCLGFBQWEsQ0FBQyxNQUFjO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztZQXpERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy9pcy1udWxsLW9yLXVuZGVmaW5lZC51dGlsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGVyIHtcbiAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgdGhlIERhdGUgY29uc3RydWN0b3Igd2l0aCBhIHN0cmluZyBvZiB0aGVcbiAgLy8gZm9ybWF0IFlZWVktTU0tREQgaXMgdG8gaW50ZXJwcmV0IHRoaXMgYXMgYSBVVEMgZGF0ZS4gVG8ga2VlcCB0aGUgc2FtZVxuICAvLyBiZWhhdmlvciBhcyBiZWZvcmUgd2l0aCB0aGUgZGF0ZVN0cnVjdCB3ZSB3YW50IHRoaXMga2luZCBvZiBmb3JtYXQgdG8gYmVcbiAgLy8gaW50ZXJwcmV0ZWQgYXMgYSBsb2NhbCBkYXRlLiBGb3IgdGhhdCB3ZSBuZWVkIHRvIHVzZSB0aGVcbiAgLy8gRGF0ZSh5ZWFyTnVtYmVyLCBtb250aE51bWJlciwgZGF0ZU51bWJlcikgY29uc3RydWN0b3IuXG4gIHN0cmluZ1RvRGF0ZShkYXRlOiBzdHJpbmcpOiBEYXRlIHtcbiAgICBpZiAoZGF0ZSAmJiBpc1N0cmluZyhkYXRlKSAmJiBkYXRlLm1hdGNoKCdeWzAtOV17NH0tWzAtOV17Mn0tWzAtOV17Mn0nKSkge1xuICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgY29uc3QgbnVtYmVyWWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgIGNvbnN0IG51bWJlck1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgIGNvbnN0IG51bWJlckRheSA9IHBhcnNlSW50KGRheSwgMTApO1xuXG4gICAgICByZXR1cm4gbmV3IERhdGUobnVtYmVyWWVhciwgbnVtYmVyTW9udGggLSAxLCBudW1iZXJEYXkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFdoZW4geW91IGhhdmUgYSBmdWxsIHN0cmluZyB0aGUgZGVmYXVsdCBEYXRlIGNvbnN0cnVjdG9yIHdpbGwgc2VlXG4gIC8vIHRoaXMgYXMgYSBsb2NhbCBkYXRlVGltZS4gVGhpcyBjYW4gYWxzbyBiZSB1c2VkIHdpdGggbG9jYWxpemVkXG4gIC8vIGRhdGVUaW1lIHN0cmluZ3MuXG4gIGZ1bGxTdHJpbmdUb0RhdGUoZGF0ZTogc3RyaW5nKTogRGF0ZSB7XG4gICAgaWYgKFxuICAgICAgZGF0ZSAmJlxuICAgICAgaXNTdHJpbmcoZGF0ZSkgJiZcbiAgICAgIGRhdGUubWF0Y2goJ15bMC05XXs0fS1bMC05XXsyfS1bMC05XXsyfVRbMC05XXsyfTpbMC05XXsyfTpbMC05XXsyfScpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHRyYW5zZm9ybSB0aGUgbG9jYWwgZGF0ZSB0byBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IFlZWVktTU0tRERcbiAgZGF0ZVRvU3RyaW5nKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoZGF0ZSkpIHtcbiAgICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7dGhpcy5nZXRGdWxsTnVtYmVyKFxuICAgICAgICBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgICApfS0ke3RoaXMuZ2V0RnVsbE51bWJlcihkYXRlLmdldERhdGUoKSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBsb2NhbCBkYXRldGltZSB0byBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IEhIOk1NOlNTXG4gIGRhdGVUb1RpbWVTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChkYXRlKSkge1xuICAgICAgcmV0dXJuIGRhdGUudG9UaW1lU3RyaW5nKCkuc3BsaXQoJyAnKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBUaGlzIHRyYW5zZm9ybXMgc2luZ2xlIGNoYXJhY3RlciBudW1iZXJzIHRvIGRvdWJsZSBjaGFyYWN0ZXIgbnVtYmVyc1xuICAvLyBVc2VkIGZvciBnZXR0aW5nIGNvcnJlY3QgZm9ybWF0c1xuICBwcml2YXRlIGdldEZ1bGxOdW1iZXIobnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobnVtYmVyKSkge1xuICAgICAgcmV0dXJuICgnMCcgKyBudW1iZXIpLnNsaWNlKC0yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==