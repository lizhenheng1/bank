<template>
  <div class="roleTwo">
    <div class="header">
      <span class="roleSpan" @click="open">
        <i class="iconfont icon-dakaishu1"></i>
      </span>
      <span class="roleSpan" @click="close">
        <i class="iconfont icon-guanbishu"></i>
      </span>
      <span class="roleSpan" @click="preserve">
        <i class="iconfont icon-baocun baocun"></i>
      </span>
    </div>
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="right_id"
      ref="tree"
      :props="defaultProps"
      @check-change="handleNodeClick"
      :default-checked-keys="setexpandedKey" 
      @node-expand="expand"
    ></el-tree>
    <!-- :default-expand-all="expand" -->
    <!-- :default-expanded-keys="checkedKeyParent" -->
    
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: "系统管理",
          right_idParent: "coreSys",
          right_id: "coreSys",
          children: [
            {
              id: 3,
              label: "用户管理",
              right_idParent: "userManage",
              right_id: "userManage",
              children: [
                {
                  label: "添加账号",
                  right_id: "sys_addUser",
                  id: 29
                },
                {
                  label: "删除账号",
                  right_id: "sys_delUser",
                  id: 30
                },
                {
                  label: "修改账号",
                  right_id: "sys_editUser",
                  id: 31
                },
                {
                  label: "冻结账号",
                  right_id: "sys_freezeUser",
                  id: 32
                },
                {
                  label: "激活账号",
                  right_id: "sys_activateUser",
                  id: 33
                }
              ]
            },
            {
              id: 4,
              label: "角色权限",
              right_idParent: "rightManage",
              right_id: "rightManage",
              children: [
                {
                  label: "添加角色",
                  right_id: "sys_addRole",
                  id: 34
                },
                {
                  label: "删除角色",
                  right_id: "sys_delRole",
                  id: 35
                },
                {
                  label: "修改角色",
                  right_id: "sys_editRole",
                  id: 36
                },
                {
                  label: "添加角色关联用户",
                  right_id: "sys_addRoleUser",
                  id: 37
                },
                {
                  label: "删除角色关联用户",
                  right_id: "sys_deleteRoleUser",
                  id: 38
                }
              ]
            },
            {
              id: 5,
              label: "部门管理",
              right_idParent: "deptManage",
              right_id: "deptManage",
              children: [
                {
                  label: "添加部门",
                  right_id: "sys_addDept",
                  id: 39
                },
                {
                  label: "删除部门",
                  right_id: "sys_delDept",
                  id: 40
                },
                {
                  label: "修改部门",
                  right_id: "sys_editDept",
                  id: 41
                }
              ]
            },
            {
              id: 6,
              label: "操作日志",
              right_id: "sys_sysOperation"
            },
            {
              id: 7,
              label: "字典管理",
              right_id: "sys_dicManage"
            },
            {
              id: 8,
              label: "系统配置",
              right_id: "sys_config"
            }
          ]
        },
        {
          id: 2,
          label: "绩效管理",
          right_idParent: "business",
          right_id: "business",
          children: [
            // {
            //   id: 5,
            //   label: "二级 2-1"
            // },
            {
              label: "产品管理",
              right_id: "productRanking",
              id: 9
            },
            {
              label: "市公司排名",
              right_id: "branchRanking",
              id: 10
            },
            {
              label: "网点排名",
              right_id: "websiteRanking",
              id: 11
            },
            {
              label: "县公司排名",
              right_id: "subBranchRanking",
              id: 12
            },
            {
              label: "全员销售明细",
              right_id: "businessStatistics",
              id: 13
            },
            {
              label: "个人销售明细",
              right_id: "businessFlowing",
              id: 14
            },
            {
              label: "指标信息库",
              right_id: "indicatorLibrary",
              id: 15
            },
            {
              label: "有效积分",
              right_id: "indicatorResultWebsite",
              id: 16
            },
            {
              label: "人员任务完成率",
              right_id: "targetResultUser",
              id: 17
            },
            {
              label: "网点任务完成率",
              right_id: "targetResultWebsite",
              id: 18
            },
            {
              label: "县公司任务完成率",
              right_id: "targetResultSubBranch",
              id: 19
            },
            {
              label: "人员任务下发",
              right_id: "targetConfigUsers",
              id: 20
            },
            {
              label: "网点任务下发",
              right_id: "targetConfigWebsite",
              id: 21
            },
            {
              label: "县公司任务下发",
              right_id: "targetConfigSubBranch",
              id: 22
            },
            {
              label: "产品配置",
              right_id: "productManage",
              id: 23
            },
            {
              label: "考核指标配置",
              right_id: "indicatorConfig",
              id: 24
            },
            {
              label: "业绩审核",
              right_id: "businessCheck",
              id: 25
            },
            {
              label: "人员任务下发",
              right_id: "targetConfigUser",
              id: 26
            },
            {
              label: "查看县公司任务",
              right_id: "viewTargetSubBranch",
              id: 27
            },
            {
              label: "查看网点任务",
              right_id: "viewTargetWebsite",
              id: 28
            }
          ]
        }
      ],
      checkedKeyChildren: [], //存储被选中的对象的role_id    子级   发送请求参数
      checkedKeyParent: [], //存储父级被选中的role_Id
      newCheckedKey:[],
      setexpandedKey: [], //展开
      setchechkkeys: [], //选中
      defaultProps: {
        children: "children",
        label: "label"
      },
      node:'',
    };
  },
  watch: {
    "$store.state.roleID": function(newFlag, oldFlag) {
      this.$refs.tree.setCheckedKeys([]); //清空树形菜单
      this.setexpandedKey = newFlag; //重新赋值树形菜单
      this.checkedKeyParent.forEach(obj1=>{
        this.setexpandedKey.forEach((obj2,index2)=>{
          if(obj1==obj2){
            this.setexpandedKey.splice(index2,1)
          }
        })
      })
      return false;
    }
  },
  methods: {
    handleNodeClick() {
      //树形菜单点击事件

      //点击选择框的时候获取rile_id 和 被选中的对象
      this.$refs.tree.getCheckedKeys().forEach(obj => {
        //rile_id
      });
      this.checkedKeyChildren = [];
      this.$refs.tree.getCheckedNodes().forEach(obj => {
        //选中的对象
        // this.setchechkkeys.push(obj.right_id);
        if (!obj.children) {
          //把有子级的菜单去除掉，只留子菜单
          this.checkedKeyChildren.push(obj.right_id);
        }
      });
    },
    expand(a,b,c){
      this.node=b;
      // console.log(a,b,c);
    },
    open(e) {
      // this.$refs.tree.store.root.expanded=true
      this.$nextTick(() => {
        for(var i=0;i<this.$refs.tree.store._getAllNodes().length;i++){
            this.$refs.tree.store._getAllNodes()[i].expanded=true;
          }
      });
    },
    close(e) {
this.$nextTick(() => {
        for(var i=0;i<this.$refs.tree.store._getAllNodes().length;i++){
            this.$refs.tree.store._getAllNodes()[i].expanded=false;
          }
      });
    },
    preserve(e) {
this.$confirm('此操作将保存修改, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消保存'
          });          
        });
    },
  },
  created() {},
  beforeMount() {
    this.treeData.forEach((obj, index) => {
      if (obj.children) {
        this.checkedKeyParent.push(obj.right_idParent);
      }
      obj.children.forEach(obj => {
        if (obj.children) {
          this.checkedKeyParent.push(obj.right_idParent);
        }
      });
    });
  },
  mounted() {},
  beforeUpdate() {}
};
</script>


<style scoped>
.roleTwo {
  width: 25%;
  height: 100%;
  text-indent: 10px;
  border: 1px solid rgb(150, 150, 150);
  float: left;
  margin-right: 1%;
  overflow-y: scroll;
  box-sizing: border-box;
  border-right: #1b809e 5px solid;
}
.roleSpan {
  width: 20px;
  height: 20px;
  display: inline-block;
  padding: 0 5px;
}
.roleSpan i {
  font-size: 18px;
  text-indent: 0;
  margin: auto;
  color: rgb(92, 92, 92);
  display: block;
}
.roleSpan .baocun {
  font-weight: bold;
  font-size: 20px;
}
.header{
  height: 45px;
  border-bottom: 1px #606266 dotted;
  padding-top: 10px;
  box-sizing: border-box;
  background: #e5e6e988;
}
</style>