import SectionTemplate from '../components/SectionTemplate';
import React, { useState, useRef } from 'react';
import { thStyle, tdStyle, resourceImgStyle, resourceLinkStyle } from '../styles/styles';

const Vaccines15mo = {
  element: { "--mobile-header-offset": "0px", "--progress-value": "21%" },
  "@media screen and (min-width: 1200px)": {
    ".dfe-block.dfe-block--width-wide": { maxWidth: "150%" }
  },
  "@media screen and (min-width: 992px)": {
    ".dfe-block.dfe-block--width-wide": {
      position: "relative",
      width: "calc(100vw - 2rem)",
      zIndex: 10
    }
  },
  ".dfe-block.dfe-block--width-full_width, .dfe-block.dfe-block--width-wide": {
    backgroundColor: "#fff",
    padding: "1rem 0"
  },
  ".dfe-block--cdcmodule": { clear: "both", paddingTop: "1rem" },
  ".dfe-block": { marginBottom: "1rem" },
  "*, ::after, ::before": { boxSizing: "border-box" },
  ".dfe-section": {
    fontFamily: "var(--fonts-nunito)",
    fontSize: "1rem",
    lineHeight: 1.5
  },
  ".container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl": {
    "--bs-gutter-x": "1.5rem",
    "--bs-gutter-y": "0"
  },
  body: {
    fontSize: "var(--bs-body-font-size)",
    fontWeight: "var(--bs-body-font-weight)",
    fontFamily: "var(--bs-body-font-family)",
    lineHeight: "var(--bs-body-line-height)",
    color: "var(--bs-body-color)",
    textAlign: "var(--bs-body-text-align)",
    WebkitTextSizeAdjust: "100%"
  },
  ":root": {
    "--progress-value": "0",
    "--mobile-header-offset": "0px",
    "--colors-cdc-blue": "#0057B7",
    "--colors-cdc-text": "#1C1D1F",
    "--colors-link-blue": "#005EA2",
    "--colors-blue-dark": "#0b4778",
    "--colors-blue-darkest": "#112f4e",
    "--colors-cyan-5": "#F4FBFC",
    "--colors-cyan-10": "#EFF9FA",
    "--colors-cyan-15": "#DFF2F6",
    "--colors-cyan-40v": "#009EC1",
    "--colors-cyan-50v": "#0081a1",
    "--colors-cyan-60v": "#007A99",
    "--colors-green-cool-10": "#DBEBDE",
    "--colors-green-cool-10-60": "rgba(219, 235, 222, 0.6)",
    "--colors-green-cool-50": "#4D8055",
    "--colors-green-cool-5": "#ECF3EC",
    "--colors-gold-gold-5": "#FEF0C8",
    "--colors-gold-gold-5-60": "rgba(254, 240, 200, 0.6)",
    "--colors-gold-gold-40": "#C2850C",
    "--colors-yellow-yellow-5": "#FAF3D1",
    "--colors-orange-warm-5": "#FBF0E8",
    "--colors-orange-warm-10": "#FBE0D0",
    "--colors-orange-warm-50": "#B25225",
    "--colors-red-cool-10": "#F3E1E4",
    "--colors-red-cool-10-70": "rgba(243, 225, 228, 0.7)",
    "--colors-red-cool-50": "#CD425B",
    "--colors-red-cool-60": "#9E394B",
    "--colors-red-warm-10": "#F4E3DB",
    "--colors-gray-cool-3": "#F5F6F7",
    "--colors-gray-cool-10": "#DFE1E2",
    "--colors-gray-cool-40": "#8d9297",
    "--colors-gray-cool-70": "#3D4551",
    "--gradients-gradient-1":
      "linear-gradient(90deg, #0057B7 0%, #0081a1 100%)",
    "--gradients-gradient-2":
      "linear-gradient(90deg, #005EA2 0%, #0081a1 100%)",
    "--gradients-gradient-3":
      "linear-gradient(90deg, #EAF7FA 0%, #0081a1 100%)",
    "--gradients-gradient-4":
      "linear-gradient(90deg, #0B4778 0%, #0081a1 100%)",
    "--gradients-gradient-1-reverse":
      "linear-gradient(90deg, #0081a1 0%, #0057B7 100%)",
    "--gradients-gradient-1-180":
      "linear-gradient(180deg, #0057B7 0%, #0081a1 100%)",
    "--gradients-gradient-2-180":
      "linear-gradient(180deg, #005EA2 0%, #0081a1 100%)",
    "--gradients-gradient-3-180":
      "linear-gradient(180deg, #EAF7FA 0%, #0081a1 100%)",
    "--gradients-gradient-4-180":
      "linear-gradient(180deg, #0B4778 0%, #0081a1 100%)",
    "--gradients-gradient-1-180-reverse":
      "linear-gradient(180deg, #0081a1 0%, #0057B7 100%)",
    "--dropshadows-dropshadow-1": "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    "--borders-radius": "6px",
    "--borders-width": "1px",
    "--borders-color": "transparent",
    "--defaults-spacing": "1rem",
    "--defaults-fontsize": "18px",
    "--fonts-nunito": "'Nunito',sans-serif",
    "--fonts-poppins": "'Poppins',sans-serif",
    "--icons-cdc": "'cdc-icons'",
    "--icons-cdc-fa": "'cdc-fa'",
    "--breakpoint-xs": "0",
    "--breakpoint-sm": "576px",
    "--breakpoint-md": "768px",
    "--breakpoint-lg": "992px",
    "--breakpoint-xl": "1200px",
    "--breakpoint-xxl": "1400px",
    "--breakpoint-xxxl": "1560px",
    "--bs-breakpoint-xs": "0",
    "--bs-breakpoint-sm": "576px",
    "--bs-breakpoint-md": "768px",
    "--bs-breakpoint-lg": "992px",
    "--bs-breakpoint-xl": "1200px",
    "--bs-breakpoint-xxl": "1400px",
    fontSize: "var(--bs-root-font-size)"
  },
  ':root, [data-bs-theme="light"]': {
    "--bs-blue": "#0d6efd",
    "--bs-indigo": "#6610f2",
    "--bs-purple": "#6f42c1",
    "--bs-pink": "#d63384",
    "--bs-red": "#dc3545",
    "--bs-orange": "#fd7e14",
    "--bs-yellow": "#ffc107",
    "--bs-green": "#198754",
    "--bs-teal": "#20c997",
    "--bs-cyan": "#0dcaf0",
    "--bs-black": "#000",
    "--bs-white": "#fff",
    "--bs-gray": "#6c757d",
    "--bs-gray-dark": "#343a40",
    "--bs-gray-100": "#f8f9fa",
    "--bs-gray-200": "#e9ecef",
    "--bs-gray-300": "#dee2e6",
    "--bs-gray-400": "#ced4da",
    "--bs-gray-500": "#adb5bd",
    "--bs-gray-600": "#6c757d",
    "--bs-gray-700": "#495057",
    "--bs-gray-800": "#343a40",
    "--bs-gray-900": "#212529",
    "--bs-primary": "#0d6efd",
    "--bs-secondary": "#6c757d",
    "--bs-success": "#198754",
    "--bs-info": "#0dcaf0",
    "--bs-warning": "#ffc107",
    "--bs-danger": "#dc3545",
    "--bs-light": "#f8f9fa",
    "--bs-dark": "#212529",
    "--bs-primary-rgb": "13,110,253",
    "--bs-secondary-rgb": "108,117,125",
    "--bs-success-rgb": "25,135,84",
    "--bs-info-rgb": "13,202,240",
    "--bs-warning-rgb": "255,193,7",
    "--bs-danger-rgb": "220,53,69",
    "--bs-light-rgb": "248,249,250",
    "--bs-dark-rgb": "33,37,41",
    "--bs-primary-text-emphasis": "#052c65",
    "--bs-secondary-text-emphasis": "#2b2f32",
    "--bs-success-text-emphasis": "#0a3622",
    "--bs-info-text-emphasis": "#055160",
    "--bs-warning-text-emphasis": "#664d03",
    "--bs-danger-text-emphasis": "#58151c",
    "--bs-light-text-emphasis": "#495057",
    "--bs-dark-text-emphasis": "#495057",
    "--bs-primary-bg-subtle": "#cfe2ff",
    "--bs-secondary-bg-subtle": "#e2e3e5",
    "--bs-success-bg-subtle": "#d1e7dd",
    "--bs-info-bg-subtle": "#cff4fc",
    "--bs-warning-bg-subtle": "#fff3cd",
    "--bs-danger-bg-subtle": "#f8d7da",
    "--bs-light-bg-subtle": "#fcfcfd",
    "--bs-dark-bg-subtle": "#ced4da",
    "--bs-primary-border-subtle": "#9ec5fe",
    "--bs-secondary-border-subtle": "#c4c8cb",
    "--bs-success-border-subtle": "#a3cfbb",
    "--bs-info-border-subtle": "#9eeaf9",
    "--bs-warning-border-subtle": "#ffe69c",
    "--bs-danger-border-subtle": "#f1aeb5",
    "--bs-light-border-subtle": "#e9ecef",
    "--bs-dark-border-subtle": "#adb5bd",
    "--bs-white-rgb": "255,255,255",
    "--bs-black-rgb": "0,0,0",
    "--bs-font-sans-serif": '"Nunito",sans-serif',
    "--bs-font-monospace":
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    "--bs-gradient":
      "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
    "--bs-root-font-size": "18px",
    "--bs-body-font-family": "var(--bs-font-sans-serif)",
    "--bs-body-font-size": "1rem",
    "--bs-body-font-weight": "400",
    "--bs-body-line-height": "1.5",
    "--bs-body-color": "#1c1d1f",
    "--bs-body-color-rgb": "28,29,31",
    "--bs-body-bg": "#fff",
    "--bs-body-bg-rgb": "255,255,255",
    "--bs-emphasis-color": "#000",
    "--bs-emphasis-color-rgb": "0,0,0",
    "--bs-secondary-color": "rgba(28, 29, 31, 0.75)",
    "--bs-secondary-color-rgb": "28,29,31",
    "--bs-secondary-bg": "#e9ecef",
    "--bs-secondary-bg-rgb": "233,236,239",
    "--bs-tertiary-color": "rgba(28, 29, 31, 0.5)",
    "--bs-tertiary-color-rgb": "28,29,31",
    "--bs-tertiary-bg": "#f8f9fa",
    "--bs-tertiary-bg-rgb": "248,249,250",
    "--bs-heading-color": "#1c1d1f",
    "--bs-link-color": "#0d6efd",
    "--bs-link-color-rgb": "13,110,253",
    "--bs-link-decoration": "underline",
    "--bs-link-hover-color": "#0a58ca",
    "--bs-link-hover-color-rgb": "10,88,202",
    "--bs-code-color": "#d63384",
    "--bs-highlight-bg": "#fff3cd",
    "--bs-border-width": "1px",
    "--bs-border-style": "solid",
    "--bs-border-color": "#DFE1E2",
    "--bs-border-color-translucent": "rgba(0, 0, 0, 0.175)",
    "--bs-border-radius": "0.333rem",
    "--bs-border-radius-sm": "0.25rem",
    "--bs-border-radius-lg": "0.5rem",
    "--bs-border-radius-xl": "1rem",
    "--bs-border-radius-xxl": "2rem",
    "--bs-border-radius-2xl": "var(--bs-border-radius-xxl)",
    "--bs-border-radius-pill": "50rem",
    "--bs-box-shadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    "--bs-box-shadow-sm": "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
    "--bs-box-shadow-lg": "0 1rem 3rem rgba(0, 0, 0, 0.175)",
    "--bs-box-shadow-inset": "inset 0 1px 2px rgba(0, 0, 0, 0.075)",
    "--bs-focus-ring-width": "0.25rem",
    "--bs-focus-ring-opacity": "0.25",
    "--bs-focus-ring-color": "rgba(13, 110, 253, 0.25)",
    "--bs-form-valid-color": "#198754",
    "--bs-form-valid-border-color": "#198754",
    "--bs-form-invalid-color": "#dc3545",
    "--bs-form-invalid-border-color": "#dc3545"
  }
}

