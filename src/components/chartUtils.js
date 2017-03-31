export const PIE_CHART_CONFIG = {
  chart: {
    type: 'pie',
    width: 555,
    height: 400
  },
  title: {
    text: 'Top features for v2 Dashboard'
  },
  tooltip: {
    pointFormat: 'Number of times used: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f} %',
        style: {
          color: 'black'
        },
        distance: 10
      },
      showInLegend: true,
      verticalAlign: 'top',
      borderWidth: 0
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [
    {
      name: 'Total',
      data: [],
      size: '100%',
      innerSize: '40%'
    }
  ]
};

export const BAR_CHART_CONFIG = {
  chart: {
    type: 'column',
    width: 555,
    height: 300,
  },
  title: {
    text: 'Reports generated each week'
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45
    },
    title: {
      text: 'Week start date (mm-dd)'
    }
  },
  yAxis: {
    title: {
      text: 'Number of Reports'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Reports generated: <b>{point.y}</b>'
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Reports Generated',
    data: []
  }]
};

export const LINE_CHART_CONFIG = {
  chart: {
    type: 'line',
    width: 555,
    height: 400,
  },
  title: {
    text: 'Subscriptions from different Source'
  },
  xAxis: {
    labels: {
      rotation: -45
    },
    categories: [],
    title: {
      text: 'Week start date (mm-dd)'
    },
  },
  yAxis: {
    title: {
      text: 'Number of Subscriptions'
    }
  },
  tooltip: {
    pointFormat: 'Number of Subscriptions: <b>{point.y}</b>'
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: []
};
