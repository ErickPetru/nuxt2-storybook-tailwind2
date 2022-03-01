<template>
  <main class="p-4 md:p-8 lg:p-12">
    <div
      class="
        py-3
        px-4
        text-blue-900
        bg-blue-100
        rounded-b
        shadow-lg
        border-t-4 border-blue-500
      "
      role="alert"
    >
      <div class="flex">
        <div class="py-1">
          <svg
            class="mr-4 w-6 h-6 text-blue-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            />
          </svg>
        </div>
        <div>
          <p class="font-bold">Want to know more about Tailwind?</p>

          <p class="mt-2 text-sm">
            Checkout Tailwind official website:

            <Button
              rounded
              class="ml-1"
              @click="navigate('https://tailwindcss.com/')"
            >
              https://tailwindcss.com/
            </Button>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    navigate(url) {
      window.location = url
    }
  }
}
</script>
