<template>
    <div>
      <socialmenu />
      
    </div>
</template>

<script>
    import socialmenu from '../../components/Menus/socialmenu.vue'

    export default {
        components: { socialmenu }
    }
</script>

<script setup>
    useHead({
        title: 'Here2Mingle Newsfeed',
    })
</script>