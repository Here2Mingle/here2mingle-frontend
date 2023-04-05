<template>
    <div>
        <weirdbar />

    </div>
</template>

<script>
import weirdbar from '../../components/Menus/weirdbar.vue'

export default {
    components: { weirdbar },

}
</script>

<script setup>
    useHead({
        title: 'Show Your Weird'
    })
</script>