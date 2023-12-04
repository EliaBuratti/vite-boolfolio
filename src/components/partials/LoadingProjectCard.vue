<script>
export default {
    name: 'LoadingProjectCard',

}
</script>


<template>
    <div class="mb-4 p-5">
        <div class="p-4 eb_shadow placeholder-glow">
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
    height: 22vh;
    //aspect-ratio: 1.5 / 1;
}

.eb_shadow {
    box-shadow: 20px 20px 10px rgb(209, 208, 208), 0 0 10px rgb(107, 106, 106);
}
</style>