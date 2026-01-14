<script lang="ts" setup>
</script>

<template>
  <div class="hidden lg:block">
    <slot />
  </div>

  <div class="min-h-screen flex items-center justify-center px-6 text-center lg:hidden">
    <div class="max-w-md space-y-4">
      <h1 class="text-2xl font-semibold">
        Desktop only
      </h1>
      <p class="text-gray-600">
        This application is not supported on mobile or tablet devices.
        Please open it on a desktop or laptop.
      </p>
    </div>
  </div>
</template>
