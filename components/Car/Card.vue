<script setup lang="ts">
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

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

const props = defineProps({
  car: {
    type: Object as PropType<Car>,
    required: true,
  },
  favored: Boolean,
});

const emit = defineEmits(["favor"]);
</script>

<template>
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      class="absolute w-7 right-5 top-2 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt=""
      @click="emit('favor', car.id)"
    />
    <div
      class="flex h-full"
      @click="navigateTo(`/car/${car?.name}-${car?.id}`)"
    >
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
