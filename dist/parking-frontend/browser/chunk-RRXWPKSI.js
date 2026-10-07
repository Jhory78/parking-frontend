import {
  USER_ROLE_LABELS,
  USER_STATUS_LABELS
} from "./chunk-WAYP7IFZ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MVMDVPNC.js";
import {
  apiErrorMessage,
  apiFieldErrors
} from "./chunk-52CLLQCX.js";
import {
  CommonModule,
  CurrentUserService,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  USERS_ENDPOINT,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KGFZV2CR.js";

// src/app/services/usuario.service.ts
var UsuarioService = class _UsuarioService {
  constructor(http) {
    this.http = http;
  }
  listar() {
    return this.http.get(USERS_ENDPOINT);
  }
  obtener(id) {
    return this.http.get(`${USERS_ENDPOINT}/${id}`);
  }
  crear(body) {
    return this.http.post(USERS_ENDPOINT, body);
  }
  actualizar(id, body) {
    return this.http.put(`${USERS_ENDPOINT}/${id}`, body);
  }
  cambiarEstado(id, status) {
    const body = { status };
    return this.http.patch(`${USERS_ENDPOINT}/${id}/status`, body);
  }
  static {
    this.\u0275fac = function UsuarioService_Factory(t) {
      return new (t || _UsuarioService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioService, factory: _UsuarioService.\u0275fac, providedIn: "root" });
  }
};

// src/app/feat/usuarios/usuarios.component.ts
function UsuariosComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function UsuariosComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function UsuariosComponent_div_15_tr_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "t\xFA");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_15_tr_13_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function UsuariosComponent_div_15_tr_13_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstado(user_r3, "INACTIVE"));
    });
    \u0275\u0275text(1, " Desactivar ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_15_tr_13_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function UsuariosComponent_div_15_tr_13_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstado(user_r3, "ACTIVE"));
    });
    \u0275\u0275text(1, " Activar ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_15_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20)(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275template(8, UsuariosComponent_div_15_tr_13_span_8_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 25)(18, "button", 26);
    \u0275\u0275listener("click", function UsuariosComponent_div_15_tr_13_Template_button_click_18_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.iniciarEdicion(user_r3));
    });
    \u0275\u0275text(19, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, UsuariosComponent_div_15_tr_13_button_20_Template, 2, 0, "button", 27)(21, UsuariosComponent_div_15_tr_13_button_21_Template, 2, 0, "button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inicial(user_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.esCuentaPropia(user_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r3.role === "ADMIN" ? "badge-admin" : "badge-role");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.roleLabels[user_r3.role], " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r3.status === "ACTIVE" ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabels[user_r3.status], " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r3.status === "ACTIVE" && !ctx_r0.esCuentaPropia(user_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r3.status === "INACTIVE");
  }
}
function UsuariosComponent_div_15_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "Todav\xEDa no hay operarios registrados.");
    \u0275\u0275elementEnd()();
  }
}
function UsuariosComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Operario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 15);
    \u0275\u0275text(11, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, UsuariosComponent_div_15_tr_13_Template, 22, 10, "tr", 16)(14, UsuariosComponent_div_15_tr_14_Template, 3, 0, "tr", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.usuarios);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.usuarios.length);
  }
}
function UsuariosComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Cargando operarios...");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_17_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " El nombre es requerido ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_17_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["name"]);
  }
}
function UsuariosComponent_div_17_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " Ingresa un correo v\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_17_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["email"]);
  }
}
function UsuariosComponent_div_17_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " La contrase\xF1a debe tener al menos 6 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_17_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["password"]);
  }
}
function UsuariosComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h3");
    \u0275\u0275text(3, "Nuevo operario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5, "La cuenta queda activa de inmediato.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 37);
    \u0275\u0275listener("ngSubmit", function UsuariosComponent_div_17_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarCreacion());
    });
    \u0275\u0275elementStart(7, "div", 38)(8, "label", 39);
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 40);
    \u0275\u0275template(11, UsuariosComponent_div_17_span_11_Template, 2, 0, "span", 41)(12, UsuariosComponent_div_17_span_12_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38)(14, "label", 39);
    \u0275\u0275text(15, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275template(17, UsuariosComponent_div_17_span_17_Template, 2, 0, "span", 41)(18, UsuariosComponent_div_17_span_18_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 43);
    \u0275\u0275template(23, UsuariosComponent_div_17_span_23_Template, 2, 0, "span", 41)(24, UsuariosComponent_div_17_span_24_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 38)(26, "label", 39);
    \u0275\u0275text(27, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 44)(29, "option", 45);
    \u0275\u0275text(30, "Operario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 46);
    \u0275\u0275text(32, "Administrador");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 47)(34, "button", 48);
    \u0275\u0275listener("click", function UsuariosComponent_div_17_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(35, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 49);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r0.createForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.createForm.get("name")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx_r0.createForm.get("name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["name"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.createForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.createForm.get("email")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["email"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.createForm.get("password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.createForm.get("password")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["password"]);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.createForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Creando..." : "Crear operario", " ");
  }
}
function UsuariosComponent_div_18_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " El nombre es requerido ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["name"]);
  }
}
function UsuariosComponent_div_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " Ingresa un correo v\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["email"]);
  }
}
function UsuariosComponent_div_18_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " Si cambias la contrase\xF1a, debe tener al menos 6 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_div_18_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["password"]);
  }
}
function UsuariosComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h3");
    \u0275\u0275text(3, "Editar operario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 37);
    \u0275\u0275listener("ngSubmit", function UsuariosComponent_div_18_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarEdicion());
    });
    \u0275\u0275elementStart(7, "div", 38)(8, "label", 39);
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 51);
    \u0275\u0275template(11, UsuariosComponent_div_18_span_11_Template, 2, 0, "span", 41)(12, UsuariosComponent_div_18_span_12_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38)(14, "label", 39);
    \u0275\u0275text(15, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 52);
    \u0275\u0275template(17, UsuariosComponent_div_18_span_17_Template, 2, 0, "span", 41)(18, UsuariosComponent_div_18_span_18_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 53);
    \u0275\u0275template(23, UsuariosComponent_div_18_span_23_Template, 2, 0, "span", 41)(24, UsuariosComponent_div_18_span_24_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 47)(26, "button", 48);
    \u0275\u0275listener("click", function UsuariosComponent_div_18_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(27, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 49);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.editingUser.email);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.editForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.editForm.get("name")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r0.editForm.get("name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["name"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.editForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.editForm.get("email")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["email"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r0.editForm.get("password")) == null ? null : tmp_7_0.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors["password"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.editForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Guardando..." : "Guardar cambios", " ");
  }
}
var UsuariosComponent = class _UsuariosComponent {
  constructor(usuarioService, currentUser, fb) {
    this.usuarioService = usuarioService;
    this.currentUser = currentUser;
    this.fb = fb;
    this.roleLabels = USER_ROLE_LABELS;
    this.statusLabels = USER_STATUS_LABELS;
    this.usuarios = [];
    this.loading = true;
    this.saving = false;
    this.error = "";
    this.success = "";
    this.fieldErrors = {};
    this.modo = null;
    this.editingUser = null;
    this.createForm = this.fb.nonNullable.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: ["OPERATOR", Validators.required]
    });
    this.editForm = this.fb.nonNullable.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.minLength(6)]
    });
  }
  ngOnInit() {
    this.cargarUsuarios();
  }
  /** La cuenta propia no se puede desactivar (el backend responde 409). */
  esCuentaPropia(user) {
    return this.currentUser.id() === user.id;
  }
  /** Inicial para el avatar de la fila. */
  inicial(user) {
    return (user.name || user.email || "?").charAt(0).toUpperCase();
  }
  cargarUsuarios() {
    this.loading = true;
    this.usuarioService.listar().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = apiErrorMessage(err, "Error al cargar usuarios");
        this.loading = false;
      }
    });
  }
  iniciarCreacion() {
    this.limpiarMensajes();
    this.createForm.reset({ name: "", email: "", password: "", role: "OPERATOR" });
    this.modo = "crear";
  }
  iniciarEdicion(user) {
    this.limpiarMensajes();
    this.editingUser = user;
    this.editForm.reset({
      name: user.name,
      email: user.email,
      password: ""
    });
    this.modo = "editar";
  }
  cerrarModal() {
    this.modo = null;
    this.editingUser = null;
    this.fieldErrors = {};
  }
  guardarCreacion() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    const body = this.createForm.getRawValue();
    this.saving = true;
    this.fieldErrors = {};
    this.usuarioService.crear(body).subscribe({
      next: (nuevo) => {
        this.usuarios = [...this.usuarios, nuevo];
        this.success = `${this.roleLabels[nuevo.role]} ${nuevo.name} creado.`;
        this.saving = false;
        this.cerrarModal();
      },
      error: (err) => this.manejarErrorGuardado(err, "Error al crear el operario")
    });
  }
  guardarEdicion() {
    if (this.editForm.invalid || !this.editingUser) {
      this.editForm.markAllAsTouched();
      return;
    }
    const body = this.editForm.getRawValue();
    this.saving = true;
    this.fieldErrors = {};
    this.usuarioService.actualizar(this.editingUser.id, body).subscribe({
      next: (actualizado) => {
        this.reemplazarEnLista(actualizado);
        this.success = `Datos de ${actualizado.name} actualizados.`;
        this.saving = false;
        this.cerrarModal();
      },
      error: (err) => this.manejarErrorGuardado(err, "Error al actualizar el operario")
    });
  }
  cambiarEstado(user, nuevoEstado) {
    const accion = nuevoEstado === "ACTIVE" ? "activar" : "desactivar";
    if (!confirm(`\xBFSeguro que quieres ${accion} a ${user.name}?`)) {
      return;
    }
    this.limpiarMensajes();
    this.usuarioService.cambiarEstado(user.id, nuevoEstado).subscribe({
      next: (actualizado) => {
        this.reemplazarEnLista(actualizado);
        const estado = this.statusLabels[actualizado.status].toLowerCase();
        this.success = `${actualizado.name} qued\xF3 ${estado}.`;
      },
      error: (err) => {
        this.error = apiErrorMessage(err, `Error al ${accion} al usuario`);
      }
    });
  }
  manejarErrorGuardado(err, fallback) {
    this.error = apiErrorMessage(err, fallback);
    this.fieldErrors = apiFieldErrors(err);
    this.saving = false;
  }
  reemplazarEnLista(usuario) {
    this.usuarios = this.usuarios.map((u) => u.id === usuario.id ? usuario : u);
  }
  limpiarMensajes() {
    this.error = "";
    this.success = "";
    this.fieldErrors = {};
  }
  static {
    this.\u0275fac = function UsuariosComponent_Factory(t) {
      return new (t || _UsuariosComponent)(\u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(CurrentUserService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosComponent, selectors: [["app-usuarios"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [[1, "usuarios-container"], [1, "page-header"], [1, "pill"], [1, "accent"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "table-card"], [1, "usuarios-table"], [1, "right"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "user-cell"], [1, "avatar"], [1, "user-text"], [1, "user-name"], ["class", "self-tag", 4, "ngIf"], [1, "user-email"], [1, "badge", 3, "ngClass"], [1, "actions", "right"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-success btn-sm", 3, "click", 4, "ngIf"], [1, "self-tag"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["colspan", "4", 1, "empty"], [1, "loading"], [1, "modal-backdrop"], [1, "modal"], [1, "modal-subtitle"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], ["type", "text", "formControlName", "name", "placeholder", "Nombre completo", 1, "form-control"], ["class", "hint", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "usuario@email.com", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", 1, "form-control"], ["formControlName", "role", 1, "form-control"], ["value", "OPERATOR"], ["value", "ADMIN"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outlined", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "hint"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "D\xE9jalo vac\xEDo para no cambiarla", 1, "form-control"]], template: function UsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "span", 2);
        \u0275\u0275text(4, "Solo administradores");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Gesti\xF3n de ");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, "operarios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 4);
        \u0275\u0275text(10, "Crea cuentas, actualiza credenciales y controla el acceso.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function UsuariosComponent_Template_button_click_11_listener() {
          return ctx.iniciarCreacion();
        });
        \u0275\u0275text(12, "+ Nuevo operario");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, UsuariosComponent_p_13_Template, 2, 1, "p", 6)(14, UsuariosComponent_p_14_Template, 2, 1, "p", 7)(15, UsuariosComponent_div_15_Template, 15, 2, "div", 8)(16, UsuariosComponent_p_16_Template, 2, 0, "p", 9)(17, UsuariosComponent_div_17_Template, 38, 9, "div", 10)(18, UsuariosComponent_div_18_Template, 30, 10, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modo === "crear");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modo === "editar" && ctx.editingUser);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.usuarios-container[_ngcontent-%COMP%] {\n  padding: 2rem 2rem 3rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.75rem;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: .3rem .9rem;\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-secondary-soft);\n  color: var(--pk-secondary);\n  font-size: .72rem;\n  font-weight: 600;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%] {\n  margin: .75rem 0 .4rem;\n  font-size: 1.85rem;\n}\n.accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--pk-primary) 0%,\n      var(--pk-secondary) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--pk-ink-soft);\n  font-size: .9rem;\n}\n.alert[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--pk-surface);\n  border: 1px solid var(--pk-border);\n  border-radius: var(--pk-radius-lg);\n  overflow: hidden;\n}\n.usuarios-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.usuarios-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: var(--pk-surface-soft);\n  color: var(--pk-ink-muted);\n  font-size: .72rem;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-align: left;\n  text-transform: uppercase;\n}\n.usuarios-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--pk-border);\n  color: var(--pk-ink);\n  font-size: .92rem;\n  vertical-align: middle;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.empty[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n  text-align: center;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .85rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: var(--pk-secondary-soft);\n  color: var(--pk-secondary);\n  font-weight: 700;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n  font-size: .82rem;\n}\n.self-tag[_ngcontent-%COMP%] {\n  margin-left: .35rem;\n  padding: .1rem .5rem;\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-tertiary-soft);\n  color: var(--pk-tertiary);\n  font-size: .68rem;\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n}\n.loading[_ngcontent-%COMP%] {\n  color: var(--pk-ink-muted);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: rgba(8, 14, 27, .7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 2rem;\n  border: 1px solid var(--pk-border);\n  background: var(--pk-surface);\n  border-radius: var(--pk-radius-lg);\n  box-shadow: var(--pk-shadow-lg);\n}\n.modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  margin: .3rem 0 1.5rem;\n  color: var(--pk-ink-muted);\n  font-size: .88rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.1rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: .75rem;\n  margin-top: 1.75rem;\n}\n@media (max-width: 860px) {\n  .usuarios-container[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .table-card[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .usuarios-table[_ngcontent-%COMP%] {\n    min-width: 620px;\n  }\n}\n/*# sourceMappingURL=usuarios.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosComponent, { className: "UsuariosComponent", filePath: "src\\app\\feat\\usuarios\\usuarios.component.ts", lineNumber: 24 });
})();
export {
  UsuariosComponent
};
//# sourceMappingURL=chunk-RRXWPKSI.js.map
