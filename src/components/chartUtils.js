export const PIE_CHART_CONFIG = {
  chart: {
    type: 'pie',
    width: 700,
    height: 380
  },
  title: {
    text:''
  },
  tooltip: {
    pointFormat: 'Number of times used: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y}',
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
    height: 310,
  },
  title: {
    text: ''
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
    text: ''
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
