<template>
  <div class="v-page home-page">
    <div class="inline-block z-50">{{ title }}</div>
    <el-button type="primary" :icon="ElIconEditPen" @click="setUserInfo"
      >Primary</el-button
    >

    <el-button plain @click="dialogVisible = true">
      Click to open the Dialog
    </el-button>

    <div ref="viewRef" style="height: 300px; background-color: antiquewhite">
      Height: {{ height }} Width: {{ width }}
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/useAppStore';

const app = useAppStore();
const title = ref('欢迎来到首页');
const dialogVisible = ref(false);

const el = useTemplateRef('viewRef');
const { width, height } = useElementSize(el);

const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

function setUserInfo() {
  app.setToken('JJJJJJJJJKKKKKKKK');
}

console.log('Page: ' + app.token);

onMounted(() => {
  console.log('onMounted: ' + app.token);
});

definePageMeta({
  middleware: 'posts-auth',
});
</script>

<style lang="scss">
.home-page {
}
</style>
