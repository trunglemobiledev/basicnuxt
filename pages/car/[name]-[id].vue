<script setup lang="ts">
const route = useRoute();
const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt: String) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
useHead({
  title: toTitleCase(route.params.name.toString()),
});
</script>

<template>
  <div>
    <NavBar />
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pd-16 w-3/5"
    >
      <CarDetailHero />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
  </div>
</template>
