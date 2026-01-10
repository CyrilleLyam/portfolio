<template>
  <div class="min-h-screen bg-bg text-fg flex items-center justify-center px-6 font-sans">
    <div class="text-center flex flex-col items-center gap-2">
      <span class="i-lucide-alert-circle text-6xl text-muted" />
      <h1 class="text-2xl font-700">
        Page not available
      </h1>
      <button
        class="mt-2 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-fg hover:bg-border/20 cursor-pointer transition"
        @click="clearError({ redirect: '/' })"
      >
        <span class="i-lucide-arrow-left" />
        Back to home
      </button>
    </div>
  </div>
</template>
