<template>
    <n-card
        title="Order ID #123"
        size="small"
        class="mb-5 rounded-lg shadow-md"
    >

        <!-- Title -->
        <template #header>
            <h6 class="font-blackw-full flex">
                <span>Order ID #123</span>
                <span class="block ml-auto">03/04/2022</span>
            </h6>
        </template>

        <h6>Direccion: Colinas del prado, 34545, CDMX</h6>

        <hr class="my-3" />
        <n-collapse>
            <n-collapse-item title="Lista de Items" name="1">
               <ItemList v-for="item in items" :item="item" :key="item.id" />
            </n-collapse-item>
        </n-collapse>
    </n-card>
</template>

<script setup>
import ItemList from "@/Components/order/ItemList.vue";
const items = [
    {
        id: 1,
        created_at: null,
        updated_at: null,
        sku: "6AV21240GC010AX0",
        title: "SIMATIC HMI TP700 Comfort, Comfort\n",
        price: 22890,
        description:
            'SIMATIC HMI TP700 Comfort, Comfort Panel, mando táctil, Pantalla TFT widescreen de 7", 16 millones de colores, Interfaz PROFINET, interfaz MPI/PROFIBUS DP, memoria de configuración de 12 MB, Windows CE 6.0 (soporte técnico de Microsoft ajustado incl. actualizaciones de seguridad) configurable a partir de WinCC Comfort V11 Los Comfort Panels han sido concebidos para implementar tareas de visualización potentes a pie de máquina.',
        qty: 1,
        image: "https://shop.propysa.net/pub/media/catalog/product/cache/2f0d662daa41850e0e060d66c72425a8/P/_/P_ST80_XX_02173P.png",
        dimensions: "17.2 x 27.3 x 8.6 [cm]",
        weight: "1.54 [kg]",
        tags: null,
    },
    {
        id: 2,
        created_at: null,
        updated_at: null,
        sku: "6AV21240GC010AX0",
        title: "SIMATIC HMI TP700 Comfort, Comfort\n",
        price: 22890,
        description:
            'SIMATIC HMI TP700 Comfort, Comfort Panel, mando táctil, Pantalla TFT widescreen de 7", 16 millones de colores, Interfaz PROFINET, interfaz MPI/PROFIBUS DP, memoria de configuración de 12 MB, Windows CE 6.0 (soporte técnico de Microsoft ajustado incl. actualizaciones de seguridad) configurable a partir de WinCC Comfort V11 Los Comfort Panels han sido concebidos para implementar tareas de visualización potentes a pie de máquina.',
        qty: 1,
        image: "https://shop.propysa.net/pub/media/catalog/product/cache/2f0d662daa41850e0e060d66c72425a8/P/_/P_ST80_XX_02173P.png",
        dimensions: "17.2 x 27.3 x 8.6 [cm]",
        weight: "1.54 [kg]",
        tags: null,
    },
    {
        id: 3,
        created_at: null,
        updated_at: null,
        sku: "6AV21240GC010AX0",
        title: "SIMATIC HMI TP700 Comfort, Comfort\n",
        price: 22890,
        description:
            'SIMATIC HMI TP700 Comfort, Comfort Panel, mando táctil, Pantalla TFT widescreen de 7", 16 millones de colores, Interfaz PROFINET, interfaz MPI/PROFIBUS DP, memoria de configuración de 12 MB, Windows CE 6.0 (soporte técnico de Microsoft ajustado incl. actualizaciones de seguridad) configurable a partir de WinCC Comfort V11 Los Comfort Panels han sido concebidos para implementar tareas de visualización potentes a pie de máquina.',
        qty: 1,
        image: "https://shop.propysa.net/pub/media/catalog/product/cache/2f0d662daa41850e0e060d66c72425a8/P/_/P_ST80_XX_02173P.png",
        dimensions: "17.2 x 27.3 x 8.6 [cm]",
        weight: "1.54 [kg]",
        tags: null,
    },
];
</script>

<style></style>
