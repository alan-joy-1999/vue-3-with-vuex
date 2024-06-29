<template>
    <div class="right-form">
      <form>
        <h3>Users</h3>
        <div v-for="(user, index) in userList" :key="index" class="user-list">
          <p>{{user.name}}</p>
          <span class="register" v-if="!user.registered">Register</span>
          <span class="not-register" v-else>Registered</span>
        </div>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShowData',
  props: {},
  data(){
    return{
      userList : this.$store.getters.getUserList
    }
  }
});
</script>