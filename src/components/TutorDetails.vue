<template>
    <div>
        <div class="container tutor-head">
            <div class="row">
                <router-link class="col-2" v-bind:to="{ name: 'tutors' }">
                    <img  class="back-nav" src="../assets/LChevIcon.svg" alt="">
                </router-link>
            <div class="col-8">
                <img src="../assets/eduIcon.svg" alt="">
                <h3 class="t-title"> {{tutor.fname}} {{tutor.lname}} </h3>
            </div>
            <div class="col-2">

            </div>
        </div>
      </div>

      <div>
        <div class="tutor-photo">
            <img class="vericon vericon-detail" src="../assets/verifiedIcon.svg" alt="">
            <img class="img-detail" v-bind:src="require('../assets/u' + tutor.id + '.png')" alt="">
        </div>  

        <div class="tutor-text">
            <div class="detail-text-1">
                <p> {{tutor.grades }} </p>
                <p class="detail-text-1"> {{tutor.subjects }} </p>
            </div>

            <div class="about">
            <h5>About {{tutor.fname}} </h5>
                <p class="about-text"> {{tutor.about}} </p>
            </div>

            <div>
                <h5>Resume/Work Experience</h5>
                    <ul>
                        <li v-for="(exp, index) in tutor.resume" v-bind:key="index" class="detail-text">
                        <span>•</span>{{ exp }}
                        </li>
                    </ul>
            </div>

            <div class="certs">
                <h5>Certifications</h5>
                    <ul>
                        <li v-for="(certification, index) in tutor.certifications" v-bind:key="index" class="detail-text">
                        <span>•</span> {{ certification }}
                        </li>
                    </ul>
            </div>


        </div>
        

        </div>
        <div class="container">
            <div class="row">
                <div class="col-1"></div>
                <button v-on:click="logGooglyMoogly" class="col-10 googly-btn rounded-pill" type="button">contact {{tutor.fname}} </button>
                <div class="col-1"></div>
            </div>
        </div>

    </div>
  
</template>

<script>

export default {
    props: ['tutor'],

    methods: {
        logGooglyMoogly() {
            console.log("Great Googly Moogly");
        }
    }
}
</script>

<style>

.t-title {
    color: #499FF6;
    text-transform: uppercase;
    font-weight: 600;
    padding-top: 10px;
    letter-spacing: 1px;
}

.img-detail {
    height: 200px;   
}

.tutor-photo {
    padding-bottom: 20px;
}

.vericon-detail {
    margin-bottom: -145px;
    margin-right: -55px;
    width: 3.5rem;
    height: 3.5rem;
}

h5 {
     color: #499FF6; 
     font-weight: 600;
}

.detail-text-1 {
    font-size: 18px;
    font-weight: 300;
    line-height: 0.5rem;
    padding-bottom: 10px;
}

.tutor-text {
    color: #707070;
    font-size: 14px;
    font-weight: lighter;
}

.about-text {
    margin-left: 40px;
    margin-right: 40px;
    padding-bottom: 10px;
}

ul {
    list-style-position: inside;
    list-style-type: none;
    padding-bottom: 10px;
    margin-left: 15px;
    margin-right: 45px;
    line-height: 1.25rem;
}

span {
    font-size: 16px;
    letter-spacing: 3px;
}

.googly-btn {
    color: #FFFFFF;
    background-color:  #499FF6;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 30px;
    padding: 20px;
    border: none;  
}

</style>