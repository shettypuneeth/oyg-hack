import {MIXPANEL_SECRET} from '../../mixpanelSecret';

import {jsonpRequest} from './Services/Request';
import {
  MIXPANEL_EVENTS,
  MIXPANEL_EVENTS_ENDPOINT,
  MIXPANEL_EVENT_PROPERTIES_ENDPOINT,
  MAP_TOP_EVENTS_NAME
} from './constants';


/**
 * format date to yyyy-mm-dd format
 * @param date
 * @returns {string}
 */
function formatDate(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const convertArrayToUriencoded = (array) => {
  const result = array.reduce((agg, value) => agg.concat(`%22${value}%22%2C`), '%5B');
  const uri = result.substr(0, result.length - 3);
  return uri.concat('%5D');
};

const convertToPieChartFormat = (array) => {
  return array.map(obj => ({
    id: obj.id,
    name: MAP_TOP_EVENTS_NAME[obj.id],
    y: obj.total
  }))
    .sort((obj1, obj2) => obj2.y - obj1.y)
    .slice(0, 5);
};

/**
 * Returns [{id: String, total: Integer}, {}]
 * @param mixPanelOutput
 */
const aggregateDifferentValues = function (mixPanelOutput) {
  const values = mixPanelOutput.data.values;
  return Object.keys(values)
    .map(event => ({
      id: event,
      total: Object.keys(values[event])
        .reduce((acc, date) => acc + values[event][date], 0)
    }));
};


const mixPanelTopEvents = function () {
  // Showing the last month data
  const date = new Date(), y = date.getFullYear(), m = date.getMonth();
  const firstDay = new Date(y, m-1, 1);
  const lastDay = new Date(y, m, 0);
  const queryParams = {
    from_date: formatDate(firstDay),
    to_date: formatDate(lastDay),
    event: convertArrayToUriencoded(MIXPANEL_EVENTS.settingsPageEvents),
    unit: 'month',
    type: 'general'
  };
  const url = MIXPANEL_EVENTS_ENDPOINT(MIXPANEL_SECRET);
  return jsonpRequest(url, queryParams)
    .then(result => aggregateDifferentValues(result))
    .catch(err => err)
};

const parseDate = (d) => {
  const date = new Date(d);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString("en-US", options)
};

export const processZenDeskData = function (response) {
  const { results } = response;
  if (results) {
    return results.map(r => ({
      subject: r['subject'].replace('Re:', ''),
      description: r['description'],
      date: parseDate(r['created_at']),
      link: r['url']
    }));
  }

  return [];
};
/**
 * Get the Top Features Pie Chart Data
 * @returns {*|Promise.<TResult>}
 */
export const getTopEventsChartsData = function () {
  return mixPanelTopEvents()
    .then(result => convertToPieChartFormat(result))
};

export const mixPanelSignUp = function () {
  const currentDate = new Date();
  const yesterdayDate = new Date().setDate(currentDate.getDate() - 1);
  const queryParams = {
    from_date: formatDate(yesterdayDate),
    to_date: formatDate(yesterdayDate),
    event: convertArrayToUriencoded(MIXPANEL_EVENTS.signUp),
    unit: 'day'
  };
  const url = MIXPANEL_EVENTS_ENDPOINT(MIXPANEL_SECRET);
  return jsonpRequest(url, queryParams)
    .then(result => aggregateDifferentValues(result))
    .catch(err => err)
};

const getCurrentDateInPacificZone = () => {
  const offset = -7;
  return new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
};

export const mixPanelDrivesCaptured = function () {
  const start = getCurrentDateInPacificZone();
  const end = getCurrentDateInPacificZone();

  const queryParams = {
    from_date: formatDate(start),
    to_date: formatDate(end),
    event: convertArrayToUriencoded(MIXPANEL_EVENTS.drivesCaptured),
    unit: 'day',
    type: 'general'
  };
  const url = MIXPANEL_EVENTS_ENDPOINT(MIXPANEL_SECRET);
  return jsonpRequest(url, queryParams)
    .then(result => aggregateDifferentValues(result))
    .catch(err => err)
};

/**
 * { date1: total, date2: total, date3: total and so on}
 */
const aggregateDifferentEvents = function (mixPanelOutput) {
  const values = mixPanelOutput.data.values;
  return Object.keys(values)
    .reduce((agg, event) => {
      return Object.keys(values[event])
        .reduce((obj, date) => {
          if (obj.hasOwnProperty(date))
            obj[date] += values[event][date];
          else
            obj[date] = values[event][date];
          return obj;
        }, agg);
    }, {});
};

const removeYearFromDateString = (str) => str.substr(5);

const convertToBarChartFormat = function (data) {
  return Object.keys(data)
    .sort()
    .map(key => [removeYearFromDateString(key), data[key]])
};

const mixPanelReportsGenerated = function () {
  const currentDate = new Date();
  const yesterdayDate = new Date().setDate(currentDate.getDate() - 1);
  const oneMonthAgoYesterdayDate = new Date().setDate(currentDate.getMonth() - 1);
  const queryParams = {
    from_date: formatDate(oneMonthAgoYesterdayDate),
    to_date: formatDate(yesterdayDate),
    event: convertArrayToUriencoded(MIXPANEL_EVENTS.reports),
    unit: 'week'
  };
  const url = MIXPANEL_EVENTS_ENDPOINT(MIXPANEL_SECRET);
  return jsonpRequest(url, queryParams)
    .then(result => aggregateDifferentEvents(result))
    .catch(err => err)
};

export const getReportsGeneratedChartsData = () => {
  return mixPanelReportsGenerated()
    .then(data => convertToBarChartFormat(data));
};

const convertToLineChartFormat = function (data) {
  const chartData = Object.keys(data)
    .map(key => ({
      name: key,
      data: Object.keys(data[key])
        .map(date => data[key][date])
    }));
  const chartCategories = Object.keys(data[Object.keys(data)[0]])
    .map(str => removeYearFromDateString(str))
    .sort();
  return {
    chartData,
    chartCategories
  }
};

export const mixPanelPayment = function () {
  const currentDate = new Date();
  const yesterdayDate = new Date().setDate(currentDate.getDate() - 1);
  const oneMonthAgoYesterdayDate = new Date().setDate(currentDate.getMonth() - 1);
  const queryParams = {
    from_date: formatDate(oneMonthAgoYesterdayDate),
    to_date: formatDate(yesterdayDate),
    event: MIXPANEL_EVENTS.payment,
    unit: 'week',
    type: 'general',
    name: 'paymentService'
  };
  const url = MIXPANEL_EVENT_PROPERTIES_ENDPOINT(MIXPANEL_SECRET);
  return jsonpRequest(url, queryParams)
    .then(result => result.data.values)
    .catch(err => err)
};

export const getPaymentChartsData = () => {
  return mixPanelPayment()
    .then(data => convertToLineChartFormat(data));
};
