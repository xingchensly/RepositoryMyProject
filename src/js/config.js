/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-dupe-keys */
import { coverArray, convertData, data1, data2, xAxisData, dataGZ, category, lineData, barData, rawData_world, makeMapData_world, makeParallelAxis_world, schema_world } from './mapConfig.js'
let echarts = require('echarts')
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
      color: '#fff',
      fontSize: 12
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
        ['产油1', 43.3, 85.8, 93.7],
        ['产油2', 83.1, 73.4, 55.1],
        ['产油3', 86.4, 65.2, 82.5],
        ['产油4', 72.4, 53.9, 39.1]
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
      data: ['冷却水量', '油量', '平均温度']
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
        name: '高度',
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
        name: '冷却水量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
        name: '油量',
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
        { name: '油参1', max: 300 },
        { name: '油参2', max: 250 },
        { name: '油参3', max: 300 },
        { name: '油参4', max: 5 },
        { name: '油参5', max: 200 },
        { name: '油参6', max: 100 }
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
  },
  waterFullBar1: {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        let tar
        if (params[1].value != '-') {
          tar = params[1]
        } else {
          tar = params[0]
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    legend: {
      ...defaultStyle.legend,
      data: ['支出', '收入']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      ...defaultStyle.axis,
      type: 'category',
      splitLine: { show: false },
      data: (function () {
        let list = []
        for (let i = 1; i <= 11; i++) {
          list.push('11月' + i + '日')
        }
        return list
      }())
    },
    yAxis: {
      ...defaultStyle.axis,
      type: 'value'
    },
    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'bottom'
          }
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
      }
    ],
    color: colors
  },
  waterFullBar2: {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        let tar
        if (params[1].value != '-') {
          tar = params[1]
        } else {
          tar = params[0]
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    legend: {
      ...defaultStyle.legend,
      data: ['支出', '收入']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      ...defaultStyle.axis,
      type: 'category',
      splitLine: { show: false },
      data: (function () {
        let list = []
        for (let i = 1; i <= 11; i++) {
          list.push('11月' + i + '日')
        }
        return list
      }())
    },
    yAxis: {
      ...defaultStyle.axis,
      type: 'value'
    },
    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'bottom'
          }
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
      }
    ],
    color: colors
  },
  lineArea1: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      ...defaultStyle.legend,
      data: ['油产量1', '油产量2', '油产量3', '油产量4', '油产量5']
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
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        ...defaultStyle.axis,
        type: 'value'
      }
    ],
    series: [
      {
        name: '油产量1',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '油产量2',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '油产量3',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '油产量4',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '油产量5',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: colors
  },
  lineArea2: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      ...defaultStyle.legend,
      data: ['油产量1', '油产量2', '油产量3', '油产量4', '油产量5']
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
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        ...defaultStyle.axis,
        type: 'value'
      }
    ],
    series: [
      {
        name: '油产量1',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '油产量2',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '油产量3',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '油产量4',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '油产量5',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: colors
  },
  lineArea3: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['油产量1', '油产量2', '油产量3']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '油产量1',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '油产量2',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '油产量3',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ],
    color: colors
  },
  lineBar1: {
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [{
      name: 'line',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: lineData
    }, {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' }
            ]
          )
        }
      },
      data: barData
    }, {
      name: 'line',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' }
            ]
          )
        }
      },
      z: -12,
      data: lineData
    }, {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: '#0f375f'
        }
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
    }]
  },
  lineBar2: {
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [{
      name: 'line',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: lineData
    }, {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' }
            ]
          )
        }
      },
      data: barData
    }, {
      name: 'line',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' }
            ]
          )
        }
      },
      z: -12,
      data: lineData
    }, {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: '#0f375f'
        }
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
    }]
  },
  worldMap: {
    title: {
      text: 'Prices and Earnings 2019',
      left: 'center',
      textStyle: {
        color: '#fff'
      },
      z: 200
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        var value = (params.value + '').split('.')
        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1]
        return params.seriesName + '<br/>' + params.name + ' : ' + value
      }
    },
    brush: {
      geoIndex: 0,
      brushLink: 'all',
      inBrush: {
        opacity: 1,
        symbolSize: 14
      },
      outOfBrush: {
        color: '#000',
        opacity: 0.2
      },
      z: 10
    },
    geo: {
      map: 'world',
      silent: true,
      label: {
        emphasis: {
          show: false,
          areaColor: '#eee'
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 0.2,
          borderColor: '#404a59'
        }
      },
      left: '6%',
      top: 40,
      bottom: '54%',
      right: '14%',
      roam: true
    },
    parallelAxis: makeParallelAxis_world(schema_world),
    grid: [{
      show: true,
      left: 0,
      right: 0,
      top: '48%',
      bottom: 0,
      borderColor: 'transparent',
      z: 99
    }, {
      show: true,
      left: 0,
      right: 0,
      top: 0,
      height: 28,
      borderColor: 'transparent',
      z: 199
    }],
    parallel: {
      top: '50%',
      left: 60,
      right: 20,
      bottom: 100,
      axisExpandable: true,
      axisExpandCenter: 15,
      axisExpandCount: 10,
      axisExpandWidth: 60,
      axisExpandTriggerOn: 'mousemove',

      z: 100,
      parallelAxisDefault: {
        type: 'value',
        nameLocation: 'start',
        nameRotate: 25,
        // nameLocation: 'end',
        nameTextStyle: {
          fontSize: 12
        },
        nameTruncate: {
          maxWidth: 170
        },
        nameGap: 20,
        splitNumber: 3,
        tooltip: {
          show: true
        },
        axisLine: {
          // show: false,
          lineStyle: {
            width: 1,
            color: 'rgba(255,255,255,0.3)'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        z: 100
      }
    },
    series: [
      {
        name: 'Prices and Earnings 2012',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 8,
        data: makeMapData_world(rawData_world),
        activeOpacity: 1,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        symbolSize: 10,
        // symbolSize: function (data) {
        //     return Math.max(5, data[2] / 5);
        // },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            color: '#577ceb'
          }
        }
      },
      {
        name: 'parallel',
        type: 'parallel',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#577ceb',
            width: 0.5,
            opacity: 0.6
          }
        },
        z: 100,
        blendMode: 'lighter',
        data: rawData_world
      }
    ]
  }

}
