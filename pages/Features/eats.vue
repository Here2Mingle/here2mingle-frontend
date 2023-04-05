<template>
    <div>
        <eatsbar />

    </div>
</template>

<script>
import eatsbar from '../../components/Menus/eatsbar.vue'

export default {
    components: { eatsbar },

}
</script>

<script setup>
    useHead({
        title: 'Mingle Eats'
    })
</script>