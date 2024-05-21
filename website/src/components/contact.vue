<script setup lang="ts">
import ProfileItem from './profile-item.vue'
import IconCommunity from './icons/IconCommunity.vue'
</script>

<template>
  <ProfileItem>
    <template #icon>
      <IconCommunity />
    </template>
    <template #heading>Contact</template>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/reshmamenon/" target="_blank">LinkedIn</a>
      </li>
      <li>
        <a href="https://www.xing.com/profile/Reshma_RMenon/" target="_blank">Xing</a>
      </li>
      <li>
        <a href="https://github.com/reshma-menon" target="_blank">Github</a>
      </li>
    </ul>
  </ProfileItem>
</template>
