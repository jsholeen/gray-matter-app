import SectionTemplate from '../components/SectionTemplate';
import React, { useState, useRef } from 'react';

const thStyle = {
  border: '1px solid black',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid black',
  padding: '8px',
};

const converted = {
  element: { "--mobile-header-offset": "0px", "--progress-value": "41%" },
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

const vaccineThStyle = {
  border: `${converted[":root"]["--bs-border-width"] || "1px"} solid ${converted[":root"]["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  backgroundColor: converted[":root"]["--colors-cyan-5"] || "#F4FBFC",
  textAlign: "center",
  fontFamily: converted[".dfe-section"].fontFamily,
  fontSize: converted[".dfe-section"].fontSize,
};

const vaccineTdStyle = {
  border: `${converted[":root"]["--bs-border-width"] || "1px"} solid ${converted[":root"]["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  fontFamily: converted[".dfe-section"].fontFamily,
  fontSize: converted[".dfe-section"].fontSize,
  backgroundColor: converted[":root"]["--colors-gray-cool-3"] || "#F5F6F7",
};

const transformed = {
  element: { "--mobile-header-offset": "0px", "--progress-value": "30%" },
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

const thStyleTransformed = {
  border: `${transformed[":root"]?.["--bs-border-width"] || "1px"} solid ${transformed[":root"]?.["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  backgroundColor: transformed[":root"]?.["--colors-cyan-5"] || "#F4FBFC",
  textAlign: "center",
  fontFamily: transformed[".dfe-section"].fontFamily,
  fontSize: transformed[".dfe-section"].fontSize,
  lineHeight: transformed[".dfe-section"].lineHeight,
};

const tdStyleTransformed = {
  border: `${transformed[":root"]?.["--bs-border-width"] || "1px"} solid ${transformed[":root"]?.["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  fontFamily: transformed[".dfe-section"].fontFamily,
  fontSize: transformed[".dfe-section"].fontSize,
  lineHeight: transformed[".dfe-section"].lineHeight,
  backgroundColor: transformed[":root"]?.["--colors-gray-cool-3"] || "#F5F6F7",
};


const groupColors = {
  "Newborns": ["#31a354", "#a1d99b", "#e5f5e0"], // reversed
  "Children (0-5 years)": ["#756bb1", "#bcbddc", "#efedf5"], // reversed
  "Children & Adolescents (6-18 years)": ["#e6550d", "#fdae6b", "#fee6ce"], // reversed
  "Adults (18-64 years)": ["#dd1c77", "#c994c7", "#e7e1ef"], // reversed
  "Pregnant Persons": ["#3182bd", "#9ecae1", "#deebf7"], // reversed
  "Adults (65+ years)": ["#de2d26", "#fc9272", "#fee0d2"],
};

const abTableData = [
  ["Newborns", "Ocular prophylaxis to prevent gonococcal ophthalmia", "A"],
  ["Children (0-5 years)", "Fluoride varnish to prevent dental caries (≥6 months)", "B"],
  ["Children (0-5 years)", "Vision screening for amblyopia/risk factors (3-5 years)", "B"],
  ["Children & Adolescents (6-18 years)", "Anxiety screening (8-18 years)", "B"],
  ["Children & Adolescents (6-18 years)", "High BMI intervention (≥6 years)", "B"],
  ["Children & Adolescents (6-18 years)", "Major depressive disorder (MDD) screening (12-18 years)", "B"],
  ["Children & Adolescents (6-18 years)", "Skin cancer counseling (6 months to 24 years, fair skin)", "B"],
  ["Adults (18-64 years)", "Hypertension screening (every visit)", "A"],
  ["Adults (18-64 years)", "HIV screening (15-65 years)", "A"],
  ["Adults (18-64 years)", "Cervical cancer screening", "A"],
  ["Adults (18-64 years)", "Hepatitis C virus screening (18-79 years)", "B"],
  ["Adults (18-64 years)", "Anxiety screening", "B"],
  ["Adults (18-64 years)", "Breast cancer screening using biennial mammography (women aged 40-74)", "B"],
  ["Adults (18-64 years)", "Screening for chlamydia in all sexually active women ≤24y and in women ≥25y @ increased risk for infection.", "B"],
  ["Pregnant Persons", "Folic acid supplementation to prevent neural tube defects", "A"],
  ["Pregnant Persons", "Hepatitis B virus (HBV) infection screening at first prenatal visit", "A"],
  ["Pregnant Persons", "Rh(D) blood typing and antibody testing for all pregnant women during their first visit for pregnancy-related care", "A"],
  ["Pregnant Persons", "HIV screening", "A"],
  ["Pregnant Persons", "Early Syphilis screening", "A"],
  ["Pregnant Persons", "Asymptomatic bacteriuria screening using urine culture", "B"],
  ["Pregnant Persons", "Low-dose aspirin for preeclampsia risk after 12 weeks of gestation", "B"],
  ["Pregnant Persons", "Gestational diabetes screening (24+ weeks)", "B"],
  ["Pregnant Persons", "Hypertensive disorder screening in pregnancy", "B"],
  ["Pregnant Persons", "Perinatal depression counseling", "B"],
  ["Adults (65+ years)", "Colorectal cancer screening (50-75 years)", "A"],
  ["Adults (65+ years)", "Colorectal cancer screening (45-50 years)", "B"],
  ["Adults (65+ years)", "Osteoporosis screening (≥65 years)", "B"],
  ["Adults (65+ years)", "Abdominal aortic aneurysm screening (65-75 years, men who smoked) with ultrasonography", "B"],
  ["Adults (65+ years)", "Adults aged 50 to 80 years who have a 20 pack-year smoking history and currently smoke or have quit within the past 15 years should receive Low-dose computed tomography (LDCT) for lung cancer screening.", "B"],
  ["Adults (65+ years)", "Depression and suicide risk screening (65 years and older)", "B"],
  ["Adults (65+ years)", "Falls prevention counseling (65+ years)", "B"],
  ["Adults (65+ years)", "Anxiety disorder screening in adults of all ages", "B"],

]

const groupRowCounts = abTableData.reduce((acc, row) => {
  acc[row[0]] = (acc[row[0]] || 0) + 1;
  return acc;
}, {});

// Track which groups have rendered their first row
let renderedGroups = {};

const sections = [
  {
    title: "USPSTF Screening Recommendations by Age",
    content: (
      <div>
        <h3>USPSTF A & B Recommendations by Age Group</h3>
        <p>
          USPSTF consists of a panel of experts in primary care that provide evidence-based recommendations for preventative health screenings. Grade A and B recommendations are of high significance to medical students during their family medicine rotation.<br />
          <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics/uspstf-a-and-b-recommendations" target="_blank" rel="noopener noreferrer">USPSTF A and B Recommendations</a>
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em', fontSize: '0.95em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Age Group</th>
              <th style={thStyle}>Recommended Health Screening/Intervention</th>
              <th style={thStyle}>Grade</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td style={tdStyle} rowSpan={1}>Newborns</td>
              <td style={{ ...tdStyle, backgroundColor: "#99d8c9" }}>Ocular prophylaxis to prevent gonococcal ophthalmia</td>
              <td style={tdStyle}>A</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={tdStyle} rowSpan={2}>Children (0-5 years)</td>
              <td style={tdStyle}>Fluoride varnish to prevent dental caries (≥6 months)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Vision screening for amblyopia/risk factors (3-5 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={tdStyle} rowSpan={4}>Children & Adolescents (6-18 years)</td>
              <td style={tdStyle}>Anxiety screening (8-18 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>High BMI intervention (≥6 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Major depressive disorder (MDD) screening (12-18 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Skin cancer counseling (6 months to 24 years, fair skin)</td>
              <td style={tdStyle}>B</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={tdStyle} rowSpan={7}>Adults (18-64 years)</td>
              <td style={tdStyle}>Hypertension screening (every visit)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>HIV screening (15-65 years)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Cervical cancer screening (Women 21-29: cytology every 3y; Women 30-65: cytology every 3y OR hrHPV every 5y OR both every 5y)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hepatitis C virus screening (18-79 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Anxiety screening (adults under 65)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Breast cancer screening (biennial mammography, women 40-74)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Chlamydia screening (sexually active women ≤24y and ≥25y at risk)</td>
              <td style={tdStyle}>B</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={tdStyle} rowSpan={10}>Pregnant Persons</td>
              <td style={tdStyle}>Folic acid supplementation</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hepatitis B screening (first prenatal visit)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Rh(D) blood typing and antibody testing (first prenatal visit)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Syphilis screening (early in pregnancy)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Asymptomatic bacteriuria screening (urine culture)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Low-dose aspirin for preeclampsia risk (after 12 weeks gestation)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Gestational diabetes screening (≥24 weeks)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Breastfeeding support interventions</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hypertensive disorder screening</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Perinatal depression counseling</td>
              <td style={tdStyle}>B</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={tdStyle} rowSpan={8}>Adults (65+ years)</td>
              <td style={tdStyle}>Colorectal cancer screening (50-75 years)</td>
              <td style={tdStyle}>A</td>
            </tr>
            <tr>
              <td style={tdStyle}>Colorectal cancer screening (45-50 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Osteoporosis screening (≥65 years)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Fall prevention interventions</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Abdominal aortic aneurysm screening (65-75 years, men who smoked)</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Adults aged 50 to 80 years who have a 20 pack-year smoking history and currently smoke or have quit within the past 15 years should receive Low-dose computed tomography (LDCT) for lung cancer screening.</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Depression and suicide risk screening</td>
              <td style={tdStyle}>B</td>
            </tr>
            <tr>
              <td style={tdStyle}>Anxiety disorder screening (all ages)</td>
              <td style={tdStyle}>B</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.95em' }}><strong>Legend:</strong> <br />
          <strong>A</strong>: Recommended (significant benefit) &nbsp;
          <strong>B</strong>: Recommended (moderate benefit)
        </p>




        <table>
          <thead>
            <tr>
              <th style={thStyle}>Age Group</th>
              <th style={thStyle}>Recommended Health Screening/Intervention</th>
              <th style={thStyle}>Grade</th>
            </tr>
          </thead>
          <tbody style={{ opacity: 0.7 }}>
            {abTableData.map((row, rowIdx) => {
              const group = row[0];
              const colors = groupColors[group] || ["#fff", "#fff", "#fff"];
              const isFirst = !renderedGroups[group];
              renderedGroups[group] = true;
              return (
                <tr key={rowIdx}>
                  {isFirst ? (
                    <td
                      rowSpan={groupRowCounts[group]}
                      style={{ ...tdStyle, backgroundColor: colors[0] }}
                    >
                      {group}
                    </td>
                  ) : null}
                  <td style={{ ...tdStyle, backgroundColor: colors[1] }}>{row[1]}</td>
                  <td style={{ ...tdStyle, backgroundColor: colors[2] }}>{row[2]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p style={{ fontSize: '0.95em' }}><strong>Legend:</strong> <br />
          <strong>A</strong>: Recommended (significant benefit) &nbsp;
          <strong>B</strong>: Recommended (moderate benefit)
        </p>
      </div>


    ),
  },

  {
    title: "Tips for Success",
    content: (
      <div>
        <h3>Tips for Success</h3>
        <h4>Arman</h4>
        <ul>
          <li>USPSTF criteria is a MUST KNOW for the shelf. Know it like the back of your hand!</li>
          <li>Some clinic sites are far; make at least one way of the trip useful by listening to FM podcasts or YouTube videos (Dr. High Yield, Divine Intervention).</li>
          <li>You may need to write notes for every patient. Ask for smart phrases to speed up documentation.</li>
          <li>Go through all FM Anki and FM UWorld. If you have time, review ambulatory too (slightly lower yield for shelf).</li>
        </ul>
        <h4>Ramtin</h4>
        <ul>
          <li>This rotation may have the highest patient volume. Be mentally prepared for the pace and repetition, but the work is straightforward.</li>
          <li>Learn when to take a full history vs. focused questions. Not every patient needs a full interview.</li>
          <li>Be familiar with USPSTF A and B recommendations and adult vaccination timelines.</li>
        </ul>
        <h4>Piya</h4>
        <ul>
          <li>Do all UWorld Family and Ambulatory Medicine questions.</li>
          <li>Review USPSTF Guidelines (anki deck: HoggieMed).</li>
        </ul>
        <h4>Hasham</h4>
        <ul>
          <li>Make the most of clinic time; you learn a lot about chronic conditions like DM and osteoarthritis. FM is broad—focus on high yield topics and do all UWorld and ambulatory questions.</li>
          <li>For presentations, focus on actionable items for the visit; physicians appreciate concise, targeted presentations.</li>
          <li>FM aims to address acute/critical issues and manage chronic conditions together.</li>
        </ul>
        <h4>Luay</h4>
        <ul>
          <li>FM is fast-paced; read up on your patients in advance, review main complaint, last clinic note, and consider medication adjustments or questions for the visit.</li>
          <li>Every clinic and physician has their own management style. Learn as much as you can—FM is broad and fun, with a wide variety of patient presentations.</li>
        </ul>

      </div>
    ),
  },

  {
    title: "Vaccine Schedules",
    content: (
      <>
      <h1>Vaccine Schedule by Age</h1>
      <div className="dfe-block__inner">
        <div className="dfe-block dfe-block--cdcmodule cdc_raw_html">
          <strong>
            <a id="table-age" className="onThisPageAnchor" title="" />
            Legend
          </strong>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
            <tbody>
              <tr>
                <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8", width: 30 }} />
                <td style={vaccineTdStyle}>
                  Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of immunity
                </td>
                <td />
                <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc", width: 30 }} />
                <td style={vaccineTdStyle}>
                  Recommended vaccination for adults with an additional risk factor or another indication
                </td>
                <td />
                <td style={{ ...vaccineTdStyle, backgroundColor: "#EAF7FA", width: 30 }} />
                <td style={vaccineTdStyle}>
                  Recommended vaccination based on shared clinical decision-making
                </td>
                <td />
                <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7", width: 30 }} />
                <td style={vaccineTdStyle}>No Guidance/Not Applicable</td>
              </tr>
            </tbody>
          </table>
          <div className="schedules-tbl-wrapper mt-3">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={vaccineThStyle}>Vaccine</th>
                  <th style={vaccineThStyle} colSpan={3}>19-26 years</th>
                  <th style={vaccineThStyle} colSpan={4}>27-49 years</th>
                  <th style={vaccineThStyle} colSpan={4}>50-64 years</th>
                  <th style={vaccineThStyle} colSpan={3}>≥65 years</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={vaccineThStyle}>COVID-19</th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={11}>
                    1 or more doses of 2024–2025 vaccine (See <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-covid-19">Notes</a>)
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={3}>
                    2 or more doses of 2024-2025 vaccine<br />
                    (See <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-covid-19">Notes</a>)
                  </td>
                </tr>
                <tr>
                  <th style={vaccineThStyle}>Influenza inactivated (IIV3, ccIIV3)<br />Influenza recombinant (RIV3)</th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={11}>
                    1 dose annually
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={3} rowSpan={2}>
                    1 dose annually<br />
                    (HD–IIV3, RIV3, or aIIV3 preferred)
                  </td>
                </tr>
                <tr>
                  <th style={vaccineThStyle}>Influenza inactivated (aIIV3; HD–IIV3)<br />Influenza recombinant (RIV3)</th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={11}>
                    Solid organ transplant (See <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-flu">Notes</a>)
                  </td>
                </tr>
                <tr>
                  <th style={vaccineThStyle}>Influenza live, attenuated (LAIV3)</th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={7}>
                    1 dose annually
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }} colSpan={7}></td>
                </tr>
                <tr>
                  <th style={vaccineThStyle}>Respiratory Syncytial Virus (RSV)</th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={7}>
                    Seasonal administration during pregnancy.<br />
                    (See <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">Notes</a>)
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }} colSpan={3}></td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={3}>
                    60 through 74 years<br />
                    (See <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">Notes</a>)
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }}>
                    ≥75 years
                  </td>
                </tr>

                <tr>
                  <th style={vaccineThStyle} rowSpan={2} id="tdap">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-tdap">
                      Tetanus, diphtheria, pertussis
                    </a>
                    <br />
                    (Tdap or Td){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={14}>
                    1 dose Tdap each pregnancy; 1 dose Td/Tdap for wound management
                    (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-tdap">Notes</a>
                    )
                  </td>
                </tr>
                <tr>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={14}>
                    1 dose Tdap, then Td or Tdap booster every 10 years
                  </td>
                </tr>
                {/* MMR */}
                <tr>
                  <th style={vaccineThStyle} id="mmr">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mmr">
                      Measles, mumps, rubella
                    </a>
                    <br />
                    (MMR){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={11}>
                    1 or 2 doses depending on indication
                    <br />
                    (if born in 1957 or later)
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }}>
                    <div>
                      For health care personnel,
                      <br />
                      (See{" "}
                      <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mmr">
                        Notes
                      </a>
                      )
                    </div>
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }} />
                </tr>
                {/* Varicella */}
                <tr>
                  <th style={vaccineThStyle} id="varicella">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-varicella">
                      Varicella
                    </a>
                    <br />
                    (VAR){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={4}>
                    2 doses (if born in 1980 or later)
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={8}>
                    2 doses
                  </td>
                </tr>
                {/* Zoster recombinant */}
                <tr>
                  <th style={vaccineThStyle} id="rzv">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-zoster">
                      Zoster recombinant
                    </a>
                    <br />
                    (RZV){" "}
                    <a
                      href="/vaccines/vpd/shingles/hcp/index.html"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="/vaccines/schedules/images/more-info.jpg"
                        alt="more info icon."
                      />
                    </a>
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={7}>
                    2 doses for immunocompromising conditions
                    <br />
                    (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-zoster">
                      Notes
                    </a>
                    )
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={7}>
                    2 doses
                  </td>
                </tr>
                {/* HPV */}
                <tr>
                  <th style={vaccineThStyle} id="hpv">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hpv">
                      Human papillomavirus
                    </a>
                    <br />
                    (HPV){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={3}>
                    2 or 3 doses depending on age at initial vaccination or condition
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#EAF7FA" }} colSpan={2}>
                    27 through 45 years
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#EAF7FA" }} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }} colSpan={4} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#F5F6F7" }} colSpan={3} />
                </tr>
                {/* Pneumococcal */}
                <tr>
                  <th style={vaccineThStyle} rowSpan={2} id="pneumo-p">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo">
                      Pneumococcal
                    </a>
                    <br />
                    (PCV15, PCV20,PCV21, PPSV23){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={7} rowSpan={2} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={4} rowSpan={2} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={3}>
                    See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo">
                      Notes
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#EAF7FA" }} colSpan={3}>
                    See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo">
                      Notes
                    </a>
                  </td>
                </tr>
                {/* Hepatitis A */}
                <tr>
                  <th style={vaccineThStyle} id="hepa">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hepa">
                      Hepatitis A
                    </a>
                    <br />
                    (HepA){" "}
                    <a
                      href="/vaccines/vpd/hepa/hcp/index.html"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="/vaccines/schedules/images/more-info.jpg"
                        alt="more info icon."
                      />
                    </a>
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={14}>
                    2, 3, or 4 doses depending on vaccine
                  </td>
                </tr>
                {/* Hepatitis B */}
                <tr>
                  <th style={vaccineThStyle} id="hepb">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hepb">
                      Hepatitis B
                    </a>
                    <br />
                    (HepB){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8", textAlign: "right", paddingRight: "2em" }} colSpan={8}>
                    2, 3, or 4 doses depending on vaccine or condition
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc", textAlign: "left", paddingLeft: "2em" }} colSpan={6} />
                </tr>
                {/* Meningococcal A, C, W, Y */}
                <tr>
                  <th style={vaccineThStyle} id="mening">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                      Meningococcal A, C, W, Y
                    </a>
                    <br />
                    (MenACWY){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={14}>
                    1 or 2 doses depending on indication (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                      Notes
                    </a>
                    &nbsp;for booster recommendations)
                  </td>
                </tr>
                {/* Meningococcal B */}
                <tr>
                  <th style={vaccineThStyle} rowSpan={2} id="mening-b">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                      Meningococcal B
                    </a>
                    <br />
                    (MenB){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={13}>
                    2 or 3 doses depending on vaccine and indication (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                      Notes
                    </a>
                    &nbsp;for booster recommendations)
                  </td>
                </tr>
                <tr>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#EAF7FA" }}>
                    19 through 23 years
                  </td>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={2} />
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={11} />
                </tr>
                {/* Hib */}
                <tr>
                  <th style={vaccineThStyle} id="hib">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hib">
                      <em>Haemophilus influenzae</em> type b
                    </a>
                    <br />
                    (Hib){" "}
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
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={14}>
                    1 or 3 doses depending on indication
                  </td>
                </tr>
                {/* Mpox */}
                <tr>
                  <th style={vaccineThStyle} id="mpox">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mpox">
                      Mpox
                    </a>
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
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#bcbddc" }} colSpan={14}>
                    2 doses
                  </td>
                </tr>
                {/* Polio */}
                <tr>
                  <th style={vaccineThStyle} id="polio">
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-polio">
                      Inactivated poliovirus
                    </a>
                    <br />
                    (IPV){" "}
                    <a href="/polio/vaccines/" target="_blank" rel="noopener">
                      <img
                        src="/vaccines/schedules/images/more-info.jpg"
                        alt="more info icon."
                      />
                    </a>
                  </th>
                  <td style={{ ...vaccineTdStyle, backgroundColor: "#FEF0C8" }} colSpan={14}>
                    Complete 3-dose series if incompletely vaccinated. Self–report of previous doses acceptable (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-polio">
                      Notes
                    </a>
                    )
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <ol>
            <li>
              Determine recommended vaccine by age (<a href="#table-age"><strong>Table 1 - By Age</strong></a>)
            </li>
            <li>
              Assess need for additional recommended vaccinations by medical condition or other indication (<a href="/vaccines/schedules/hcp/imz/adult-conditions.html"><strong>Table 2 - By Medical Condition</strong></a>)
            </li>
            <li>
              Review vaccine types, dosing frequencies and intervals, and considerations for special situations (<strong><a href="/vaccines/hcp/imz-schedules/adult-notes.html">Notes</a></strong>)
            </li>
            <li>
              Review contraindications and precautions for vaccine types (<strong><a href="/vaccines/schedules/hcp/imz/adult-schedule-appendix.html">Appendix</a></strong>)
            </li>
          </ol>
        </div>
      </div>

      <h1>Vaccine Schedule by Medical Condition</h1>
      <div className="dfe-block__inner">
  <div className="dfe-block dfe-block--cdcmodule cdc_raw_html">
    <strong>
      <a id="table-age" className="onThisPageAnchor" title="" />
      Legend
    </strong>
    <table>
      <tbody>
        <tr>
          <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8", width: 30 }} />
          <td style={tdStyleTransformed}>
            Recommended for all adults who lack documentation of vaccination,{" "}
            <strong>OR</strong> lack evidence of immunity
          </td>
          <td />
          <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc", width: 30 }} />
          <td style={tdStyleTransformed}>
            Not recommended for all adults, but recommended for some adults
            based on either age OR increased risk for or severe outcomes from
            disease
          </td>
          <td />
          <td style={{ ...tdStyleTransformed, backgroundColor: "#EAF7FA", width: 30 }} />
          <td style={tdStyleTransformed}>
            Recommended based on shared clinical decision-making
          </td>
          <td />
          <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", width: 30 }} />
          <td style={tdStyleTransformed}>
            Recommended for all adults, and additional doses may be necessary
            based on medical condition or other indications. See Notes.
          </td>
          <td />
          <td style={{ ...tdStyleTransformed, backgroundColor: "#FBF0E8", width: 30 }} />
          <td style={tdStyleTransformed}>
            Precaution: Might be indicated if benefit of protection outweighs
            risk of adverse reaction
          </td>
          <td />
          <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", width: 30 }} />
          <td style={tdStyleTransformed}>
            Contraindicated or not recommended *Vaccinate after pregnancy, if
            indicated
          </td>
          <td />
          <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7", width: 30 }} />
          <td style={tdStyleTransformed}>No Guidance/Not Applicable</td>
        </tr>
      </tbody>
    </table>
    <div className="schedules-tbl-wrapper mt-3">
      <table>
        <thead>
          <tr>
            <th style={thStyleTransformed} rowSpan={2}>
              <a id="table2" />
              Vaccine
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Pregnancy
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Immuno-compromised
              <br />
              (excluding HIV infection)
            </th>
            <th style={thStyleTransformed} colSpan={2}>
              HIV infection CD4
              <br />
              percentage and count
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Men who have sex with men
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Asplenia, complement deficiency
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Heart or lung disease
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Kidney failure, End-stage renal disease or on dialysis
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Chronic liver disease; alcoholism<sup>a</sup>
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Diabetes
            </th>
            <th style={thStyleTransformed} rowSpan={2}>
              Health care Personnel<sup>b</sup>
            </th>
          </tr>
          <tr>
            <th style={thStyleTransformed}>
              &lt;15% or &lt;200/mm
              <sup>
                <span style={{ fontSize: "11px" }}>3</span>
              </sup>
            </th>
            <th style={thStyleTransformed}>
              ≥15% and ≥200/mm
              <sup>
                <span style={{ fontSize: "11px" }}>3</span>
              </sup>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* COVID-19 */}
          <tr>
            <th style={thStyleTransformed} id="rzv" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-covid-19">
                COVID-19
              </a>{" "}
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", color: "#fff" }} colSpan={2} headers="covid-19 immuno hiv-1">
              See{" "}
              <a
                style={{ color: "#005EA2" }}
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-covid-19"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} headers="covid-19 immuno hiv-2" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={7} headers="covid-19 msm asplenia heart kidney liver diabetes healthcare-personnel" />
          </tr>
          {/* Influenza inactivated/recombinant */}
          <tr>
            <th style={thStyleTransformed} id="iiv" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-flu">
                Influenza inactivated
                <br />
                Influenza recombinant{" "}
              </a>
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
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity" headers="iiv pregnancy" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity" headers="iiv immuno">
              Solid organ transplant
              <br />
              (See{" "}
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-flu">
                Notes
              </a>
              )
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity" colSpan={9} headers="iiv hiv-1 hiv-2 msm asplenia heart kidney liver diabetes healthcare-personnel">
              1 dose annually
            </td>
          </tr>
          {/* LAIV3 */}
          <tr>
            <th style={thStyleTransformed} id="laiv" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-flu">
                LAIV3
              </a>{" "}
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
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", color: "#fff" }} colSpan={4} title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated" headers="laiv pregnancy immuno hiv-1 hiv-2" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="laiv pregnancy immuno hiv-1 hiv-2 asplenia">
              1 dose annually if age
              <br />
              19–49 years
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4" }} headers="laiv renal heart liver diabetes" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FBF0E8", textAlign: "right", paddingRight: "2em" }} colSpan={4} headers="laiv renal heart liver diabetes">
              1 dose annually if age 19–
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc", textAlign: "left", paddingLeft: "2em" }} headers="laiv hcp msm">
              49 years
            </td>
          </tr>
          {/* RSV */}
          <tr>
            <th style={thStyleTransformed} id="rzv" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-covid-19">
                RSV
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} headers="rsv pregnancy">
              Seasonal administration. (See{" "}
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">
                Notes
              </a>
              )
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={2} headers="rsv immuno hiv-1 hiv-2">
              See{" "}
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={2} headers="rsv hiv-2 msm" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={3} headers="rsv asplenia heart kidney liver diabetes healthcare-personnel">
              See{" "}
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="rsv asplenia heart kidney liver diabetes healthcare-personnel">
              <div style={{ fontSize: "13px" }}>
                Liver disease
                <br />
                (See{" "}
                <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">
                  Notes
                </a>
                )
              </div>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="rsv asplenia heart kidney liver diabetes healthcare-personnel">
              <div style={{ fontSize: "11px" }}>
                See{" "}
                <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">
                  Notes
                </a>
              </div>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="rsv asplenia heart kidney liver diabetes healthcare-personnel" />
          </tr>
          {/* Tdap/Td */}
          <tr>
            <th style={thStyleTransformed} id="tdap" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-tdap">
                Tdap
              </a>{" "}
              or{" "}
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-tdap">
                Td
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", color: "#fff" }} title="Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes." headers="tdap pregnancy">
              Tdap: 1 dose each pregnancy
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={10} headers="tdap immuno hiv-1 hiv-2 msm asplenia heart kidney liver diabetes healthcare-personnel">
              1 dose Tdap, then Td or Tdap booster every 10 yrs
            </td>
          </tr>
          {/* MMR */}
          <tr>
            <th style={thStyleTransformed} id="mmr" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mmr">
                MMR
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", color: "#fff" }} title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated" headers="mmr pregnancy">
              *
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", color: "#fff" }} colSpan={2} title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated" headers="mmr immuno hiv-1" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={8} title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity" headers="mmr hiv-2 msm asplenia heart kidney liver diabetes healthcare-personnel" />
          </tr>
          {/* VAR */}
          <tr>
            <th style={vaccineThStyle} id="var" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-varicella">
                VAR
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", color: "#fff" }} title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated" headers="var pregnancy">
              *
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", color: "#fff" }} colSpan={2} title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated" headers="var immuno hiv-1" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} headers="var hiv-2" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection">
              See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-varicella"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={7} title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" headers="var msm asplenia heart kidney liver diabetes healthcare-personnel" />
          </tr>
          {/* RZV */}
          <tr>
            <th style={vaccineThStyle} id="rzv" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-zoster">
                RZV
              </a>{" "}
              <a
                href="/vaccines/vpd/shingles/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} headers="rzv pregnancy" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={3} headers="rzv immuno hiv-1 hiv-2" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection">
              See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-zoster"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={7} headers="rzv msm asplenia heart kidney liver diabetes healthcare-personnel" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
          </tr>
          {/* HPV */}
          <tr>
            <th style={vaccineThStyle} id="hpv" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hpv">
                HPV
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F3E1E4", color: "#fff" }} title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated" headers="hpv pregnancy">
              *
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={3} headers="hpv immuno hiv-1 hiv-2" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease">
              3-dose series if indicated
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={7} headers="hpv msm asplenia heart kidney liver diabetes healthcare-personnel" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
          </tr>
          {/* Pneumococcal */}
          <tr>
            <th style={vaccineThStyle} id="pneumo" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo">
                Pneumococcal
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} headers="pneumo pregnancy" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={3} headers="pneumo immuno hiv-1 hiv-2" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection">
              See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="pneumo msm" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={5} headers="pneumo asplenia heart kidney liver diabetes" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="pneumo healthcare-personnel" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
          </tr>
          {/* HepA */}
          <tr>
            <th style={thStyleTransformed} id="hepa" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hepa">
                HepA
              </a>{" "}
              <a
                href="/vaccines/vpd/hepa/hcp/index.html"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="hepa pregnancy" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} headers="hepa immuno" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={3} headers="hepa hiv-1 hiv-2 msm" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={3} headers="hepa asplenia heart kidney" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} headers="hepa liver" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={2} headers="hepa healthcare-personnel" title="No Guidance/Not Applicable" />
          </tr>
          {/* HepB */}
          <tr>
            <th style={thStyleTransformed} id="hepb" rowSpan={2} headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hepb">
                HepB
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} rowSpan={2} headers="hepb pregnancy" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection">
              See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hepb"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} rowSpan={2} headers="hepb immuno" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={3} rowSpan={2} headers="hepb hiv-1 hiv-2 msm asplenia" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={2} rowSpan={2} headers="hepb hiv-1 hiv-2 msm asplenia" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={2} rowSpan={2} headers="hepb immuno hiv-1 hiv-2 asplenia renal heart liver diabetes hcp msm" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} headers="hepb immuno hiv-1 hiv-2 asplenia renal heart liver diabetes hcp msm" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} rowSpan={2} headers="hepb immuno hiv-1 hiv-2 asplenia renal heart liver diabetes hcp msm" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection" />
          </tr>
          <tr>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#0057B7", color: "#fff" }} headers="hepb immuno hiv-1 hiv-2 asplenia renal heart liver diabetes hcp msm" title="Recommended vaccination based on shared clinical decision–making">
              Age
              <br />≥ 60 years
            </td>
          </tr>
          {/* MenACWY */}
          <tr>
            <th style={thStyleTransformed} id="mening" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                MenACWY
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={2} headers="mening pregnancy immuno" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", color: "#fff" }} colSpan={2} headers="mening hiv-1 hiv-2" title="Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes." />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} headers="mening msm" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", color: "#fff" }} headers="mening asplenia" title="Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes." />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={5} headers="mening heart kidney liver diabetes healthcare-personnel" title="No Guidance/Not Applicable" />
          </tr>
          {/* MenB */}
          <tr>
            <th style={thStyleTransformed} id="mening-b" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                MenB
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FBF0E8", color: "#fff" }} headers="mening-b pregnancy" title="Precaution: Might be indicated if benefit of protection outweighs risk of adverse reaction" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={4} headers="mening-b immuno hiv-1 hiv-2 msm" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", color: "#fff" }} headers="mening-b asplenia" title="Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes." />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={5} headers="mening-b heart kidney liver diabetes healthcare-personnel" title="No Guidance/Not Applicable" />
          </tr>
          {/* Hib */}
          <tr>
            <th style={thStyleTransformed} id="hib" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hib">
                Hib
              </a>{" "}
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
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} headers="hib pregnancy" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#8d9297", color: "#fff" }} headers="hib immuno" title="Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes." />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={3} headers="hib hiv-1 hiv-2 msm" title="No Guidance/Not Applicable" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} headers="hib asplenia" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection">
              Asplenia:
              <br />1 dose
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#F5F6F7" }} colSpan={5} headers="hib heart kidney liver diabetes healthcare-personnel" title="No Guidance/Not Applicable" />
          </tr>
          {/* Mpox */}
          <tr>
            <th style={thStyleTransformed} id="hib" headers="vacc">
              <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-hib">
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
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="hib pregnancy" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease">
              See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mpox"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={3} headers="hib immuno" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} headers="hib hiv-1 hiv-2 msm" title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease">
              See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mpox"
              >
                Notes
              </a>
            </td>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#bcbddc" }} colSpan={5} title="Not recommended for all adults, but is recommended for some adults based on either age OR increased risk for or severe outcomes from disease" headers="hib asplenia" />
          </tr>
          {/* IPV */}
          <tr>
            <th style={thStyleTransformed} id="ipv" headers="vacc">
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-polio"
              >
                IPV
              </a>{" "}
              <a href="/polio/vaccines/" target="_blank" rel="noopener">
                <img
                  src="/vaccines/schedules/images/more-info.jpg"
                  alt="more info icon."
                />
              </a>
            </th>
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FBF0E8", color: "#fff" }} headers="hib pregnancy" title="Precaution: Might be indicated if benefit of protection outweighs risk of adverse reaction" />
            <td style={{ ...tdStyleTransformed, backgroundColor: "#FEF0C8" }} colSpan={10} headers="hib immuno" title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection">
              Complete 3-dose series if incompletely vaccinated. Self–report of
              previous doses acceptable (See{" "}
              <a
                className=""
                href="/vaccines/hcp/imz-schedules/adult-notes.html#note-polio"
              >
                Notes
              </a>
              )
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ol className="lst-la fs0875">
      <li>
        <a id="fa" />
        Precaution for LAIV4 does not apply to{" "}
        <span className="fs0875">alcoholism</span>.
      </li>
      <li>
        <a id="fb" />
        See notes for influenza; hepatitis B; measles, mumps, and rubella; and
        varicella vaccinations.
      </li>
      <li>
        <a id="fc" />
        Hematopoietic stem cell transplant.
      </li>
    </ol>
    To make vaccination recommendations, healthcare providers should:
    <ol>
      <li>
        Determine recommended vaccine by age (
        <a href="#table-age">
          <strong>Table 1 - By Age</strong>
        </a>
        )
      </li>
      <li>
        Assess need for additional recommended vaccinations by medical condition
        or other indication (
        <a href="/vaccines/schedules/hcp/imz/adult-conditions.html">
          <strong>Table 2 - By Medical Condition</strong>
        </a>
        )
      </li>
      <li>
        Review vaccine types, dosing frequencies and intervals, and
        considerations for special situations (
        <strong>
          <a href="/vaccines/hcp/imz-schedules/adult-notes.html">Notes</a>
        </strong>
        )
      </li>
      <li>
        Review contraindications and precautions for vaccine types (
        <strong>
          <a href="/vaccines/schedules/hcp/imz/adult-schedule-appendix.html">
            Appendix
          </a>
        </strong>
        )
      </li>
    </ol>
  </div>
</div>
    </>
  ),

},
{
  title: "Management for Type 2 Diabetes Mellitus",
  content: (
    <div>
      <h2>Management for Type 2 Diabetes Mellitus</h2>
      <p>
        Refer to <strong>2023 ADA guidelines</strong> and <strong>USPSTF screening guideline</strong> for the most up to date information.<br />
        See Pyrls document on the Family Medicine Blackboard page.
      </p>

      <h3>Questions to Ask</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Patient History & Symptoms</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyleTransformed}>Do you have a family history of diabetes?</td></tr>
          <tr><td style={tdStyleTransformed}>Have you experienced any recent weight loss or gain?</td></tr>
          <tr><td style={tdStyleTransformed}>Are you experiencing increased thirst or frequent urination?</td></tr>
          <tr><td style={tdStyleTransformed}>Do you have a history of high blood pressure or high cholesterol?</td></tr>
          <tr><td style={tdStyleTransformed}>Can you describe your typical daily diet? How often do you exercise and what type of exercise do you do? Do you smoke? Alcohol? How much?</td></tr>
          <tr><td style={tdStyleTransformed}>Have you noticed any changes in your vision? Any numbness or tingling in hands/feet? How often do you check your blood sugar levels?</td></tr>
          <tr><td style={tdStyleTransformed}>Do you have any other chronic conditions, like heart disease or thyroid issues? Any complications related to diabetes (if already diagnosed), such as kidney/eye/nerve damage?</td></tr>
        </tbody>
      </table>

      <h3>Risk Factors</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Risk Factor</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyleTransformed}>Obesity and physical inactivity</td></tr>
          <tr><td style={tdStyleTransformed}>Poor diet (high in refined sugars and fats)</td></tr>
          <tr><td style={tdStyleTransformed}>Family history of Type 2 Diabetes mellitus</td></tr>
          <tr><td style={tdStyleTransformed}>Age (risk increases with age)</td></tr>
          <tr><td style={tdStyleTransformed}>Ethnicity (higher risk in African American, Hispanic, and Native American populations)</td></tr>
          <tr><td style={tdStyleTransformed}>Hypertension</td></tr>
          <tr><td style={tdStyleTransformed}>Polycystic ovary syndrome</td></tr>
          <tr><td style={tdStyleTransformed}>History of gestational diabetes</td></tr>
        </tbody>
      </table>

      <h3>Symptoms</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Common Symptoms</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyleTransformed}>Polydipsia</td></tr>
          <tr><td style={tdStyleTransformed}>Polyuria</td></tr>
          <tr><td style={tdStyleTransformed}>Polyphagia</td></tr>
          <tr><td style={tdStyleTransformed}>Unexplained weight loss</td></tr>
          <tr><td style={tdStyleTransformed}>Fatigue</td></tr>
          <tr><td style={tdStyleTransformed}>Blurry vision</td></tr>
          <tr><td style={tdStyleTransformed}>Frequent infections</td></tr>
          <tr><td style={tdStyleTransformed}>Gradual onset</td></tr>
          <tr><td style={tdStyleTransformed}>Acanthosis nigricans (armpits/neck/general skin fold areas)</td></tr>
        </tbody>
      </table>

      <h3>Diagnosis</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Test</th>
            <th style={thStyleTransformed}>Criteria</th>
            <th style={thStyleTransformed}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Fasting Plasma Glucose</td>
            <td style={tdStyleTransformed}>&ge; 126 mg/dL</td>
            <td style={tdStyleTransformed}>Needs 8h fasting</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Oral Glucose Tolerance Test (OGTT)</td>
            <td style={tdStyleTransformed}>&ge; 200 mg/dL</td>
            <td style={tdStyleTransformed}>2h after drinking glucose beverage</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Hemoglobin A1c</td>
            <td style={tdStyleTransformed}>&ge; 6.5%</td>
            <td style={tdStyleTransformed}>Average blood sugar levels over 3 months</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Random Plasma Glucose Test</td>
            <td style={tdStyleTransformed}>&ge; 200 mg/dL with classic symptoms</td>
            <td style={tdStyleTransformed}>One finding is sufficient for diagnosis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>If diagnosed with T2DM</td>
            <td style={tdStyleTransformed}>Regular HbA1c testing every 3-6 months</td>
            <td style={tdStyleTransformed}></td>
          </tr>
        </tbody>
      </table>

      <h3>Treatment</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Lifestyle Modification</th>
            <th style={thStyleTransformed}>Medications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Diet – focus on lowering high carbohydrate foods and processed sugars</td>
            <td style={tdStyleTransformed}>Oral hypoglycemic agents (metformin, sulfonylureas)</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Exercise – Regular physical activity (150 minutes of moderate exercise per week)</td>
            <td style={tdStyleTransformed}>Non-insulin injectable (GLP-1 receptor agonist)</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}></td>
            <td style={tdStyleTransformed}>Insulin therapy</td>
          </tr>
        </tbody>
      </table>

      <h3>Healthcare Maintenance for Diabetic Patients</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Category</th>
            <th style={thStyleTransformed}>Actions/Recommendations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Every Visit</td>
            <td style={tdStyleTransformed}>
              <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
                <li>Review BGL: AM Goal 80–130 mg/dL, Postprandial 1-2 hours &lt; 180 mg/dL</li>
                <li>Screen for hypoglycemia awareness</li>
                <li>Review medications and adherence</li>
                <li>BP: Goal &lt; 130/80, ACEi/ARB (for progression of nephropathy)</li>
                <li>Weight, BMI: BMI &ge; 40 or &ge; 35 with poor control</li>
                <li>Foot exam: Check for neuropathy or PVD (Charcot joint)</li>
                <li>Screen for tobacco, alcohol, and substance use and provide counseling</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Q3-6 Months</td>
            <td style={tdStyleTransformed}>HbA1c every 6 months if controlled, every 3-6 months if HbA1c &gt; target</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Vaccines</td>
            <td style={tdStyleTransformed}>
              <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
                <li>Influenza annually</li>
                <li>Hep B series if under 60 or not immune</li>
                <li>PPSV23 (Pneumococcal) once before 65</li>
                <li>Re-dose PPSV23 if after 65 and more than 5 years since the last dose</li>
                <li>PCV13 once after age 65</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Annually</td>
            <td style={tdStyleTransformed}>
              <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
                <li>Lipids: Moderate-intensity statin if age &gt; 75 or ASCVD risk &gt; 7.5%</li>
                <li>High-intensity statin if age &lt; 75, ASCVD risk &gt; 7.5%, or LDL &gt; 190</li>
                <li>Urine microalbumin/creatinine and GFR: ACEi/ARB if hypertension or GFR &lt; 60</li>
                <li>Neuropathy exam: Check with 10g monofilament, pinprick, and vibration reflexes</li>
                <li>Retinopathy screen with dilated eye exam or retinal photography every 2-3 years if normal</li>
                <li>LFTs: Consider elastography or hepatology referral to check for NASH</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
},

// ...existing code...
{
  title: "Management for Hypertension (HTN)",
  content: (
    <div>
      <h2>Management for Hypertension (HTN)</h2>
      <p>
        <strong>USPSTF Guidelines</strong> (Last updated: April 27, 2021) <br />
        <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening" target="_blank" rel="noopener noreferrer">
          USPSTF Hypertension Screening Recommendation
        </a>
        <br />
        Refer to Pyrls document in the Family Medicine folder for comprehensive treatment coverage.
      </p>

      <h3>Questions to Ask</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Patient History & Symptoms</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyleTransformed}>Do you have a family history of hypertension or heart disease?</td></tr>
          <tr><td style={tdStyleTransformed}>Have you been diagnosed with HTN before?</td></tr>
          <tr><td style={tdStyleTransformed}>Are you experiencing any symptoms such as headaches, dizziness, or shortness of breath?</td></tr>
          <tr><td style={tdStyleTransformed}>Can you describe your typical daily diet? How often do you exercise, and what type?</td></tr>
          <tr><td style={tdStyleTransformed}>Do you smoke or drink alcohol? How much?</td></tr>
          <tr><td style={tdStyleTransformed}>Do you have any other chronic conditions?</td></tr>
          <tr><td style={tdStyleTransformed}>Are you currently taking any medications for HTN or other conditions?</td></tr>
          <tr><td style={tdStyleTransformed}>Do you have any vision changes, epistaxis, headaches, or chest pain?</td></tr>
          <tr><td style={tdStyleTransformed}>Do you monitor your blood pressure/keep a log?</td></tr>
        </tbody>
      </table>

      <h3>Risk Factors</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Non-Modifiable</th>
            <th style={thStyleTransformed}>Modifiable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Age</td>
            <td style={tdStyleTransformed}>Obesity, physical inactivity</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Family history of HTN</td>
            <td style={tdStyleTransformed}>Unhealthy diet (high Na+, low K+, excessive alcohol)</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Gender (men at risk earlier)</td>
            <td style={tdStyleTransformed}>Smoking</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Race (African American higher risk)</td>
            <td style={tdStyleTransformed}>Stress</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}></td>
            <td style={tdStyleTransformed}>Chronic conditions (CKD, DM, OSA)</td>
          </tr>
        </tbody>
      </table>

      <h3>Symptoms</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Possible Symptoms</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyleTransformed}>Many are asymptomatic</td></tr>
          <tr><td style={tdStyleTransformed}>Headaches</td></tr>
          <tr><td style={tdStyleTransformed}>Shortness of breath</td></tr>
          <tr><td style={tdStyleTransformed}>Epistaxis (nosebleeds)</td></tr>
          <tr><td style={tdStyleTransformed}>Flushing</td></tr>
          <tr><td style={tdStyleTransformed}>Dizziness</td></tr>
          <tr><td style={tdStyleTransformed}>Chest pain</td></tr>
          <tr><td style={tdStyleTransformed}>Visual changes</td></tr>
          <tr><td style={tdStyleTransformed}>Hematuria</td></tr>
        </tbody>
      </table>

      <h3>Diagnosis</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Criteria</th>
            <th style={thStyleTransformed}>Blood Pressure (mmHg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Normal</td>
            <td style={tdStyleTransformed}>&lt;120 / &lt;80</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Elevated</td>
            <td style={tdStyleTransformed}>120-129 / &lt;80</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Hypertension Stage 1</td>
            <td style={tdStyleTransformed}>130-139 / 80-89</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Hypertension Stage 2</td>
            <td style={tdStyleTransformed}>&ge;140 / &ge;90</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>Obtain at least two readings on two separate occasions, with the patient seated quietly for at least 5 minutes in a chair (not exam table), feet on the floor, and arm supported at heart level.</li>
        <li>Most common: Primary HTN</li>
        <li>Secondary HTN is uncommon but requires further investigation if refractory to treatment</li>
      </ul>

      <h3>Treatment</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Lifestyle Modification</th>
            <th style={thStyleTransformed}>Medications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>DASH Diet (rich in fruits, vegetables, whole grains, low-fat dairy)</td>
            <td style={tdStyleTransformed}>Thiazide diuretics</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Salt reduction</td>
            <td style={tdStyleTransformed}>ACE inhibitors</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Increased physical activity (150 min moderate intensity/week)</td>
            <td style={tdStyleTransformed}>ARBs</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Weight loss</td>
            <td style={tdStyleTransformed}>Calcium channel blockers (CCBs)</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Alcohol moderation</td>
            <td style={tdStyleTransformed}>Beta blockers</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Smoking cessation</td>
            <td style={tdStyleTransformed}>Aldosterone antagonists</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}></td>
            <td style={tdStyleTransformed}>Direct renin inhibitors</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
},
// ...existing

{
  title: "Management for MSK Pain (Back & Knees)",
  content: (
    <div>
      <h2>MSK Pain: Back & Knees</h2>

      <h3>Back Pain</h3>
      <h4>Questions to Ask (DDx)</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Question</th>
            <th style={thStyleTransformed}>DDx Consideration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Radiating pain to leg/buttocks?</td>
            <td style={tdStyleTransformed}>Sciatica or Lumbar radiculopathy</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Bowel/bladder incontinence?</td>
            <td style={tdStyleTransformed}>Cauda equina syndrome</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Milder neuro sx w/o incontinence?</td>
            <td style={tdStyleTransformed}>Disc herniation or spinal stenosis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>History of trauma?</td>
            <td style={tdStyleTransformed}>Fracture/spinal injury</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Minor trauma?</td>
            <td style={tdStyleTransformed}>Muscle strain/ligamentous injury</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>No trauma?</td>
            <td style={tdStyleTransformed}>Insidious/degenerative cause</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Fever?</td>
            <td style={tdStyleTransformed}>Infection</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Weight loss?</td>
            <td style={tdStyleTransformed}>Malignancy</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Young + systemic sx?</td>
            <td style={tdStyleTransformed}>Inflammatory</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Pain worse at rest/night?</td>
            <td style={tdStyleTransformed}>Malignancy or Infection</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Pain better with rest?</td>
            <td style={tdStyleTransformed}>Degenerative conditions</td>
          </tr>
        </tbody>
      </table>

      <h4>Differential Diagnosis</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>MSK</th>
            <th style={thStyleTransformed}>Neurological</th>
            <th style={thStyleTransformed}>Inflammatory</th>
            <th style={thStyleTransformed}>Infection</th>
            <th style={thStyleTransformed}>Neoplastic</th>
            <th style={thStyleTransformed}>Visceral</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Muscle strain, Ligament sprain, Disc herniation, Degenerative disc disease</td>
            <td style={tdStyleTransformed}>Sciatica, Spinal stenosis, Nerve root compression</td>
            <td style={tdStyleTransformed}>Ankylosing spondylitis, Rheumatoid arthritis</td>
            <td style={tdStyleTransformed}>Vertebral osteomyelitis, Discitis, Epidural abscess</td>
            <td style={tdStyleTransformed}>Spinal metastasis, Primary bone tumors</td>
            <td style={tdStyleTransformed}>AAA, Renal stones, Pancreatitis</td>
          </tr>
        </tbody>
      </table>

      <h4>Red Flags</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Malignancy</th>
            <th style={thStyleTransformed}>Infection</th>
            <th style={thStyleTransformed}>Fracture</th>
            <th style={thStyleTransformed}>Cauda Equina</th>
            <th style={thStyleTransformed}>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Unexplained weight loss, Hx of cancer, Night pain</td>
            <td style={tdStyleTransformed}>Fever, Immunosuppression, IV drug use</td>
            <td style={tdStyleTransformed}>Trauma, Osteoporosis, Steroid use</td>
            <td style={tdStyleTransformed}>Saddle anesthesia, Incontinence, Severe weakness</td>
            <td style={tdStyleTransformed}>Neuro deficit, Age &gt;50 or &lt;20, Unrelenting pain</td>
          </tr>
        </tbody>
      </table>

      <h4>Physical Exam</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Inspection</th>
            <th style={thStyleTransformed}>Palpation</th>
            <th style={thStyleTransformed}>ROM</th>
            <th style={thStyleTransformed}>Neuro Exam</th>
            <th style={thStyleTransformed}>Special Tests</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Posture, gait, spinal curvature, skin changes</td>
            <td style={tdStyleTransformed}>Paraspinal, spinous process, SI joint tenderness</td>
            <td style={tdStyleTransformed}>Flexion, extension, lateral flexion, rotation</td>
            <td style={tdStyleTransformed}>Motor (strength), Sensory (touch, pinprick, proprioception), Reflexes (patellar, Achilles, Babinski)</td>
            <td style={tdStyleTransformed}>Straight leg raise, Femoral nerve stretch</td>
          </tr>
        </tbody>
      </table>

      <h4>Diagnosis</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Imaging</th>
            <th style={thStyleTransformed}>Labs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>X-ray, MRI/CT, Bone scan, DEXA, EMG</td>
            <td style={tdStyleTransformed}>CBC, ESR/CRP, Urinalysis</td>
          </tr>
        </tbody>
      </table>

      <h4>Management</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Non-Pharm</th>
            <th style={thStyleTransformed}>Pharm</th>
            <th style={thStyleTransformed}>Interventional</th>
            <th style={thStyleTransformed}>Surgical</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>PT, Core strengthening, Heat/Ice, Activity modification</td>
            <td style={tdStyleTransformed}>Acetaminophen, NSAIDs, Muscle relaxants, Opioids (short-term), Antidepressants/Anticonvulsants</td>
            <td style={tdStyleTransformed}>Epidural steroid injections, Facet joint injections, Nerve blocks</td>
            <td style={tdStyleTransformed}>Discectomy, Indications: progressive neuro deficit, intractable pain, cauda equina</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Knee Pain</h3>
      <h4>Questions to Ask</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Question</th>
            <th style={thStyleTransformed}>DDx Consideration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Onset sudden or gradual?</td>
            <td style={tdStyleTransformed}>Sudden: Gout, pseudogout, septic arthritis<br />Gradual: OA, chronic inflammatory, mechanical injury</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Recent trauma/injury?</td>
            <td style={tdStyleTransformed}>Yes: Cauda equina syndrome<br />No: Disc herniation/spinal stenosis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Recurrent episodes?</td>
            <td style={tdStyleTransformed}>Gout, pseudogout, chronic inflammatory arthritis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>New onset?</td>
            <td style={tdStyleTransformed}>Septic arthritis, traumatic injury</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Fever/chills?</td>
            <td style={tdStyleTransformed}>Septic arthritis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Recent infection?</td>
            <td style={tdStyleTransformed}>Septic or reactive arthritis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>RA/Gout?</td>
            <td style={tdStyleTransformed}>Inflammatory or crystal-induced arthritis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Blood thinners + trauma?</td>
            <td style={tdStyleTransformed}>Hemarthrosis</td>
          </tr>
        </tbody>
      </table>

      <h4>Physical Exam (Special Tests)</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Test</th>
            <th style={thStyleTransformed}>Indication</th>
            <th style={thStyleTransformed}>Video</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Lachman Test</td>
            <td style={tdStyleTransformed}>ACL Injury</td>
            <td style={tdStyleTransformed}><a href="https://youtu.be/nf8Ybkq0fho?si=auVxF95TZXsiAkBf&t=541" target="_blank" rel="noopener noreferrer">Video</a></td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Anterior Drawer Test</td>
            <td style={tdStyleTransformed}>ACL Injury</td>
            <td style={tdStyleTransformed}><a href="https://youtu.be/nf8Ybkq0fho?si=-WfHm4aHkLnhZFqH&t=513" target="_blank" rel="noopener noreferrer">Video</a></td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Posterior Drawer Test</td>
            <td style={tdStyleTransformed}>PCL Injury</td>
            <td style={tdStyleTransformed}><a href="https://youtu.be/nf8Ybkq0fho?si=-WfHm4aHkLnhZFqH&t=513" target="_blank" rel="noopener noreferrer">Video</a></td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>McMurray Test</td>
            <td style={tdStyleTransformed}>Meniscal Injury</td>
            <td style={tdStyleTransformed}><a href="https://youtu.be/nf8Ybkq0fho?si=ZhEO1LLGNUQZDPim&t=575" target="_blank" rel="noopener noreferrer">Video</a></td>
          </tr>
        </tbody>
      </table>

      <h4>Differential Diagnosis (MGH)</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Location</th>
            <th style={thStyleTransformed}>Traumatic</th>
            <th style={thStyleTransformed}>Related to Activity</th>
            <th style={thStyleTransformed}>Atraumatic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Anterior</td>
            <td style={tdStyleTransformed}>Quadriceps/patellar injury</td>
            <td style={tdStyleTransformed}>Quadriceps/patellar tendinopathy, Patellofemoral syndrome, Osgood-Schlatter, Bursitis</td>
            <td style={tdStyleTransformed}>RA, Gout, Pseudogout, Septic joint</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Lateral</td>
            <td style={tdStyleTransformed}>Lateral meniscal tear, LCL injury</td>
            <td style={tdStyleTransformed}>Iliotibial Band Syndrome</td>
            <td style={tdStyleTransformed}>Lateral osteoarthritis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Medial</td>
            <td style={tdStyleTransformed}>Tibial plateau fracture, Medial meniscal tear, MCL injury</td>
            <td style={tdStyleTransformed}>Anserine bursitis</td>
            <td style={tdStyleTransformed}>Medial osteoarthritis, Saphenous nerve entrapment</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Popliteal</td>
            <td style={tdStyleTransformed}>PCL injury</td>
            <td style={tdStyleTransformed}>Popliteal artery entrapment, Baker’s cyst</td>
            <td style={tdStyleTransformed}>Popliteal artery aneurysm, DVT</td>
          </tr>
        </tbody>
      </table>

      <h4>Management</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Imaging Indications</th>
            <th style={thStyleTransformed}>Diagnostic Studies</th>
            <th style={thStyleTransformed}>All Management</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>X-ray: Trauma, OA (bilateral weightbearing views)</td>
            <td style={tdStyleTransformed}>MRI: Fracture, infection, internal derangement<br />Arthrocentesis: Acute joint pain/swelling, trauma, hx of arthritis, recent infection, fever</td>
            <td style={tdStyleTransformed}>Rest, Ice, NSAIDs/APAP, Compression, PT, Weight loss<br />If refractory: steroid injections</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
},
//

{
  title: "Infectious Management: Centor Criteria & UTI",
  content: (
    <div>
      <h2>Centor Criteria – Strep Pharyngitis</h2>
      <p>
        <strong>Overview:</strong> Centor criteria estimate likelihood of streptococcal pharyngitis in patients with sore throat.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Criteria</th>
            <th style={thStyleTransformed}>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Cough</td>
            <td style={tdStyleTransformed}>No = +1, Yes = 0</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Tonsillar Exudates</td>
            <td style={tdStyleTransformed}>Yes = +1, No = 0</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Tender Anterior Cervical Lymphadenopathy</td>
            <td style={tdStyleTransformed}>Yes = +1, No = 0</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Fever (&gt;38°C/100.4°F)</td>
            <td style={tdStyleTransformed}>Yes = +1, No = 0</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Age</td>
            <td style={tdStyleTransformed}>3-14y = +1, 15-44y = 0, ≥45y = -1</td>
          </tr>
        </tbody>
      </table>
      <h4>Scoring & Recommendations</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Score</th>
            <th style={thStyleTransformed}>Probability</th>
            <th style={thStyleTransformed}>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>0</td>
            <td style={tdStyleTransformed}>1-2.5%</td>
            <td style={tdStyleTransformed}>No further test or abx</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>1</td>
            <td style={tdStyleTransformed}>5-10%</td>
            <td style={tdStyleTransformed}>No further test or abx</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>2</td>
            <td style={tdStyleTransformed}>11-17%</td>
            <td style={tdStyleTransformed}>Optional rapid strep test/culture</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>3</td>
            <td style={tdStyleTransformed}>28-35%</td>
            <td style={tdStyleTransformed}>Consider rapid strep test/culture</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>&ge;4</td>
            <td style={tdStyleTransformed}>51-53%</td>
            <td style={tdStyleTransformed}>Consider rapid strep test/culture and empiric abx</td>
          </tr>
        </tbody>
      </table>
      <h4>Questions to Ask</h4>
      <ul>
        <li>When did sore throat start? Fever/chills? How long with symptoms?</li>
        <li>Any fever over 104°F? How many days with fever?</li>
        <li>Cough, rhinorrhea, white spots on tonsils, swollen neck/tender?</li>
        <li>Difficulty swallowing/breathing? Rash? Fatigue?</li>
        <li>Allergies to medications (penicillin)? Tried OTC meds?</li>
        <li>Close contacts with similar symptoms?</li>
      </ul>
      <h4>Differential Diagnosis</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Diagnosis</th>
            <th style={thStyleTransformed}>Key Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Viral pharyngitis</td>
            <td style={tdStyleTransformed}>Cough, runny nose, hoarseness, conjunctivitis</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Mononucleosis (EBV)</td>
            <td style={tdStyleTransformed}>Fatigue, splenomegaly, lymphadenopathy, atypical lymphocytes</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Gonococcal pharyngitis</td>
            <td style={tdStyleTransformed}>Severe sore throat, tonsillar exudates, STI hx</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Diphtheria</td>
            <td style={tdStyleTransformed}>Grayish pseudomembrane, difficulty breathing</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Peritonsillar abscess</td>
            <td style={tdStyleTransformed}>Severe unilateral pain, difficulty swallowing, muffled voice, uvular deviation</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Allergic Rhinitis</td>
            <td style={tdStyleTransformed}>Itchy/watery eyes, sneezing, postnasal drip</td>
          </tr>
        </tbody>
      </table>
      <h4>Treatment</h4>
      <ul>
        <li>Penicillin or amoxicillin – 1st-line</li>
        <li>Cephalosporins or macrolides (azithromycin) if penicillin allergy</li>
      </ul>

      <hr />

      <h2>Management for UTI</h2>
      <p>
        <strong>Overview:</strong> UTIs commonly affect bladder/urethra, may involve kidneys/ureters.
      </p>
      <h4>Questions to Ask (DDx)</h4>
      <ul>
        <li>What are your symptoms? (burning, frequency, lower abdominal pain)</li>
        <li>History of UTIs? Frequency?</li>
        <li>Sexually active? Recent changes?</li>
        <li>Fever, chills, back pain?</li>
        <li>Pregnant?</li>
        <li>Neurogenic bladder? (consider cath/UA or empiric abx)</li>
        <li>Medication allergies?</li>
      </ul>
      <h4>Red Flags</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Condition</th>
            <th style={thStyleTransformed}>Red Flags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Upper UTI/Pyelonephritis</td>
            <td style={tdStyleTransformed}>High fever, chills, nausea, vomiting, severe back/flank pain</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Renal Abscess</td>
            <td style={tdStyleTransformed}>Symptoms persist/worsen despite treatment</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Sepsis</td>
            <td style={tdStyleTransformed}>Rapid heart rate, low BP, confusion</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Other</td>
            <td style={tdStyleTransformed}>UTIs during pregnancy</td>
          </tr>
        </tbody>
      </table>
      <h4>Urinalysis Interpretation</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Finding</th>
            <th style={thStyleTransformed}>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Leukocyte Esterase</td>
            <td style={tdStyleTransformed}>WBC presence → Infection</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Nitrites</td>
            <td style={tdStyleTransformed}>Nitrate-converting bacteria (E. coli)</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Blood</td>
            <td style={tdStyleTransformed}>RBCs → Infection or urinary tract issues</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Bacteria</td>
            <td style={tdStyleTransformed}>Bacteria presence → Infection</td>
          </tr>
        </tbody>
      </table>
      <h4>Management</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyleTransformed}>Type</th>
            <th style={thStyleTransformed}>Treatment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyleTransformed}>Uncomplicated UTI</td>
            <td style={tdStyleTransformed}>Bactrim, Nitrofurantoin, Fosfomycin</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Complicated UTI</td>
            <td style={tdStyleTransformed}>Levofloxacin, Ciprofloxacin (longer course, IV abx if needed)</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Pain Management</td>
            <td style={tdStyleTransformed}>NSAIDs or Tylenol</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Asymptomatic Bacteriuria</td>
            <td style={tdStyleTransformed}>No Rx except for pregnancy or urological procedures</td>
          </tr>
          <tr>
            <td style={tdStyleTransformed}>Symptomatic UTI</td>
            <td style={tdStyleTransformed}>Immediate abx Rx based on UA/culture</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
},
//
{
  title: "Tips for Success",
  content: (
    <div>
      <h2>Tips for Success</h2>
      <h3>Arman</h3>
      <ul>
        <li>USPSTF criteria is a MUST KNOW for the shelf. Know it like the back of your hand!</li>
        <li>Some clinic sites are pretty far, I'd recommend making at least one way of the trip useful by listening to some podcasts for FM material or YT videos. Dr. High Yield is awesome, and so is Divine Intervention podcasts.</li>
        <li>You will see a lot of patients, and some sites will make you write notes for each patient you see. I’d recommend asking them for their smart phrases so it can go much faster when writing them.</li>
        <li>Try to go through all of FM anki and FM uworld! If you have time, get through ambulatory too, but i personally thought it was slightly low-yield (felt more like medicine questions, not maybe 1-2 questions from the shelf lean towards more of the ambulatory style questions – that's just my personal take though).</li>
      </ul>
      <h3>Ramtin</h3>
      <ul>
        <li>This rotation could be the one where you see the greatest number of patients over the course of your clinical rotations. The fast-paced nature and the repetitiveness of the cases you see could lead to fatigue if you are not adequately mentally prepared to fulfill such a responsibility. However, the work itself is fairly straightforward.</li>
        <li>Try to learn quickly when to obtain a full history and when to only ask focused questions. Not every patient needs to be spoken to for the entirety of your 15-30-minute encounter.</li>
        <li>Be familiar with United States Preventative Services Task Force A and B level recommendations. Be very familiar with vaccination timeline for adults.</li>
      </ul>
      <h3>Piya</h3>
      <ul>
        <li>Do all of UWorld Family and Ambulatory Medicine</li>
        <li>Review USPSTF Guidelines (anki deck: HoggieMed)</li>
      </ul>
      <h3>Hasham</h3>
      <ul>
        <li>Make the most of your clinic time because you learn a lot on chronic conditions like DM and osteoarthritis. FM is extremely broad and anything can walk through that door. Focus on the high yield stuff and make sure to do all of the uworld questions AND ambulatory section. I did not get to do the anki but I heard it was very useful. Again goal of FM is to be broad so the more you learn the better you will be. For clinical advice, do your best to have a shortened presentation that really focuses on the stuff that can be worked on at that visit and go down the list that way, the physicians appreciate that more since time is so limited on these encounters. The goal of FM is to target acute/critical issues and manage chronic issues alongside it.</li>
      </ul>
      <h3>Luay</h3>
      <ul>
        <li>For FM, it is fast-paced but read up on your patients in advance looking at the main complaint, last note in clinic and see if any adjustments need to be made for meds, or questions to ask for their visit today. This document is not fully comprehensive but covers the classic conditions that patients will come with ON TOP of their actual issue. Every clinic and physician have their own art in their management for certain illnesses especially as they have seen those patients for possibly decades. Learn as much as you can, it is a lot of fun as you see from completely healthy patients to patients who should be heading to the ER STAT!</li>
      </ul>
    </div>
  ),
},
]






const Family = () => {
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
    <>
    <SectionTemplate
      title="Family and Community Medicine"/>
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
    </>
  );
};

export default Family;