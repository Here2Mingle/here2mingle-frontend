<template>
    <div>
        <socialmenu />
        <section data-bs-version="5.1" class="features6 cid-twlwP6GRz6" id="features6-c">
            <div class="container align-center">
                <h2 class="pb-5 mbr-fonts-style mbr-bold display-2">
                    Here2Mingle Live</h2>
            </div>

            <div class="container">
                <div class="row justify-content-center">

                    <div class="card col-12 col-md-6 col-lg-3">
                        <div class="card-img">
                            <img src="../../assets/images/face1.jpg" alt="">
                        </div>
                        <div class="card-box align-center">
                            <h4 class="card-title mbr-fonts-style mbr-semibold display-5">
                                Joseph Kellen
                            </h4>
                            <h3 class="mbr-text mbr-bold mbr-fonts-style specialty display-7">
                                ATTORNEY
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import socialmenu from '../../components/Menus/socialmenu.vue'

    export default {
        components: {
            socialmenu
        }
    }
</script>


<script setup>
    useHead({
        title: 'Here2Mingle Live',
    })
</script>