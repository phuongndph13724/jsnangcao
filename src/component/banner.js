import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const Banner = {
    render() {
        return /* html */ `
        <!-- Slider main container -->
            <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg" alt=""></div>
            <div class="swiper-slide"><img src="http://theme.hstatic.net/1000331599/1000422651/14/collection_banner.jpg?v=102" alt=""></div>
            <div class="swiper-slide"><img src="https://bizweb.dktcdn.net/100/425/514/themes/818105/assets/logo.png?1626840500507" alt=""></div>
            <div class="swiper-slide"><img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://lambanner.com/wp-content/uploads/2017/09/lambanner-thiet-ke-banner-thoi-trang1-1130x570.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg" alt=""></div>

            ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
            </div>
        
        
        `
    },
    afterRender() {
        var swiper = new Swiper(".swiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
};
export default Banner;