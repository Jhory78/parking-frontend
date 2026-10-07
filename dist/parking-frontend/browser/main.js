import {
  OccupancyStreamService
} from "./chunk-AAI6QJ5F.js";
import {
  AuthService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-JQV24IP3.js";
import {
  USER_ROLE_LABELS
} from "./chunk-WAYP7IFZ.js";
import {
  AUTH_ENDPOINTS,
  CommonModule,
  CurrentUserService,
  NgForOf,
  NgIf,
  TokenStorageService,
  catchError,
  computed,
  effect,
  inject,
  map,
  provideHttpClient,
  provideZoneChangeDetection,
  signal,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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

// src/app/component/navbar/navbar.component.ts
function NavbarComponent_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.roleLabels[user_r2.role]);
  }
}
function NavbarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6)(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NavbarComponent_div_2_span_7_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function NavbarComponent_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Salir ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.initial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r2.name || user_r2.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r2.role);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(authService, currentUser) {
    this.authService = authService;
    this.currentUser = currentUser;
    this.roleLabels = USER_ROLE_LABELS;
  }
  /** Inicial para el avatar del header. */
  get initial() {
    const user = this.currentUser.user();
    return (user?.name || user?.email || "?").charAt(0).toUpperCase();
  }
  logout() {
    this.authService.logout().subscribe();
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CurrentUserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "navbar"], ["src", "assets/logo.png", "alt", "Parking System", 1, "logo"], ["class", "actions", 4, "ngIf"], [1, "actions"], [1, "user-chip"], [1, "avatar"], [1, "user-text"], [1, "user-name"], ["class", "user-role", 4, "ngIf"], [1, "btn", "btn-outlined", "btn-sm", 3, "click"], [1, "material-symbols-outlined"], [1, "user-role"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275template(2, NavbarComponent_div_2_Template, 12, 3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentUser.user());
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 72px;\n  padding: 0 1.5rem;\n  background: rgba(13, 19, 32, .85);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--pk-border);\n}\n.logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .9rem;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .6rem;\n  padding: .3rem .9rem .3rem .3rem;\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-surface);\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--pk-primary-soft);\n  color: var(--pk-primary);\n  font-size: .85rem;\n  font-weight: 700;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.15;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  font-weight: 600;\n}\n.user-role[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n  font-size: .7rem;\n}\n.btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 640px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .user-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\component\\navbar\\navbar.component.ts", lineNumber: 14 });
})();

// src/app/component/sidebar/sidebar.component.ts
function SidebarComponent_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function SidebarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SidebarComponent_ng_container_2_li_1_Template, 6, 3, "li", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !link_r1.adminOnly || ctx_r1.currentUser.hasRole("ADMIN"));
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(currentUser) {
    this.currentUser = currentUser;
    this.links = [
      { path: "/dashboard", label: "Dashboard", icon: "space_dashboard", adminOnly: false },
      { path: "/parking", label: "Estacionamiento", icon: "local_parking", adminOnly: false },
      { path: "/usuarios", label: "Operarios", icon: "badge", adminOnly: true }
    ];
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)(\u0275\u0275directiveInject(CurrentUserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "sidebar"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], [1, "material-symbols-outlined", "icon"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "ul");
        \u0275\u0275template(2, SidebarComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.links);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  flex-shrink: 0;\n  padding: 1.5rem 1rem;\n  border-right: 1px solid var(--pk-border);\n  min-height: calc(100vh - 72px);\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: .35rem;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .7rem .9rem;\n  border-radius: var(--pk-radius-pill);\n  color: var(--pk-ink-soft);\n  font-size: .9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background .15s ease, color .15s ease;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--pk-surface-high);\n  color: var(--pk-ink);\n}\nli[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--pk-on-primary);\n  background: var(--pk-primary);\n  box-shadow: var(--pk-glow);\n}\nli[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--pk-on-primary);\n}\n.icon[_ngcontent-%COMP%] {\n  color: var(--pk-primary);\n  font-size: 20px;\n}\n@media (max-width: 860px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 0;\n    padding: .75rem 1rem;\n    border-right: 0;\n    border-bottom: 1px solid var(--pk-border);\n  }\n  ul[_ngcontent-%COMP%] {\n    flex-direction: row;\n    overflow-x: auto;\n  }\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\component\\sidebar\\sidebar.component.ts", lineNumber: 14 });
})();

