  <template>
  <div style="height:100%;">
    <roleOne :msg="list"></roleOne>
    <roleTwo></roleTwo>
    <roleThree></roleThree>
  </div>
</template>

<script>
import roleOne from "./role/roleOne.vue";
import roleTwo from "./role/roleTwo.vue";
import roleThree from "./role/roleThree.vue";
export default {
  // inject:['reload'],
  data() {
    return {
      list: [
      ]
    };
  },
  created() {
  },
  beforeCreate() {
      // this.reload()
  },
  components: {
    roleOne,
    roleTwo,
    roleThree
  },

  methods: {
  }
};
</script>


<style scoped>
</style>