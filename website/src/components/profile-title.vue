<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="profile-title">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      Project Management Professional (PMP)® <br/>Electrical & Electronics Engineer <br/>Certified Agile
      Scrum Master, Budgeting & Cost Controling Expert
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.profile-title h1,
.profile-title h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .profile-title h1,
  .profile-title h3 {
    text-align: left;
  }
}
</style>