const thStyleVaccines = {
  border: `${Vaccines15mo[":root"]["--bs-border-width"] || "1px"} solid ${Vaccines15mo[":root"]["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  backgroundColor: Vaccines15mo[":root"]["--colors-cyan-5"] || "#F4FBFC",
  textAlign: "center",
  fontFamily: Vaccines15mo[".dfe-section"]?.fontFamily || "'Nunito',sans-serif",
  fontSize: Vaccines15mo[".dfe-section"]?.fontSize || "1rem",
  lineHeight: Vaccines15mo[".dfe-section"]?.lineHeight || 1.5,
};

const tdStyleVaccines = {
  border: `${Vaccines15mo[":root"]["--bs-border-width"] || "1px"} solid ${Vaccines15mo[":root"]["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  fontFamily: Vaccines15mo[".dfe-section"]?.fontFamily || "'Nunito',sans-serif",
  fontSize: Vaccines15mo[".dfe-section"]?.fontSize || "1rem",
  lineHeight: Vaccines15mo[".dfe-section"]?.lineHeight || 1.5,
  backgroundColor: Vaccines15mo[":root"]["--colors-gray-cool-3"] || "#F5F6F7",
};

const scheduleColors = {
  yellow: Vaccines15mo[":root"]["--colors-yellow-yellow-5"] || "#FAF3D1",    // schedule-yellow
  green: Vaccines15mo[":root"]["--colors-green-cool-10"] || "#DBEBDE",       // schedule-green
  purple: "#E9E6F6",                                                         // schedule-purple (CDC uses a light purple, you may adjust this)
  blue: Vaccines15mo[":root"]["--bs-primary-bg-subtle"] || "#CFE2FF",        // schedule-blue
  gray: Vaccines15mo[":root"]["--colors-gray-cool-3"] || "#F5F6F7",          // schedule-gray
  checkers: Vaccines15mo[":root"]["--colors-cyan-5"] || "#F4FBFC",           // schedule-checkers
};

function getTdStyle(className) {
  let bg = tdStyleVaccines.backgroundColor;
  if (className?.includes("schedule-yellow")) bg = scheduleColors.yellow;
  else if (className?.includes("schedule-green")) bg = scheduleColors.green;
  else if (className?.includes("schedule-purple")) bg = scheduleColors.purple;
  else if (className?.includes("schedule-blue")) bg = scheduleColors.blue;
  else if (className?.includes("schedule-gray")) bg = scheduleColors.gray;
  else if (className?.includes("schedule-checkers")) bg = scheduleColors.checkers;
  return { ...tdStyleVaccines, backgroundColor: bg };
};

const converted = {
  element: { "--mobile-header-offset": "0px", "--progress-value": "50%" },
  "*, ::after, ::before": { boxSizing: "border-box" },
  ".dfe-section": {
    fontFamily: "var(--fonts-nunito)",
    fontSize: "1rem",
    lineHeight: 1.5
  },
  ".container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl": {
    "--bs-gutter-x": "1.5rem",
    "--bs-gutter-y": "0"
  },
  body: {
    fontSize: "var(--bs-body-font-size)",
    fontWeight: "var(--bs-body-font-weight)",
    fontFamily: "var(--bs-body-font-family)",
    lineHeight: "var(--bs-body-line-height)",
    color: "var(--bs-body-color)",
    textAlign: "var(--bs-body-text-align)",
    WebkitTextSizeAdjust: "100%"
  },
  ":root": {
    "--progress-value": "0",
    "--mobile-header-offset": "0px",
    "--colors-cdc-blue": "#0057B7",
    "--colors-cdc-text": "#1C1D1F",
    "--colors-link-blue": "#005EA2",
    "--colors-blue-dark": "#0b4778",
    "--colors-blue-darkest": "#112f4e",
    "--colors-cyan-5": "#F4FBFC",
    "--colors-cyan-10": "#EFF9FA",
    "--colors-cyan-15": "#DFF2F6",
    "--colors-cyan-40v": "#009EC1",
    "--colors-cyan-50v": "#0081a1",
    "--colors-cyan-60v": "#007A99",
    "--colors-green-cool-10": "#DBEBDE",
    "--colors-green-cool-10-60": "rgba(219, 235, 222, 0.6)",
    "--colors-green-cool-50": "#4D8055",
    "--colors-green-cool-5": "#ECF3EC",
    "--colors-gold-gold-5": "#FEF0C8",
    "--colors-gold-gold-5-60": "rgba(254, 240, 200, 0.6)",
    "--colors-gold-gold-40": "#C2850C",
    "--colors-yellow-yellow-5": "#FAF3D1",
    "--colors-orange-warm-5": "#FBF0E8",
    "--colors-orange-warm-10": "#FBE0D0",
    "--colors-orange-warm-50": "#B25225",
    "--colors-red-cool-10": "#F3E1E4",
    "--colors-red-cool-10-70": "rgba(243, 225, 228, 0.7)",
    "--colors-red-cool-50": "#CD425B",
    "--colors-red-cool-60": "#9E394B",
    "--colors-red-warm-10": "#F4E3DB",
    "--colors-gray-cool-3": "#F5F6F7",
    "--colors-gray-cool-10": "#DFE1E2",
    "--colors-gray-cool-40": "#8d9297",
    "--colors-gray-cool-70": "#3D4551",
    "--gradients-gradient-1":
      "linear-gradient(90deg, #0057B7 0%, #0081a1 100%)",
    "--gradients-gradient-2":
      "linear-gradient(90deg, #005EA2 0%, #0081a1 100%)",
    "--gradients-gradient-3":
      "linear-gradient(90deg, #EAF7FA 0%, #0081a1 100%)",
    "--gradients-gradient-4":
      "linear-gradient(90deg, #0B4778 0%, #0081a1 100%)",
    "--gradients-gradient-1-reverse":
      "linear-gradient(90deg, #0081a1 0%, #0057B7 100%)",
    "--gradients-gradient-1-180":
      "linear-gradient(180deg, #0057B7 0%, #0081a1 100%)",
    "--gradients-gradient-2-180":
      "linear-gradient(180deg, #005EA2 0%, #0081a1 100%)",
    "--gradients-gradient-3-180":
      "linear-gradient(180deg, #EAF7FA 0%, #0081a1 100%)",
    "--gradients-gradient-4-180":
      "linear-gradient(180deg, #0B4778 0%, #0081a1 100%)",
    "--gradients-gradient-1-180-reverse":
      "linear-gradient(180deg, #0081a1 0%, #0057B7 100%)",
    "--dropshadows-dropshadow-1": "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    "--borders-radius": "6px",
    "--borders-width": "1px",
    "--borders-color": "transparent",
    "--defaults-spacing": "1rem",
    "--defaults-fontsize": "18px",
    "--fonts-nunito": "'Nunito',sans-serif",
    "--fonts-poppins": "'Poppins',sans-serif",
    "--icons-cdc": "'cdc-icons'",
    "--icons-cdc-fa": "'cdc-fa'",
    "--breakpoint-xs": "0",
    "--breakpoint-sm": "576px",
    "--breakpoint-md": "768px",
    "--breakpoint-lg": "992px",
    "--breakpoint-xl": "1200px",
    "--breakpoint-xxl": "1400px",
    "--breakpoint-xxxl": "1560px",
    "--bs-breakpoint-xs": "0",
    "--bs-breakpoint-sm": "576px",
    "--bs-breakpoint-md": "768px",
    "--bs-breakpoint-lg": "992px",
    "--bs-breakpoint-xl": "1200px",
    "--bs-breakpoint-xxl": "1400px",
    fontSize: "var(--bs-root-font-size)"
  },
  ':root, [data-bs-theme="light"]': {
    "--bs-blue": "#0d6efd",
    "--bs-indigo": "#6610f2",
    "--bs-purple": "#6f42c1",
    "--bs-pink": "#d63384",
    "--bs-red": "#dc3545",
    "--bs-orange": "#fd7e14",
    "--bs-yellow": "#ffc107",
    "--bs-green": "#198754",
    "--bs-teal": "#20c997",
    "--bs-cyan": "#0dcaf0",
    "--bs-black": "#000",
    "--bs-white": "#fff",
    "--bs-gray": "#6c757d",
    "--bs-gray-dark": "#343a40",
    "--bs-gray-100": "#f8f9fa",
    "--bs-gray-200": "#e9ecef",
    "--bs-gray-300": "#dee2e6",
    "--bs-gray-400": "#ced4da",
    "--bs-gray-500": "#adb5bd",
    "--bs-gray-600": "#6c757d",
    "--bs-gray-700": "#495057",
    "--bs-gray-800": "#343a40",
    "--bs-gray-900": "#212529",
    "--bs-primary": "#0d6efd",
    "--bs-secondary": "#6c757d",
    "--bs-success": "#198754",
    "--bs-info": "#0dcaf0",
    "--bs-warning": "#ffc107",
    "--bs-danger": "#dc3545",
    "--bs-light": "#f8f9fa",
    "--bs-dark": "#212529",
    "--bs-primary-rgb": "13,110,253",
    "--bs-secondary-rgb": "108,117,125",
    "--bs-success-rgb": "25,135,84",
    "--bs-info-rgb": "13,202,240",
    "--bs-warning-rgb": "255,193,7",
    "--bs-danger-rgb": "220,53,69",
    "--bs-light-rgb": "248,249,250",
    "--bs-dark-rgb": "33,37,41",
    "--bs-primary-text-emphasis": "#052c65",
    "--bs-secondary-text-emphasis": "#2b2f32",
    "--bs-success-text-emphasis": "#0a3622",
    "--bs-info-text-emphasis": "#055160",
    "--bs-warning-text-emphasis": "#664d03",
    "--bs-danger-text-emphasis": "#58151c",
    "--bs-light-text-emphasis": "#495057",
    "--bs-dark-text-emphasis": "#495057",
    "--bs-primary-bg-subtle": "#cfe2ff",
    "--bs-secondary-bg-subtle": "#e2e3e5",
    "--bs-success-bg-subtle": "#d1e7dd",
    "--bs-info-bg-subtle": "#cff4fc",
    "--bs-warning-bg-subtle": "#fff3cd",
    "--bs-danger-bg-subtle": "#f8d7da",
    "--bs-light-bg-subtle": "#fcfcfd",
    "--bs-dark-bg-subtle": "#ced4da",
    "--bs-primary-border-subtle": "#9ec5fe",
    "--bs-secondary-border-subtle": "#c4c8cb",
    "--bs-success-border-subtle": "#a3cfbb",
    "--bs-info-border-subtle": "#9eeaf9",
    "--bs-warning-border-subtle": "#ffe69c",
    "--bs-danger-border-subtle": "#f1aeb5",
    "--bs-light-border-subtle": "#e9ecef",
    "--bs-dark-border-subtle": "#adb5bd",
    "--bs-white-rgb": "255,255,255",
    "--bs-black-rgb": "0,0,0",
    "--bs-font-sans-serif": '"Nunito",sans-serif',
    "--bs-font-monospace":
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    "--bs-gradient":
      "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
    "--bs-root-font-size": "18px",
    "--bs-body-font-family": "var(--bs-font-sans-serif)",
    "--bs-body-font-size": "1rem",
    "--bs-body-font-weight": "400",
    "--bs-body-line-height": "1.5",
    "--bs-body-color": "#1c1d1f",
    "--bs-body-color-rgb": "28,29,31",
    "--bs-body-bg": "#fff",
    "--bs-body-bg-rgb": "255,255,255",
    "--bs-emphasis-color": "#000",
    "--bs-emphasis-color-rgb": "0,0,0",
    "--bs-secondary-color": "rgba(28, 29, 31, 0.75)",
    "--bs-secondary-color-rgb": "28,29,31",
    "--bs-secondary-bg": "#e9ecef",
    "--bs-secondary-bg-rgb": "233,236,239",
    "--bs-tertiary-color": "rgba(28, 29, 31, 0.5)",
    "--bs-tertiary-color-rgb": "28,29,31",
    "--bs-tertiary-bg": "#f8f9fa",
    "--bs-tertiary-bg-rgb": "248,249,250",
    "--bs-heading-color": "#1c1d1f",
    "--bs-link-color": "#0d6efd",
    "--bs-link-color-rgb": "13,110,253",
    "--bs-link-decoration": "underline",
    "--bs-link-hover-color": "#0a58ca",
    "--bs-link-hover-color-rgb": "10,88,202",
    "--bs-code-color": "#d63384",
    "--bs-highlight-bg": "#fff3cd",
    "--bs-border-width": "1px",
    "--bs-border-style": "solid",
    "--bs-border-color": "#DFE1E2",
    "--bs-border-color-translucent": "rgba(0, 0, 0, 0.175)",
    "--bs-border-radius": "0.333rem",
    "--bs-border-radius-sm": "0.25rem",
    "--bs-border-radius-lg": "0.5rem",
    "--bs-border-radius-xl": "1rem",
    "--bs-border-radius-xxl": "2rem",
    "--bs-border-radius-2xl": "var(--bs-border-radius-xxl)",
    "--bs-border-radius-pill": "50rem",
    "--bs-box-shadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    "--bs-box-shadow-sm": "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
    "--bs-box-shadow-lg": "0 1rem 3rem rgba(0, 0, 0, 0.175)",
    "--bs-box-shadow-inset": "inset 0 1px 2px rgba(0, 0, 0, 0.075)",
    "--bs-focus-ring-width": "0.25rem",
    "--bs-focus-ring-opacity": "0.25",
    "--bs-focus-ring-color": "rgba(13, 110, 253, 0.25)",
    "--bs-form-valid-color": "#198754",
    "--bs-form-valid-border-color": "#198754",
    "--bs-form-invalid-color": "#dc3545",
    "--bs-form-invalid-border-color": "#dc3545"
  }
}


const sections = [
  {
    title: "HPI",
    content:(
      <>
        <h2>HPI Notes</h2>
<h3>Follow the general HPI but here are the additional details:</h3>
      <ol>
        <li>
          <strong>Chief Complaint</strong>
          <ul>
            <li>Brief statement of primary problem (including duration) that caused family to seek medical attention</li>
          </ul>
        </li>
        <li>
          <strong>History of Present Illness</strong>
          <ul>
            <li>Initial statement identifying the historian, that person’s relationship to patient and their reliability</li>
            <li>Age, sex, +/-race, and other important identifying information about patient</li>
            <li>Concise chronological account of the illness, including any previous treatment with full description of symptoms (pertinent positives) and pertinent negatives.</li>
            <li>It belongs here if it relates to the differential diagnosis for the chief complaint.</li>
          </ul>
        </li>
        <li>
          <strong>Past Medical/Surgical/Hospitalization History</strong>
          <ul>
            <li>Major Medical illnesses: Give examples like asthma? Eczema? Etc…</li>
            <li>Major Surgical illnesses-list operations and dates</li>
            <li>Trauma: Fractures, lacerations</li>
            <li>Previous hospital admissions with hospital name, dates, length of stay, and diagnoses</li>
            <li>Current medications/herbs/supplements</li>
            <li>Known allergies and the specific associated reaction (not just drugs)</li>
            <li>Immunization status: be specific, not just up to date</li>
            <li>
              Pregnancy and Birth History
              <ul>
                <li>Maternal health during pregnancy: Bleeding, trauma, hypertension, fevers, infectious illnesses, medications, drugs, alcohol, smoking, rupture of membranes</li>
                <li>Gestational age at delivery</li>
                <li>Labor and delivery: Length of labor, fetal distress, type of delivery (vaginal, cesarean section), use of forceps, anesthesia, breech delivery</li>
                <li>Neonatal period: Apgar scores, breathing problems, use of oxygen, need for intensive care, hyperbilirubinemia, birth injuries, feeding problems, length of stay, birth weight</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Developmental History</strong>
          <ul>
            <li>Ages at which milestones were achieved and current developmental abilities - smiling, rolling, sitting alone, crawling, walking, running, 1st word, toilet training, riding tricycle, etc (see developmental charts)</li>
            <li>School-present grade, specific problems, interaction with peers</li>
            <li>Behavior-enuresis, temper tantrums, thumb sucking, pica, nightmares etc.</li>
          </ul>
        </li>
        <li>
          <strong>Feeding/Diet History</strong>
          <ul>
            <li>Breast/bottle fed, types of formula, frequency and amount, reasons for any changes in formula, how they are mixing the formula, +/- fluoride use</li>
            <li>Solids: When introduced, problems created by specific types</li>
            <li>Older children: 24-hour recall or “usual foods” during the day—be specific on timings of all meals and snacks; ask specifically about liquid intake (milk, juice, soda, water)</li>
          </ul>
        </li>
        <li>
          <strong>Review of Systems</strong> (usually very abbreviated for infants and younger children)
          <ul>
            <li>Weight - recent changes, weight at birth</li>
            <li>Skin and Lymph - rashes, adenopathy, lumps, bruising/bleeding, pigmentation changes</li>
            <li>HEENT - headaches, concussions, unusual head shape, strabismus, conjunctivitis, visual problems, hearing, ear infections, draining ears, cold and sore throats, tonsillitis, mouth breathing, snoring, apnea, oral thrush, epistaxis, caries</li>
            <li>Cardiac – cyanosis, dyspnea, heart murmurs, exercise tolerance, squatting, chest pain, palpitations</li>
            <li>Respiratory - pneumonia, bronchiolitis, wheezing, chronic cough, sputum, hemoptysis</li>
            <li>GI - stool color and character, diarrhea, constipation, vomiting, hematemesis, jaundice, abdominal pain, colic, appetite</li>
            <li>GU - frequency, dysuria, hematuria, discharge, abdominal pains, quality of urinary stream, polyuria, previous infections, facial edema</li>
            <li>Musculoskeletal - joint pains or swelling, fevers, scoliosis, myalgia or weakness, injuries, gait changes</li>
            <li>Pubertal - secondary sexual characteristics, menses and menstrual problems, pregnancies, sexual activity</li>
            <li>Allergy - urticaria, hay fever, allergic rhinitis, asthma, eczema, drug reactions</li>
          </ul>
        </li>
        <li>
          <strong>Family History</strong>
          <ul>
            <li>Ask about siblings, parents, and grandparents</li>
            <li>Illnesses - allergy and asthma, abnormal bleeding, epilepsy cardiac disease, hypertension, strokes, diabetes, cancer,</li>
            <li>Hearing problems, congenital anomalies, chromosomal problems, growth problems, consanguinity</li>
          </ul>
        </li>
        <li>
          <strong>Social History</strong>
          <ul>
            <li>Where they live and if the house/apartment/trailer has smoke detectors</li>
            <li>Living situation and conditions - daycare, safety issues</li>
            <li>Composition of family and who lives in the home with the child</li>
            <li>Pets</li>
            <li>Guns/weapons-locked? Do kids know where it is?</li>
            <li>Occupation of parents</li>
            <li>Social determinants of Health Screening: food insecurity, housing concerns, clothing needs, +/- intimate partner violence</li>
            <li>Immigration history—which country they came from, when did they come?</li>
            <li>Environmental exposures such as lead, smoking, BPA</li>
            <li>HEADDS exam for teens (See community section for it!)</li>
          </ul>
        </li>
      </ol>
      <p>Same as General HPI for PE, Labs, Imaging, and Assessment</p>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>PCP SmartText</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyle}>ACA AMB ADHD FOLLOW UP VISIT</td></tr>
          <tr><td style={tdStyle}>ACA AMB NEW PATIENT VISIT</td></tr>
          <tr><td style={tdStyle}>ACA AMB ASTHMA FOLLOW UP</td></tr>
          <tr><td style={tdStyle}>ACA AMB FOLLOW UP/URGENT CARE NOTE</td></tr>
          <tr><td style={tdStyle}>ACA AMB OBESITY VISIT NOTE</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC NEWBORN/2 WEEK EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 4 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 6 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 9 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 12 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 15 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 18 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 2 MO WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 24-30 MO WCC</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 3 YR WELL CHILD</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 4 YR WCC</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 5 YR WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 6-8 YR WELL CHILD EXAM</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC 9-11 YR WELL CHILD</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC ADOLECENT MALE WCC</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC ADOLESCENT WELL CHILD - FEMALE</td></tr>
          <tr><td style={tdStyle}>ACA AMB SPORTS PHYSICAL</td></tr>
          <tr><td style={tdStyle}>ACA AMB RPC PRE-OP/PRE-SEDATION</td></tr>
        </tbody>
      </table>

      <h3>PCP Smart Phrases</h3><p>
        .palmtelephone
      </p><p>
        .dentalHPI
      </p>

      <h3>Useful Smart Phrases</h3><p>
        .diagmed
      </p><p>
        .tcoscreensynopsis
      </p>

      <h3>PCP Pools</h3><p>
        p pc pcp nurse
      </p><p>
        p pc pcp front office
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={thStyle}>PCP SmartSets</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style={tdStyle}>PC PCP IMMUNIZARORS</td></tr>
        <tr><td style={tdStyle}>PC PCP URGENT CARE</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 0-1 MONTH</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CP"D STEPS 2 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 4 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 6 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 9 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 12 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 15 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 18 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 24 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 30 MONTHS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 3 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 4 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 5 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 6-8 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 9-10 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 11 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 12-15 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 16 YEAR</td></tr>
        <tr><td style={tdStyle}>PC PCP WELL CHILD THSTEPS 17-21 YEARS</td></tr>
        <tr><td style={tdStyle}>PC PCP FTT/OBESITY</td></tr>
      </tbody>
    </table>

      </>
    )
  },
  {
      title: "Milestones",
      content: (
        <>  
          <h2>Well-Child Milestones</h2>
          <p>The CDC has done a great job associating each finding with a picture/video on their website. Highly recommend using it when preparing in advance and discussing with your patients!  </p><div style={{ display: 'flex', gap: '5%' }}><ul style={{ flex: 1 }}>
            <li>2 months</li>
            <li>4 months</li>
            <li>6 months</li>
            <li>9 months</li>
            <li>12 months</li>
            <li>15 months</li>
            <li>18 months</li>
          </ul>
          <ul style={{ flex: 1 }}>
            <li>24 months</li>
            <li>30 months</li>
            <li>3 years</li>
            <li>4 years</li>
            <li>5 years</li>
            <li>Yearly until age 18</li>
          </ul>
          </div>
          <p>Use the CDC Milestone Tracker app for tracking developmental milestones.</p>
          <img src="/milestones.jpg" alt="Milestone Tracker" style={{ width: '100%' }} />
          <p>For more information, visit the <a href="https://www.cdc.gov/ncbddd/actearly/milestones-app.html" target="_blank" rel="noopener noreferrer">CDC Milestone Tracker</a>.</p>
          <a href="https://www.cdc.gov/ncbddd/actearly/milestones-app.html" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://play-lh.googleusercontent.com/F_ey5NpRYgiEpYgT3Uexf6sSRhIl7l-gOXu_HSokDcWCpI2Dt89pkK_4JTqtKMheQk7U=w480-h960" alt="CDC Milestone Tracker" style={resourceImgStyle} />
          <span>CDC Milestone Tracker</span>
        </a>
        </>
      )

  },
  {
    title: "Vaccinations",
    content: (
      <>
    <div className="dfe-block__inner">
      <div className="dfe-block dfe-block--cdcmodule cdc_raw_html">
        <strong>
          <a id="table-1" className="onThisPageAnchor" title="" />
          Legend
        </strong>
        <table>
          <tbody>
            <tr>
              <td style={getTdStyle("schedule-yellow")} className="schedule-yellow tc-width-7" />
              <td style={tdStyleVaccines} className="ps-1">Range of recommended ages for all children</td>
              <td style={tdStyleVaccines} />
              <td style={getTdStyle("schedule-green")} className="schedule-green tc-width-7" />
              <td style={tdStyleVaccines} className="ps-1">
                Range of recommended ages for catch-up vaccination
              </td>
              <td style={tdStyleVaccines} />
              <td style={getTdStyle("schedule-purple")} className="schedule-purple tc-width-7" />
              <td style={tdStyleVaccines} className="ps-1">
                Range of recommended ages for certain high-risk groups or
                populations
              </td>
              <td style={tdStyleVaccines} />
              <td style={getTdStyle("schedule-checkers")} className="schedule-checkers tc-width-7" />
              <td style={tdStyleVaccines} className="ps-1">
                Recommended vaccination can begin in this age group
              </td>
              <td style={tdStyleVaccines} />
              <td style={getTdStyle("schedule-blue")} className="schedule-blue tc-width-7" />
              <td style={tdStyleVaccines} className="ps-1">
                Vaccination is based on shared clinical decision making
              </td>
              <td style={tdStyleVaccines} />
              <td style={getTdStyle("schedule-gray")} className="schedule-gray tc-width-7" />
              <td style={tdStyleVaccines} className="ps-1">No Guidance/Not Applicable</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <strong>
            These recommendations must be read with the notes that follow.
          </strong>{" "}
          For those who fall behind or start late, provide catch-up vaccination at
          the earliest opportunity as indicated by the green bars. To determine
          minimum intervals between doses, see the catch-up schedule (
          <a href="/vaccines/hcp/imz-schedules/child-adolescent-catch-up.html">
            Table 2
          </a>
          ).
        </div>
        <div className="schedules-tbl-wrapper">
          <table className="table table-schedule table-bordered">
            <thead className="sticky-headers">
              <tr>
                <th style={thStyleVaccines} id="vacc-tbl1" className="header-slate">
                  Vaccine and other immunizing agents
                </th>
                <th style={thStyleVaccines} id="birth" className="header-slate text-align-center">
                  Birth
                </th>
                <th style={thStyleVaccines} id="mo1" className="header-slate text-align-center">
                  1 mo
                </th>
                <th style={thStyleVaccines} id="mos2" className="header-slate text-align-center">
                  2 mos
                </th>
                <th style={thStyleVaccines} id="mos4" className="header-slate text-align-center">
                  4 mos
                </th>
                <th style={thStyleVaccines}
                  id="mos6"
                  className="header-slate text-align-center"
                  colSpan={4}
                >
                  6 mos
                </th>
                <th style={thStyleVaccines} id="mos9" className="header-slate text-align-center">
                  9 mos
                </th>
                <th style={thStyleVaccines} id="mos12" className="header-slate text-align-center">
                  12 mos
                </th>
                <th style={thStyleVaccines} id="mos15" className="header-slate text-align-center">
                  15 mos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={thStyleVaccines} id="rsv-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-nirsevimab">
                    Respiratory syncytial virus
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/rsv/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (RSV-mAb [Nirsevimab])
                </th>
                <td style={getTdStyle("schedule-yellow right-border-none")}
                  className="schedule-yellow right-border-none"
                  title="Range of recommended ages for all children"
                  colSpan={5}
                  headers="rsv-tbl1 birth mo1 mos2 mos4 mos6"
                >
                  1 dose depending on maternal RSV vaccination status, See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-nirsevimab">
                    Notes
                  </a>
                </td>
                <td style={getTdStyle("schedule-yellow left-border-none right-border-none")}
                  className="schedule-yellow left-border-none right-border-none"
                  title="Range of recommended ages for all children"
                  headers="rsv-tbl1 mos4 mos6"
                />
                <td style={getTdStyle("schedule-yellow left-border-none")}
                  className="schedule-yellow left-border-none"
                  title="Range of recommended ages for all children"
                  headers="rsv-tbl1 mos6"
                />
                <td style={getTdStyle("schedule-purple right-border-none")}
                  className="schedule-purple right-border-none"
                  title="Range of recommended ages for certain high-risk groups or populations"
                  headers="rsv-tbl1 mos6"
                />
                <td style={getTdStyle("schedule-purple left-border-none")}
                  className="schedule-purple left-border-none"
                  title="Range of recommended ages for certain high-risk groups or populations"
                  colSpan={3}
                  headers="rsv-tbl1 mos6 mos9 mos12 mos15"
                >
                  1 dose (8 through 19 months), See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-nirsevimab">
                    Notes
                  </a>
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="hepb-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepb">
                    Hepatitis B
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/hepb/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (HepB)
                </th>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="hepb-tbl1 birth"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={2}
                  headers="hepb-tbl1 mo1 mos2"
                >
                  ←2<sup>nd</sup> dose→
                </td>
                <td style={getTdStyle("schedule-green")}
                  className="schedule-green"
                  title="Range of recommended ages for catch-up vaccination"
                  headers="hepb-tbl1 4mos"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={7}
                  headers="hepb-tbl1 mos6 mos9 mos12 mos15"
                >
                  ←3<sup>rd</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="rotavirus-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rotavirus">
                    Rotavirus (RV)
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/rotavirus/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  RV1 (2-dose series); RV5 (3-dose series)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="rotavirus-tbl1 birth mo1"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="rotavirus-tbl1 mos2"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="rotavirus-tbl1 mos4"
                >
                  2<sup>nd</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={4}
                  headers="rotavirus-tbl1 mos6"
                >
                  See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rotavirus">
                    Notes
                  </a>
                </td>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={3}
                  headers="rotavirus-tbl1 mos9"
                />
              </tr>
              <tr>
                <th style={thStyleVaccines} id="dtap-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-dtap">
                    Diphtheria, tetanus, &amp; acellular pertussis
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/dtap-tdap-td/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (DTaP: &lt;7 yrs)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="dtap-tbl1 birth mo1"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="dtap-tbl1 mos2"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="dtap-tbl1 mos4"
                >
                  2<sup>nd</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={4}
                  headers="dtap-tbl1 mos6"
                >
                  3<sup>rd</sup> dose
                </td>
                <td style={getTdStyle("schedule-green")}
                  className="schedule-green"
                  title="Range of recommended ages for catch-up vaccination"
                  colSpan={2}
                  headers="dtap-tbl1 mos9 mos12"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="dtap-tbl1 mos15"
                >
                  ←4<sup>th</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="hib-ttbl1" headers="vacc-tbl1">
                  <em>
                    <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hib">
                      Haemophilus influenzae
                    </a>
                  </em>
                  <a href="#hib"> type b</a>{" "}
                  <a
                    href="/vaccines/vpd/hib/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (Hib)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="hib-tbl1 birth mo1"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="hib-tbl1 mos2"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="hib-tbl1 mos4"
                >
                  2<sup>nd</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={4}
                  headers="hib-tbl1 mos6"
                >
                  See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hib">
                    Notes
                  </a>
                </td>
                <td style={getTdStyle("schedule-green")}
                  className="schedule-green"
                  title="Range of recommended ages for catch-up vaccination"
                  headers="hib-tbl1 mos9"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={2}
                  headers="hib-tbl1 mos12 mos15"
                >
                  ←3<sup>rd</sup> or 4<sup>th</sup> dose,
                  <br />
                  See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hib">
                    Notes
                  </a>
                  →
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="pneumo-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-pneumo">
                    Pneumococcal conjugate
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/pneumo/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (PCV15, PCV20)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="pneumo-tbl1 birth mo1"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="pneumo-tbl1 mos2"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="pneumo-tbl1 mos4"
                >
                  2<sup>nd</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={4}
                  headers="pneumo-tbl1 mos6"
                >
                  3<sup>rd</sup> dose
                </td>
                <td style={getTdStyle("schedule-green")}
                  className="schedule-green"
                  title="Range of recommended ages for catch-up vaccination"
                  headers="pneumo-tbl1 mos9"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={2}
                  headers="pneumo-tbl1 mos12 mos15"
                >
                  ←4<sup>th</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="polio-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-polio">
                    Inactivated poliovirus
                  </a>
                  <br />
                  (IPV)
                  <a
                    href="/vaccines/vpd/polio/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="polio-tbl1 birth mo1"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="polio-tbl1 mos2"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="polio-tbl1 mos4"
                >
                  2<sup>nd</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={7}
                  headers="polio-tbl1 mos6 mos9 mos12 mos15"
                >
                  ←3<sup>rd</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="covid-19-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-covid-19">
                    COVID-19{" "}
                  </a>
                  <a
                    href="/vaccines/covid-19/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (1vCOV-mRNA, 1vCOV-aPS)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={4}
                  headers="covid-19-tbl1 birth mo1 mos2 mos4"
                />
                <td style={getTdStyle("schedule-blue")}
                  className="schedule-blue"
                  title="Shared clinical decision making"
                  colSpan={7}
                  headers="covid-19-tbl1 mos6 mos9 mos12 mos15"
                >
                  See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-covid-19">
                    Notes
                  </a>
                </td>
              </tr>
              <tr>
                <th id="iiv-tbl1" className="dotted-border-bottom" headers="vacc">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-flu">
                    Influenza
                  </a>{" "}
                  (IIV3, ccIIV3){" "}
                  <a
                    href="/vaccines/vpd/flu/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                </th>
                <td style={getTdStyle("schedule-gray dotted-border-bottom")}
                  className="schedule-gray dotted-border-bottom"
                  title="No Guidance/Not Applicable"
                  colSpan={4}
                  headers="iiv-tbl1 birth mo1 mos2 mos4"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={7}
                  headers="iiv-tbl1 mos6 mos9 mos12 mos15"
                >
                  1 or 2 doses annually
                </td>
              </tr>
              <tr>
                <th id="laiv-tbl1" className="padding-zero" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-flu">
                    Influenza
                  </a>{" "}
                  (LAIV3){" "}
                  <a
                    href="/vaccines/vpd/flu/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={11}
                  headers="laiv-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
              </tr>
              <tr>
                <th id="mmr-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mmr">
                    Measles, mumps, rubella
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/mmr/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (MMR)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={4}
                  headers="mmr-tbl1 birth mo1 mos2 mos4"
                />
                <td style={getTdStyle("schedule-purple")}
                  className="schedule-purple"
                  title="Range of recommended ages for certain high-risk groups or populations"
                  colSpan={5}
                  headers="mmr-tbl1 mos6 mos9"
                >
                  See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mmr">
                    Notes
                  </a>
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for certain high-risk groups"
                  colSpan={2}
                  headers="mmr-tbl1 mos12 mos15"
                >
                  ←1<sup>st</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="varicella-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-varicella">
                    Varicella
                  </a>{" "}
                  <a href="/vaccines/vpd/varicella/hcp/index.html">
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (VAR)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={9}
                  headers="varicella-tbl1 birth mo1 mos2 mos4 mos6 mos9"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={2}
                  headers="varicella-tbl1 mos12 mos15"
                >
                  ←1<sup>st</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="hepa-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepa">
                    Hepatitis A
                  </a>{" "}
                  <a href="/vaccines/vpd/hepa/hcp/index.html">
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (HepA)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={4}
                  headers="hepa-tbl1 birth mo1 mos2 mos4"
                />
                <td style={getTdStyle("schedule-purple")}
                  className="schedule-purple"
                  title="Range of recommended ages for certain high-risk groups or populations"
                  colSpan={5}
                  headers="hepa-tbl1 mos6 mos9"
                >
                  (See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepa">
                    Notes
                  </a>
                  )
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={2}
                  headers="hepa-tbl1 mos12 mos15"
                >
                  ←2-dose series, See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepa">
                    Notes
                  </a>
                  →
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="tdap-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-tdap">
                    Tetanus, diphtheria, &amp; acellular pertussis
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/dtap-tdap-td/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (Tdap: ≥7 yrs)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="tdap-tbl1 birth mo1"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="tdap-tbl1 mos2"
                >
                  1<sup>st</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="tdap-tbl1 mos4"
                >
                  2<sup>nd</sup> dose
                </td>
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  colSpan={4}
                  headers="tdap-tbl1 mos6"
                >
                  3<sup>rd</sup> dose
                </td>
                <td style={getTdStyle("schedule-green")}
                  className="schedule-green"
                  title="Range of recommended ages for catch-up vaccination"
                  colSpan={2}
                  headers="tdap-tbl1 mos9 mos12"
                />
                <td style={getTdStyle("schedule-yellow")}
                  className="schedule-yellow"
                  title="Range of recommended ages for all children"
                  headers="tdap-tbl1 mos15"
                >
                  ←4<sup>th</sup> dose→
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="hpv-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hpv">
                    Human papillomavirus
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/hpv/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (HPV)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={11}
                  headers="hpv-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
              </tr>
              <tr>
                <th style={thStyleVaccines} id="mening-tbl" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening">
                    Meningococcal
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/mening/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (MenACWY-CRM ≥2 mos, MenACWY-TT ≥2years)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={2}
                  headers="mening-tbl birth mo1"
                />
                <td style={getTdStyle("schedule-purple")}
                  className="schedule-purple"
                  title="Range of recommended ages for certain high-risk groups or populations"
                  colSpan={9}
                  headers="mening-tbl mos2 mos4 mos6 mos9 mos12 mos15"
                >
                  See{" "}
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening">
                    Notes
                  </a>
                </td>
              </tr>
              <tr>
                <th style={thStyleVaccines} id="mening-b-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening-b">
                    Meningococcal B{" "}
                  </a>
                  <a
                    href="/vaccines/vpd/mening/hcp/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (MenB-4C, MenB-FHbp)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={11}
                  headers="mening-b-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
              </tr>
              <tr>
                <th style={thStyleVaccines} id="rsv-vaccine-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-abrysvo">
                    Respiratory syncytial virus vaccine
                  </a>{" "}
                  <a
                    href="/vaccines/vpd/rsv/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (RSV [Abrysvo])
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={17}
                  headers="rsv-vaccine-tbl1 mos18 mos19 yrs2 yrs4 yrs7"
                />
              </tr>
              <tr>
                <th id="dengue-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-dengue">
                    Dengue
                  </a>{" "}
                  <a
                    href="/dengue/hcp/vaccine/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                  <br />
                  (DEN4CYD: 9-16 yrs)
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={25}
                  headers="rotavirus-tbl2 mos18 mos19 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17"
                />
              </tr>
              <tr>
                <th id="mpox-tbl1" headers="vacc-tbl1">
                  <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mpox">
                    Mpox
                  </a>{" "}
                  <a
                    href="/poxvirus/mpox/vaccines/index.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="/vaccines/schedules/images/more-info.jpg"
                      alt="more info icon."
                    />
                  </a>
                </th>
                <td style={getTdStyle("schedule-gray")}
                  className="schedule-gray"
                  title="No Guidance/Not Applicable"
                  colSpan={25}
                  headers="rotavirus-tbl2 mos18 mos19 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17"
                />
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="dfe-block__inner">
  <div className="dfe-block dfe-block--cdcmodule cdc_raw_html">
    <div className="schedules-tbl-wrapper">
      <table className="table table-schedule table-bordered">
        <thead className="sticky-headers">
          <tr className="font-size-13">
            <th style={thStyleVaccines} id="vacc-tbl2" className="header-slate">
              Vaccine and other immunizing agents
            </th>
            <th style={thStyleVaccines} id="mos18" className="header-slate text-align-center">
              18 mos
            </th>
            <th style={thStyleVaccines} id="mos19" className="header-slate text-align-center" colSpan={4}>
              19-23 mos
            </th>
            <th style={thStyleVaccines} id="yrs2" className="header-slate text-align-center">
              2-3 yrs
            </th>
            <th style={thStyleVaccines} id="yrs4" className="header-slate text-align-center" colSpan={2}>
              4-6 yrs
            </th>
            <th style={thStyleVaccines} id="yrs7" className="header-slate text-align-center" colSpan={9}>
              7-10 yrs
            </th>
            <th style={thStyleVaccines} colSpan={3} className="header-slate text-align-center" id="yrs11">
              11-12 yrs
            </th>
            <th style={thStyleVaccines} id="yrs13" className="header-slate text-align-center">
              13-15 yrs
            </th>
            <th style={thStyleVaccines} id="yrs16" className="header-slate text-align-center">
              16 yrs
            </th>
            <th style={thStyleVaccines} id="yrs17" className="header-slate text-align-center" colSpan={5}>
              17-18 yrs
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="rsv-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-nirsevimab">
                Respiratory syncytial virus
              </a>{" "}
              <a
                href="/vaccines/vpd/rsv/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (RSV-mAb [Nirsevimab])
            </th>
            <td style={getTdStyle("schedule-purple right-border-none")} className="schedule-purple right-border-none" title="Range of recommended ages for certain high-risk groups or populations" headers="rsv-tbl2 mos18">
              1 dose (8 through 19 months), See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-nirsevimab">Notes</a>
            </td>
            <td style={getTdStyle("schedule-purple left-border-none padding-left-two")} className="schedule-purple left-border-none padding-left-two" title="Range of recommended ages for certain high-risk groups or populations" headers="rsv-tbl2 mos19" />
            <td style={getTdStyle("schedule-gray right-border-none")} className="schedule-gray right-border-none" title="No Guidance/Not Applicable" headers="rsv-tbl2 mos19" />
            <td style={getTdStyle("schedule-gray right-border-none left-border-none")} className="schedule-gray right-border-none left-border-none" title="No Guidance/Not Applicable" headers="rsv-tbl2 mos19" />
            <td style={getTdStyle("schedule-gray left-border-none right-border-none")} className="schedule-gray left-border-none right-border-none" title="No Guidance/Not Applicable" headers="rsv-tbl2 mos19" />
            <td style={getTdStyle("schedule-gray left-border-none")} className="schedule-gray left-border-none" title="No Guidance/Not Applicable" colSpan={22} headers="rsv-tbl2 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="hepb-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepb">
                Hepatitis B
              </a>{" "}
              <a
                href="/vaccines/vpd/hepb/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (HepB)
            </th>
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" headers="hepb-tbl2 mos18">
              ←3<sup>rd</sup> dose→
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={26} headers="hepb-tbl2 mos19 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="rotavirus-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rotavirus">Rotavirus</a>{" "}
              <a
                href="/vaccines/vpd/rotavirus/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              <br />
              (RV) RV1 (2-dose series); RV5 (3-dose series)
            </th>
            <td style={getTdStyle("schedule-gray")} className="schedule-gray" title="No Guidance/Not Applicable" colSpan={27} headers="rotavirus-tbl2 mos18 mos19 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="dtap-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-dtap">
                Diphtheria, tetanus, &amp; acellular pertussis
              </a>{" "}
              <a
                href="/vaccines/vpd/dtap-tdap-td/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <br />
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (DTaP: &lt;7 yrs)
            </th>
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" headers="dtap-tbl2 mos18">
              ←4<sup>th</sup> dose→
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={5} headers="dtap-tbl2 mos19 yrs2" />
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" colSpan={2} headers="dtap-tbl2 yrs4">
              5<sup>th</sup> dose
            </td>
            <td style={getTdStyle("schedule-gray")} className="schedule-gray" title="No Guidance/Not Applicable" colSpan={19} headers="dtap-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="hib-tbl2" headers="vacc-tbl2">
              <em>
                <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hib">
                  Haemophilus influenzae
                </a>
              </em>
              <a href="#hib"> type b</a>{" "}
              <a
                href="/vaccines/vpd/hib/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (Hib)
            </th>
            <td style={getTdStyle("schedule-green right-border-none")} className="schedule-green right-border-none" title="Range of recommended ages for catch-up vaccination" colSpan={6} headers="hib-tbl2 mos18 mos19 yrs2" />
            <td style={getTdStyle("schedule-green left-border-none")} className="schedule-green left-border-none" title="Range of recommended ages for catch-up vaccination" headers="hib-tbl2 mos18 mos19 yrs2" />
            <td style={getTdStyle("schedule-purple right-border-none")} className="schedule-purple right-border-none" title="Range of recommended ages for certain high-risk groups or populations" headers="hib-tbl2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
            <td style={getTdStyle("schedule-purple left-border-none")} className="schedule-purple left-border-none" title="Range of recommended ages for certain high-risk groups or populations" colSpan={19} headers="hib-tbl2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="pneumo-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-pneumo">
                Pneumococcal conjugate
              </a>{" "}
              <a
                href="/vaccines/vpd/pneumo/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (PCV15, PCV20)
            </th>
            <td style={getTdStyle("schedule-green right-border-none")} className="schedule-green right-border-none" title="Range of recommended ages for catch-up vaccination" colSpan={6} headers="pneumo-tbl2 mos18 mos19 yrs2 yrs4" />
            <td style={getTdStyle("schedule-green left-border-none")} className="schedule-green left-border-none" title="Range of recommended ages for catch-up vaccination" headers="pneumo-tbl2 mos18 mos19 yrs2 yrs4" />
            <td style={getTdStyle("schedule-purple right-border-none")} className="schedule-purple right-border-none" title="Range of recommended ages for certain high-risk groups or populations" headers="pneumo-tbl2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
            <td style={getTdStyle("schedule-purple left-border-none")} className="schedule-purple left-border-none" title="Range of recommended ages for certain high-risk groups or populations" colSpan={19} headers="pneumo-tbl2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="polio-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-polio">
                Inactivated poliovirus
              </a>
              <br />
              (IPV){" "}
              <a
                href="/vaccines/vpd/polio/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" headers="polio-tbl2 mos18">
              ←3<sup>rd</sup> dose→
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={5} headers="polio-tbl2 mos19 yrs2" />
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" colSpan={2} headers="polio-tbl2 yrs4">
              4<sup>th</sup> dose
            </td>
            <td style={getTdStyle("schedule-green right-border-none")} className="schedule-green right-border-none" title="Range of recommended ages for catch-up vaccination" colSpan={15} headers="polio-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17" />
            <td style={getTdStyle("schedule-green left-border-none right-border-none")} className="schedule-green left-border-none right-border-none" title="Range of recommended ages for catch-up vaccination" headers="polio-tbl2 yrs17" />
            <td style={getTdStyle("schedule-green left-border-none")} className="schedule-green left-border-none" title="Range of recommended ages for catch-up vaccination" headers="polio-tbl2 yrs17" />
            <td colSpan={2} className="schedule-green" title="Range of recommended ages for catch-up vaccination" headers="polio-tbl2 yrs17">
              See
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-polio">
                Notes
              </a>
            </td>
          </tr>
          <tr>
            <th id="covid-19-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-covid-19">
                COVID-19{" "}
              </a>
              <a
                href="/vaccines/covid-19/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              <br />
              (1vCOV-mRNA, 1vCOV-aPS)
            </th>
            <td colSpan={24} className="schedule-blue right-border-none" title="Shared clinical decision making" headers="covid-19-tbl2 mos18 mos19 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16" />
            <td className="schedule-blue left-border-none" title="Shared clinical decision making" headers="covid-19-tbl2 yrs17" />
            <td className="schedule-yellow right-border-none" title="Range of recommended ages for all children" headers="covid-19-tbl2 yrs17" />
            <td className="schedule-yellow left-border-none" title="Range of recommended ages for all children" headers="covid-19-tbl2 yrs17" />
          </tr>
          <tr>
            <th id="iiv-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-flu">
                Influenza
              </a>{" "}
              (IIV3, ccIIV3){" "}
              <a
                href="/vaccines/vpd/flu/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td
              className="schedule-yellow left-border-none"
              title="Range of recommended ages for all children"
              headers="covid-19-tbl2 yrs17"
            >
              &nbsp;
            </td>
          </tr>
          <tr>
            <th id="iiv-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-flu">
                Influenza
              </a>{" "}
              (IIV3, ccIIV3){" "}
              <a
                href="/vaccines/vpd/flu/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td
              className="schedule-yellow right-border-none"
              title="Range of recommended ages for all children"
              colSpan={10}
              headers="iiv-tbl2 mos18 mos19 yrs2 yrs4"
            >
              1 or 2 doses annually
            </td>
            <td
              className="schedule-yellow left-border-none right-border-none"
              title="Range of recommended ages for all children"
              colSpan={2}
              headers="iiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            />
            <td
              className="schedule-yellow right-border-none left-border-none"
              title="Range of recommended ages for all children"
              colSpan={2}
              headers="iiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            />
            <td
              className="schedule-yellow left-border-none"
              title="Range of recommended ages for all children"
              headers="iiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            />
            <td
              colSpan={2}
              className="schedule-yellow right-border-none"
              title="Range of recommended ages for all children"
              headers="iiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            />
            <td
              className="schedule-yellow left-border-none"
              title="Range of recommended ages for all children"
              colSpan={10}
              headers="iiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            >
              1 dose annually
            </td>
          </tr>
          <tr>
            <th
              id="laiv-tbl2"
              className="padding-zero dotted-border-top"
              headers="vacc-tbl2"
            >
              <div className="container-adult">
                <div className="or-image" />
              </div>
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-flu">
                Influenza
              </a>{" "}
              (LAIV3){" "}
              <a
                href="/vaccines/vpd/flu/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td
              className="schedule-gray"
              title="No Guidance/Not Applicable"
              colSpan={5}
              headers="laiv-tbl2 mos18 mos19"
            />
            <td
              className="schedule-yellow padding-zero dotted-border-top right-border-none"
              title="Range of recommended ages for all children"
              colSpan={9}
              headers="laiv-tbl2 yrs2 yrs4 yrs7"
            >
              1 or 2 doses annually
            </td>
            <td
              className="schedule-yellow dotted-border-top left-border-none right-border-none"
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7"
            >
              <div className="container-adult">
                <div className="or-image-flu" />
              </div>
            </td>
            <td
              className="schedule-yellow dotted-border-top left-border-none"
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7"
            />
            <td
              className="schedule-yellow dotted-border-top left-border-none right-border-none"
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7"
            >
              &nbsp;
            </td>
            <td
              className="schedule-yellow dotted-border-top left-border-none right-border-none"
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            >
              &nbsp;
            </td>
            <td
              className="schedule-yellow dotted-border-top right-border-none left-border-none"
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            >
              &nbsp;
            </td>
            <td
              className="schedule-yellow dotted-border-top left-border-none right-border-none"
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            >
              &nbsp;
            </td>
            <td
              colSpan={7}
              className="schedule-yellow dotted-border-top left-border-none "
              title="Range of recommended ages for all children"
              headers="laiv-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            >
              1 dose annually
            </td>
          </tr>
          <tr>
            <th id="mmr-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mmr">
                Measles, mumps, rubella
              </a>{" "}
              <a
                href="/vaccines/vpd/mmr/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (MMR)
            </th>
            <td
              className="schedule-green"
              title="Range of recommended ages for catch-up vaccination"
              colSpan={6}
              headers="mmr-tbl2 mos18 mos19 yrs2"
            />
            <td
              className="schedule-yellow"
              title="Range of recommended ages for all children"
              colSpan={2}
              headers="mmr-tbl2 yrs4"
            >
              2<sup>nd</sup> dose
            </td>
            <td
              className="schedule-green"
              title="Range of recommended ages for catch-up vaccination"
              colSpan={19}
              headers="mmr-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17"
            />
          </tr>
          <tr>
            <th id="varicella-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-varicella">
                Varicella
              </a>{" "}
              <a
                href="/vaccines/vpd/varicella/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (VAR)
            </th>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={6} headers="varicella-tbl2 mos18 mos19 yrs2" />
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" colSpan={2} headers="varicella-tbl2 yrs4">
              2<sup>nd</sup> dose
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={19} headers="varicella-tbl2 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="hepa-tbl2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepa">
                Hepatitis A
              </a>{" "}
              <a href="/vaccines/vpd/hepa/hcp/index.html">
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (HepA)
            </th>
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" colSpan={5} headers="hepa-tbl2 mos18 mos19">
              ← 2-dose series, See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hepa">
                Notes
              </a>
              →
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={22} headers="hepa-tbl2 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="tdap-tbl2" rowSpan={2} headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-tdap">
                Tetanus, diphtheria, &amp; acellular pertussis
              </a>{" "}
              <a
                href="/vaccines/vpd/dtap-tdap-td/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (Tdap: ≥7 yrs)
            </th>
            <td style={getTdStyle("schedule-gray")} className="schedule-gray" title="No Guidance/Not Applicable" colSpan={8} rowSpan={2} headers="tdap-tbl2 mos18 mos19 yrs2 yrs4" />
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={9} rowSpan={2} headers="tdap-tbl2 yrs7" />
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" colSpan={3} rowSpan={2} title="Range of recommended ages for all children" headers="tdap-tbl2 yrs11">
              <span className="schedule-yellow">1 dose</span>
            </td>
            <td style={getTdStyle("schedule-purple")} className="schedule-purple" title="Range of recommended ages for certain high-risk groups" colSpan={7} headers="tdap-tbl2 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" colSpan={7} headers="tdap-tbl2 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="hpv-tbl2" rowSpan={2} headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hpv">
                Human papillomavirus
              </a>{" "}
              <a
                href="/vaccines/vpd/hpv/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (HPV)
            </th>
            <td style={getTdStyle("schedule-gray left-border-none")} className="schedule-gray left-border-none" title="No Guidance/Not Applicable" colSpan={13} rowSpan={2} headers="hpv-tbl2 mos18 mos19 yrs2 yrs4 yrs7" />
            <td style={getTdStyle("schedule-purple right-border-none")} className="schedule-purple right-border-none" title="Range of recommended ages for certain high-risk groups" colSpan={4} headers="hpv-tbl2 yrs7" />
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" colSpan={3} rowSpan={2} title="Range of recommended ages for all children" headers="hpv-tbl2 yrs11">
              See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-hpv">
                Notes
              </a>
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" colSpan={7} rowSpan={2} title="Range of recommended ages for catch-up vaccination" headers="hpv-tbl2 yrs13 yrs16 yrs17" />
          </tr>
          <tr>
            <td style={getTdStyle("schedule-checkers right-border-none")} className="schedule-checkers right-border-none" title="Range of recommended ages for certain high-risk groups" colSpan={4} headers="hpv-tbl2 yrs7" />
          </tr>
          <tr>
            <th id="mening-tb2" headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening">
                Meningococcal
              </a>{" "}
              <a
                href="/vaccines/vpd/mening/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (MenACWY-CRM ≥2 mos, MenACWY-TT ≥2years)
            </th>
            <td style={getTdStyle("schedule-purple")} className="schedule-purple" title="Range of recommended ages for certain high-risk groups or populations" colSpan={17} headers="mening-tb2 mos18 mos19 yrs2 yrs4 yrs7">
              See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening">
                Notes
              </a>
            </td>
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" colSpan={3} title="Range of recommended ages for all children" headers="mening-tb2 yrs11">
              1<sup>st</sup> dose
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" title="Range of recommended ages for catch-up vaccination" headers="mening-tb2 yrs13" />
            <td style={getTdStyle("schedule-yellow")} className="schedule-yellow" title="Range of recommended ages for all children" headers="mening-tb2 yrs16">
              2<sup>nd</sup> dose
            </td>
            <td style={getTdStyle("schedule-green")} className="schedule-green" colSpan={5} title="Range of recommended ages for catch-up vaccination" headers="mening-tb2 yrs17" />
          </tr>
          <tr>
            <th id="mening-b-tbl2" rowSpan={2} headers="vacc-tbl2">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening-b">
                Meningococcal B
              </a>{" "}
              <a
                href="/vaccines/vpd/mening/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              (MenB-4C,&nbsp;MenB-FHbp)
            </th>
            <td style={getTdStyle("schedule-gray right-border-none")} className="schedule-gray right-border-none" title="No Guidance/Not Applicable" colSpan={8} rowSpan={2} headers="mening-b-tbl2 mos18 mos19 yrs2 yrs4" />
            <td style={getTdStyle("schedule-gray right-border-none left-border-none bottom-border-none")} className="schedule-gray right-border-none left-border-none bottom-border-none" title="No Guidance/Not Applicable" headers="mening-b yrs7" />
            <td style={getTdStyle("schedule-gray right-border-none left-border-none bottom-border-none")} className="schedule-gray right-border-none left-border-none bottom-border-none" title="No Guidance/Not Applicable" colSpan={3} headers="mening-b-tbl2 yrs7" />
            <td style={getTdStyle("schedule-gray right-border-none left-border-none bottom-border-none")} className="schedule-gray right-border-none left-border-none bottom-border-none" title="No Guidance/Not Applicable" colSpan={2} headers="mening-b-tbl2 yrs7" />
            <td style={getTdStyle("schedule-gray left-border-none bottom-border-none")} className="schedule-gray left-border-none bottom-border-none" title="No Guidance/Not Applicable" headers="mening-b yrs7" />
            <td style={getTdStyle("schedule-purple right-border-none left-border-none")} className="schedule-purple right-border-none left-border-none" colSpan={2} title="Range of recommended ages for certain high-risk groups or populations" headers="mening-b-tbl2 yrs7" />
            <td style={getTdStyle("schedule-purple left-border-none")} className="schedule-purple left-border-none" colSpan={10} title="Range of recommended ages for certain high-risk groups or populations" headers="mening-b-tbl2 yrs11 yrs13 yrs16 yrs17">
              See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mening-b">
                Notes
              </a>
            </td>
          </tr>
          <tr>
            <td style={getTdStyle("schedule-gray left-border-none top-border-none right-border-none")} className="schedule-gray left-border-none top-border-none right-border-none" title="No Guidance/Not Applicable" colSpan={9} headers="mening-b-tbl2 yrs7" />
            <td style={getTdStyle("schedule-gray left-border-none")} className="schedule-gray left-border-none" title="No Guidance/Not Applicable" colSpan={4} headers="mening-b-tbl2 yrs11 yrs13" />
            <td style={getTdStyle("schedule-blue")} className="schedule-blue" title="Vaccination is based on shared clinical decision making" colSpan={6} headers="mening-b-tbl2 yrs16 yrs17" />
          </tr>
          <tr>
            <th id="rsv-vaccine-tbl2" headers="vacc-tbl1">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-abrysvo">
                Respiratory syncytial virus vaccine
              </a>{" "}
              <a
                href="/vaccines/vpd/rsv/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              <br />
              (RSV [Abrysvo])
            </th>
            <td style={getTdStyle("schedule-gray")} className="schedule-gray" title="No Guidance/Not Applicable" colSpan={17} headers="rsv-vaccine-tbl2 mos18 mos19 yrs2 yrs4 yrs7" />
            <td style={getTdStyle("schedule-purple")} className="schedule-purple" title="Range of recommended ages for certain high-risk groups or populations" colSpan={10} headers="rsv-vaccine-tbl2 yrs13 yrs16 yrs17">
              Seasonal administration during pregnancy, See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-rsv-abrysvo">
                Notes
              </a>
            </td>
          </tr>
          <tr>
            <th id="dengue-tbl2" headers="vacc-tbl1">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-dengue">
                Dengue
              </a>{" "}
              <a
                href="/dengue/vaccine/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
              <br />
              (DEN4CYD: 9–16 yrs)
            </th>
            <td style={getTdStyle("schedule-gray right-border-none")} className="schedule-gray right-border-none" title="No Guidance/Not Applicable" colSpan={9} headers="dengue-tbl2 mos18 mos19 yrs2 yrs4" />
            <td style={getTdStyle("schedule-gray right-border-none left-border-none")} className="schedule-gray right-border-none left-border-none" title="No Guidance/Not Applicable" colSpan={5} headers="dengue-tbl2 yrs7 yrs11 yrs13 yrs16" />
            <td style={getTdStyle("schedule-gray left-border-none")} className="schedule-gray left-border-none" title="No Guidance/Not Applicable" headers="dengue-tbl2 yrs7 yrs11 yrs13 yrs16" />
            <td style={getTdStyle("schedule-purple right-border-none")} className="schedule-purple right-border-none" colSpan={2} title="Range of recommended ages for certain high-risk groups or populations" headers="dengue-tbl2 yrs7 yrs11 yrs13 yrs16">
              Seropositive in endemic dengue areas (See{" "}
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-dengue">
                Notes
              </a>
              )
            </td>
            <td style={getTdStyle("schedule-gray")} className="schedule-gray" colSpan={5} title="No Guidance/Not Applicable" headers="dengue-tbl2 yrs17" />
          </tr>
          <tr>
            <th id="mpox-tbl2" headers="vacc-tbl1">
              <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html#note-mpox">
                Mpox
              </a>{" "}
              <a
                href="/poxvirus/mpox/vaccines/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td style={getTdStyle("schedule-gray")} className="schedule-gray" title="No Guidance/Not Applicable" colSpan={25} headers="rotavirus-tbl2 mos18 mos19 yrs2 yrs4 yrs7 yrs11 yrs13 yrs16 yrs17" />
            <td style={getTdStyle("schedule-purple")} className="schedule-purple" colSpan={2} title="Range of recommended ages for certain high-risk groups or populations" headers="rotavirus-tbl2 yrs17" />
          </tr>
        </tbody>
      </table>
    </div>
    To make vaccination recommendations, healthcare providers should:
    <ol className="cc-md-2 lsp-out">
      <li>
        Determine recommended vaccine by age (
        <a href="#table-1">
          <strong>Table 1 - By Age</strong>
        </a>
        )
      </li>
      <li>
        Determine recommended interval for catch-up vaccination (
        <a href="/vaccines/hcp/imz-schedules/child-adolescent-catch-up.html">
          <strong>Table 2 - Catch-up</strong>
        </a>
        )
      </li>
      <li>
        Assess need for additional recommended vaccines by medical condition or
        other indication (
        <a href="/vaccines/hcp/imz-schedules/child-adolescent-medical-indication.html">
          <strong>Table 3 - By Medical Indication</strong>
        </a>
        )
      </li>
      <li>
        Review vaccine types, frequencies, intervals, and considerations for
        special situations (
        <strong>
          <a href="/vaccines/hcp/imz-schedules/child-adolescent-notes.html">
            Notes
          </a>
        </strong>
        )
      </li>
      <li>
        Review contraindications and precautions for vaccine types (
        <strong>
          <a href="/vaccines/hcp/imz-schedules/child-adolescent-appendix.html">
            Appendix
          </a>
        </strong>
        )
      </li>
    </ol>
  </div>
</div>

<table style={{ width: "100%", borderCollapse: "collapse", margin: "1em 0" }}>
  <thead>
    <tr>
      <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Age Group</th>
      <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Vaccines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>Newborns</td>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>Hepatitis B Vaccine</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>2, 4, 6 months old</td>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>DTaP, Hib, Polio (IPV), PCV20, and Rotavirus</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>12 months old</td>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>MMR, Varicella, and Hepatitis A</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>4 years old</td>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>MMR, IPV, and DTaP</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>Teens (≥11y/o)</td>
      <td style={{ border: "1px solid #ccc", padding: "8px" }}>HPV, Tdap, Meningococcal</td>
    </tr>
    </tbody>
    </table>

      </>
    )
  },
    // Add this to your sections array, e.g. as a new object after "Milestones" or wherever you prefer.
  
  {
    title: "HEADSSS Exam",
    content: (
      <>
        <h2>HEADSSS Exam</h2>
        <p>
          <strong>Main Goal:</strong> Assess patient safety and encourage SAFE PRACTICES in all aspects of life! Our duty is to ensure if they have no one to talk to, we will be there to assist and hear them out.
        </p>
        <ul>
          <li>Invite the parent out of the room. Conditional confidentiality guidelines may be reviewed for the patient. Use a non-judgmental approach and compliment healthy behavior. Mention that you ask everyone all of these questions.</li>
          <li>Ask parents to leave the room to ask some private questions (most parents understand, and the attending can assist if needed).</li>
          <li>
            <strong>Start off with:</strong>
            <br />
            <em>
              "Before we begin, I want you to know that everything we discuss here is confidential, except for anything that might indicate harm to yourself or others. If that comes up, I may need to involve someone else to make sure you're safe."
            </em>
          </li>
          <li>Questions are generally from least to most sensitive (top to bottom).</li>
        </ul>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "1em 0" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Domain</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Sample Questions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Home</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Who lives there? Recent changes in home or family compositions? Recent stressors? Domestic violence? How is the patient punished at home?
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Education</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Name of school, grade level, specific grades, learning disabilities or issues, ever held back/moved forward a grade, favorite/least favorite subjects, career plans
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Activities</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Extracurricular sports, clubs, teams, time in front of TV/computer/video games, friends (best friend?), support system
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Diet/Exercise</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                24-hour diet recall, any restricting, binging, purging, diet pill use, hyper-exercise, level of exercise (sweating or breathing heavily at least 3 times per week for 20-30 minutes)?
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Depression/Suicidal thoughts/Prior attempts</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Mood: happy, unhappy, in between (past 2 weeks). If unhappy most of the time - irritability, truancy, acting out, mood swings, +SIGECAPS, counseling in the past. Refer to psych doc for further questions.
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Drugs</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Cigarettes/vaping, alcohol, drugs (friends/at parties and self). If yes, discuss benefits and drawbacks.
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Sex/Dating</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Ever had sex? (oral, vaginal, anal), does the patient have sex with males, females, or both, number and age of partner(s), pregnancy and STI prevention methods, condom use
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Safety/Violence</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Sexual abuse history, fighting behaviors, gang involvement, involvement with the law, weapon carrying/use
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  },
    {
    title: "Skin",
    content: (
      <>
        <h2>Skin Exam & Common Pediatric Rashes</h2>
        <ul>
          <li>Always assess on physical exam for any petechiae, ulcers, and ask if the patient is itchy anywhere.</li>
          <li>You will encounter many patients with eczema and coxsackievirus. Hence, a thorough investigation of hands, feet, and mouth can go a long way.</li>
        </ul>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "1em 0" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Condition</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Definition</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Associations</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Pathophysiology</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Eczema</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Inflammatory skin disease (1st time childhood → Improves in adolescence or becomes chronic for life)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Atopy (Asthma or Allergic rhinitis)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                • Genetic components<br />
                • Exogenous triggers<br />
                • Endogenous triggers
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Initial management: Avoiding flare triggers and moisturizing the skin<br />
                If symptoms persist: Topical steroids and calcineurin inhibitors
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Allergic Contact Dermatitis</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Common inflammatory condition<br />
                Erythema and pruritus at the site of exposure to an allergen
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                • Nickel<br />
                • Personal care products (Fragrances and Cosmetics)<br />
                • Topical medications<br />
                • Plants
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Type IV, T-cell mediated delayed hypersensitivity reaction to the allergen
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Mainstay Management: Avoidance of allergen exposure<br />
                Provide Acute Relief: Topical corticosteroids and symptomatic therapy (calamine lotion, emollients)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Jaundice</strong></td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                One of the most common conditions in newborn infants<br />
                Characterized by elevated levels of bilirubin in the blood (total bili &gt; 5 mg/dL)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                MCC: Physiological rise in unconjugated bilirubin
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                • Hemolysis of fetal hemoglobin<br />
                • Immature hepatic metabolism of bilirubin
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Phototherapy<br />
                Intravenous immune globulin (IVIG)<br />
                Exchange transfusion
              </td>
            </tr>
          </tbody>
        </table>
        <h3>High-Yield Childhood Rashes</h3>
        <center><img src="/rash-image.png" alt="High-Yield Childhood Rashes" /></center>
        {/* Add more rash details here as needed */}
      </>
    )
  },
    {
    title: "Tips for Success",
    content: (
      <>
        <h2>Tips for Success in Community Pediatrics</h2>
        <ul>
          <li>Community pediatrics can be fast paced! Be prepared to see patients on the go.</li>
          <li>Before walking into the room, figure out their age and chief complaint or reason for the visit. Then, when you enter, assess if they are reaching the social/emotional, language, and gross and fine motor milestones. This takes practice! Talk to the parents mostly for timelines, and the child for symptom severity. Sometimes, the sibling may be the advocate for the patient, so keep that in mind as well.</li>
          <li>Don’t forget to look at their vital signs and growth charts for every visit.</li>
          <li>When performing the physical exam, assessing the mouth is crucial, especially for fevers and coughs. Use a tongue depressor for a clear view—it can reveal findings that change your differential diagnosis.</li>
          <li>If a patient is not cooperative, that is normal. Certain physical exams need to be done, so learn the appropriate holds from your attending or resident.</li>
          <li>If you have a verbal patient, offer choices: “What do you want me to check first, your heart or your mouth?” This helps with cooperation and lets them listen to your heart with your stethoscope.</li>
          <li>Never check ears first—save that for last, especially for patients under 6 years old. Ear exams tend to be the most distressing, so prepare accordingly!</li>
        </ul>
      </>
    )
  },

]


const Peds = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const handleOpen = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
    setTimeout(() => {
      if (refs.current[idx]) {
        refs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  return (
    <SectionTemplate
      title="Community Pediatrics"
      content={
        <div>
          {sections.map((section, idx) => (
            <div
              key={section.title}
              style={{ marginBottom: 10 }}
              ref={el => refs.current[idx] = el}>
              <button
                style={{
                  width: '100%',
                  padding: 10,
                  fontSize: '1rem',
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: openIndex === idx ? '#e0e0e0' : '#f9f9f9',
                  border: '1px solid #ccc',
                  fontWeight: 'bold',
                }}
                onClick={() => handleOpen(idx)}
              >
                {section.title}
              </button>
              {openIndex === idx && (
                <div style={{ padding: '12px 8px', background: '#fafafa', border: '1px solid #eee', borderRadius: 8 }}>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Peds;