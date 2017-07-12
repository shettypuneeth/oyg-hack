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
  settingsPageEvents: ["web_settings_profile", "web_settings_notifications", "web_settings_referFriend",
                      "web_settings_subscription", "web_settings_vehicles", "web_settings_rates", "web_settings_autoClassification",
                      "web_settings_purposes"],
  reportPageEvents: ["web_reports_date", "web_reports_drives", "web_reports_vehicles",
                    "web_reports_view_drives", "web_reports_create", "web_reports_archived"],
  payment: "Payment",
  signUp: ["app_signedUp"],
  drivesCaptured: ["pyt_drivesave"]
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
    web_defer_autoClassify: "Defer Auto Classification",
    web_start_autoClassify: "Start Auto Classification",
    web_settings_profile: "Email & Password",
    web_settings_notifications: "Email Notifications",
    web_settings_referFriend: "Refer a Friend",
    web_settings_subscription: "Subscription",
    web_settings_vehicles: "Vehicles & Odometers",
    web_settings_rates: "Rates & Units",
    web_settings_autoClassification: "Auto-Classification",
    web_settings_purposes: "Custom Purposes",
    web_reports_date: "Date filter",
    web_reports_drives: "Drives filter",
    web_reports_vehicles: "Vehicles filter",
    web_reports_view_drives: "View drives",
    web_reports_create: "Create report",
    web_reports_archived: "Show archived report"
};
