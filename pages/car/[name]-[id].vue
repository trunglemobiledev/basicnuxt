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

// define erro page
if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${route.params.id} dose not exist.`,
  });
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
