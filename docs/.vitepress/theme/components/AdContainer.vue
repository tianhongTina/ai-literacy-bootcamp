<template>
  <div class="ad-container" :class="[position]">
    <!-- Google AdSense code will be inserted here -->
    <!-- Example:
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    -->
    <span class="ad-placeholder">Advertisement</span>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'sidebar'].includes(value)
  }
})
</script>

<style scoped>
.ad-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
}

.ad-container.top {
  min-height: 90px;
  margin: 1rem 0;
}

.ad-container.bottom {
  min-height: 90px;
  margin: 2rem 0;
}

.ad-container.sidebar {
  min-height: 250px;
  margin: 1rem 0;
}

.ad-placeholder {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}
</style>
