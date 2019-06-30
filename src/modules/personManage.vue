<template>
  <div id="personManage">
    <div class="block">
      <el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span >
            <el-button type="text" size="mini" @click="() => append(data)">增加</el-button>
            <el-button v-if="node.id>1" type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
          </span>
        </span>
      </el-tree>
    </div>
    <div class="personInfo">
      <div class="p_top_flex">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        <el-button @click="dialogFormVisible=true" type="primary">添加人员</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="编码" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="position" label="职务" width="120"></el-table-column>
        <el-table-column prop="address" label="职位描述" width="120"></el-table-column>
        <el-table-column prop="grade" label="职位等级" width="50" align="center"></el-table-column>
        <el-table-column prop="department" label="所属部门" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="normal" size="small">查看</el-button>
            <el-button type="normal" size="small">编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="danger"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="人员信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属部门" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职务" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="职务">
            <el-option label="主任" value="zr"></el-option>
            <el-option label="副主任" value="fzr"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
let id = 1000;
const data = [
  {
    id: 0,
    label: "xx公司",
    children: [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ]
  }
];
export default {
  data() {
    return {
      search: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      data: JSON.parse(JSON.stringify(data)),
      tableData: [
        {
          date: "20160503",
          name: "王小虎",
          position: "主任",
          department: "化工一车间",
          grade: 1,
          address: "系统管理员，设备管理"
        },
        {
          date: "20160502",
          position: "副主任",
          department: "化工一车间",
          name: "王小虎",
          grade: 1,
          address: "系统管理员，设备管理"
        },
        {
          date: "20160504",
          position: "副主任",
          department: "化工一车间",
          name: "王小虎",
          grade: 1,
          address: "系统管理员，设备管理"
        },
        {
          date: "20160501",
          position: "副主任",
          department: "化工一车间",
          name: "王小虎",
          grade: 1,
          address: "系统管理员，设备管理"
        },
        {
          date: "20160508",
          department: "化工一车间",
          name: "王小虎",
          position: "副主任",
          grade: 1,
          address: "系统管理员，设备管理"
        },
        {
          date: "20160506",
          name: "王小虎",
          department: "化工一车间",
          position: "副主任",
          grade: 1,
          address: "系统管理员，设备管理"
        },
        {
          date: "20160507",
          department: "化工一车间",
          name: "王小虎",
          position: "副主任",
          grade: 1,
          address: "系统管理员，设备管理"
        }
      ],
      multipleSelection: []
    };
  },
  mounted() {},
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
#personManage {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  .personInfo {
    padding: 10px;
    flex: 1;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    .p_top_flex {
      display: flex;
      justify-content: space-between;
      input {
        width: 200px;
      }
    }
  }
  .block {
    height: 100%;
    padding: 10px;
    width: 300px;
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }
}
</style>


