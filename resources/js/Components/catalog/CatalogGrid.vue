<template>
  <div class="md:px-3">

    <!-- Grid -->
    <n-grid cols="1 s:2 m:3 l:4" responsive="screen" x-gap="20" y-gap="20">
      <!-- Loaded Items -->
      <template v-if="itemsData">
        <n-grid-item v-for="item in itemsData.data" :key="item.id">
          <ItemCard :item="item" />
        </n-grid-item>
      </template>

      <!-- Skeleton -->
      <template v-else>
        <n-grid-item v-for="index in 12" :key="index">
          <div class="p-1 item flex">
            <n-spin size="large" class="m-auto" />
          </div>
        </n-grid-item>
      </template>
    </n-grid>

    <!-- Pagination -->
    <div class="mt-10 flex bg-white max-w-max py-2 px-3 mx-auto rounded-3xl">
      <!-- Loaded Items -->
      <template v-if="itemsData">
        <n-pagination
          class="mx-auto"
          :page="itemsData.current_page"
          :page-count="itemsData.last_page"
        />
      </template>

      <!-- Skeleton -->
      <template v-else>
        <n-pagination class="mx-auto" :page="1" :page-count="1" />
      </template>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsData: null,
    };
  },

  async mounted() {
    const url = "/api/items";
    const itemsRequest = await axios.get(url);
    console.log(itemsRequest.data);
    this.itemsData = itemsRequest.data;
  },
};
</script>


<script setup>
import ItemCard from "@/Components/catalog/ItemCard.vue";
</script>


<style scoped>
.item{
  width: 300px;
  height: 500px;
}
</style>
