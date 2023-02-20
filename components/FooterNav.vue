<template>
    <v-footer border>
        <v-row justify="center" no-gutters>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/">
                Home
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/About/">
                About Here2Mingle
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/Features/tips">
                Tips and Guides
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/Blog/">
                Our Blog
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/Legal/terms">
                Terms and Conditions
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/Legal/policies">
                Privacy Policies
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/Legal/returns">
                Return Policy
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong><a href="https://www.here2mingle.com">The Here2Mingle Company</a></strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {}
</script>