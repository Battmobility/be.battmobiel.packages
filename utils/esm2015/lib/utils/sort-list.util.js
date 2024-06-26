import { get, isFunction, orderBy } from 'lodash';
/* Seek convention for naming this */
export function sortList(list, sortingOrderConfig) {
    if (!list) {
        return list;
    }
    if (!sortingOrderConfig.order) {
        sortingOrderConfig.order = 'asc';
    }
    const copyList = [...list];
    let sortingPropArray;
    if (Array.isArray(sortingOrderConfig.prop)) {
        sortingPropArray = sortingOrderConfig.prop;
    }
    else {
        sortingPropArray = [sortingOrderConfig.prop];
    }
    if (sortingOrderConfig.plainSort && sortingPropArray.length === 1) {
        // Currently only works with 1 single sorting property defined
        const isFunc = isFunction(sortingPropArray[0]);
        const copyListWithoutUndefineds = copyList.filter(d => (isFunc
            ? sortingPropArray[0](d)
            : get(d, sortingPropArray[0])) !== undefined);
        const copyListUndefinedsOnly = copyList.filter(d => (isFunc
            ? sortingPropArray[0](d)
            : get(d, sortingPropArray[0])) === undefined);
        return sortingOrderConfig.order === 'asc'
            ? [
                ...copyListUndefinedsOnly,
                ...orderBy(copyListWithoutUndefineds, sortingPropArray, sortingOrderConfig.order)
            ]
            : [
                ...orderBy(copyListWithoutUndefineds, sortingPropArray, sortingOrderConfig.order),
                ...copyListUndefinedsOnly
            ];
    }
    if (sortingOrderConfig.order === 'asc') {
        return copyList.sort((a, b) => {
            return compareForDeeperComparison(sortingPropArray, a, b);
        });
    }
    return copyList.sort((a, b) => {
        return compareForDeeperComparison(sortingPropArray, b, a);
    });
}
function compareForDeeperComparison(sortingPropArray, a, b) {
    var _a, _b;
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    let index = 0;
    while (index < sortingPropArray.length) {
        const isFunc = isFunction(sortingPropArray[index]);
        const compareItem = collator.compare(isFunc
            ? (_a = sortingPropArray[index](a)) !== null && _a !== void 0 ? _a : '' : get(a, sortingPropArray[index], ''), isFunc
            ? (_b = sortingPropArray[index](b)) !== null && _b !== void 0 ? _b : '' : get(b, sortingPropArray[index], ''));
        if (compareItem === 0 && index < sortingPropArray.length) {
            index++;
        }
        else {
            return compareItem;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1saXN0LnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvdXRpbHMvc29ydC1saXN0LnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR2xELHFDQUFxQztBQUNyQyxNQUFNLFVBQVUsUUFBUSxDQUN0QixJQUFTLEVBQ1Qsa0JBQXlDO0lBRXpDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRTtRQUM3QixrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2xDO0lBRUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTNCLElBQUksZ0JBQTJDLENBQUM7SUFFaEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztLQUM1QztTQUFNO1FBQ0wsZ0JBQWdCLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QztJQUNELElBQUksa0JBQWtCLENBQUMsU0FBUyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDakUsOERBQThEO1FBQzlELE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0seUJBQXlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDL0MsQ0FBQyxDQUFDLEVBQUUsQ0FDRixDQUFDLE1BQU07WUFDTCxDQUFDLENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFnQixDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUNqRCxDQUFDO1FBQ0YsTUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUM1QyxDQUFDLENBQUMsRUFBRSxDQUNGLENBQUMsTUFBTTtZQUNMLENBQUMsQ0FBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQ2pELENBQUM7UUFDRixPQUFPLGtCQUFrQixDQUFDLEtBQUssS0FBSyxLQUFLO1lBQ3ZDLENBQUMsQ0FBQztnQkFDRSxHQUFHLHNCQUFzQjtnQkFDekIsR0FBRyxPQUFPLENBQ1IseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixrQkFBa0IsQ0FBQyxLQUFLLENBQ3pCO2FBQ0Y7WUFDSCxDQUFDLENBQUM7Z0JBQ0UsR0FBRyxPQUFPLENBQ1IseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixrQkFBa0IsQ0FBQyxLQUFLLENBQ3pCO2dCQUNELEdBQUcsc0JBQXNCO2FBQzFCLENBQUM7S0FDUDtJQUNELElBQUksa0JBQWtCLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsT0FBTywwQkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixPQUFPLDBCQUEwQixDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLDBCQUEwQixDQUNqQyxnQkFBMkMsRUFDM0MsQ0FBQyxFQUNELENBQUM7O0lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUM1QyxPQUFPLEVBQUUsSUFBSTtRQUNiLFdBQVcsRUFBRSxNQUFNO0tBQ3BCLENBQUMsQ0FBQztJQUVILElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUN0QyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUNsQyxNQUFNO1lBQ0osQ0FBQyxPQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsbUNBQUksRUFBRSxDQUNsRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDdkMsTUFBTTtZQUNKLENBQUMsT0FBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQWdCLENBQUMsQ0FBQyxDQUFDLG1DQUFJLEVBQUUsQ0FDbEQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3hDLENBQUM7UUFFRixJQUFJLFdBQVcsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUN4RCxLQUFLLEVBQUUsQ0FBQztTQUNUO2FBQU07WUFDTCxPQUFPLFdBQVcsQ0FBQztTQUNwQjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCwgaXNGdW5jdGlvbiwgb3JkZXJCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0aW5nT3JkZXJDb25maWcgfSBmcm9tICcuLi90eXBlcy9zb3J0aW5nLW9yZGVyLWNvbmZpZy50eXBlJztcblxuLyogU2VlayBjb252ZW50aW9uIGZvciBuYW1pbmcgdGhpcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRMaXN0PFQ+KFxuICBsaXN0OiBUW10sXG4gIHNvcnRpbmdPcmRlckNvbmZpZzogU29ydGluZ09yZGVyQ29uZmlnPFQ+XG4pOiBUW10ge1xuICBpZiAoIWxpc3QpIHtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIGlmICghc29ydGluZ09yZGVyQ29uZmlnLm9yZGVyKSB7XG4gICAgc29ydGluZ09yZGVyQ29uZmlnLm9yZGVyID0gJ2FzYyc7XG4gIH1cblxuICBjb25zdCBjb3B5TGlzdCA9IFsuLi5saXN0XTtcblxuICBsZXQgc29ydGluZ1Byb3BBcnJheTogKHN0cmluZyB8ICgoVCkgPT4gYW55KSlbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShzb3J0aW5nT3JkZXJDb25maWcucHJvcCkpIHtcbiAgICBzb3J0aW5nUHJvcEFycmF5ID0gc29ydGluZ09yZGVyQ29uZmlnLnByb3A7XG4gIH0gZWxzZSB7XG4gICAgc29ydGluZ1Byb3BBcnJheSA9IFtzb3J0aW5nT3JkZXJDb25maWcucHJvcF07XG4gIH1cbiAgaWYgKHNvcnRpbmdPcmRlckNvbmZpZy5wbGFpblNvcnQgJiYgc29ydGluZ1Byb3BBcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBDdXJyZW50bHkgb25seSB3b3JrcyB3aXRoIDEgc2luZ2xlIHNvcnRpbmcgcHJvcGVydHkgZGVmaW5lZFxuICAgIGNvbnN0IGlzRnVuYyA9IGlzRnVuY3Rpb24oc29ydGluZ1Byb3BBcnJheVswXSk7XG4gICAgY29uc3QgY29weUxpc3RXaXRob3V0VW5kZWZpbmVkcyA9IGNvcHlMaXN0LmZpbHRlcihcbiAgICAgIGQgPT5cbiAgICAgICAgKGlzRnVuY1xuICAgICAgICAgID8gKHNvcnRpbmdQcm9wQXJyYXlbMF0gYXMgKFQpID0+IGFueSkoZClcbiAgICAgICAgICA6IGdldChkLCBzb3J0aW5nUHJvcEFycmF5WzBdKSkgIT09IHVuZGVmaW5lZFxuICAgICk7XG4gICAgY29uc3QgY29weUxpc3RVbmRlZmluZWRzT25seSA9IGNvcHlMaXN0LmZpbHRlcihcbiAgICAgIGQgPT5cbiAgICAgICAgKGlzRnVuY1xuICAgICAgICAgID8gKHNvcnRpbmdQcm9wQXJyYXlbMF0gYXMgKFQpID0+IGFueSkoZClcbiAgICAgICAgICA6IGdldChkLCBzb3J0aW5nUHJvcEFycmF5WzBdKSkgPT09IHVuZGVmaW5lZFxuICAgICk7XG4gICAgcmV0dXJuIHNvcnRpbmdPcmRlckNvbmZpZy5vcmRlciA9PT0gJ2FzYydcbiAgICAgID8gW1xuICAgICAgICAgIC4uLmNvcHlMaXN0VW5kZWZpbmVkc09ubHksXG4gICAgICAgICAgLi4ub3JkZXJCeShcbiAgICAgICAgICAgIGNvcHlMaXN0V2l0aG91dFVuZGVmaW5lZHMsXG4gICAgICAgICAgICBzb3J0aW5nUHJvcEFycmF5LFxuICAgICAgICAgICAgc29ydGluZ09yZGVyQ29uZmlnLm9yZGVyXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICAuLi5vcmRlckJ5KFxuICAgICAgICAgICAgY29weUxpc3RXaXRob3V0VW5kZWZpbmVkcyxcbiAgICAgICAgICAgIHNvcnRpbmdQcm9wQXJyYXksXG4gICAgICAgICAgICBzb3J0aW5nT3JkZXJDb25maWcub3JkZXJcbiAgICAgICAgICApLFxuICAgICAgICAgIC4uLmNvcHlMaXN0VW5kZWZpbmVkc09ubHlcbiAgICAgICAgXTtcbiAgfVxuICBpZiAoc29ydGluZ09yZGVyQ29uZmlnLm9yZGVyID09PSAnYXNjJykge1xuICAgIHJldHVybiBjb3B5TGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gY29tcGFyZUZvckRlZXBlckNvbXBhcmlzb24oc29ydGluZ1Byb3BBcnJheSwgYSwgYik7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29weUxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBjb21wYXJlRm9yRGVlcGVyQ29tcGFyaXNvbihzb3J0aW5nUHJvcEFycmF5LCBiLCBhKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVGb3JEZWVwZXJDb21wYXJpc29uKFxuICBzb3J0aW5nUHJvcEFycmF5OiAoc3RyaW5nIHwgKChUKSA9PiBhbnkpKVtdLFxuICBhLFxuICBiXG4pOiBudW1iZXIge1xuICBjb25zdCBjb2xsYXRvciA9IG5ldyBJbnRsLkNvbGxhdG9yKHVuZGVmaW5lZCwge1xuICAgIG51bWVyaWM6IHRydWUsXG4gICAgc2Vuc2l0aXZpdHk6ICdiYXNlJ1xuICB9KTtcblxuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBzb3J0aW5nUHJvcEFycmF5Lmxlbmd0aCkge1xuICAgIGNvbnN0IGlzRnVuYyA9IGlzRnVuY3Rpb24oc29ydGluZ1Byb3BBcnJheVtpbmRleF0pO1xuICAgIGNvbnN0IGNvbXBhcmVJdGVtID0gY29sbGF0b3IuY29tcGFyZShcbiAgICAgIGlzRnVuY1xuICAgICAgICA/IChzb3J0aW5nUHJvcEFycmF5W2luZGV4XSBhcyAoVCkgPT4gYW55KShhKSA/PyAnJ1xuICAgICAgICA6IGdldChhLCBzb3J0aW5nUHJvcEFycmF5W2luZGV4XSwgJycpLFxuICAgICAgaXNGdW5jXG4gICAgICAgID8gKHNvcnRpbmdQcm9wQXJyYXlbaW5kZXhdIGFzIChUKSA9PiBhbnkpKGIpID8/ICcnXG4gICAgICAgIDogZ2V0KGIsIHNvcnRpbmdQcm9wQXJyYXlbaW5kZXhdLCAnJylcbiAgICApO1xuXG4gICAgaWYgKGNvbXBhcmVJdGVtID09PSAwICYmIGluZGV4IDwgc29ydGluZ1Byb3BBcnJheS5sZW5ndGgpIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb21wYXJlSXRlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==