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
  topEvents: ["web_date", "web_drives", "web_visualization", "web_search",
    "web_search_clicked", "web_sort", "web_reported_drives", "web_add", "web_driveList_Select",
    "web_edit", "web_editPane_done", "web_bulksessions_edit", "web_delete_drives", "web_report",
    "web_duplicate", "web_join", "web_undo", "web_drivesList_select", "web_welcome", "web_show_enlarged_map",
    "web_defer_autoClassify", "web_start_autoClassify", "web_settings_profile", "web_settings_notifications", "web_settings_referFriend",
    "web_settings_subscriptions", "web_settings_vehicles", "web_settings_rates", "web_settings_autoClassification",
    "web_settings_purposes", "web_reports_date", "web_reports_drives", "web_reports_vehicles",
    "web_reports_view_drives", "web_reports_create", "web_reports_archived"],
  drivesPage: ["web_date", "web_drives", "web_visualization", "web_search",
                "web_search_clicked", "web_sort", "web_reported_drives", "web_add", "web_driveList_Select",
               "web_edit", "web_editPane_done", "web_bulksessions_edit", "web_delete_drives", "web_report",
                "web_duplicate", "web_join", "web_undo", "web_drivesList_select", "web_welcome", "web_show_enlarged_map",
              "web_defer_autoClassify", "web_start_autoClassify"],
  settingsPageEvents: ["web_settings_profile", "web_settings_notifications", "web_settings_referFriend",
                      "web_settings_subscriptions", "web_settings_vehicles", "web_settings_rates", "web_settings_autoClassification",
                      "web_settings_purposes"],
  reportPageEvents: ["web_reports_date", "web_reports_drives", "web_reports_vehicles",
                    "web_reports_view_drives", "web_reports_create", "web_reports_archived"],
  payment: "Payment",
  signUp: ["app_signedUp"],
  drivesCaptured: ["pyt_drivesave"]
};

export const TOP_EVENT_PAGE_WISE = {
  dashboard: 'dashboard',
  drives: 'drives',
  reports: 'reports',
  settings: 'settings'
};

/**
 * Take the value of TOP_EVENT_PAGE_WISE and map it with keys of MIXPANEL_EVENTS
 * @type {{drives: string, reports: string, settings: string}}
 */
export const MAP_PAGE_NAME_MIXPANEL_EVENTS = {
  dashboard: 'topEvents',
  drives: 'drivesPage',
  reports: 'reportPageEvents',
  settings: 'settingsPageEvents'
};

export const MIX_PANEL_API_TYPES = {
  general: 'general',
  unique: 'unique',
  average: 'average'
};

/**
 * Mapping of Mix panel top Events
 * @type {{web_edit: string, web_drivesList_select: string, web_classify: string, web_show_enlarged_map: string, web_delete: string, web_visualization: string, web_date: string, web_welcome: string, web_editPane_done: string, web_join: string, web_add: string, web_duplicate: string, web_reports_date: string, web_defer_autoClassify: string, web_start_autoClassify: string, web_reports_create: string, web_reports_archived: string}}
 */
export const MAP_TOP_EVENTS_NAME = {
    web_bulksessions_edit: "Bulk sessions edit",
    web_undo: "Undo",
    web_report: "Report the Drives",
    web_search: "Search",
    web_search_clicked: "Search clicked",
    web_reported_drives: "Reported Drives",
    web_drives: "Drives filter",
    web_edit: "Drive Edit",
    web_drivesList_select: "Drive Detail View",
    web_classify: "Classifying Drive",
    web_show_enlarged_map: "Enlarged Map",
    web_delete_drives: "Delete Drive",
    web_visualization: "Data Viz",
    web_date: "Drives Date Filter",
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
    web_settings_subscriptions: "Subscription",
    web_settings_vehicles: "Vehicles & Odometers",
    web_settings_rates: "Rates & Units",
    web_settings_autoClassification: "Auto-Classification",
    web_settings_purposes: "Custom Purposes",
    web_reports_date: "Reports Date Filter",
    web_reports_drives: "Drives Filter",
    web_reports_vehicles: "Vehicles filter",
    web_reports_view_drives: "View drives",
    web_reports_create: "Create report",
    web_reports_archived: "Show archived report"
};
