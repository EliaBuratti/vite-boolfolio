<script>
export default {
    name: 'NotFound',
}
</script>

<template>
    <div class="container my-5">
        <div class="row justify-content-center align-items-center">
            <div class="col text-center h1">
                <strong>Page Not Found 🤷🏼</strong>
                <div class="col-12 text-center my-5 eb_fill">
                    <router-link to="/" class="display-5 text-black text-decoration-none me-2" aria-current="page">
                        <span class="eb_route-text">Go To Homepage</span>
                    </router-link>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="col">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64"
                    xml:space="preserve">
                    <path
                        d="M23.792 31.286h-.56V24.56a1 1 0 0 0-1.813-.584l-5.55 7.728a1 1 0 0 0 .812 1.583h4.55v2.23a1 1 0 1 0 2 0v-2.23h.561a1 1 0 1 0 0-2zm-2.56 0H18.63l2.601-3.621v3.621z" />
                    <path
                        d="M60.249 44.361V15.113a4.934 4.934 0 0 0-4.929-4.928H8.677a4.934 4.934 0 0 0-4.929 4.928v29.249C2.203 44.559 1 45.868 1 47.467v3.203a3.15 3.15 0 0 0 3.146 3.145h55.709A3.15 3.15 0 0 0 63 50.67v-3.203c0-1.6-1.204-2.91-2.751-3.106zM8.677 12.185H55.32a2.932 2.932 0 0 1 2.93 2.928v29.208H55.83V16a1 1 0 0 0-1-1H9.166a1 1 0 0 0-1 1v28.322H5.748V15.113a2.932 2.932 0 0 1 2.929-2.928zm1.489 32.136V17h43.665v27.322H10.166zm29.564 2a1.693 1.693 0 0 1-1.678 1.511H25.944a1.692 1.692 0 0 1-1.677-1.51H39.73zM61 50.67c0 .632-.514 1.145-1.145 1.145H4.145A1.147 1.147 0 0 1 3 50.67v-3.203c0-.632.514-1.146 1.145-1.146h18.122c.099 1.95 1.703 3.511 3.677 3.511h12.108c1.975 0 3.58-1.56 3.678-3.51h18.125c.631 0 1.145.513 1.145 1.145v3.203z" />
                    <path
                        d="M31.998 23.559c-2.589 0-4.617 2.845-4.617 6.478 0 3.633 2.028 6.48 4.617 6.48s4.617-2.847 4.617-6.48c0-3.633-2.028-6.478-4.617-6.478zm0 10.958c-1.395 0-2.617-2.094-2.617-4.48 0-2.386 1.223-4.478 2.617-4.478s2.617 2.092 2.617 4.478c0 2.386-1.222 4.48-2.617 4.48zM47.343 31.286h-.56V24.56a1 1 0 0 0-1.813-.584l-5.554 7.728a1 1 0 0 0 .813 1.583h4.553v2.23a1 1 0 1 0 2 0v-2.23h.56a1 1 0 1 0 0-2zm-2.56 0h-2.604l2.603-3.623v3.623zM49.167 47.954a1 1 0 0 0-.355 1.368l.01.017a.985.985 0 0 0 .852.487 1.004 1.004 0 0 0 .862-1.517 1 1 0 0 0-1.369-.355zM52.791 47.954a1 1 0 0 0-.355 1.368l.01.017a.985.985 0 0 0 .852.487 1.004 1.004 0 0 0 .862-1.517 1 1 0 0 0-1.369-.355zM56.375 47.976a1 1 0 0 0-.297 1.383l.01.017c.191.293.507.45.83.45a1.004 1.004 0 0 0 .84-1.554 1 1 0 0 0-1.383-.296z" />
                </svg>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;
</style>