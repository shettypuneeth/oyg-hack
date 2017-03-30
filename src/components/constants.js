export const MIXPANEL_EVENTS_ENDPOINT = (secretKey = "") =>
    `https://${secretKey}@mixpanel.com/api/2.0/events/`;
export const MIXPANEL_EVENT_PROPERTIES_ENDPOINT = (secretKey = "") =>
    `https://${secretKey}@mixpanel.com/api/2.0/events/properties/`;

/**
 * Mix panel events name used for the API calling
 * @type {{reports: [*], topEvents: [*], subscriptions: [*], signUp: [*]}}
 */
export const MIXPANEL_EVENTS = {
  reports : ["web_report", "web_reports_create", "app_EmailRequestSent"],
  topEvents: ["web_edit", "web_drivesList_select", "web_classify", "web_show_enlarged_map", "web_delete",
              "web_visualization", "web_date", "web_welcome", "web_editPane_done", "web_join", "web_add",
              "web_duplicate ", "web_reports_date", "web_defer_autoClassify", "web_start_autoClassify",
              "web_reports_create", "web_reports_archived"],
  payment: "Payment",
  signUp: ["app_signedUp"]
};

/**
 * Mapping of Mix panel top Events
 * @type {{web_edit: string, web_drivesList_select: string, web_classify: string, web_show_enlarged_map: string, web_delete: string, web_visualization: string, web_date: string, web_welcome: string, web_editPane_done: string, web_join: string, web_add: string, web_duplicate: string, web_reports_date: string, web_defer_autoClassify: string, web_start_autoClassify: string, web_reports_create: string, web_reports_archived: string}}
 */
export const MAP_TOP_EVENTS_NAME = {
    web_edit: "Drive Edit",
    web_drivesList_select: "Drive Detail View",
    web_classify: "Classifying Drive",
    web_show_enlarged_map: "Enlarged Map",
    web_delete: "Delete Drive",
    web_visualization: "Data Viz",
    web_date: "Date Filters on Drives",
    web_welcome: "Welcome Screen",
    web_editPane_done: "Click on Done",
    web_join: "Join Drive",
    web_add: "Add Drive",
    web_duplicate: "Duplicate Drive",
    web_reports_date: "Date Filters on Reports",
    web_defer_autoClassify: "Defer Auto Classification",
    web_start_autoClassify: "Start Auto Classification",
    web_reports_create: "Create Report",
    web_reports_archived: "Show Archived Reports"
};
