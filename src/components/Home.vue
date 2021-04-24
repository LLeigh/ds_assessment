<template>
    <main>
        <div class="row search-nav">
            <div class="input-group col">
                <input class="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Search">
                <span class="input-group-append">
                    <button class="btn rounded-pill border-0 ml-n5" type="button">
                        <img src="../assets/searchIcon.svg">
                    </button>
                </span>
            </div>
            <div class="col-2">
                <img  class="menu-icon" src="../assets/menuIcon.svg" alt="">     
            </div>
        </div>

        <div class="space">
        </div>

        <div id="education">
            <div>
                <img class="edu-i" src="../assets/eduIcon.svg" alt="">
            </div>

            <h1 class="edu-h1">EDUCATION</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <router-link v-bind:to="{ name: 'tutors' }"><img src="../assets/tutorIcon.svg" alt=""></router-link>
                        <p class="opt-p">Find a Tutor</p>
                    </div>
                    <div class="col">
                        <img src="../assets/askIcon.svg" alt="">
                        <p class="opt-p">Ask a Question</p>
                    </div>
                    <div class="col">
                        <img src="../assets/eventIcon.svg" alt="">
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
.search-nav {
    padding: 15px 15px;
}

.btn {
    margin-left: -50px;
}

.srch-btn {
    background-color: #FFFFFF;
    margin-left: -50px
}
.edu-i {
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 50px;
    margin: -50px;
    width: 90px;
    height: 90px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

}

.menu-icon {
    background-color: #EAEAEA;
    padding: 10px;
    border-radius: 20px;
    width: 50px;
    height: 50px;

}

.space {
    height: 600px;
}

main {
    background-image: url('../assets/bg.jpg');
    width: 100%;
    background-size: cover;


}

.edu-h1 {
    color: #FFFFFF;
    padding: 50px;
}

#education {
    background-color: #499FF6;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    bottom: 0;
    width: 100%;
    padding-bottom: 60px;
}

.opt-p {
    padding-top: 10px;
    color:#FFFFFF;
    font-weight: 100;
}

</style>