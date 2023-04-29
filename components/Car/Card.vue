<script setup lang="ts">

import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

interface Car {
  id: number;
  name: string;
  description: string;
  url: string;
  price: number;
}

const props = defineProps({
  car: {
    type: Object as PropType<Car>,
    required: true,
  },
});

const favored = useState<Boolean>(`favored-${props.car.id}`, () => {
  return false;
});

</script>

<template>
  <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img class="absolute w-7 right-5 top-2 z-20" :src="favored ? heartFilled : heartOutline" alt=""
      @click="favored = !favored">
    <div class="flex h-full" @click="navigateTo(`/car/${car?.name}-${car?.id}`)">
      <!-- {{ car }} -->
      <NuxtImg :src="car?.url" class="w-[300px] h-full" alt="" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car?.name }}</h1>
          <p class="text-gray-700">
            {{ car?.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">$ {{ car?.price }}</h1>
      </div>
    </div>
  </div>
</template>