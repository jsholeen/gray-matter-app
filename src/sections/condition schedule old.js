const converted2 = {
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

const vaccineThStyle2 = {
  border: `${converted2[":root"]?.["--bs-border-width"] || "1px"} solid ${converted2[":root"]?.["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  backgroundColor: converted2[":root"]?.["--colors-cyan-5"] || "#F4FBFC",
  textAlign: "center",
  fontFamily: converted2[".dfe-section"].fontFamily,
  fontSize: converted2[".dfe-section"].fontSize,
  lineHeight: converted2[".dfe-section"].lineHeight,
};

const vaccineTdStyle2 = {
  border: `${converted2[":root"]?.["--bs-border-width"] || "1px"} solid ${converted2[":root"]?.["--bs-border-color"] || "#DFE1E2"}`,
  padding: "8px",
  fontFamily: converted2[".dfe-section"].fontFamily,
  fontSize: converted2[".dfe-section"].fontSize,
  lineHeight: converted2[".dfe-section"].lineHeight,
  backgroundColor: converted2[":root"]?.["--colors-gray-cool-3"] || "#F5F6F7",
};

<div className="dfe-block__inner">
        <div className="dfe-block dfe-block--cdcmodule cdc_raw_html">
          <strong>
            <a id="table-age" className="onThisPageAnchor" title="" />
            Legend
          </strong>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
            <tbody>
              <tr>
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8", width: 30 }} />
                <td style={vaccineTdStyle2}>
                  Recommended for all adults who lack documentation of vaccination, <strong>OR</strong> lack evidence of immunity
                </td>
                <td />
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc", width: 30 }} />
                <td style={vaccineTdStyle2}>
                  Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease
                </td>
                <td />
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#EAF7FA", width: 30 }} />
                <td style={vaccineTdStyle2}>
                  Recommended based on shared clinical decision-making
                </td>
                <td />
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#8d9297", width: 30 }} />
                <td style={vaccineTdStyle2}>
                  Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes.
                </td>
                <td />
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#FBF0E8", width: 30 }} />
                <td style={vaccineTdStyle2}>
                  Precaution: Might be indicated if benefit of protection outweighs risk of adverse reaction
                </td>
                <td />
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#F3E1E4", width: 30 }} />
                <td style={vaccineTdStyle2}>
                  Contraindicated or not recommended *Vaccinate after pregnancy, if indicated
                </td>
                <td />
                <td style={{ ...vaccineTdStyle2, backgroundColor: "#F5F6F7", width: 30 }} />
                <td style={vaccineTdStyle2}>No Guidance/Not Applicable</td>
              </tr>
            </tbody>
          </table>
          <div className="schedules-tbl-wrapper mt-3">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={vaccineThStyle2} rowSpan={2}>
                    <a id="table2" />
                    Vaccine
                  </th>
                  <th style={vaccineThStyle2} rowSpan={2}>Pregnancy</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Immuno-compromised<br />(excluding HIV infection)</th>
                  <th style={vaccineThStyle2} colSpan={2}>HIV infection CD4<br />percentage and count</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Men who have sex with men</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Asplenia, complement deficiency</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Heart or lung disease</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Kidney failure, End-stage renal disease or on dialysis</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Chronic liver disease; alcoholism<sup>a</sup></th>
                  <th style={vaccineThStyle2} rowSpan={2}>Diabetes</th>
                  <th style={vaccineThStyle2} rowSpan={2}>Health care Personnel<sup>b</sup></th>
                </tr>
                <tr>
                  <th style={vaccineThStyle2}>&lt;15% or &lt;200/mm<sup><span style={{ fontSize: "11px" }}>3</span></sup></th>
                  <th style={vaccineThStyle2}>≥15% and ≥200/mm<sup><span style={{ fontSize: "11px" }}>3</span></sup></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={vaccineThStyle2} id="rzv" headers="vacc">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#F5F6F7" }} title="No Guidance/Not Applicable" />
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#8d9297", color: "#fff" }} colSpan={2} headers="covid-19 immuno hiv-1">
                    See{" "}
                    <a
                      style={{ color: "#005EA2" }}
                      href="/vaccines/hcp/imz-schedules/adult-notes.html#note-covid-19"
                    >
                      Notes
                    </a>
                  </td>
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8" }} headers="covid-19 immuno hiv-2" />
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8" }} colSpan={7} headers="covid-19 msm asplenia heart kidney liver diabetes healthcare-personnel" />
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="iiv" headers="vacc">
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
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity"
                    headers="iiv pregnancy"
                  />
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity"
                    headers="iiv immuno"
                  >
                    Solid organ transplant
                    <br />
                    (See{" "}
                    <a
                      className=""
                      href="/vaccines/hcp/imz-schedules/adult-notes.html#note-flu"
                    >
                      Notes
                    </a>
                    )
                  </td>
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity"
                    colSpan={9}
                    headers="iiv hiv-1 hiv-2 msm asplenia heart kidney liver diabetes healthcare-personnel"
                  >
                    1 dose annually
                  </td>
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="laiv" className="padding-zero" headers="vacc">
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
                  <td
                    className="schedule-red font-white"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    colSpan={4}
                    headers="laiv pregnancy immuno hiv-1 hiv-2"
                  />
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    headers="laiv pregnancy immuno hiv-1 hiv-2 asplenia"
                  >
                    1 dose annually if age
                    <br />
                    19–49 years
                  </td>
                  <td
                    className="schedule-red"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    headers="laiv renal heart liver diabetes"
                  />
                  <td
                    className="schedule-adult-orange text-align-right padding-right-two"
                    title="Precaution—vaccination might be indicated if benefit of protection outweighs risk of adverse reaction"
                    colSpan={4}
                    headers="laiv renal heart liver diabetes"
                  >
                    1 dose annually if age 19–
                  </td>
                  <td
                    className="schedule-purple text-align-left padding-left-two"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    headers="laiv hcp msm"
                  >
                    49 years
                  </td>
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="rzv" headers="vacc">
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
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity"
                    headers="rsv pregnancy"
                  >
                    Seasonal administration. (See{" "}
                    <a
                      className=""
                      href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv"
                    >
                      Notes
                    </a>
                    )
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    colSpan={2}
                    headers="rsv immuno hiv-1 hiv-2"
                  >
                    See{" "}
                    <a
                      className=""
                      href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv"
                    >
                      Notes
                    </a>
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    colSpan={2}
                    headers="rsv hiv-2 msm"
                  />
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    colSpan={3}
                    headers="rsv asplenia heart kidney liver diabetes healthcare-personnel"
                  >
                    See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv">
                      Notes
                    </a>
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    headers="rsv asplenia heart kidney liver diabetes healthcare-personnel"
                  >
                    <div className="font-size-13">
                      Liver disease
                      <br />
                      (See{" "}
                      <a
                        className=""
                        href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv"
                      >
                        Notes
                      </a>
                      )
                    </div>
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    headers="rsv asplenia heart kidney liver diabetes healthcare-personnel"
                  >
                    <div className="font-size-11">
                      See{" "}
                      <a
                        className=""
                        href="/vaccines/hcp/imz-schedules/adult-notes.html#note-rsv"
                      >
                        Notes
                      </a>
                    </div>
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    headers="rsv asplenia heart kidney liver diabetes healthcare-personnel"
                  />
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="tdap" headers="vacc">
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
                  <td
                    className="schedule-brown font-white"
                    title="Recommended for all adults, and additional doses may be necessary based on medical condition or other indications. See Notes."
                    headers="tdap pregnancy"
                  >
                    Tdap: 1 dose each pregnancy
                  </td>
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity"
                    colSpan={10}
                    headers="tdap immuno hiv-1 hiv-2 msm asplenia heart kidney liver diabetes healthcare-personnel"
                  >
                    1 dose Tdap, then Td or Tdap booster every 10 yrs
                  </td>
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="mmr" headers="vacc">
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
                  <td
                    className="schedule-red font-white"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    headers="mmr pregnancy"
                  >
                    *
                  </td>
                  <td
                    className="schedule-red font-white"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    colSpan={2}
                    headers="mmr immuno hiv-1"
                  />
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of immunity"
                    colSpan={8}
                    headers="mmr hiv-2 msm asplenia heart kidney liver diabetes healthcare-personnel"
                  />
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="var" headers="vacc">
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
                  <td
                    className="schedule-red font-white"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    headers="var pregnancy"
                  >
                    *
                  </td>
                  <td
                    className="schedule-red font-white"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    colSpan={2}
                    headers="var immuno hiv-1"
                  />
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection"
                    headers="var hiv-2"
                  >
                    See{" "}
                    <a
                      className=""
                      href="/vaccines/hcp/imz-schedules/adult-notes.html#note-varicella"
                    >
                      Notes
                    </a>
                  </td>
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection"
                    colSpan={7}
                    headers="var msm asplenia heart kidney liver diabetes healthcare-personnel"
                  />
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="rzv" headers="vacc">
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
                  <td
                    className="schedule-gray"
                    title="No Guidance/Not Applicable"
                    headers="rzv pregnancy"
                  />
                  <td
                    className="schedule-yellow"
                    title="Recommended for all adults who lack documentation of vaccination, OR lack evidence of past infection"
                    colSpan={3}
                    headers="rzv immuno hiv-1 hiv-2"
                  >
                    See{" "}
                    <a
                      className=""
                      href="/vaccines/hcp/imz-schedules/adult-notes.html#note-zoster"
                    >
                      Notes
                    </a>
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    colSpan={7}
                    headers="rzv msm asplenia heart kidney liver diabetes healthcare-personnel"
                  />
                </tr>
                <tr>
                  <th style={vaccineThStyle2} id="hpv" headers="vacc">
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
                  <td
                    className="schedule-red font-white"
                    title="Contraindicated or not recommended *Vaccinate after pregnancy, if indicated"
                    headers="hpv pregnancy"
                  >
                    *
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    colSpan={3}
                    headers="hpv immuno hiv-1 hiv-2"
                  >
                    3-dose series if indicated
                  </td>
                  <td
                    className="schedule-purple"
                    title="Not recommended for all adults, but recommended for some adults based on either age OR increased risk for or severe outcomes from disease"
                    colSpan={7}
                    headers="hpv msm asplenia heart kidney liver diabetes healthcare-personnel"
                  />
                </tr>
                {/* Pneumococcal */}
                <tr>
                  <th style={vaccineThStyle2} rowSpan={2} id="pneumo">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={7} rowSpan={2} />
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8" }} colSpan={4} rowSpan={2} />
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8" }} colSpan={3}>
                    See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo">
                      Notes
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#EAF7FA" }} colSpan={3}>
                    See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-pneumo">
                      Notes
                    </a>
                  </td>
                </tr>
                {/* Hepatitis A */}
                <tr>
                  <th style={vaccineThStyle2} id="hepa">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={14}>
                    2, 3, or 4 doses depending on vaccine
                  </td>
                </tr>
                {/* Hepatitis B */}
                <tr>
                  <th style={vaccineThStyle2} id="hepb">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8", textAlign: "right", paddingRight: "2em" }} colSpan={8}>
                    2, 3, or 4 doses depending on vaccine or condition
                  </td>
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc", textAlign: "left", paddingLeft: "2em" }} colSpan={6} />
                </tr>
                {/* Meningococcal A, C, W, Y */}
                <tr>
                  <th style={vaccineThStyle2} id="mening">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={14}>
                    1 or 2 doses depending on indication (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                      Notes
                    </a>
                    &nbsp;for booster recommendations)
                  </td>
                </tr>
                {/* Meningococcal B */}
                <tr>
                  <th style={vaccineThStyle2} rowSpan={2} id="mening-b">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} />
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={13}>
                    2 or 3 doses depending on vaccine and indication (See{" "}
                    <a href="/vaccines/hcp/imz-schedules/adult-notes.html#note-mening">
                      Notes
                    </a>
                    &nbsp;for booster recommendations)
                  </td>
                </tr>
                <tr>
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#EAF7FA" }}>
                    19 through 23 years
                  </td>
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={2} />
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={11} />
                </tr>
                {/* Hib */}
                <tr>
                  <th style={vaccineThStyle2} id="hib">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={14}>
                    1 or 3 doses depending on indication
                  </td>
                </tr>
                {/* Mpox */}
                <tr>
                  <th style={vaccineThStyle2} id="mpox">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#bcbddc" }} colSpan={14}>
                    2 doses
                  </td>
                </tr>
                {/* Polio */}
                <tr>
                  <th style={vaccineThStyle2} id="polio">
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
                  <td style={{ ...vaccineTdStyle2, backgroundColor: "#FEF0C8" }} colSpan={14}>
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