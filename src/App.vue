<template>
  <div class="form-main alan">
    <AddData/>
    <ShowData/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddData from './components/AddData.vue';
import ShowData from './components/ShowData.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AddData,
    ShowData
  }
});
</script>