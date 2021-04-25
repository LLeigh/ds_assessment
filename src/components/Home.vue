<template>
    <main id="background">
        <div class="row search-nav">
            <div class="input-group col">
                <input class="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Search">
                <span class="input-group-append">
                    <button class="btn rounded-pill border-0 ml-n5 srch-btn" type="button">
                        <img class="srch-i" src="../assets/searchIcon.svg">
                    </button>
                </span>
            </div>
            <div class="col-2 menu-i">
                <img class="menu-icon" src="../assets/menuIcon.svg" alt="">     
            </div>
        </div>

        <div class="space">
        </div>

        <div id="education">

            <img class="edu-i" src="../assets/eduIcon.svg" alt="">

            <h2 class="edu-head">Education</h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <router-link v-bind:to="{ name: 'tutors' }"><img class="opt-i" src="../assets/tutorIcon.svg" alt=""></router-link>
                        <p class="opt-p">Find a Tutor</p>
                    </div>
                    <div class="col">
                        <img class="opt-i" src="../assets/askIcon.svg" alt="">
                        <p class="opt-p">Ask a Question</p>
                    </div>
                    <div class="col">
                        <img class="opt-i" src="../assets/eventIcon.svg" alt="">
                        <p class="opt-p">Events</p>
                    </div>
                </div>
             </div>
            
        </div>

   
    </main>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style>
#background {
    background: url('../assets/bg.jpg') no-repeat, center, center, fixed;
    width: 100%;
    height: 100vh;
    background-size: cover;
}

.search-nav {
    padding: 15px 15px;
}

.srch-btn {
    margin-left: -50px;

}

.srch-i {
    padding-top: 5px;
}

.menu-i {
    background-color: #EAEAEA;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    padding-top: 10px;
    border-radius: 50px;
    width: 50px;
    height: 50px;
}

.space {
    height: 600px;
}

.edu-head {
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 20px;
    letter-spacing: 1px;
}

#education {
    background-color: #499FF6;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    bottom: 0;
    width: 100%;
    padding-bottom: 30px;
}

.edu-i {
    background-color: #FFFFFF;
    padding: 10px;
    padding-top: 0.25px;
    padding-bottom:0.25px;
    border-radius: 50%;
    margin-top: -35px;
    width: 80px;
    height: 80px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
}

.opt-i {
    width: 40px;
    height: 40px;
}

.opt-p {
    padding-top: 10px;
    color:#FFFFFF;
    font-weight: lighter;
    font-size: 16px;
    opacity: 0.7;
}

::placeholder{
    color: #707070;
    font-weight: lighter;
    font-size: 18px;
    padding-left: 10px;
}

</style>