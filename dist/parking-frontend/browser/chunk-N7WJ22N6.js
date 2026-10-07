import {
  ActivatedRoute,
  AuthService,
  Router
} from "./chunk-JQV24IP3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MVMDVPNC.js";
import {
  apiErrorMessage,
  apiFieldErrors
} from "./chunk-52CLLQCX.js";
import {
  CommonModule,
  NgIf,
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
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KGFZV2CR.js";

// src/app/component/parking-radar/parking-radar.component.ts
var ParkingRadarComponent = class _ParkingRadarComponent {
  static {
    this.\u0275fac = function ParkingRadarComponent_Factory(t) {
      return new (t || _ParkingRadarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRadarComponent, selectors: [["app-parking-radar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 107, vars: 0, consts: [["aria-hidden", "true", 1, "radar"], ["viewBox", "0 0 400 240", "xmlns", "http://www.w3.org/2000/svg"], ["id", "floor-grid", "patternUnits", "userSpaceOnUse", "width", "20", "height", "20"], ["d", "M 20 0 L 0 0 0 20", "fill", "none", "stroke", "#131c2e", "stroke-width", "0.8"], ["id", "neon-cyan", "x", "-20%", "y", "-20%", "width", "140%", "height", "140%"], ["stdDeviation", "3", "result", "blur"], ["in", "blur"], ["in", "SourceGraphic"], ["id", "neon-amber", "x", "-20%", "y", "-20%", "width", "140%", "height", "140%"], ["stdDeviation", "2.5", "result", "blur"], ["id", "road-grad", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#0b121e"], ["offset", "50%", "stop-color", "#111a2c"], ["offset", "100%", "stop-color", "#0b121e"], ["id", "car-cyan"], ["x", "-14", "y", "-28", "width", "28", "height", "56", "rx", "6", "fill", "#00f0ff", "opacity", "0.15", "filter", "url(#neon-cyan)"], ["x", "-13", "y", "-26", "width", "26", "height", "52", "rx", "5", "fill", "#0f2b3e", "stroke", "#00f0ff", "stroke-width", "1.5"], ["d", "M -9 -10 L 9 -10 L 7 -2 L -7 -2 Z", "fill", "#00f0ff", "opacity", "0.6"], ["d", "M -8 16 L 8 16 L 7 10 L -7 10 Z", "fill", "#003544", "opacity", "0.8", "stroke", "#00f0ff", "stroke-width", "0.8"], ["x", "-7", "y", "-2", "width", "14", "height", "12", "rx", "2", "fill", "#081824", "stroke", "#00d8e6", "stroke-width", "0.8"], ["points", "-11,-26 -7,-26 -9,-22", "fill", "#ffffff", "filter", "url(#neon-cyan)"], ["points", "11,-26 7,-26 9,-22", "fill", "#ffffff", "filter", "url(#neon-cyan)"], ["points", "-12,-26 -18,-50 -2,-50 -8,-26", "fill", "#00f0ff", "opacity", "0.25"], ["points", "12,-26 18,-50 2,-50 8,-26", "fill", "#00f0ff", "opacity", "0.25"], ["x1", "-10", "y1", "26", "x2", "-4", "y2", "26", "stroke", "#ff6b6b", "stroke-width", "2"], ["x1", "4", "y1", "26", "x2", "10", "y2", "26", "stroke", "#ff6b6b", "stroke-width", "2"], ["id", "car-parked"], ["x", "-13", "y", "-26", "width", "26", "height", "52", "rx", "5", "fill", "#1e293b", "stroke", "#64748b", "stroke-width", "1.2"], ["d", "M -9 -10 L 9 -10 L 7 -1 L -7 -1 Z", "fill", "#38bdf8", "opacity", "0.35"], ["x", "-7", "y", "-1", "width", "14", "height", "11", "rx", "2", "fill", "#0f172a"], ["points", "-10,-26 -7,-26 -9,-23", "fill", "#cbd5e1"], ["points", "10,-26 7,-26 9,-23", "fill", "#cbd5e1"], ["id", "moto-amber"], ["cx", "0", "cy", "0", "r", "12", "fill", "#ffb95f", "opacity", "0.15", "filter", "url(#neon-amber)"], ["x", "-4", "y", "-14", "width", "8", "height", "28", "rx", "4", "fill", "#4a3200", "stroke", "#ffb95f", "stroke-width", "1.2"], ["x1", "-9", "y1", "-8", "x2", "9", "y2", "-8", "stroke", "#ffd59e", "stroke-width", "2"], ["cx", "-9", "cy", "-8", "r", "1.5", "fill", "#ffddb8"], ["cx", "9", "cy", "-8", "r", "1.5", "fill", "#ffddb8"], ["cx", "0", "cy", "0", "r", "5", "fill", "#2a1700", "stroke", "#ffb95f", "stroke-width", "1"], ["d", "M -3 -2 L 3 -2 L 2 1 L -2 1 Z", "fill", "#ffddb8"], ["points", "0,-14 -10,-35 10,-35", "fill", "#ffb95f", "opacity", "0.25"], ["cx", "0", "cy", "14", "r", "1.5", "fill", "#ff6b6b"], ["width", "100%", "height", "100%", "fill", "url(#floor-grid)"], ["x", "145", "y", "0", "width", "110", "height", "240", "fill", "url(#road-grad)"], ["x1", "145", "y1", "0", "x2", "145", "y2", "240", "stroke", "#1e293b", "stroke-width", "2"], ["x1", "255", "y1", "0", "x2", "255", "y2", "240", "stroke", "#1e293b", "stroke-width", "2"], ["fill", "#00f0ff", "opacity", "0.3"], ["points", "200,60 193,48 207,48"], ["x", "198", "y", "38", "width", "4", "height", "12"], ["points", "172,175 165,187 179,187"], ["x", "170", "y", "185", "width", "4", "height", "12"], ["x1", "185", "y1", "0", "x2", "185", "y2", "240", "stroke", "#00f0ff", "stroke-width", "1.5", "stroke-dasharray", "8 8", "opacity", "0.35", 1, "animated-lane"], ["x", "25", "y", "25", "width", "105", "height", "40", "rx", "3", "fill", "#08101d", "stroke", "#1e293b", "stroke-width", "1.5", "stroke-dasharray", "4 2"], ["x", "35", "y", "48", "fill", "#64748b", "font-size", "9", "font-weight", "600"], ["cx", "120", "cy", "45", "r", "4", 1, "sensor-dot", "sensor-m1"], ["x", "25", "y", "75", "width", "105", "height", "40", "rx", "3", "fill", "#08101d", "stroke", "#1e293b", "stroke-width", "1.5"], ["x", "35", "y", "98", "fill", "#64748b", "font-size", "9", "font-weight", "600"], ["cx", "120", "cy", "95", "r", "4", "fill", "#ff6b6b"], ["transform", "translate(75, 95) rotate(-90)"], ["href", "#moto-amber"], ["x", "15", "y", "130", "width", "115", "height", "48", "rx", "3", "fill", "#08101d", "stroke", "#1e293b", "stroke-width", "1.5"], ["x", "25", "y", "158", "fill", "#64748b", "font-size", "9", "font-weight", "600"], ["cx", "120", "cy", "154", "r", "4", "fill", "#ff6b6b"], ["transform", "translate(72, 154) rotate(-90)"], ["href", "#car-parked"], ["x", "15", "y", "185", "width", "115", "height", "48", "rx", "3", "fill", "#08101d", "stroke", "#00f0ff", "stroke-opacity", "0.5", "stroke-width", "1.2"], ["x", "25", "y", "213", "fill", "#00f0ff", "font-size", "9", "font-weight", "600", "opacity", "0.8"], ["cx", "120", "cy", "209", "r", "4", "fill", "#00f0ff", "filter", "url(#neon-cyan)", 1, "sensor-dot"], ["x", "270", "y", "20", "width", "115", "height", "48", "rx", "3", "fill", "#08101d", "stroke", "#1e293b", "stroke-width", "1.5"], ["x", "355", "y", "48", "fill", "#64748b", "font-size", "9", "font-weight", "600"], ["cx", "280", "cy", "44", "r", "4", "fill", "#ff6b6b"], ["transform", "translate(325, 44) rotate(90)"], ["x", "270", "y", "96", "width", "115", "height", "48", "rx", "3", "fill", "#08101d", "stroke", "#00f0ff", "stroke-opacity", "0.6", "stroke-width", "1.2", "stroke-dasharray", "6 3"], ["x", "346", "y", "124", "fill", "#00f0ff", "font-size", "8", "font-weight", "700", "opacity", "0.9"], ["cx", "280", "cy", "120", "r", "4", 1, "sensor-dot", "sensor-b2"], ["stroke", "#00f0ff", "stroke-width", "1.5", "opacity", "0.6"], ["x1", "285", "y1", "102", "x2", "295", "y2", "102"], ["x1", "285", "y1", "102", "x2", "285", "y2", "112"], ["x1", "285", "y1", "138", "x2", "295", "y2", "138"], ["x1", "285", "y1", "138", "x2", "285", "y2", "128"], ["x", "270", "y", "172", "width", "115", "height", "48", "rx", "3", "fill", "#08101d", "stroke", "#1e293b", "stroke-width", "1.5"], ["x", "355", "y", "200", "fill", "#64748b", "font-size", "9", "font-weight", "600"], ["cx", "280", "cy", "196", "r", "4", "fill", "#ff6b6b"], ["transform", "translate(325, 196) rotate(90)"], [1, "moving-car"], ["href", "#car-cyan"], [1, "moving-moto"], ["transform", "translate(14, 10)"], ["width", "118", "height", "14", "rx", "7", "fill", "#0f172a", "opacity", "0.9", "stroke", "#1e293b", "stroke-width", "0.8"], ["cx", "10", "cy", "7", "r", "3", "fill", "#65f2b5", "filter", "url(#neon-amber)"], ["x", "18", "y", "10.5", "fill", "#b9cacb", "font-size", "7.5", "font-weight", "700", "letter-spacing", "0.5"]], template: function ParkingRadarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1)(2, "defs")(3, "pattern", 2);
        \u0275\u0275element(4, "path", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "filter", 4);
        \u0275\u0275element(6, "feGaussianBlur", 5);
        \u0275\u0275elementStart(7, "feMerge");
        \u0275\u0275element(8, "feMergeNode", 6)(9, "feMergeNode", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "filter", 8);
        \u0275\u0275element(11, "feGaussianBlur", 9);
        \u0275\u0275elementStart(12, "feMerge");
        \u0275\u0275element(13, "feMergeNode", 6)(14, "feMergeNode", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "linearGradient", 10);
        \u0275\u0275element(16, "stop", 11)(17, "stop", 12)(18, "stop", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "g", 14);
        \u0275\u0275element(20, "rect", 15)(21, "rect", 16)(22, "path", 17)(23, "path", 18)(24, "rect", 19)(25, "polygon", 20)(26, "polygon", 21)(27, "polygon", 22)(28, "polygon", 23)(29, "line", 24)(30, "line", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "g", 26);
        \u0275\u0275element(32, "rect", 27)(33, "path", 28)(34, "rect", 29)(35, "polygon", 30)(36, "polygon", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "g", 32);
        \u0275\u0275element(38, "circle", 33)(39, "rect", 34)(40, "line", 35)(41, "circle", 36)(42, "circle", 37)(43, "circle", 38)(44, "path", 39)(45, "polygon", 40)(46, "circle", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(47, "rect", 42)(48, "rect", 43)(49, "line", 44)(50, "line", 45);
        \u0275\u0275elementStart(51, "g", 46);
        \u0275\u0275element(52, "polygon", 47)(53, "rect", 48)(54, "polygon", 49)(55, "rect", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "line", 51)(57, "rect", 52);
        \u0275\u0275elementStart(58, "text", 53);
        \u0275\u0275text(59, "M-01");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "circle", 54)(61, "rect", 55);
        \u0275\u0275elementStart(62, "text", 56);
        \u0275\u0275text(63, "M-02");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "circle", 57);
        \u0275\u0275elementStart(65, "g", 58);
        \u0275\u0275element(66, "use", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275element(67, "rect", 60);
        \u0275\u0275elementStart(68, "text", 61);
        \u0275\u0275text(69, "A-01");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "circle", 62);
        \u0275\u0275elementStart(71, "g", 63);
        \u0275\u0275element(72, "use", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "rect", 65);
        \u0275\u0275elementStart(74, "text", 66);
        \u0275\u0275text(75, "A-02 LIBRE");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "circle", 67)(77, "rect", 68);
        \u0275\u0275elementStart(78, "text", 69);
        \u0275\u0275text(79, "B-01");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "circle", 70);
        \u0275\u0275elementStart(81, "g", 71);
        \u0275\u0275element(82, "use", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "rect", 72);
        \u0275\u0275elementStart(84, "text", 73);
        \u0275\u0275text(85, "B-02 ASIGNADA");
        \u0275\u0275elementEnd();
        \u0275\u0275element(86, "circle", 74);
        \u0275\u0275elementStart(87, "g", 75);
        \u0275\u0275element(88, "line", 76)(89, "line", 77)(90, "line", 78)(91, "line", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275element(92, "rect", 80);
        \u0275\u0275elementStart(93, "text", 81);
        \u0275\u0275text(94, "B-03");
        \u0275\u0275elementEnd();
        \u0275\u0275element(95, "circle", 82);
        \u0275\u0275elementStart(96, "g", 83);
        \u0275\u0275element(97, "use", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "g", 84);
        \u0275\u0275element(99, "use", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "g", 86);
        \u0275\u0275element(101, "use", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "g", 87);
        \u0275\u0275element(103, "rect", 88)(104, "circle", 89);
        \u0275\u0275elementStart(105, "text", 90);
        \u0275\u0275text(106, "SISTEMA DE C\xC1MARAS");
        \u0275\u0275elementEnd()()()();
      }
    }, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 14rem;\n}\n.radar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border: 1px solid rgba(0, 240, 255, .2);\n  border-radius: var(--pk-radius-lg);\n  box-shadow: 0 12px 32px rgba(0, 240, 255, .10);\n}\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #090e17;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    sans-serif;\n}\n@keyframes _ngcontent-%COMP%_sensorPulse {\n  0%, 100% {\n    opacity: .3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: .9;\n    transform: scale(1.15);\n  }\n}\n.sensor-dot[_ngcontent-%COMP%] {\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_sensorPulse 2.4s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_carParkFlow {\n  0% {\n    transform: translate(200px, -40px) rotate(180deg);\n  }\n  25% {\n    transform: translate(200px, 70px) rotate(180deg);\n  }\n  45% {\n    transform: translate(200px, 120px) rotate(180deg);\n  }\n  60% {\n    transform: translate(200px, 120px) rotate(90deg);\n  }\n  75% {\n    transform: translate(270px, 120px) rotate(90deg);\n  }\n  85% {\n    transform: translate(320px, 120px) rotate(90deg);\n  }\n  96%, 100% {\n    transform: translate(325px, 120px) rotate(90deg);\n  }\n}\n.moving-car[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_carParkFlow 11s infinite cubic-bezier(.45, .05, .55, .95);\n}\n@keyframes _ngcontent-%COMP%_motoParkFlow {\n  0% {\n    transform: translate(165px, 280px) rotate(0deg);\n  }\n  30% {\n    transform: translate(165px, 120px) rotate(0deg);\n  }\n  50% {\n    transform: translate(165px, 50px) rotate(0deg);\n  }\n  65% {\n    transform: translate(165px, 45px) rotate(-90deg);\n  }\n  80% {\n    transform: translate(85px, 45px) rotate(-90deg);\n  }\n  95%, 100% {\n    transform: translate(75px, 45px) rotate(-90deg);\n  }\n}\n.moving-moto[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_motoParkFlow 9.5s infinite cubic-bezier(.4, 0, .6, 1);\n  animation-delay: 1.5s;\n}\n@keyframes _ngcontent-%COMP%_baySensorB2 {\n  0%, 72% {\n    fill: #00f0ff;\n    filter: url(#neon-cyan);\n  }\n  75%, 100% {\n    fill: #ff6b6b;\n    filter: none;\n  }\n}\n.sensor-b2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_baySensorB2 11s infinite;\n}\n@keyframes _ngcontent-%COMP%_baySensorM1 {\n  0%, 75% {\n    fill: #ffb95f;\n    filter: url(#neon-amber);\n  }\n  78%, 100% {\n    fill: #ff6b6b;\n    filter: none;\n  }\n}\n.sensor-m1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_baySensorM1 9.5s infinite;\n  animation-delay: 1.5s;\n}\n@keyframes _ngcontent-%COMP%_laneDash {\n  to {\n    stroke-dashoffset: -32;\n  }\n}\n.animated-lane[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_laneDash 2s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .sensor-dot[_ngcontent-%COMP%], .moving-car[_ngcontent-%COMP%], .moving-moto[_ngcontent-%COMP%], .sensor-b2[_ngcontent-%COMP%], .sensor-m1[_ngcontent-%COMP%], .animated-lane[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .moving-car[_ngcontent-%COMP%] {\n    transform: translate(325px, 120px) rotate(90deg);\n  }\n  .moving-moto[_ngcontent-%COMP%] {\n    transform: translate(75px, 45px) rotate(-90deg);\n  }\n}\n/*# sourceMappingURL=parking-radar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRadarComponent, { className: "ParkingRadarComponent", filePath: "src\\app\\component\\parking-radar\\parking-radar.component.ts", lineNumber: 10 });
})();

