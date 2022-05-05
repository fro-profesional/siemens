<template>
    <div>
        <n-card
            :title="`${item.sku}`"
            size="small"
            class="mb-5 rounded-lg shadow-md"
        >
            <!-- Title -->
            <h6 class="font-black text-left">Titulo: {{ item.title }}</h6>

            <!-- Price -->
            <h6 class="text-left mb-2">Precio: {{ price }}</h6>

            <!-- QTY -->
            <h6 class="text-left mb-2">Cantidad: 1 </h6>
            
            <!-- Description -->
            <p class="block line-clamp-3 mb-2">{{ item.description }}</p>

            <!-- Image -->
            <n-image width="200" :src="item.image"/>

        </n-card>
    </div>
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

<style></style>
