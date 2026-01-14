<template>
  <div class="min-h-screen flex items-center justify-center bg-bg px-6 text-fg font-sans">
    <div class="flex flex-col items-center gap-2 text-center">
      <span class="i-lucide-alert-circle text-6xl text-muted" />
      <h1 class="text-2xl font-700">
        Page not available
      </h1>
      <button
        class="mt-2 inline-flex cursor-pointer items-center gap-2 border border-border rounded-lg px-5 py-2.5 text-fg transition hover:bg-border/20"
        @click="clearError({ redirect: '/' })"
      >
        <span class="i-lucide-arrow-left" />
        Back to home
      </button>
    </div>
  </div>
</template>
