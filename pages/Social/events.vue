<template>
    <div>
        <featuremenu />
        <section data-bs-version="5.1" class="features19 cid-twlx5hxo2C" id="features19-d">
            <div class="container-fluid">
                <h2 class="mbr-section-title align-left mbr-fonts-style display-2">
                    Events</h2>
                <div class="underline align-left pb-3">
                    <div class="line"></div>
                </div>

                <a href="">
                    <div class="row justify-content-center align-items-start pt-5">
                        <div class="card px-3 py-4 col-12 col-md-6 col-lg-4">
                            <div class="card-wrapper flip-card">
                                <div class="card-img">
                                    <img src="../../assets/images/01.jpg" alt="">
                                    <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-7">
                                        Save 50%
                                    </div>
                                    <div class="img-name mbr-fonts-style mbr-bold mbr-white display-2">
                                        Outwear
                                    </div>
                                </div>
                                <div class="card-box">
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
    import featuremenu from '../../components/Menus/featuremenu.vue'

    export default {
        components: {
            featuremenu
        }
    }
</script>

<script setup>
    useHead({
        title: 'Here2Mingle Events',
    })
</script>