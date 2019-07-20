<template>
  <div id="alertHistory">
    <div class="ah_chart">
      <div class="ah_chart_left">
        <div class="ah_chart_left_top">
          <p class="ah_title">
            <i class="el-icon-user ah_title_i"></i> 现场设备层
          </p>
          <ul>
            <li class="grade1">
              <div class="grade">0</div>
              <p>紧急</p>
            </li>
            <li class="grade2">
              <div class="grade">0</div>
              <p>严重</p>
            </li>
            <li class="grade3">
              <div class="grade">0</div>
              <p>普通</p>
            </li>
          </ul>
        </div>
        <div class="ah_chart_left_bottom">
          <p class="ah_title">
            <i class="el-icon-user ah_title_i"></i> 现场设备层
          </p>
          <ul>
            <li class="grade1">
              <div class="grade">0</div>
              <p>紧急</p>
            </li>
            <li class="grade2">
              <div class="grade">0</div>
              <p>严重</p>
            </li>
            <li class="grade3">
              <div class="grade">0</div>
              <p>普通</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="ah_chart_right">
        <div class="ah_chart_right_top">
          <p class="ah_title">
            <i class="el-icon-user ah_title_i"></i> 现场设备层
          </p>
          <ul>
            <li class="grade1">
              <div class="grade">0</div>
              <p>紧急</p>
            </li>
            <li class="grade2">
              <div class="grade">0</div>
              <p>严重</p>
            </li>
            <li class="grade3">
              <div class="grade">0</div>
              <p>普通</p>
            </li>
          </ul>
        </div>
        <div class="ah_chart_right_bottom">
          <p class="ah_title">
            <i class="el-icon-user ah_title_i"></i> 现场设备层
          </p>
          <div ref="lineArea3" class="lineData"></div>
        </div>
      </div>
    </div>
    <div class="ah_table">
      <p class="ah_title">实时报警</p>
      <div class="selectSection clearfix">
        <p>报警级别：</p>
        <el-select v-model="grade" placeholder="请选择报警等级" class="selections">
          <el-option label="紧急" value="紧急"></el-option>
          <el-option label="严重" value="严重"></el-option>
          <el-option label="普通" value="普通"></el-option>
        </el-select>
      </div>
      <div class="tableDatas">
        <template>
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column fixed prop="date" label="报警日期" width="150"></el-table-column>
            <el-table-column prop="descrition" label="报警描述" width="120"></el-table-column>
            <el-table-column prop="server" label="服务器" width="120"></el-table-column>
            <el-table-column prop="number" label="设备型号" width="120"></el-table-column>
            <el-table-column prop="control" label="设备控制器" width="300"></el-table-column>
            <el-table-column prop="tag" label="设备处理" width="120"></el-table-column>
            <el-table-column prop="position" label="设备位置" width="120"></el-table-column>
            <el-table-column prop="grade" label="报警级别" width="120"></el-table-column>
            <el-table-column label="报警处理" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="editRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts");
import { chartDataList } from "../js/config.js";

export default {
  data() {
    return {
      grade: "",
      tableData: [
        {
          date: "2016-05-02",
          descrition: "报警状态1-1厂区状态3",
          server: "GhIOserver",
          number: "CH_ALL",
          control: "B栋",
          tag: "温度",
          position: "1厂区设备2",
          grade: '严重'
        },
        {
          date: "2016-05-04",
          descrition: "报警状态1-1厂区状态3",
          server: "GhIOserver",
          number: "CH_ALL",
          control: "B栋",
          tag: "温度",
          position: "1厂区设备2",
          grade: '严重'
        },
        {
          date: "2016-05-01",
          descrition: "报警状态1-1厂区状态3",
          server: "GhIOserver",
          number: "CH_ALL",
          control: "B栋",
          tag: "温度",
          position: "1厂区设备2",
          grade: '严重'
        },
        {
          date: "2016-05-03",
          descrition: "报警状态1-1厂区状态3",
          server: "GhIOserver",
          number: "CH_ALL",
          control: "B栋",
          tag: "温度",
          position: "1厂区设备2",
          grade: '严重'
        }
      ]
    };
  },
  mounted() {
    this.chartInit(this.$refs["lineArea3"], "lineArea3");
  },
  methods: {
    editRow(index, rows) {
      rows.splice(index, 1);
    },
    chartInit(el, key) {
      let myChart = echarts.init(el);
      myChart.setOption(chartDataList[key]);
    }
  }
};
</script>
<style lang="scss">
@import "../style/common.scss";
#alertHistory {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  flex-direction: column;
  background-color: #fff;
  @include flexCenter;
  padding: 5px;
  .ah_title {
    width: 100%;
    background-color: #e5e5e7;
    text-indent: 10px;
    .ah_title_i {
    }
  }
  .ah_chart {
    width: 100%;
    height: 300px;
    margin-bottom: 5px;
    @include flexCenter;
    .ah_chart_left,
    .ah_chart_right {
      flex: 1;
      height: 100%;
      flex-direction: column;
      @include flexCenter;
      .ah_chart_left_top,
      .ah_chart_left_bottom,
      .ah_chart_right_top,
      .ah_chart_right_bottom {
        flex: 1;
        width: 100%;
        margin-bottom: 2px;
        font-size: 12px;
        color: #000;
        border: 1px solid #e5e5e7;
        background-color: #fff;

        flex-direction: column;
        @include flexCenter;

        .lineData {
          width: 100%;
          flex: 1;
        }
        ul {
          @include flexCenter;
          justify-content: space-around;
          width: 100%;
          flex: 1;
          $wl: 60px;
          li {
            text-align: center;
            .grade {
              width: $wl;
              height: $wl;
              border-radius: 100%;
              text-align: center;
              font-size: 20px;
              line-height: $wl;
              border: 1px solid #fff;
              margin-bottom: 5px;
            }
          }
          .grade1 {
            .grade {
              border-color: red;
            }
            color: red;
          }
          .grade2 {
            .grade {
              border-color: yellow;
            }
            color: yellow;
          }
          .grade3 {
            .grade {
              border-color: green;
            }
            color: green;
          }
        }
      }
    }
    .ah_chart_left {
      margin-right: 5px;
    }
  }
  .ah_table {
    width: 100%;
    flex: 1;
    background-color: #fff;
    overflow: auto;
    .selectSection {
      margin-top: 10px;
      margin-left: 10px;
      height: 38px;
      p {
        float: left;
        width: 100px;
        height: 38px;
        line-height: 38px;
      }
      .selections {
        float: left;
        flex: 1;
      }
    }
    .tableDatas {
      padding: 10px 10px;
    }
  }
}
</style>


