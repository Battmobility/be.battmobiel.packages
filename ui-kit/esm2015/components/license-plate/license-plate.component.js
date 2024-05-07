import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class LicensePlateComponent {
    constructor() {
        this.licensePlateCountryCodes = {
            ['be']: 'B',
            ['de']: 'D',
            ['fr']: 'F',
            ['lu']: 'L',
            ['nl']: 'NL'
        };
    }
    /**
     * Country code is specified in ISO Alpha 2 format.
     * ex: BE, NL, DE, etc
     */
    set countryCode(value) {
        this.localCountryCode = value === null || value === void 0 ? void 0 : value.toLocaleLowerCase();
    }
}
LicensePlateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-license-plate',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="license-plate license-plate-{{ localCountryCode }}">
      <div
        *ngIf="licensePlateCountryCodes[localCountryCode] as code"
        class="country-code"
      >
        {{ code }}
      </div>
      <span class="value">
        {{ value }}
      </span>
    </div>
  `,
                styles: [".license-plate{display:inline-flex;border:1px solid #000;border-radius:2px;min-width:100px;font-weight:500}.license-plate .country-code{display:flex;align-items:center;padding-left:6px;padding-right:6px;text-align:center;font-size:.625rem}.license-plate .value{display:flex;justify-content:center;align-items:center;width:100%;padding-left:.5rem;padding-right:.5rem;text-align:center;white-space:nowrap;background-color:#fff;color:#000}.license-plate-be{border-color:#ac191a}.license-plate-be .country-code{background-color:#19469f;color:#fff}.license-plate-be .value{background-color:#e1e6e3;color:#ac191a}.license-plate-de{border-color:#000}.license-plate-de .country-code{background-color:#19469f;color:#fff}.license-plate-de .value{background-color:#fff;color:#000}.license-plate-nl{border-color:#000}.license-plate-nl .country-code{background-color:#19469f;color:#fff}.license-plate-nl .value{background-color:#ffd104;color:#000}.license-plate-lu{border-color:#000}.license-plate-lu .country-code{background-color:#19469f;color:#fff}.license-plate-lu .value{background-color:#ffd104;color:#000}.license-plate-fr{border-color:#000}.license-plate-fr .country-code{background-color:#19469f;color:#fff}.license-plate-fr .value{background-color:#fff;color:#000}"]
            },] }
];
LicensePlateComponent.propDecorators = {
    countryCode: [{ type: Input }],
    value: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGljZW5zZS1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2xpY2Vuc2UtcGxhdGUvbGljZW5zZS1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQjFFLE1BQU0sT0FBTyxxQkFBcUI7SUFsQmxDO1FBK0JFLDZCQUF3QixHQUFHO1lBQ3pCLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUNYLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUNYLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUNYLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUNYLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFDSixDQUFDO0lBakJDOzs7T0FHRztJQUNILElBQWEsV0FBVyxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JELENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7O2FBQ0Y7OzswQkFRRSxLQUFLO29CQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtbGljZW5zZS1wbGF0ZScsXG4gIHN0eWxlVXJsczogWycuL2xpY2Vuc2UtcGxhdGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImxpY2Vuc2UtcGxhdGUgbGljZW5zZS1wbGF0ZS17eyBsb2NhbENvdW50cnlDb2RlIH19XCI+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwibGljZW5zZVBsYXRlQ291bnRyeUNvZGVzW2xvY2FsQ291bnRyeUNvZGVdIGFzIGNvZGVcIlxuICAgICAgICBjbGFzcz1cImNvdW50cnktY29kZVwiXG4gICAgICA+XG4gICAgICAgIHt7IGNvZGUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyB2YWx1ZSB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExpY2Vuc2VQbGF0ZUNvbXBvbmVudCB7XG4gIGxvY2FsQ291bnRyeUNvZGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ291bnRyeSBjb2RlIGlzIHNwZWNpZmllZCBpbiBJU08gQWxwaGEgMiBmb3JtYXQuXG4gICAqIGV4OiBCRSwgTkwsIERFLCBldGNcbiAgICovXG4gIEBJbnB1dCgpIHNldCBjb3VudHJ5Q29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbENvdW50cnlDb2RlID0gdmFsdWU/LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gIH1cblxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIGxpY2Vuc2VQbGF0ZUNvdW50cnlDb2RlcyA9IHtcbiAgICBbJ2JlJ106ICdCJyxcbiAgICBbJ2RlJ106ICdEJyxcbiAgICBbJ2ZyJ106ICdGJyxcbiAgICBbJ2x1J106ICdMJyxcbiAgICBbJ25sJ106ICdOTCdcbiAgfTtcbn1cbiJdfQ==