// src/app/feat/auth/login/login.component.ts
function LoginComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, " El correo es requerido ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, " Ingresa un correo v\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["email"]);
  }
}
function LoginComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, " La contrase\xF1a es requerida ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["password"]);
  }
}
function LoginComponent_p_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function LoginComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "sensor_door");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.form = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    this.loading = false;
    this.error = "";
    this.fieldErrors = {};
    this.showPassword = false;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    this.fieldErrors = {};
    const body = this.form.getRawValue();
    this.authService.login(body).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") ?? "/dashboard";
        void this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.error = apiErrorMessage(err, "Credenciales inv\xE1lidas");
        this.fieldErrors = apiFieldErrors(err);
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 19, consts: [[1, "auth-page"], [1, "showcase"], [1, "glow", "glow-cyan"], [1, "glow", "glow-amber"], ["src", "assets/logo.png", "alt", "Parking System", 1, "logo"], [1, "showcase-body"], [1, "status-pill"], [1, "ping"], [1, "showcase-footer"], [1, "accent"], [1, "form-side"], [1, "form-inner"], [1, "form-hint"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email", 1, "form-label"], [1, "input-wrap"], [1, "material-symbols-outlined", "leading-icon"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "usuario@email.com", "autocomplete", "username", 1, "form-control", "has-icon"], ["class", "hint", 4, "ngIf"], ["for", "password", 1, "form-label"], ["id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-control", "has-icon", "has-action", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], [1, "material-symbols-outlined"], ["class", "alert alert-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "submit", 3, "disabled"], ["class", "shimmer", 4, "ngIf"], ["class", "material-symbols-outlined spin", 4, "ngIf"], [1, "submit-text"], ["class", "material-symbols-outlined", 4, "ngIf"], [1, "auth-footer"], [1, "support"], [1, "hint"], [1, "alert", "alert-error"], [1, "shimmer"], [1, "material-symbols-outlined", "spin"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "img", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "app-parking-radar");
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275element(8, "span", 7);
        \u0275\u0275text(9, " Monitoreo en tiempo real ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8)(11, "h1");
        \u0275\u0275text(12, "Acceso ");
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14, "Inteligente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "Control de sensores telem\xE1ticos y navegaci\xF3n sin fricci\xF3n a tu bah\xEDa asignada.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "section", 10)(18, "div", 11)(19, "h2");
        \u0275\u0275text(20, "Iniciar sesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 12);
        \u0275\u0275text(22, "Entra con tu correo corporativo para gestionar el estacionamiento.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "form", 13);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_23_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(24, "div", 14)(25, "label", 15);
        \u0275\u0275text(26, "Correo electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 16)(28, "span", 17);
        \u0275\u0275text(29, "badge");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, LoginComponent_span_31_Template, 2, 0, "span", 19)(32, LoginComponent_span_32_Template, 2, 0, "span", 19)(33, LoginComponent_span_33_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 14)(35, "label", 20);
        \u0275\u0275text(36, "Contrase\xF1a de seguridad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 16)(38, "span", 17);
        \u0275\u0275text(39, "lock_clock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 21);
        \u0275\u0275elementStart(41, "button", 22);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_41_listener() {
          return ctx.togglePassword();
        });
        \u0275\u0275elementStart(42, "span", 23);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(44, LoginComponent_span_44_Template, 2, 0, "span", 19)(45, LoginComponent_span_45_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, LoginComponent_p_46_Template, 2, 1, "p", 24);
        \u0275\u0275elementStart(47, "button", 25);
        \u0275\u0275template(48, LoginComponent_span_48_Template, 1, 0, "span", 26)(49, LoginComponent_span_49_Template, 2, 0, "span", 27);
        \u0275\u0275elementStart(50, "span", 28);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd();
        \u0275\u0275template(52, LoginComponent_span_52_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "footer", 30)(54, "p");
        \u0275\u0275text(55, "\xBFNo tienes cuenta? P\xEDdele acceso a un administrador.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 31)(57, "span", 23);
        \u0275\u0275text(58, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " Soporte 24/7 ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_9_0;
        \u0275\u0275advance(23);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("email")) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors["email"]);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("invalid", ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched));
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.showPassword ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "visibility_off" : "visibility", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("password")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.form.get("password")) == null ? null : tmp_9_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors["password"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.loading ? "Validando acceso..." : "Ingresar al parqueadero");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ParkingRadarComponent], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  min-height: 100vh;\n}\n.showcase[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 2.5rem 3rem;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      900px 500px at 15% 0%,\n      rgba(0, 240, 255, .07),\n      transparent 60%),\n    radial-gradient(\n      700px 500px at 90% 90%,\n      rgba(255, 185, 95, .06),\n      transparent 60%),\n    var(--pk-surface-soft);\n  border-right: 1px solid var(--pk-border);\n}\n.glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(90px);\n  pointer-events: none;\n}\n.glow-cyan[_ngcontent-%COMP%] {\n  top: -6rem;\n  left: -6rem;\n  width: 22rem;\n  height: 22rem;\n  background: rgba(0, 240, 255, .10);\n  animation: _ngcontent-%COMP%_breathe 6s ease-in-out infinite;\n}\n.glow-amber[_ngcontent-%COMP%] {\n  bottom: -8rem;\n  right: -6rem;\n  width: 20rem;\n  height: 20rem;\n  background: rgba(255, 185, 95, .08);\n  animation: _ngcontent-%COMP%_breathe 8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_breathe {\n  0%, 100% {\n    opacity: .5;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 190px;\n  height: auto;\n}\n.showcase-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\napp-parking-radar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n  height: 19rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .45rem;\n  padding: .3rem 1rem;\n  border-radius: var(--pk-radius-pill);\n  background: var(--pk-surface-high);\n  color: var(--pk-tertiary);\n  font-size: .72rem;\n  font-weight: 600;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.ping[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--pk-tertiary);\n  animation: _ngcontent-%COMP%_ping 1.6s cubic-bezier(0, 0, .2, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_ping {\n  0% {\n    box-shadow: 0 0 0 0 rgba(101, 242, 181, .6);\n  }\n  100% {\n    box-shadow: 0 0 0 7px rgba(101, 242, 181, 0);\n  }\n}\n.showcase-footer[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 30rem;\n}\n.showcase-footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 800;\n  line-height: 1.1;\n}\n.accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--pk-primary) 0%,\n      var(--pk-secondary) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.showcase-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: .6rem;\n  color: var(--pk-ink-soft);\n  font-size: .95rem;\n  line-height: 1.5;\n}\n.form-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem 3rem;\n}\n.form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 800;\n  letter-spacing: -.02em;\n}\n.form-hint[_ngcontent-%COMP%] {\n  margin: .5rem 0 2rem;\n  color: var(--pk-ink-soft);\n  font-size: .9rem;\n  line-height: 1.5;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.leading-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: .75rem;\n  color: var(--pk-ink-muted);\n  font-size: 20px;\n  pointer-events: none;\n}\n.form-control.has-icon[_ngcontent-%COMP%] {\n  padding-left: 2.6rem;\n}\n.form-control.has-action[_ngcontent-%COMP%] {\n  padding-right: 2.9rem;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: .4rem;\n  display: grid;\n  place-items: center;\n  padding: .35rem;\n  border: 0;\n  border-radius: var(--pk-radius-sm);\n  background: transparent;\n  color: var(--pk-ink-muted);\n  cursor: pointer;\n  transition: color .15s ease;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--pk-primary);\n}\n.toggle-password[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.submit[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  margin-top: .4rem;\n  padding: .95rem 1rem;\n  font-size: .95rem;\n}\n.submit-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.submit[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 20px;\n}\n.shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 50%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-12deg);\n  animation: _ngcontent-%COMP%_sweep 2.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_sweep {\n  0% {\n    transform: translateX(-120%) skewX(-12deg);\n  }\n  60%, 100% {\n    transform: translateX(260%) skewX(-12deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--pk-border);\n  color: var(--pk-ink-muted);\n  font-size: .8rem;\n}\n.support[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .3rem;\n}\n.support[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--pk-primary);\n  font-size: 16px;\n}\n@media (max-width: 1024px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .showcase[_ngcontent-%COMP%] {\n    align-items: center;\n    gap: 1.25rem;\n    padding: 2rem 1.5rem;\n    text-align: center;\n    border-right: 0;\n    border-bottom: 1px solid var(--pk-border);\n  }\n  .logo[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  app-parking-radar[_ngcontent-%COMP%] {\n    height: 13rem;\n  }\n  .showcase-footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  .showcase-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: .88rem;\n  }\n  .form-side[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem 2.5rem;\n  }\n  .form-inner[_ngcontent-%COMP%] {\n    max-width: 420px;\n  }\n  .form-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .form-hint[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 560px) {\n  .showcase[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .logo[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  app-parking-radar[_ngcontent-%COMP%] {\n    height: 10.5rem;\n  }\n  .showcase-footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.45rem;\n  }\n  .form-side[_ngcontent-%COMP%] {\n    padding: 1.75rem 1rem 2.5rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .glow[_ngcontent-%COMP%], .ping[_ngcontent-%COMP%], .shimmer[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\feat\\auth\\login\\login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-N7WJ22N6.js.map
