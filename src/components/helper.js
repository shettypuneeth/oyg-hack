import { MIXPANEL_SECRET } from '../../mixpanelSecret';

import { jsonpRequest } from './Services/Request';
import {
    MIXPANEL_EVENTS,
    MIXPANEL_EVENTS_ENDPOINT,
    MIXPANEL_EVENT_PROPERTIES_ENDPOINT
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
  const result = array.reduce((agg, value) => agg.concat(`%22${value}%22%2C%20`), '%5B');
  const uri = result.substr(0, result.length-6);
  return uri.concat('%5D');
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
                .reduce( (acc, date) => acc + values[event][date], 0)
        }));
};

export const mixPanelTopEvents = function () {
    const currentDate = new Date();
    const yesterdayDate = new Date().setDate(currentDate.getDate() - 1);
    const oneWeekAgoYesterdayDate = new Date().setDate(currentDate.getDate() - 8);
    const queryParams = {
        from_date: formatDate(oneWeekAgoYesterdayDate),
        to_date: formatDate(yesterdayDate),
        event: convertArrayToUriencoded(MIXPANEL_EVENTS.topEvents),
        unit: 'week'
    };
    const url = MIXPANEL_EVENTS_ENDPOINT(MIXPANEL_SECRET);
    return jsonpRequest(url, queryParams)
        .then(result => aggregateDifferentValues(result))
        .catch(err => err)
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

/**
 * { date1: total, date2: total, date3: total and so on}
 */
const aggregateDifferentEvents = function (mixPanelOutput) {
    const values = mixPanelOutput.data.values;
    Object.keys(values)
        .reduce((agg, event) => {
            return Object.keys(values[event])
                .reduce((obj, date) => {
                    if(obj.hasOwnProperty(date))
                        obj[date]+=values[event][date];
                    else
                        obj[date] = values[event][date];
                    return obj;
                }, agg);
        }, {});
};

const convertToBarChartFormat = function (data) {
    return Object.keys(data)
        .sort()
        .map(key => [key, data[key]])
};

export const mixPanelReportsGenerated = function () {
    const currentDate = new Date();
    const yesterdayDate = new Date().setDate(currentDate.getDate() - 1);
    const oneWeekAgoYesterdayDate = new Date().setDate(yesterdayDate.getDate() - 8);
    const queryParams = {
        from_date: formatDate(oneWeekAgoYesterdayDate),
        to_date: formatDate(yesterdayDate),
        event: convertArrayToUriencoded(MIXPANEL_EVENTS.reports),
        unit: 'week'
    };
    const url = MIXPANEL_EVENTS_ENDPOINT(MIXPANEL_SECRET);
    return jsonpRequest(url, queryParams)
        .then(result => aggregateDifferentValues(result))
        .catch(err => err)
};

const convertToLineChartFormat = function (data) {
  Object.keys(data)
      .map(key => ({
          name: key,
          data: Object.keys(data[key])
              .map(date => data[key][date])
      }))
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
        name: 'paymentService'
    };
    const url = MIXPANEL_EVENT_PROPERTIES_ENDPOINT(MIXPANEL_SECRET);
    return jsonpRequest(url, queryParams)
        .then(result => aggregateDifferentValues(result))
        .catch(err => err)
};
