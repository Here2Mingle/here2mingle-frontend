<template>
    <div>
        <travelbar />

    </div>
</template>

<script>
import travelbar from '../../components/Menus/travelbar.vue'

export default {
    components: { travelbar },

}
</script>

<script setup>
    useHead({
        title: 'Mingle Travel'
    })
</script>