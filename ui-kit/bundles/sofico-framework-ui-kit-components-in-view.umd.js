(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/in-view', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['in-view'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

  var InViewComponent = /** @class */ (function () {
      function InViewComponent() {
          this.scrollableRef = null;
          this.preloadHeight = 0;
          this.inView = new core.EventEmitter();
      }
      InViewComponent.prototype.ngOnInit = function () {
          var _this = this;
          // We should only emit the most recent event
          var fn = function (entries) {
              var _a, _b;
              return _this.inView.emit((_b = (_a = entries.sort(function (a, b) { return (a.time > b.time ? -1 : 1); })) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.isIntersecting);
          };
          this.intersectionObserver = new IntersectionObserver(fn, {
              root: this.scrollableRef,
              rootMargin: "0px 0px " + this.preloadHeight + "px 0px"
          });
          this.intersectionObserver.observe(this.targetRef.nativeElement);
      };
      InViewComponent.prototype.ngOnDestroy = function () {
          this.intersectionObserver.disconnect();
      };
      return InViewComponent;
  }());
  InViewComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-in-view',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-content></ng-content>\n    <div class=\"in-slice\">\n      <div #targetRef></div>\n    </div>\n  ",
                  styles: [":host .in-slice{display:flex;flex-wrap:nowrap}:host .in-slice div{width:1px}:host .in-slice:after,:host .in-slice:before{content:\"\";width:100%}"]
              },] }
  ];
  InViewComponent.propDecorators = {
      scrollableRef: [{ type: core.Input }],
      preloadHeight: [{ type: core.Input }],
      inView: [{ type: core.Output }],
      targetRef: [{ type: core.ViewChild, args: ['targetRef', { read: core.ElementRef, static: true },] }]
  };

  var InViewModule = /** @class */ (function () {
      function InViewModule() {
      }
      return InViewModule;
  }());
  InViewModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [InViewComponent],
                  exports: [InViewComponent],
                  imports: [common.CommonModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.InViewComponent = InViewComponent;
  exports.InViewModule = InViewModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-in-view.umd.js.map
