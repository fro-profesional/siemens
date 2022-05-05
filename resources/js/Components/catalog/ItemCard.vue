<template>
    <!-- Title -->
    <n-card class="item mx-auto">
        <!-- Title -->
        <template #header>
            <h6 class="font-black text-center">{{ item.title }}</h6>
        </template>

        <!-- Image -->
        <template #cover>
            <img :src="item.image" />
        </template>

        <!-- Content -->
        <div class="flex">
            <div class="mx-auto">
                <!-- Price -->
                <h6 class="text-center mb-2">{{ price }}</h6>

                <!-- Description -->
                <p class="block line-clamp-3 mb-2">{{ item.description }}</p>

                <!-- Cart Button -->
                <div class="flex">
                    <n-button class="mx-auto"> Agregar al carrito </n-button>
                </div>

            </div>
        </div>
    </n-card>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    computed: {
        price: function () {
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",

                // These options are needed to round to whole numbers if that's what you want.
                //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
                //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
            });

            return formatter.format(this.item.price);
        },
    },
};
</script>

<style scoped>
.item {
    width: 300px;
    height: 500px;
}
</style>
