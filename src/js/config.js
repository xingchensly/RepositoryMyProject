/* eslint-disable no-dupe-keys */
import { coverArray, convertData, data1, data2, xAxisData, dataGZ } from './mapConfig.js'

export let urlList = {
  metering: '//www.hightopo.com/demo/metering-station/',
  largeScreen: '//www.hightopo.com/demo/large-screen/index.html',
  gasPipeline: '//www.hightopo.com/demo/gas-pipeline/',
  htap: '//www.hightopo.com/demo/htap/index.html'
}
let colors = [
  '#3FB1E3',
  '#6BE6C1',
  '#F0EE7F',
  '#626C91',
  '#1A4968',
  '#5C658A',
  '#FFEE51'
]
let defaultStyle = {
  axis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      color: '#fff'
    }
  },
  legend: {
    textStyle: {
      color: '#fff'
    }
  }
}
let lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5
  }
}
export let chartDataList = {
  dash: {
    legend: {
      ...defaultStyle.legend
    },
    xAxis: {
      ...defaultStyle.axis,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      ...defaultStyle.axis,
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        normal: {
          color: 'green',
          width: 4,
          type: 'dashed'
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 3,
          borderColor: 'yellow',
          color: 'blue'
        }
      }
    }]
  },
  gauge1: {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: { formatter: '{value}%', fontSize: '20' },
        data: [{ value: 90 }],
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 7
          }
        }
      }
    ]
  },
  gauge2: {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: { formatter: '{value}%', fontSize: '20' },
        data: [{ value: 30 }],
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 7
          }
        }
      }
    ]
  },
  gauge3: {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: { formatter: '{value}%', fontSize: '20' },
        data: [{ value: 40 }],
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 7
          }
        }
      }
    ]
  },
  gauge4: {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: { formatter: '{value}%', fontSize: '20' },
        data: [{ value: 70 }],
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 7
          }
        }
      }
    ]
  },
  longBar: {
    legend: {
      ...defaultStyle.legend,
      data: ['bar', 'bar2'],
      align: 'left'
    },
    tooltip: {},
    xAxis: {
      ...defaultStyle.axis,
      data: xAxisData,
      silent: false,
      splitLine: {
        show: false
      }
    },
    yAxis: {
      ...defaultStyle.axis
    },
    series: [{
      name: 'task1',
      type: 'bar',
      data: data1,
      animationDelay: function (idx) {
        return idx * 10
      }
    }, {
      name: 'task2',
      type: 'bar',
      data: data2,
      animationDelay: function (idx) {
        return idx * 10 + 100
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5
    },
    color: colors
  },
  bar: {
    legend: {
      ...defaultStyle.legend
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha', 43.3, 85.8, 93.7],
        ['Milk', 83.1, 73.4, 55.1],
        ['Cheese', 86.4, 65.2, 82.5],
        ['Walnut', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: {
      ...defaultStyle.axis,
      type: 'category'
    },
    yAxis: {
      ...defaultStyle.axis
    },
    series: [
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' }
    ],
    color: colors
  },
  pie: {
    legend: {
      ...defaultStyle.legend
    },
    color: colors,
    series: [
      {
        name: '厂房编号',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        data: [
          { value: 235, name: '油压' },
          { value: 274, name: '管压' },
          { value: 310, name: '电压' },
          { value: 335, name: '电流' }
        ]
      }
    ]
  },
  pies: {
    legend: {
      ...defaultStyle.legend
    },
    color: colors,
    series: [
      {
        name: '厂房编号',
        type: 'pie',
        radius: '55%',
        data: [
          { value: 235, name: '油压' },
          { value: 274, name: '管压' },
          { value: 310, name: '电压' },
          { value: 400, name: '水流' }
        ]
      }
    ]
  },
  emptyPis: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      ...defaultStyle.legend,
      orient: 'horizontal',
      x: 'left',
      data: ['choice1', 'choice2', 'choice3', 'choice4']
    },
    series: [
      {
        name: 'choiceFrom',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: 'choice1' },
          { value: 310, name: 'choice2' },
          { value: 234, name: 'choice3' },
          { value: 135, name: 'choice4' }
        ]
      }
    ],
    color: colors
  },
  paraller: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      ...defaultStyle.legend,
      data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
      {
        ...defaultStyle.axis,
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        ...defaultStyle.axis,
        type: 'value',
        name: '水量',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        ...defaultStyle.axis,
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
        name: '降水量',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name: '平均温度',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ],
    color: colors
  },
  line: {},
  negativeBar: {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      ...defaultStyle.legend,
      data: ['利润', '支出', '收入']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        ...defaultStyle.axis,
        type: 'value'
      }
    ],
    yAxis: [
      {
        ...defaultStyle.axis,
        type: 'category',
        axisTick: { show: false },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    series: [
      {
        name: '利润',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [200, 170, 240, 244, 200, 220, 210]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [320, 302, 341, 374, 390, 450, 420]
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-120, -132, -101, -134, -190, -230, -210]
      }
    ],
    color: colors
  },
  negativeBar2: {
    title: {
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    },
    xAxis: {
      ...defaultStyle.axis,
      type: 'value',
      position: 'top',
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    yAxis: {
      ...defaultStyle.axis,
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [
      {
        name: '生活费',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            formatter: '{b}'
          }
        },
        data: [
          {
            value: -0.07,
            label: {
              normal: {
                position: 'right'
              }
            }
          },
          {
            value: -0.09,
            label: {
              normal: {
                position: 'right'
              }
            }
          },
          0.2, 0.44,
          {
            value: -0.23,
            label: {
              normal: {
                position: 'right'
              }
            }
          },
          0.08,
          {
            value: -0.17,
            label: {
              normal: {
                position: 'right'
              }
            }
          },
          0.47,
          {
            value: -0.36,
            label: {
              normal: {
                position: 'right'
              }
            }
          },
          0.18
        ]
      }
    ],
    color: colors
  },
  radar: {
    radar: {
      indicator: [
        { name: 'AQI', max: 300 },
        { name: 'PM2.5', max: 250 },
        { name: 'PM10', max: 300 },
        { name: 'CO', max: 5 },
        { name: 'NO2', max: 200 },
        { name: 'SO2', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 5,
      name: {
        textStyle: {
          color: 'rgb(238, 197, 102)'
        }
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: '广州',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataGZ,
        symbol: 'none',
        itemStyle: {
          normal: {
            color: 'rgb(238, 197, 102)'
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.05
          }
        }
      }
    ],
    color: colors
  },
  chinaMap: {
    title: {
      text: '全国主要城市油气产量',
      x: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name + ' : ' + params.value[2]
      }
    },
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x: 'right',
      data: ['pm2.5'],
      textStyle: {
        color: '#fff'
      }
    },
    visualMap: {
      min: 0,
      max: 200,
      calculable: true,
      inRange: {
        color: ['#50a3ba', '#eac736', '#d94e5d']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(coverArray),
        symbolSize: 12,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      }
    ]
  }

}
