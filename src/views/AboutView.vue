<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TheForm />
    <Notifications message="Notifgy!" type="error" />
  </div>
</template>

<script setup lang="ts">
import TheForm from '@/components/TheForm.vue'
import Notifications from '@/components/Notifications.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
