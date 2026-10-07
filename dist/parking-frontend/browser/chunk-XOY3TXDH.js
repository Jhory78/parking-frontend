import {
  VEHICLE_TYPE_LABELS
} from "./chunk-IBLP6VRO.js";
import {
  OccupancyStreamService
} from "./chunk-AAI6QJ5F.js";
import "./chunk-JQV24IP3.js";
import {
  CommonModule,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KGFZV2CR.js";

// src/app/feat/dashboard/dashboard.component.ts
function DashboardComponent_ng_container_11_div_34_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Sin espacios para este tipo");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_ng_container_11_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275element(9, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DashboardComponent_ng_container_11_div_34_span_10_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("full", type_r1.availableSpaces === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", type_r1.vehicleType === "CAR" ? "directions_car" : "two_wheeler", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vehicleTypeLabels[type_r1.vehicleType]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", type_r1.availableSpaces, " / ", type_r1.totalSpaces, " libres");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-valuenow", type_r1.occupancyPercentage);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", type_r1.occupancyPercentage, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", type_r1.availableSpaces === 0);
  }
}
function DashboardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "span", 10);
    \u0275\u0275text(4, "local_parking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8, "Disponibles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "span", 10);
    \u0275\u0275text(11, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275text(15, "Ocupados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14);
    \u0275\u0275pipe(17, "lowercase");
    \u0275\u0275elementStart(18, "span", 10);
    \u0275\u0275text(19, "speed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 12);
    \u0275\u0275text(23, "Ocupaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "span", 10);
    \u0275\u0275text(26, "pin_drop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 11);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 12);
    \u0275\u0275text(30, "Total de plazas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "h3", 16);
    \u0275\u0275text(32, "Disponibilidad por tipo de veh\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 17);
    \u0275\u0275template(34, DashboardComponent_ng_container_11_div_34_Template, 11, 10, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 19)(36, "span", 20);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const occupancy_r3 = ctx.ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(occupancy_r3.availableSpaces);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(occupancy_r3.occupiedSpaces);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pipeBind1(17, 10, occupancy_r3.level));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", occupancy_r3.occupancyPercentage, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(occupancy_r3.totalSpaces);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", occupancy_r3.byVehicleType);
    \u0275\u0275advance();
    \u0275\u0275classProp("blocked", occupancy_r3.entryBlocked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(occupancy_r3.entryBlocked ? "block" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", occupancy_r3.entryBlocked ? "Barrera de ingreso bloqueada: parqueadero lleno" : "Barrera de ingreso habilitada", " ");
  }
}
function DashboardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Cargando datos...");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(stream) {
    this.stream = stream;
    this.vehicleTypeLabels = VEHICLE_TYPE_LABELS;
  }
  ngOnInit() {
    if (!this.stream.occupancy()) {
      this.stream.refresh();
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(OccupancyStreamService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [["loadingTpl", ""], [1, "dashboard"], [1, "page-header"], [1, "pill"], [1, "ping"], [1, "accent"], [1, "subtitle"], [4, "ngIf", "ngIfElse"], [1, "stats"], [1, "stat", "available"], [1, "material-symbols-outlined", "stat-icon"], [1, "num"], [1, "label"], [1, "stat", "occupied"], [1, "stat", "percentage", 3, "ngClass"], [1, "stat", "total"], [1, "section-title"], [1, "types"], ["class", "type-card", 3, "full", 4, "ngFor", "ngForOf"], [1, "barrier"], [1, "material-symbols-outlined"], [1, "type-card"], [1, "type-header"], [1, "type-name"], [1, "type-count"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "bar"], [1, "bar-fill"], ["class", "type-full", 4, "ngIf"], [1, "type-full"], [1, "loading"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "span", 3);
        \u0275\u0275element(3, "span", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Estado del ");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "estacionamiento");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Resumen de ocupaci\xF3n de todas las plazas registradas.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, DashboardComponent_ng_container_11_Template, 39, 12, "ng-container", 7)(12, DashboardComponent_ng_template_12_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadingTpl_r4 = \u0275\u0275reference(13);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("offline", !ctx.stream.connected());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.stream.connected() ? "Monitoreo en tiempo real" : "Conectando...", " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.stream.occupancy())("ngIfElse", loadingTpl_r4);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, LowerCasePipe], styles: ["\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 2rem 2rem 3rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .45rem;\n  padding: .3rem 1rem;\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-surface-high);\n  color: var(--pk-tertiary);\n  font-size: .72rem;\n  font-weight: 600;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.ping[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--pk-tertiary);\n  animation: _ngcontent-%COMP%_ping 1.6s cubic-bezier(0, 0, .2, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_ping {\n  0% {\n    box-shadow: 0 0 0 0 rgba(101, 242, 181, .6);\n  }\n  100% {\n    box-shadow: 0 0 0 7px rgba(101, 242, 181, 0);\n  }\n}\nh2[_ngcontent-%COMP%] {\n  margin: .75rem 0 .4rem;\n  font-size: 1.85rem;\n}\n.accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--pk-primary) 0%,\n      var(--pk-secondary) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--pk-ink-soft);\n  font-size: .9rem;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .3rem;\n  padding: 1.5rem 1.25rem;\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius-lg);\n  background: var(--pk-surface);\n  text-align: center;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  margin-bottom: .5rem;\n  border-radius: 50%;\n  font-size: 22px;\n}\n.num[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -.02em;\n}\n.label[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n  font-size: .75rem;\n  font-weight: 600;\n}\n.available[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--pk-tertiary-soft);\n  color: var(--pk-tertiary);\n}\n.available[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  color: var(--pk-tertiary);\n}\n.occupied[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--pk-secondary-soft);\n  color: var(--pk-secondary);\n}\n.occupied[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  color: var(--pk-secondary);\n}\n.percentage[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--pk-primary-soft);\n  color: var(--pk-primary);\n}\n.percentage[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  color: var(--pk-primary);\n}\n.percentage.high[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--pk-secondary-soft);\n  color: var(--pk-secondary);\n}\n.percentage.high[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  color: var(--pk-secondary);\n}\n.percentage.full[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--pk-danger-soft);\n  color: var(--pk-danger);\n}\n.percentage.full[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  color: var(--pk-danger);\n}\n.total[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--pk-surface-highest);\n  color: var(--pk-ink-soft);\n}\n.pill.offline[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n}\n.pill.offline[_ngcontent-%COMP%]   .ping[_ngcontent-%COMP%] {\n  background: var(--pk-neutral);\n  animation: none;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 2rem 0 1rem;\n  font-size: 1.05rem;\n}\n.types[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.type-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius-lg);\n  background: var(--pk-surface);\n}\n.type-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .6rem;\n  margin-bottom: .9rem;\n}\n.type-header[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--pk-primary);\n}\n.type-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 700;\n}\n.type-count[_ngcontent-%COMP%] {\n  color: var(--pk-ink-soft);\n  font-size: .85rem;\n  font-weight: 600;\n}\n.bar[_ngcontent-%COMP%] {\n  height: 8px;\n  overflow: hidden;\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-surface-highest);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: inherit;\n  background: var(--pk-tertiary);\n  transition: width .4s ease;\n}\n.type-card.full[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  background: var(--pk-danger);\n}\n.type-full[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: .6rem;\n  color: var(--pk-danger);\n  font-size: .78rem;\n  font-weight: 600;\n}\n.barrier[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .6rem;\n  margin-top: 1.5rem;\n  padding: .9rem 1.1rem;\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius);\n  color: var(--pk-tertiary);\n  background: var(--pk-surface);\n  font-size: .88rem;\n  font-weight: 600;\n}\n.barrier.blocked[_ngcontent-%COMP%] {\n  color: var(--pk-danger);\n  background: var(--pk-danger-soft);\n  border-color: rgba(255, 180, 171, .35);\n}\n.loading[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n}\n@media (prefers-reduced-motion: reduce) {\n  .ping[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 640px) {\n  .dashboard[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\feat\\dashboard\\dashboard.component.ts", lineNumber: 17 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-XOY3TXDH.js.map
