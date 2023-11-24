<script>
export default {
    name: 'LoadingProjectCard',

}
</script>


<template>
    <div class="mb-4">
        <div class="p-4 shadow placeholder-glow">
            <div class="position-relative placeholder">
                <div class="eb_placeholder-image placeholder"></div>
            </div>
            <span class="my-3 placeholder col-8"></span>
            <div class="mb-3 w-100 d-flex justify-content-between ">
                <span class="placeholder col-8"></span>
                <span class="placeholder col-3"></span>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.eb_placeholder-image {
    width: 19.5vw;
    height: 23vh;
    //aspect-ratio: 1.5 / 1;
}
</style>