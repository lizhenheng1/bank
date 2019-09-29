<template>
  <div>
    <el-tree
  :data="treeData"
  show-checkbox
  default-expand-all
  node-key="right_id"
  ref="tree"
  highlight-current
  :default-checked-keys="arr"
  >
</el-tree>

<div class="buttons">
  <el-button @click="getCheckedNodes">通过 node 获取</el-button>
  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>
</div>

  </div>
</template>
<script>
  export default {
    created() {
      console.log(1111);
    },
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
              id: 3,
              label: "用户管理",
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
            }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys(['deptManage']);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        // , "businessCheck", "coreSys", "indicatorResultWebsite", "rightManage", "sys_activateUser",
        arr:["allSubBranchRanking", "allWebsiteRanking", "business", "sys_addRole", "sys_addRoleUser", "sys_addUser", "sys_deleteRoleUser", "sys_delRole", "sys_editRole", "sys_editUser", "sys_freezeUser", "targetConfigUser", "targetResultUser", "userManage"],
        treeData: [
        {
          id: 1,
          label: "系统管理",
          right_id: "coreSys",
          children: [
            {
              id: 3,
              label: "用户管理",
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
      };
    }
  };
</script>
<style scoped>
.sortDiv.el-icon-caret-right:before {
    content: '\E604';
  }
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>