// src/app/component/occupancy-alert/occupancy-alert.component.ts
function OccupancyAlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function OccupancyAlertComponent_div_0_Template_button_click_5_listener() {
      const alert_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(alert_r2.level));
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const alert_r2 = ctx.ngIf;
    \u0275\u0275classProp("full", alert_r2.level === "FULL");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", alert_r2.level === "FULL" ? "block" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r2.message);
  }
}
var OccupancyAlertComponent = class _OccupancyAlertComponent {
  constructor(stream) {
    this.stream = stream;
    this.dismissedLevel = signal(null);
    this.visibleAlert = computed(() => {
      const occupancy = this.stream.occupancy();
      if (!occupancy || occupancy.level === "NORMAL" || !occupancy.alertMessage) {
        return null;
      }
      if (this.dismissedLevel() === occupancy.level) {
        return null;
      }
      return { level: occupancy.level, message: occupancy.alertMessage };
    });
  }
  dismiss(level) {
    this.dismissedLevel.set(level);
  }
  static {
    this.\u0275fac = function OccupancyAlertComponent_Factory(t) {
      return new (t || _OccupancyAlertComponent)(\u0275\u0275directiveInject(OccupancyStreamService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OccupancyAlertComponent, selectors: [["app-occupancy-alert"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "occupancy-alert", "role", "alert", "aria-live", "assertive", 3, "full", 4, "ngIf"], ["role", "alert", "aria-live", "assertive", 1, "occupancy-alert"], [1, "material-symbols-outlined", "icon"], [1, "message"], ["type", "button", "aria-label", "Cerrar alerta", 1, "close", 3, "click"], [1, "material-symbols-outlined"]], template: function OccupancyAlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OccupancyAlertComponent_div_0_Template, 8, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.visibleAlert());
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.occupancy-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  margin: 1rem 2rem 0;\n  padding: .85rem 1.1rem;\n  border: 1px solid rgba(255, 185, 95, .4);\n  border-radius: var(--pk-radius);\n  color: var(--pk-secondary);\n  background: var(--pk-secondary-soft);\n  font-size: .9rem;\n  font-weight: 600;\n}\n.occupancy-alert.full[_ngcontent-%COMP%] {\n  border-color: rgba(255, 180, 171, .45);\n  color: var(--pk-danger);\n  background: var(--pk-danger-soft);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.message[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.close[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  padding: .2rem;\n  border: 0;\n  border-radius: 50%;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n}\n.close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n}\n@media (max-width: 640px) {\n  .occupancy-alert[_ngcontent-%COMP%] {\n    margin: 1rem 1rem 0;\n  }\n}\n/*# sourceMappingURL=occupancy-alert.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OccupancyAlertComponent, { className: "OccupancyAlertComponent", filePath: "src\\app\\component\\occupancy-alert\\occupancy-alert.component.ts", lineNumber: 67 });
})();

// src/app/core/security/authorization-feedback.service.ts
var AuthorizationFeedbackService = class _AuthorizationFeedbackService {
  constructor() {
    this.message = signal(null);
    this.timeoutId = null;
  }
  showForbidden() {
    this.message.set("No tienes permisos para realizar esta acci\xF3n.");
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => this.clear(), 5e3);
  }
  clear() {
    this.message.set(null);
    this.timeoutId = null;
  }
  static {
    this.\u0275fac = function AuthorizationFeedbackService_Factory(t) {
      return new (t || _AuthorizationFeedbackService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorizationFeedbackService, factory: _AuthorizationFeedbackService.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.component.ts
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function AppComponent_div_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.authorizationFeedback.clear());
    });
    \u0275\u0275text(4, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r3);
  }
}
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-navbar");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275element(3, "app-sidebar");
    \u0275\u0275elementStart(4, "main", 6);
    \u0275\u0275element(5, "app-occupancy-alert")(6, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AppComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppComponent = class _AppComponent {
  constructor(authService, authorizationFeedback, currentUser, occupancyStream) {
    this.authService = authService;
    this.authorizationFeedback = authorizationFeedback;
    effect(() => {
      if (currentUser.id() !== null) {
        occupancyStream.start();
      } else {
        occupancyStream.stop();
      }
    }, { allowSignalWrites: true });
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AuthorizationFeedbackService), \u0275\u0275directiveInject(CurrentUserService), \u0275\u0275directiveInject(OccupancyStreamService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["noLayout", ""], ["class", "permission-message", "role", "alert", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["role", "alert", 1, "permission-message"], ["type", "button", 3, "click"], [1, "layout"], [1, "content"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_div_0_Template, 5, 1, "div", 1)(1, AppComponent_ng_container_1_Template, 7, 0, "ng-container", 2)(2, AppComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const noLayout_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("ngIf", ctx.authorizationFeedback.message());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isLoggedIn())("ngIfElse", noLayout_r4);
      }
    }, dependencies: [CommonModule, NgIf, RouterOutlet, NavbarComponent, SidebarComponent, OccupancyAlertComponent], styles: ["\n\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  min-height: calc(100vh - 72px);\n}\n.permission-message[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 88px;\n  right: 24px;\n  z-index: 1000;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  max-width: 420px;\n  padding: 14px 20px;\n  border: 1px solid var(--pk-secondary);\n  border-radius: var(--pk-radius-pill);\n  color: var(--pk-secondary);\n  background: var(--pk-surface-high);\n  box-shadow: var(--pk-shadow-lg);\n}\n.permission-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: .9rem;\n  font-weight: 500;\n}\n.permission-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n  color: var(--pk-ink-muted);\n  background: transparent;\n  font-family: inherit;\n  font-size: .85rem;\n  cursor: pointer;\n}\n@media (max-width: 860px) {\n  .layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 74 });
})();

// src/app/core/security/auth.guard.ts
var authGuard = (_, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.ensureValidSession().pipe(map((isAuthenticated) => isAuthenticated ? true : router.createUrlTree(["/auth/login"], {
    queryParams: { returnUrl: state.url }
  })));
};

// src/app/core/security/role.guard.ts
var roleGuard = (route) => {
  const authService = inject(AuthService);
  const currentUser = inject(CurrentUserService);
  const feedback = inject(AuthorizationFeedbackService);
  const router = inject(Router);
  const allowedRoles = route.data?.["roles"] ?? [];
  return authService.ensureValidSession().pipe(map((isAuthenticated) => {
    if (!isAuthenticated) {
      return router.createUrlTree(["/auth/login"]);
    }
    if (allowedRoles.some((role) => currentUser.hasRole(role))) {
      return true;
    }
    feedback.showForbidden();
    return router.createUrlTree(["/dashboard"]);
  }));
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "auth",
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-N7WJ22N6.js").then((m) => m.LoginComponent)
      },
      // No hay registro público: las cuentas las crea un ADMIN desde /usuarios.
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-XOY3TXDH.js").then((m) => m.DashboardComponent)
  },
  {
    path: "parking",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-VABA36GG.js").then((m) => m.ParkingComponent)
  },
  {
    path: "usuarios",
    canActivate: [authGuard, roleGuard],
    data: { roles: ["ADMIN"] },
    loadComponent: () => import("./chunk-RRXWPKSI.js").then((m) => m.UsuariosComponent)
  },
  { path: "**", redirectTo: "/dashboard" }
];

// src/app/core/security/auth.interceptor.ts
var PUBLIC_ENDPOINTS = [AUTH_ENDPOINTS.login, AUTH_ENDPOINTS.logout];
var authInterceptor = (request, next) => {
  const tokenStorage = inject(TokenStorageService);
  const authService = inject(AuthService);
  const feedback = inject(AuthorizationFeedbackService);
  const isPublicRequest = PUBLIC_ENDPOINTS.some((url) => request.url.startsWith(url));
  const isSessionCheck = request.url.startsWith(AUTH_ENDPOINTS.me);
  const accessToken = tokenStorage.getAccessToken();
  const authenticatedRequest = isPublicRequest || !accessToken ? request : request.clone({
    setHeaders: { Authorization: `Bearer ${accessToken}` }
  });
  return next(authenticatedRequest).pipe(catchError((error) => {
    if (error.status === 401 && !isPublicRequest) {
      authService.clearSession(!isSessionCheck);
    }
    if (error.status === 403 && !isPublicRequest) {
      feedback.showForbidden();
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
