import { PhoneNumberUtil } from 'google-libphonenumber';
import { calculatePhoneNumber } from '../utils/phone-numbers.utils';
const phoneUtil = PhoneNumberUtil.getInstance();
export function phoneNumberValidator(control) {
    var _a, _b, _c, _d;
    if (!((_a = control === null || control === void 0 ? void 0 : control.value) === null || _a === void 0 ? void 0 : _a.localCode)) {
        return null;
    }
    const phoneNumber = calculatePhoneNumber((_b = control === null || control === void 0 ? void 0 : control.value) === null || _b === void 0 ? void 0 : _b.countryCodeISO2, (_c = control === null || control === void 0 ? void 0 : control.value) === null || _c === void 0 ? void 0 : _c.localCode);
    if (phoneNumber &&
        phoneUtil.isValidNumberForRegion(phoneNumber, (_d = control.value) === null || _d === void 0 ? void 0 : _d.countryCodeISO2)) {
        return null;
    }
    return {
        phoneNumber: true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtbnVtYmVyLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtcGhvbmUtbnVtYmVyL3ZhbGlkYXRvcnMvcGhvbmUtbnVtYmVyLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFcEUsTUFBTSxTQUFTLEdBQW9CLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVqRSxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE9BQXdCOztJQUV4QixJQUFJLFFBQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssMENBQUUsU0FBUyxDQUFBLEVBQUU7UUFDOUIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE1BQU0sV0FBVyxHQUFHLG9CQUFvQixPQUN0QyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSywwQ0FBRSxlQUFlLFFBQy9CLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLLDBDQUFFLFNBQVMsQ0FDMUIsQ0FBQztJQUNGLElBQ0UsV0FBVztRQUNYLFNBQVMsQ0FBQyxzQkFBc0IsQ0FDOUIsV0FBVyxRQUNYLE9BQU8sQ0FBQyxLQUFLLDBDQUFFLGVBQWUsQ0FDL0IsRUFDRDtRQUNBLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLElBQUk7S0FDbEIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuaW1wb3J0IHsgY2FsY3VsYXRlUGhvbmVOdW1iZXIgfSBmcm9tICcuLi91dGlscy9waG9uZS1udW1iZXJzLnV0aWxzJztcblxuY29uc3QgcGhvbmVVdGlsOiBQaG9uZU51bWJlclV0aWwgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBob25lTnVtYmVyVmFsaWRhdG9yKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgaWYgKCFjb250cm9sPy52YWx1ZT8ubG9jYWxDb2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBjYWxjdWxhdGVQaG9uZU51bWJlcihcbiAgICBjb250cm9sPy52YWx1ZT8uY291bnRyeUNvZGVJU08yLFxuICAgIGNvbnRyb2w/LnZhbHVlPy5sb2NhbENvZGVcbiAgKTtcbiAgaWYgKFxuICAgIHBob25lTnVtYmVyICYmXG4gICAgcGhvbmVVdGlsLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXG4gICAgICBwaG9uZU51bWJlcixcbiAgICAgIGNvbnRyb2wudmFsdWU/LmNvdW50cnlDb2RlSVNPMlxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBob25lTnVtYmVyOiB0cnVlXG4gIH07XG59XG4iXX0=