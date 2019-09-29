<template>
  <div class="position">
    <header class="header">
      <p>[个人业绩录入人员] 关联的用户</p>
      <el-button size="mini" class="add" round>添加</el-button>
      <el-button size="mini" round>删除</el-button>
      <el-button size="mini" round>激活</el-button>
      <el-button size="mini" round>冻结</el-button>
    </header>
    <div class="roleThree">
      <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @row-click="rowClick"
      >
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column prop="user_code" label="账号" width="150"></el-table-column>
        <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="position" label="职位" width="180"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="user_status" label="状态"></el-table-column>
        <el-table-column prop="mobile_phone" label="电话" width="180"></el-table-column>
      </el-table>
    </div>
    <div class="roleFooter">
      <!-- 分页器 5% -->
      <el-row class="block-col-2">
        <el-col>
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              显示页数 {{ pageSize}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" split-button>
              <el-dropdown-item command="10">10</el-dropdown-item>
              <el-dropdown-item command="20">20</el-dropdown-item>
              <el-dropdown-item command="30">30</el-dropdown-item>
              <el-dropdown-item command="40">40</el-dropdown-item>
              <el-dropdown-item command="50">50</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        @size-change="sizeChange"
        @current-change="currentPage"
        :total="100"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20, //显示条数
      pageNum: 1, //页数
      pagData: [],
      tableData: [], //存储表格数据
      showTableData: [],
      multipleSelection: [] //存储选中的多选框
    };
  },
  watch: {
    "$store.state.role_id": function(newFlag, oldFlag) {
      //角色role_id改变时请求
      // 通过role_id 获取权限 渲染表格
      this.$http
        .post("/api/hywe_ssm/user/queryUserByRole.action ", {
          role_id: this.$store.state.role_id,
          pageSize: this.pageSize,
          pageNum: this.pageNum
        })
        .then(res => {
          this.tableData = res.data.data;
          this.tableData.forEach(obj => {
            obj.user_status == 1
              ? (obj.user_status = "正常")
              : (obj.user_status = "冻结");
            if (obj.sex === "0") {
              obj.sex = "女";
            }
            if (obj.sex === "1") {
              obj.sex = "男";
            }
          });
        })
        .catch(err => {
          console.log("角色role_id改变时请求" + err);
        });
    },
    pageSize(news, old) {
      //显示页数改变时请求
      this.$http
        .post("/api/hywe_ssm/user/queryUserByRole.action ", {
          role_id: this.$store.state.role_id,
          pageSize: this.pageSize,
          pageNum: this.pageNum
        })
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log("显示页数改变时请求" + err);
        });
    },
    pageNum(news, old) {
      //分页器值改变时请求
      this.$http
        .post("/api/hywe_ssm/user/queryUserByRole.action ", {
          role_id: this.$store.state.role_id,
          pageSize: this.pageSize,
          pageNum: this.pageNum
        })
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log("分页器值改变时请求" + err);
        });
    }
  },
  methods: {
    handleSelectionChange(val) {
      //多选框改变了
      this.multipleSelection = val;
      console.log(val);
      console.log("↑↑↑↑↑选择框改变了");
    },
    handleCommand(command) {
      //显示页数改变时触发
      this.pageSize = Number(command);
    },
    html() {
      console.log(111);
    },
    rowClick(val) {
      //表格点击时触发
      console.log(val);
      const h = this.$createElement;
      this.$msgbox({
        title: "修改用户信息",
        message: h("div", { class: "msgbox" }, [
          h("span", { class: "user" }, `用户账号 :`),
          h("input", { type:'text ' }, `${val.user_code}`),
          h("br", null),
          h("br", null),

          h("span", { class: "name" }, `用户姓名 :  `),
          h("input", { class:"text"}, `${val.user_name}`),
          h("br", null),
          h("br", null),

          h("span", { class: "state" }, `账号状态 : ${val.user_status} `),
          h("select", {}, [h("option", {}, "正常"), h("option", {}, "冻结")]),
          h("br", null),
          h("br", null),

          h("span", { class: "sex" }, `性别 : ${val.sex} `),
          h("select", {  }, [h("option", {}, "男"), h("option", {}, "女")]),
          h("br", null),
          h("br", null),

          h("span", { class: "title" }, `职称 :  `),
          h("input", {}, `${val.relationship}`),
          h("br", null),
          h("br", null),

          h("span", { class: "date" }, "入职日期 :  "),
          h("input", {}, ``),
          h("br", null),
          h("br", null),

          h("span", { class: "work" }, `办公电话 :  `),
          h("input", {}, `${val.office_phone}`),
          h("br", null),
          h("br", null),

          h("span", { class: "move" }, `移动电话 :  `),
          h("input", {}, `${val.mobile_phone}`),
          h("br", null),
          h("br", null),

          h("span", { class: "email" }, `电子邮箱 :  `),
          h("input", {}, `${val.office_qq}`),
          h("br", null),
          h("br", null),

          h("span", { class: "department" }, "部门 :  "),
          h("input", {}, ``),
          h("br", null),
          h("br", null)
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 500);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    },
    sizeChange(size) {},
    currentPage(currentPage) {
      //分页器改变时触发
      this.pageNum = currentPage;
    }
  },
  created() {
    this.$store.state.role_id = localStorage.role_id;
    this.$http
      .post("/api/hywe_ssm/user/queryUserByRole.action ", {
        role_id: this.$store.state.role_id,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      })
      .then(res => {
        this.tableData = res.data.data;
        this.tableData.forEach((obj, index) => {
          obj.user_status == 1
            ? (obj.user_status = "正常")
            : (obj.user_status = "冻结");
          if (obj.sex === "0") {
            obj.sex = "女";
          }
          if (obj.sex === "1") {
            obj.sex = "男";
          }
        });
      })
      .catch(err => {
        console.log("角色role_id改变时请求" + err);
      });
    //显示页数改变时请求
    this.$http
      .post("/api/hywe_ssm/user/queryUserByRole.action ", {
        role_id: this.$store.state.role_id,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      })
      .then(res => {
        this.tableData = res.data.data;
      })
      .catch(err => {
        console.log("显示页数改变时请求" + err);
      });
    //分页器值改变时请求
    this.$http
      .post("/api/hywe_ssm/user/queryUserByRole.action ", {
        role_id: this.$store.state.role_id,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      })
      .then(res => {
        this.tableData = res.data.data;
      })
      .catch(err => {
        console.log("分页器值改变时请求" + err);
      });
  }
};
</script>

<style scoped>
.header {
  height: 7%;
  border-bottom: 1px #606266 dotted;
  box-sizing: border-box;
  background: #e5e6e988;
}
.msgbox {
  width: 250px;
  margin: auto;
}
.msgbox span {
  width: 80px;
  display: inline-block;
  text-align: right;
}
.msgbox input {
  width: 150px;
  display: inline-block;
  margin-left: 5px;
}
.header p {
  width: 250px;
  height: 100%;
  font-size: 14px;
  color: #606266;
  line-height: 3;
  margin: 0 20px;
  float: left;
}
.header .el-button {
  float: left;
  width: 70px;
  margin-top: 8px;
}
.block-col-2 {
  width: 150px;
  height: 35px;
  line-height: 35px;
  float: left;
}
.el-dropdown {
  font-size: 16px;
}
.el-icon--right {
  margin-left: 0px;
}
.roleFooter {
  width: 100%;
  height: 5%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(230, 230, 230);
  border-top: 1px solid rgb(197, 197, 197);
}
.el-pagination {
  float: right;
  text-align: center;
}
.el-pager .number {
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  text-align: center;
}
.roleThree {
  width: 100%;
  height: 87%;
  position: relative;
  overflow-y: scroll;
}
.el-dropdown {
  margin-left: 30px;
}
.position {
  width: 53%;
  height: 100%;
  border: 1px solid rgb(150, 150, 150);
  border-right: #1b809e 5px solid;
  overflow: hidden;
  box-sizing: border-box;
  float: left;
  position: relative;
}
</style>