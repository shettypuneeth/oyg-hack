export const PIE_CHART_CONFIG = {
  chart: {
    type: 'pie'
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
        enabled: false
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
