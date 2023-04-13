<template>
  <div class="mt-10">
    <div class="flex w-[60px] justify-between">
      <input type="text" class="border p-1 mr-2" placeholder="Name" />
      <input type="text" class="border p-1 mr-2" placeholder="Phone" />
      <input type="text" class="border p-1 mr-2" placeholder="Email" />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        class="border p-1 w-full"
        placeholder="Message"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
      Submit
    </button>
  </div>
</template>
