<template>
    <div class="left-form">
      <form>
        <input type="text" name="username" placeholder="Enter User Name" class="form-control" autocomplete="off" v-model="userName">
        <button class="form-button" @click.prevent="saveData">Save</button>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import alertify from 'alertifyjs';

export default defineComponent({
  name: 'AddData',
  data(){
    return{
      userName : ''
    }
  },
  props: {},
  methods:{
    saveData(){
      if(!this.userName){
        alertify.alert('Name Cannot Be Empty!!');
      }
      else{
        this.$store.commit('SaveUserData', this.userName);
      }
    }
  }
});
</script>