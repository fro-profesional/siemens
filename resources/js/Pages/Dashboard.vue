<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Order from '@/Components/order/Order.vue';
</script>

<template>
    <AppLayout title="Mis Ordernes">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Mis Ordernes
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class=" overflow-hidden ">
                    <Order v-for="i in 10" :key="i" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
