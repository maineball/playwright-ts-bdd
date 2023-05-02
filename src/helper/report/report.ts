const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Automation Report",
  pageTitle: `${new Date().toDateString()}-Automation-Report`,
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "111",
    },
    device: "Maine's Mac Mini",
    platform: {
      name: "macOS",
      version: "13.2.14",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "PZSE v2" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "1" },
      { label: "Execution Start Time", value: `${new Date().toDateString()}` },
      { label: "Execution End Time", value: `${new Date().toDateString()}` },
    ],
  },
});