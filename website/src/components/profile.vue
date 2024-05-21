<script setup lang="ts">
import ProfileItem from './profile-item.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <ProfileItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>About me</template>
    Experienced Project Manager with PMP certification and over 9 years of proven success in
    delivering projects across diverse industries. My degree in Electrical and Electronics
    Engineering provides a strong technical foundation, enabling me to effectively manage and
    execute complex technical projects. I specialize in project planning, risk management, and
    stakeholder communication, consistently ensuring projects are completed on time and within
    budget. My expertise includes agile methodologies, team leadership, and process optimization,
    all aimed at achieving high-quality outcomes that meet client expectations and drive business
    growth. Passionate about leveraging my extensive experience, technical background, and PMP
    credentials to enhance project efficiency and foster innovation.
  </ProfileItem>

  <ProfileItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Skills</template>
    Technical Proficiency・Project Planning and Scheduling・Risk Management・Stakeholder
    Communication ・Agile Methodologies・Budget Management・Team Leadership・Quality
    Assurance・Problem-Solving・Process Optimization
  </ProfileItem>

  <ProfileItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Recent Projects</template>
    <ul>
      <li>BMW Fluid Content Platform</li>
      <li>E wie Einfach Customer Self-Service Portal</li>
    </ul>
  </ProfileItem>
</template>
