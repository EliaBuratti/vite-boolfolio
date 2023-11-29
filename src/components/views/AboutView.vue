<script>
export default {
    name: 'AboutView',


    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container-fluid p-0">
        <div class="p-2 p-md-5 mb-4 bg-light">
            <div class="container py-5">
                <h1 class="display-5 fw-bold"><span class="eb_active">About me</span></h1>
                <p class="col-md fs-4">I am a curious, organized person who is attentive to everything around me and
                    passionate about technology. I have excellent practical skills with a tendency towards stimulating
                    and
                    non-monotonous work, a propensity for problem-solving, and a strong desire to learn and meet new
                    people.
                    My
                    ideal job would be project or objective management and coordination.</p>
                <router-link to="/contact" class="btn btn-dark rounded-0 btn-lg" aria-current="page">Contact
                    Me</router-link>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row">

                <!-- my profile -->
                <div class="col-12 mt-5 mt-md-4 d-flex flex-wrap">
                    <div class="col-12 col-md-8">
                        <h3 class="my-3"><span class="eb_active">My Profile</span></h3>
                        <p>
                            I'm 27 years old and live in Cesena. I recently completed a course as a
                            <strong>Full Stack Web Developer</strong>
                            on
                            <a href="https://boolean.careers/corso/full-stack-web-development" target="_blank"
                                rel="noopener noreferrer" class=" text-black"><strong>Boolean</strong></a> and am looking
                            for opportunities to apply and expand my web development
                            skills. If your company needs a motivated individual who is ready to learn, please do not
                            hesitate
                            to contact me.
                        </p>
                    </div>
                    <div class="col-12 col-md-4 text-center text-md-end">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45804.887473302755!2d12.221264152314461!3d44.14925553373514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca4d41ed493c1%3A0xbee0ab1075577a47!2sCesena%20FC!5e0!3m2!1sit!2sit!4v1700737064010!5m2!1sit!2sit"
                            width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <!-- My Personal Competitions -->
                <div class="col-12 mt-5 mt-md-4">
                    <h3 class="my-3"><span class="eb_active">My Personal Competitions</span></h3>
                    <p>
                        As a <strong>problem-solver</strong>, I approach challenges with logic and strategy. My ability to
                        <strong>listen</strong> helps me
                        understand needs and translate them into effective solutions. My <strong>creativity</strong> fuels
                        my search for
                        innovative and unconventional solutions. I <strong>assertively</strong> make decisions and take
                        decisive actions. My
                        <strong>empathetic</strong> nature allows me to work effectively within teams and build positive
                        relationships with
                        colleagues. Lastly, <strong>my time management</strong> skills ensure that I manage my time
                        effectively and meet
                        deadlines
                    </p>
                </div>

                <!-- experience -->
                <div class="col-12 mt-5 mt-md-4">
                    <h3><span class="eb_active">My Experience</span></h3>

                    <div class="my-3 border-2 border-bottom">

                        <h5 class="mb-1">AUTOMATED REFRIGERATOR CELL OPERATOR EDUCATION</h5>
                        <div class="text-muted fs-6"><strong>Orogel</strong> Jun-2019 / Jun-2023 </div>
                        <p>
                            Supervisor control, automated cell management with stacker cranes, with small maintenance
                            interventions.
                            Excellent knowledge of the On.Plant / WMS management system by Onit
                        </p>

                    </div>

                    <div class="mb-3 border-2 border-bottom">
                        <h5 class="mb-1">BACK OFFICE AND WAREHOUSE WORKER</h5>
                        <div class="text-muted fs-6"><strong>B & B MECCANICA</strong> Jun-2018 / Jun-2019</div>
                        <p>
                            Warehouse stock management,
                            storage and control of goods entry and exit. Contact with suppliers for procurement of goods.
                            Online
                            listing management via Joomla (eBay plus proprietary site) and telephone or email customer
                            service
                            pre and post sale.
                        </p>
                    </div>

                    <div class="mb-3">
                        <h5 class="mb-1">HARDWARE TECHNICIAN</h5>
                        <div class="text-muted fs-6"><strong>B & B TECHNOLOGIES</strong> Nov-2015 / May-2018</div>
                        <p>
                            Computer assembly, first installation and configuration based on needs. Formatting and data
                            recovery.
                        </p>
                    </div>


                </div>

                <!-- my educations -->
                <div class="col-12 mt-5 mt-md-4">
                    <h3><span class="eb_active">My Education</span></h3>

                    <div class="my-3 border-2 border-bottom">

                        <h5 class="mb-1">BOOLEAN CAREERS - CORSO DA FULL STACK WEB DEVELOPER</h5>
                        <div class="text-muted fs-6"><strong>Boolean</strong> Jun-2023 / Dec-2023 (on course)</div>
                        <p>
                            During the intensive course (lasting 700 hours) in Full-Stack Web Development at Boolean, I had
                            the opportunity to fully immerse myself in learning web technologies. This experience allowed me
                            to closely examine the architectures of large platforms, reconstructing them from both the
                            back-end and front-end. In addition to the skills reported, composer, npm, mamp, phpmyadmin, and
                            Git are also included.
                        </p>

                    </div>

                    <div class="mb-3 border-2 border-bottom">
                        <h5 class="mb-1">IPSIA U. BALDO COMANDINI DI CESENA</h5>
                        <div class="text-muted fs-6">
                            <strong>Technical and Professional Institute Diploma</strong>
                            Sep-2010 / Jul-2015
                        </div>
                        <p>
                            Repair and maintenance technology of electrical/electronic and mechanical devices
                        </p>
                    </div>

                    <div class="mb-3">
                        <h5 class="mb-1">IPSIA U. BALDO COMANDINI DI CESENA</h5>
                        <div class="text-muted fs-6"><strong>Electronic qualification</strong>sept-2010 / jug-2023</div>
                        <p>
                            Electrical/Electronic Design and Electrical/Electronic CAD/CADD Design
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>