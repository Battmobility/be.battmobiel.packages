import { __decorate } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ObjectService } from '../services/object.service';
import { isNullOrUndefined } from '../utils/is-null-or-undefined.util';
import { PAGE_TITLE_TOKEN } from './page-title.token';
let singletonLock = false;
let PageTitleService = class PageTitleService {
    constructor(title, translateService, objectService, pageTitleConfig) {
        this.title = title;
        this.translateService = translateService;
        this.objectService = objectService;
        this.pageTitleConfig = pageTitleConfig;
        this.defaultPageTitleConfig = {
            separator: '-',
            reverseOrder: false
        };
        this.config = this.objectService.mergeDeep(this.defaultPageTitleConfig, this.pageTitleConfig || {});
        this.labelsAndParams = new BehaviorSubject(null);
        if (singletonLock) {
            throw Error('You can only have one PageTitleService.');
        }
        singletonLock = true;
        // We need to update the title when/if the language changes after setting a title.
        this.labelsAndParams
            .pipe(filter(x => !!x), switchMap(({ tc, labels, params }) => this.translateService
            .stream([tc + '.APP_NAME', ...labels.map(l => tc + '.' + l)], params)
            .pipe(map(translations => (this.config.reverseOrder
            ? translations[tc + '.APP_NAME']
            : '') +
            this.getTextFromLabels(labels, translations, tc) +
            (!this.config.reverseOrder
                ? translations[tc + '.APP_NAME']
                : '')))), takeUntilDestroy(this))
            .subscribe(t => this.title.setTitle(t));
    }
    /**
     * Set the title on the document. (<title>...</title>)
     * Combination of provided label(s) and tc + '.APP_NAME'
     * If no label(s) are provided, the label TITLE will be used
     * @param tc Translation context
     * @param label label or labels
     * @param params params for translation
     */
    setTitle(tc, label, params) {
        let labels;
        try {
            // We assume multiple labels, so if a string is given we normalize it to an array of strings
            labels = isNullOrUndefined(label)
                ? ['TITLE']
                : this.stringArrayNormalize(label);
        }
        catch (_a) {
            throw Error('PageTitleService - Invalid label, could not translate.');
        }
        this.labelsAndParams.next({ tc, labels, params });
    }
    ngOnDestroy() {
        singletonLock = false;
    }
    getTextFromLabels(labels, translations, tc) {
        const result = labels.map((l, i) => (this.config.reverseOrder ? ` ${this.config.separator} ` : '') +
            translations[tc + '.' + l] +
            (!this.config.reverseOrder ? ` ${this.config.separator} ` : ''));
        if (this.config.reverseOrder) {
            return result.reverse().join('');
        }
        else {
            return result.join('');
        }
    }
    stringArrayNormalize(o) {
        if (typeof o === 'string') {
            return [o];
        }
        else if (Array.isArray(o) && o.every(x => typeof x === 'string')) {
            return o;
        }
        else {
            throw Error('Invalid object - only string or array of string allowed');
        }
    }
};
PageTitleService.decorators = [
    { type: Injectable }
];
PageTitleService.ctorParameters = () => [
    { type: Title },
    { type: TranslateService },
    { type: ObjectService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_TITLE_TOKEN,] }] }
];
PageTitleService = __decorate([
    UntilDestroy()
], PageTitleService);
export { PageTitleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91dGlscy9zcmMvbGliL3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFJYixnQkFBZ0IsU0FBaEIsZ0JBQWdCO0lBZTNCLFlBQ1UsS0FBWSxFQUNaLGdCQUFrQyxFQUNsQyxhQUE0QixFQUc1QixlQUFnQztRQUxoQyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUc1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFwQmxDLDJCQUFzQixHQUFvQjtZQUNoRCxTQUFTLEVBQUUsR0FBRztZQUNkLFlBQVks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QUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDbEUsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sb0JBQW9CLENBQUMsQ0FBb0I7UUFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1o7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFBTTtZQUNMLE1BQU0sS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE1R0EsVUFBVTs7O1lBZkYsS0FBSztZQUVMLGdCQUFnQjtZQUloQixhQUFhOzRDQTZCakIsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7O0FBcEJmLGdCQUFnQjtJQUY1QixZQUFZLEVBQUU7R0FFRixnQkFBZ0IsQ0EyRzVCO1NBM0dZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYmplY3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvb2JqZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy9pcy1udWxsLW9yLXVuZGVmaW5lZC51dGlsJztcbmltcG9ydCB7IFBhZ2VUaXRsZUNvbmZpZyB9IGZyb20gJy4vcGFnZS10aXRsZS5jb25maWcnO1xuXG5pbXBvcnQgeyBQQUdFX1RJVExFX1RPS0VOIH0gZnJvbSAnLi9wYWdlLXRpdGxlLnRva2VuJztcblxubGV0IHNpbmdsZXRvbkxvY2sgPSBmYWxzZTtcblxuQFVudGlsRGVzdHJveSgpXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZVRpdGxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVmYXVsdFBhZ2VUaXRsZUNvbmZpZzogUGFnZVRpdGxlQ29uZmlnID0ge1xuICAgIHNlcGFyYXRvcjogJy0nLFxuICAgIHJldmVyc2VPcmRlcjogZmFsc2VcbiAgfTtcbiAgcHJpdmF0ZSBjb25maWc6IFBhZ2VUaXRsZUNvbmZpZyA9IHRoaXMub2JqZWN0U2VydmljZS5tZXJnZURlZXAoXG4gICAgdGhpcy5kZWZhdWx0UGFnZVRpdGxlQ29uZmlnLFxuICAgIHRoaXMucGFnZVRpdGxlQ29uZmlnIHx8IHt9XG4gICk7XG4gIHByaXZhdGUgbGFiZWxzQW5kUGFyYW1zID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7XG4gICAgdGM6IHN0cmluZztcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xuICAgIHBhcmFtczogYW55O1xuICB9PihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBUaXRsZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYmplY3RTZXJ2aWNlOiBPYmplY3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQQUdFX1RJVExFX1RPS0VOKVxuICAgIHByaXZhdGUgcGFnZVRpdGxlQ29uZmlnOiBQYWdlVGl0bGVDb25maWdcbiAgKSB7XG4gICAgaWYgKHNpbmdsZXRvbkxvY2spIHtcbiAgICAgIHRocm93IEVycm9yKCdZb3UgY2FuIG9ubHkgaGF2ZSBvbmUgUGFnZVRpdGxlU2VydmljZS4nKTtcbiAgICB9XG4gICAgc2luZ2xldG9uTG9jayA9IHRydWU7XG4gICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIHRpdGxlIHdoZW4vaWYgdGhlIGxhbmd1YWdlIGNoYW5nZXMgYWZ0ZXIgc2V0dGluZyBhIHRpdGxlLlxuICAgIHRoaXMubGFiZWxzQW5kUGFyYW1zXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHggPT4gISF4KSxcbiAgICAgICAgc3dpdGNoTWFwKCh7IHRjLCBsYWJlbHMsIHBhcmFtcyB9KSA9PlxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZVxuICAgICAgICAgICAgLnN0cmVhbShcbiAgICAgICAgICAgICAgW3RjICsgJy5BUFBfTkFNRScsIC4uLmxhYmVscy5tYXAobCA9PiB0YyArICcuJyArIGwpXSxcbiAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9PlxuICAgICAgICAgICAgICAgICAgKHRoaXMuY29uZmlnLnJldmVyc2VPcmRlclxuICAgICAgICAgICAgICAgICAgICA/IHRyYW5zbGF0aW9uc1t0YyArICcuQVBQX05BTUUnXVxuICAgICAgICAgICAgICAgICAgICA6ICcnKSArXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldFRleHRGcm9tTGFiZWxzKGxhYmVscywgdHJhbnNsYXRpb25zLCB0YykgK1xuICAgICAgICAgICAgICAgICAgKCF0aGlzLmNvbmZpZy5yZXZlcnNlT3JkZXJcbiAgICAgICAgICAgICAgICAgICAgPyB0cmFuc2xhdGlvbnNbdGMgKyAnLkFQUF9OQU1FJ11cbiAgICAgICAgICAgICAgICAgICAgOiAnJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHQgPT4gdGhpcy50aXRsZS5zZXRUaXRsZSh0KSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB0aXRsZSBvbiB0aGUgZG9jdW1lbnQuICg8dGl0bGU+Li4uPC90aXRsZT4pXG4gICAqIENvbWJpbmF0aW9uIG9mIHByb3ZpZGVkIGxhYmVsKHMpIGFuZCB0YyArICcuQVBQX05BTUUnXG4gICAqIElmIG5vIGxhYmVsKHMpIGFyZSBwcm92aWRlZCwgdGhlIGxhYmVsIFRJVExFIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0gdGMgVHJhbnNsYXRpb24gY29udGV4dFxuICAgKiBAcGFyYW0gbGFiZWwgbGFiZWwgb3IgbGFiZWxzXG4gICAqIEBwYXJhbSBwYXJhbXMgcGFyYW1zIGZvciB0cmFuc2xhdGlvblxuICAgKi9cbiAgc2V0VGl0bGUodGM6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcgfCBzdHJpbmdbXSwgcGFyYW1zPzogYW55KTogdm9pZCB7XG4gICAgbGV0IGxhYmVsczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIGFzc3VtZSBtdWx0aXBsZSBsYWJlbHMsIHNvIGlmIGEgc3RyaW5nIGlzIGdpdmVuIHdlIG5vcm1hbGl6ZSBpdCB0byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAgICBsYWJlbHMgPSBpc051bGxPclVuZGVmaW5lZChsYWJlbClcbiAgICAgICAgPyBbJ1RJVExFJ11cbiAgICAgICAgOiB0aGlzLnN0cmluZ0FycmF5Tm9ybWFsaXplKGxhYmVsKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IEVycm9yKCdQYWdlVGl0bGVTZXJ2aWNlIC0gSW52YWxpZCBsYWJlbCwgY291bGQgbm90IHRyYW5zbGF0ZS4nKTtcbiAgICB9XG4gICAgdGhpcy5sYWJlbHNBbmRQYXJhbXMubmV4dCh7IHRjLCBsYWJlbHMsIHBhcmFtcyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHNpbmdsZXRvbkxvY2sgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGV4dEZyb21MYWJlbHM8QT4oXG4gICAgbGFiZWxzOiBzdHJpbmdbXSxcbiAgICB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXG4gICAgdGM6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlc3VsdCA9IGxhYmVscy5tYXAoXG4gICAgICAobCwgaSkgPT5cbiAgICAgICAgKHRoaXMuY29uZmlnLnJldmVyc2VPcmRlciA/IGAgJHt0aGlzLmNvbmZpZy5zZXBhcmF0b3J9IGAgOiAnJykgK1xuICAgICAgICB0cmFuc2xhdGlvbnNbdGMgKyAnLicgKyBsXSArXG4gICAgICAgICghdGhpcy5jb25maWcucmV2ZXJzZU9yZGVyID8gYCAke3RoaXMuY29uZmlnLnNlcGFyYXRvcn0gYCA6ICcnKVxuICAgICk7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJldmVyc2VPcmRlcikge1xuICAgICAgcmV0dXJuIHJlc3VsdC5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdHJpbmdBcnJheU5vcm1hbGl6ZShvOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gW29dO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvKSAmJiBvLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIG87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIG9iamVjdCAtIG9ubHkgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZyBhbGxvd2VkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=