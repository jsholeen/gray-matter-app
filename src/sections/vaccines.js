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
}

const Vaccines = () => {
  return (
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
                <th style={thStyleVaccines} id="hib-tbl1" headers="vacc-tbl1">
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
                  colSpan={11}
                  headers="tdap-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
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
                  headers="mening-tbl birth"
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
                  colSpan={11}
                  headers="rsv-vaccine-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
              </tr>
              <tr>
                <th style={thStyleVaccines} id="dengue-tbl1" headers="vacc-tbl1">
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
                  colSpan={11}
                  headers="dengue-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
              </tr>
              <tr>
                <th style={thStyleVaccines} id="mpox-tbl1" headers="vacc-tbl1">
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
                  colSpan={11}
                  headers="dengue-tbl1 birth mo1 mos2 mos4 mos6 mos9 mos12 mos15"
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default Vaccines;