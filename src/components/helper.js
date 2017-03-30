import { MIXPANEL_EVENTS } from './constants';

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

/**
 * Returns [{id: String, total: Integer}, {}]
 * @param mixPanelOutput
 */
const aggregateDifferentValues = function (mixPanelOutput) {
    const values = mixPanelOutput.data.values;
    Object.keys(values)
        .map(event => ({
            id: 'event',
            total: Object.keys(values[event])
                .reduce( (acc, date) => acc + values[event][date], 0)
        }));
};

export const mixPanelTopEvents = function () {
    const currentDate = new Date();
    const oneWeekAgoDate = new Date().setDate(currentDate.getDate() - 7);
    const from_date = formatDate(oneWeekAgoDate);
    const to_date = formatDate(currentDate);
    const events = MIXPANEL_EVENTS.topEvents;
    const unit = 'week';
    /**
     * Do the jsonp Call here
     */
};

export const mixPanelSignUp = function () {
    const currentDate = new Date();
    const from_date = formatDate(currentDate);
    const to_date = formatDate(currentDate);
    const events = MIXPANEL_EVENTS.signUp;
    const unit = 'day';
    /**
     * Do the jsonp Call here
     */
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
    const oneWeekAgoDate = new Date().setDate(currentDate.getMonth() - 1);
    const from_date = formatDate(oneWeekAgoDate);
    const to_date = formatDate(currentDate);
    const events = MIXPANEL_EVENTS.reports;
    const unit = 'week';
    /**
     * Do the jsonp Call here
     */
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
    const oneWeekAgoDate = new Date().setDate(currentDate.getMonth() - 1);
    const from_date = formatDate(oneWeekAgoDate);
    const to_date = formatDate(currentDate);
    const events = MIXPANEL_EVENTS.payment;
    const unit = 'week';
    const name = 'paymentService';
    /**
     * Do the jsonp Call here
     */
};