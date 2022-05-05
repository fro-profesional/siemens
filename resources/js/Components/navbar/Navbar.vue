<template>
    <div class="mb-10">
        <nav
            class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
        >
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="shrink-0 flex items-center">
                    <Link :href="route('dashboard')" class="mx-auto flex">
                        <JetApplicationMark class="block h-9 m-auto w-auto" />
                    </Link>
                </div>

                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button
                        type="button"
                        class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                    >
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul
                :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
            >
                <Link
                    v-for="category in categories"
                    :key="category.route"
                    :href="category.route"
                    class="text-gray-100 hover:text-indigo-400"
                >
                    {{ category.name }}
                </Link>

                <n-divider vertical />
                <!-- Profile -->
                <Link
                    v-if="$page.props.user"
                    :href="route('dashboard')"
                    class="text-gray-100 hover:text-indigo-400"
                >
                    Mi perfil
                </Link>

                <template v-else>
                    <Link
                        :href="route('login')"
                        class="text-gray-100 hover:text-indigo-400"
                    >
                        Iniciar Sesión
                    </Link>

                    <Link
                        :href="route('register')"
                        class="text-gray-100 hover:text-indigo-400"
                    >
                        Registrarse
                    </Link>
                </template>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import JetApplicationMark from "@/Jetstream/ApplicationMark.vue";
let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const categories = [
    {
        name: "Categoria1",
        route: "/category1",
    },

    {
        name: "Categoria2",
        route: "/category2",
    },
];
</script>
