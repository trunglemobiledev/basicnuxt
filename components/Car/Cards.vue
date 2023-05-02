<script setup lang="ts">
interface Car {
  id: number;
  name: string;
  price: string;
  url: string;
  seats: number;
  miles: string;
  features: any;
  description: string;
}

const { cars } = useCars();

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id: number) => {
  if (id in favorite.value) {
    console.log("🚀 ~ file: Cards.vue:26 ~ handleFavorite ~ avorite[id]:", favorite.value)
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </div>
</template>
