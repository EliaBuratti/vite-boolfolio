export default {
    getImagePath(img) {
        //console.log(new URL(`../assets/images/${img}`, import.meta.url).href);
        return new URL(`../assets/images/${img}`, import.meta.url).href;
    }
}