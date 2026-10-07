import {
  SPACE_STATUS_LABELS,
  VEHICLE_TYPE_LABELS
} from "./chunk-IBLP6VRO.js";
import {
  OccupancyStreamService,
  SpaceService
} from "./chunk-AAI6QJ5F.js";
import "./chunk-JQV24IP3.js";
import {
  apiErrorMessage
} from "./chunk-52CLLQCX.js";
import {
  CommonModule,
  DestroyRef,
  NgClass,
  NgForOf,
  NgIf,
  Observable,
  assertInInjectionContext,
  computed,
  inject,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KGFZV2CR.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/feat/parking/parking.component.ts
function ParkingComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const occupancy_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", occupancy_r1.availableSpaces, " libres");
  }
}
function ParkingComponent_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const available_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", available_r5, " libres");
  }
}
function ParkingComponent_button_7_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "sin espacios");
    \u0275\u0275elementEnd();
  }
}
function ParkingComponent_button_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParkingComponent_button_7_ng_template_3_span_0_Template, 2, 0, "span", 15);
  }
  if (rf & 2) {
    const type_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.availableFor(type_r3) === 0);
  }
}
function ParkingComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function ParkingComponent_button_7_Template_button_click_0_listener() {
      const type_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectType(type_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, ParkingComponent_button_7_span_2_Template, 2, 1, "span", 14)(3, ParkingComponent_button_7_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const noneFree_r6 = \u0275\u0275reference(4);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.selectedType() === type_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.vehicleTypeLabels[type_r3], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.availableFor(type_r3))("ngIfElse", noneFree_r6);
  }
}
function ParkingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.error);
  }
}
function ParkingComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Cargando espacios...");
    \u0275\u0275elementEnd();
  }
}
function ParkingComponent_div_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ParkingComponent_div_10_button_1_Template_button_click_0_listener() {
      const space_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleStatus(space_r8));
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.statusClass(space_r8.status))("disabled", ctx_r3.updatingSpaceId === space_r8.id);
    \u0275\u0275attribute("aria-label", space_r8.code + ": " + ctx_r3.statusLabels[space_r8.status]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r8.vehicleType === "CAR" ? "directions_car" : "two_wheeler", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(space_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statusLabels[space_r8.status]);
  }
}
function ParkingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ParkingComponent_div_10_button_1_Template, 7, 6, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.visibleSpaces());
  }
}
var ParkingComponent = class _ParkingComponent {
  constructor(spaceService, stream, destroyRef) {
    this.spaceService = spaceService;
    this.stream = stream;
    this.destroyRef = destroyRef;
    this.vehicleTypeLabels = VEHICLE_TYPE_LABELS;
    this.statusLabels = SPACE_STATUS_LABELS;
    this.vehicleTypes = ["CAR", "MOTORCYCLE"];
    this.spaces = signal([]);
    this.selectedType = signal(null);
    this.visibleSpaces = computed(() => {
      const type = this.selectedType();
      return type ? this.spaces().filter((space) => space.vehicleType === type) : this.spaces();
    });
    this.loading = true;
    this.updatingSpaceId = null;
    this.error = "";
  }
  ngOnInit() {
    this.loadSpaces();
    if (!this.stream.occupancy()) {
      this.stream.refresh();
    }
    this.stream.spaceChanges$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((changed) => this.replaceSpace(changed));
  }
  loadSpaces() {
    this.loading = true;
    this.spaceService.findSpaces().subscribe({
      next: (spaces) => {
        this.spaces.set(spaces);
        this.loading = false;
      },
      error: (err) => {
        this.error = apiErrorMessage(err, "Error al cargar los espacios");
        this.loading = false;
      }
    });
  }
  selectType(type) {
    this.selectedType.set(type);
  }
  availableFor(type) {
    const availability = this.stream.occupancy()?.byVehicleType.find((item) => item.vehicleType === type);
    return availability ? availability.availableSpaces : null;
  }
  /** Marca el espacio como ocupado o disponible (RF-16). */
  toggleStatus(space) {
    const newStatus = space.status === "AVAILABLE" ? "OCCUPIED" : "AVAILABLE";
    const action = newStatus === "OCCUPIED" ? "marcar como ocupado" : "liberar";
    if (!confirm(`\xBFSeguro que quieres ${action} el espacio ${space.code}?`)) {
      return;
    }
    this.error = "";
    this.updatingSpaceId = space.id;
    this.spaceService.changeStatus(space.id, newStatus).subscribe({
      next: (updated) => {
        this.replaceSpace(updated);
        this.updatingSpaceId = null;
      },
      error: (err) => {
        this.error = apiErrorMessage(err, `No se pudo ${action} el espacio`);
        this.updatingSpaceId = null;
        this.loadSpaces();
      }
    });
  }
  statusClass(status) {
    return status.toLowerCase();
  }
  replaceSpace(changed) {
    this.spaces.update((spaces) => spaces.map((space) => space.id === changed.id ? changed : space));
  }
  static {
    this.\u0275fac = function ParkingComponent_Factory(t) {
      return new (t || _ParkingComponent)(\u0275\u0275directiveInject(SpaceService), \u0275\u0275directiveInject(OccupancyStreamService), \u0275\u0275directiveInject(DestroyRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["app-parking"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 7, consts: [["noneFree", ""], [1, "parking-page"], ["role", "group", "aria-label", "Filtrar por tipo de veh\xEDculo", 1, "filters"], ["type", "button", 1, "chip", 3, "click"], ["class", "chip-count", 4, "ngIf"], ["type", "button", "class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "legend"], [1, "dot", "available"], [1, "dot", "occupied"], [1, "hint-text"], [1, "chip-count"], ["class", "chip-count", 4, "ngIf", "ngIfElse"], ["class", "chip-count none", 4, "ngIf"], [1, "chip-count", "none"], [1, "alert", "alert-error"], [1, "loading"], [1, "grid"], ["type", "button", "class", "slot", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "slot", 3, "click", "ngClass", "disabled"], [1, "material-symbols-outlined", "type-icon"], [1, "code"], [1, "status-label"]], template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h2");
        \u0275\u0275text(2, "Estacionamiento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function ParkingComponent_Template_button_click_4_listener() {
          return ctx.selectType(null);
        });
        \u0275\u0275text(5, " Todos ");
        \u0275\u0275template(6, ParkingComponent_span_6_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ParkingComponent_button_7_Template, 5, 5, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ParkingComponent_div_8_Template, 2, 1, "div", 6)(9, ParkingComponent_p_9_Template, 2, 0, "p", 7)(10, ParkingComponent_div_10_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(11, "div", 9)(12, "span");
        \u0275\u0275element(13, "span", 10);
        \u0275\u0275text(14, " Disponible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275element(16, "span", 11);
        \u0275\u0275text(17, " Ocupado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "Haz clic en un espacio para cambiar su estado.");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.selectedType() === null);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.stream.occupancy());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.vehicleTypes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.parking-page[_ngcontent-%COMP%] {\n  padding: 2rem 2rem 3rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-size: 2rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .6rem;\n  margin-bottom: 1.5rem;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .5rem;\n  padding: .5rem 1rem;\n  border: 1px solid var(--pk-border-strong);\n  border-radius: var(--pk-radius-pill);\n  color: var(--pk-ink-soft);\n  background: var(--pk-surface);\n  font-family: inherit;\n  font-size: .85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: border-color .15s ease, color .15s ease;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--pk-primary);\n  color: var(--pk-primary);\n}\n.chip.active[_ngcontent-%COMP%] {\n  border-color: var(--pk-primary);\n  color: var(--pk-on-primary);\n  background: var(--pk-primary);\n}\n.chip-count[_ngcontent-%COMP%] {\n  padding: .1rem .5rem;\n  border-radius: var(--pk-radius-pill);\n  background: rgba(0, 0, 0, .2);\n  font-size: .72rem;\n}\n.chip-count.none[_ngcontent-%COMP%] {\n  color: var(--pk-danger);\n}\n.alert[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: .9rem;\n  margin-bottom: 2rem;\n}\n.slot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1.1rem .5rem;\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius);\n  color: var(--pk-ink);\n  background: var(--pk-surface);\n  font-family: inherit;\n  text-align: center;\n  cursor: pointer;\n  transition:\n    transform .15s ease,\n    box-shadow .15s ease,\n    background .3s ease;\n}\n.slot[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--pk-shadow);\n}\n.slot[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--pk-primary);\n  outline-offset: 2px;\n}\n.slot[_ngcontent-%COMP%]:disabled {\n  opacity: .6;\n  cursor: wait;\n}\n.slot.available[_ngcontent-%COMP%] {\n  background: var(--pk-tertiary-soft);\n  border-color: rgba(101, 242, 181, .35);\n}\n.slot.occupied[_ngcontent-%COMP%] {\n  background: var(--pk-danger-soft);\n  border-color: rgba(255, 180, 171, .3);\n}\n.type-icon[_ngcontent-%COMP%] {\n  margin-bottom: .2rem;\n  color: var(--pk-ink-soft);\n  font-size: 20px;\n}\n.code[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.status-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: .3rem;\n  color: var(--pk-ink-muted);\n  font-size: .65rem;\n  font-weight: 600;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-surface);\n  color: var(--pk-ink-soft);\n  font-size: .85rem;\n}\n.hint-text[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--pk-ink-muted);\n  font-size: .78rem;\n}\n.dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 6px;\n  border-radius: 50%;\n}\n.dot.available[_ngcontent-%COMP%] {\n  background: var(--pk-tertiary);\n}\n.dot.occupied[_ngcontent-%COMP%] {\n  background: var(--pk-danger);\n}\n.loading[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n}\n@media (max-width: 640px) {\n  .parking-page[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .hint-text[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=parking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "src\\app\\feat\\parking\\parking.component.ts", lineNumber: 26 });
})();
export {
  ParkingComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-VABA36GG.js.map
