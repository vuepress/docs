<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** package name */
    package: string
    /** dist-tag to use */
    distTag?: string
  }>(),
  {
    distTag: 'next',
  },
)

const badgeLink = computed(
  () => `https://www.npmjs.com/package/${props.package}`,
)
const badgeLabel = computed(() => {
  if (props.distTag) {
    return `${props.package}@${props.distTag}`
  }
  return props.package
})
const badgeImg = computed(
  () =>
    `https://badgen.net/npm/v/${props.package}/${
      props.distTag
    }?label=${encodeURIComponent(badgeLabel.value)}`,
)
</script>

<template>
  <a
    class="npm-badge"
    :href="badgeLink"
    :title="package"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :src="badgeImg" :alt="package" />
  </a>
</template>

<style scoped>
.npm-badge {
  margin-right: 0.5rem;
}
</style>
