<script setup lang="ts">
const route = useRoute();

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt: String) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make.toString()) : "Car"
  } in ${toTitleCase(route.params.city.toString())}`,
});
</script>

<template>
  <div>
    <NavBar />
    <div
      class="mx-auto mt-4 max-w-7xl space-x-4 px-4 xs:px-8 sm:px-10 lg:px-16 w-3/5"
    >
      <div class="mt-32 flex">
        <CarSideBar />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
