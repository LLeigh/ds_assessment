<template>
    <div>

        <img src="../assets/eduIcon.svg" alt="">
        <h3 class="t-title"> {{tutor.fname}} {{tutor.lname}} </h3>
        <img v-bind:src="require('../assets/u' + tutor.id + '.png')" alt="">
        <h5>About {{tutor.fname}} </h5>
            <p> {{tutor.about}} </p>
        <h5>Resume/Work Experience</h5>
            <ul>
                <li></li>
            </ul>
        <h5>Certifications</h5>
            <ul>
                <li></li>
            </ul>
    </div>
  
</template>

<script>

export default {
    props: ['tutor'],

}
</script>

<style>
.t-title {
    color: #499FF6;
    text-transform: uppercase;
    font-weight: 600;
}
h5 {
     color: #499FF6;   
}


</style>