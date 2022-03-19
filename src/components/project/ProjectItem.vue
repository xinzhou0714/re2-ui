<template>
  <div class="project-item">
    <div class="upper">
      <div class="photo">
        <img :src="project.imageUrl" alt="" />
      </div>
      <h1>{{ project.name }}</h1>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="project.progress"
        :style="{ width: '80%' }"
      ></el-progress>
      <p>{{ project.detail }} {{ project.imgUrl }}</p>
    </div>

    <div class="botton">
      <el-button circle @click="handleUpdate">
        <Icon icon="ep:edit-pen" inline="true" />
      </el-button>
      <el-button circle @click="submitDelete">
        <Icon icon="ep:delete" inline="true" />
      </el-button>
      <el-button circle @click='handleChoose'>
        <Icon icon="icomoon-free:enter" inline="true" />
      </el-button>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  name: 'ProjectItem',
  components: {
    Icon
  },
  methods: {
    handleUpdate() {
      console.log('child handelUpdate')
      this.$emit('handleUpdate', this.project)
    },
    submitDelete() {
      console.log('child submitDelete')
      this.$emit('submitDelete', this.project.id)
    },
    handleChoose() {
      console.log('child handleChoose')
      this.$emit('handleChoose', this.project)
    }
  },
  props: {
    project: {
      type: Object,
      default() {
        return {
          id: 0,
          name: 'hello',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu scelerisque dui. Mauris sodales, nisi eu varius facilisis, ipsum diam fringilla urna, et pulvinar ligula ex vel mi. Duis ultricies diam in ante posuere varius. Aliquam magna felis, imperdiet',
          imageUrl: 'https://picsum.photos/id/101/200/200',
          progress: 70
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  background-color: #758a99;
  border-radius: 20px;

  // no overflow
  overflow: hidden;

  // relative position
  //position: relative; // child can be "absolute"
  width: 300px;
  height: 450px;
  margin: 20px;

  // flex layout
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  /* shadow */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  // no shrink
  flex-shrink: 0;
  .upper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .photo img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      margin-top: 10px;
    }
    h1 {
      text-align: center;
      //display: inline-block;
      width: 80%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    p {
      word-break: break-all;
      //display: inline-block;
      width: 90%;
    }
  }

  .botton {
    margin-bottom: 10px;
  }
}
</style>
