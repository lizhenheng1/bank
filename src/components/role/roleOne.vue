<template>
  <div class="roleOne">
    <div class="roleHead">
      <el-button round class="create" @click="create">创建</el-button>
    </div>
    <el-table :data="roleList" class="roleTable">
      <el-table-column label="角色名称">
        <template slot-scope="scope" width="150">
          <el-button
            id="roleName"
            size="mini"
            @click="roleName(scope.$index, scope.row)"
          >{{scope.row.role_name}}</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="name" label="角色名称"></el-table-column> -->
      <!-- <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
      </template>-->
      <el-table-column label="操作">
        <template slot-scope="scope" width="150">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  props: ["msg"],
  data() {
    return {
      roleList: [], //渲染角色
      treeList: [] //存储请求信息
      // roleID: [] //存储ID
    };
  },
  beforeMount() {},
  computed: {
    ...mapState(["roleID", "role_id"])
  },
  created() {
    // 进入页面请求数据，渲染角色列表
    this.$http
      .get("/api/hywe_ssm/roleRight/role.action")
      .then(res => {
        if (res.data.status == "0001") {
          this.roleList = res.data.data;
        } else {
        }
      })
      .catch(err => {
        console.log(
          "进入页面请求数据，渲染角色列表时错误---------------" + err
        );
      });
    // 页面创建完成，保证请求树形菜单正常渲染
    this.$http
      .post("/api/hywe_ssm/roleRight/right.action", {
        role_id: localStorage.role_id
      })
      .then(res => {
        if (res.data.status == "0001") {
          this.$store.state.roleID = [];
          res.data.data.forEach((obj, idx) => {
            this.$store.state.roleID.push(obj.right_id);
          });
        } else {
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    create() {
      console.log(this.roleList);
      this.$prompt("请输入角色名称", "创建角色", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          if (value !== null) {
            this.$message({
              type: "success",
              message: "创建成功,新角色名称: " + value
            });
          } else {
            this.$message({
              type: "info",
              message: "不能输入空角色名称"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消创建"
          });
        });
    },
    roleName(index, row) {
      this.$store.state.role_id = row.role_id;
      localStorage.role_id = this.$store.state.role_id;
      // roleTwo列表加上属性right_id        roleTwo的列表通过right_id来判断
      // 通过role_id 获取权限 渲染树形菜单
      this.$http
        .post("/api/hywe_ssm/roleRight/right.action", {
          role_id: localStorage.role_id
        })
        .then(res => {
          if (res.data.status == "0001") {
            this.$store.state.roleID = [];
            res.data.data.forEach((obj, idx) => {
              this.$store.state.roleID.push(obj.right_id);
            });
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 修改名字
    handleEdit(index, row) {
      console.log(index, row);
      this.$prompt("请输入新角色名称", "修改角色名称", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的新角色名称: " + value
          });
          row.role_name = value;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    // 删除角色
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm(`您确定要删除角色[${row.role_name}]吗？?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.roleList.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
#roleName {
  border: none;
  padding: 10px 25px;
}
.roleOne {
  width: 20%;
  min-height: 100%;
  text-indent: 10px;
  border: 1px solid rgb(150, 150, 150);
  border-left: #1b809e 5px solid;
  float: left;
  margin-right: 1%;
  box-sizing: border-box;
}
.create {
  width: 85px;
  height: 35px;
  line-height: 30px;
  padding: 0;
  margin-top: 5px;
}
.roleHead {
  border-bottom: 1px #606266 dotted;
  height: 45px;
  background: #e5e6e988;
}
</style>