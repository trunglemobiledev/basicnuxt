<script setup lang="ts">
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name.toString()),
});

const car = computed(() => {
  return cars.find((c: any) => {
    return c.id === parseInt(route.params.id.toString());
  });
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
