<template>
    <div>
      <friendmenu />
      <section data-bs-version="5.1" class="features2 cid-twlut6z5K7" id="features2-5">
    
    

    
    <div class="container align-center">
        <h2 class="pb-5 mbr-fonts-style mbr-bold display-2">
            Your Friends List</h2>
    </div>

    <div class="container">
        <div class="row justify-content-center">

            <div class="card col-12 col-md-6 col-lg-3">
                <div class="card-img">
                    <img src="../../../assets/images/face1.jpg" alt="">
                </div>
                <div class="card-box align-center">
                    <h4 class="card-title mbr-fonts-style mbr-semibold display-5">
                        Joseph Kellen
                    </h4>
                    
                    <p class="e-mail mbr-fonts-style display-7">
                        example@mail.com
                    </p>
                    
                    <h3 class="mbr-text mbr-bold mbr-fonts-style specialty display-7">
                        ATTORNEY
                    </h3>
                </div>
            </div>

            <div class="card col-12 col-md-6 align-center col-lg-3">
                <div class="card-img">
                    <img src="../../../assets/images/face2.jpg" alt="">
                </div>
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mbr-semibold display-5">
                        Amanda Adams
                    </h4>
                    
                    <p class="e-mail mbr-fonts-style display-7">
                        example@mail.com
                    </p>
                    
                    <h3 class="mbr-text mbr-bold mbr-fonts-style specialty display-7">
                        ATTORNEY
                    </h3>
                </div>
            </div>

            <div class="card col-12 col-md-6 align-center col-lg-3">
                <div class="card-img">
                    <img src="../../../assets/images/face3.jpg" alt="">
                </div>
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mbr-semibold display-5">
                        Nick Dimon
                    </h4>
                    
                    <p class="e-mail mbr-fonts-style display-7">
                        example@mail.com
                    </p>
                    
                    <h3 class="mbr-text mbr-fonts-style mbr-bold specialty display-7">
                        ATTORNEY
                    </h3>
                </div>
            </div>

            <div class="card col-12 col-md-6 align-center col-lg-3">
                <div class="card-img ">
                    <img src="../../../assets/images/face4.jpg" alt="">
                </div>
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mbr-semibold display-5">
                        Helen Harrison
                    </h4>
                    
                    <p class="e-mail mbr-fonts-style display-7">
                        example@mail.com
                    </p>
                    
                    <h3 class="mbr-text mbr-fonts-style mbr-bold specialty display-7">
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
    import friendmenu from '../../../components/Menus/friendmenu.vue'

    export default {
        components: { friendmenu }
    }
</script>

<script setup>
    useHead({
        title: 'Friendlist',
    })
</script>