<template>
  <div>
      <div class="tutor-tile">
        <img class="vericon" src="../assets/verifiedIcon.svg" alt="">
        <img v-bind:src="require('../assets/u' + tutor.id + '.png')" alt="tutor-photo">    
        <h2 class="tutor-name">{{tutor.fname}} {{tutor.lname}}</h2>  
        <p class="tutor-info">{{tutor.grades}}</p>  
        <p class="tutor-info">{{tutor.subjects}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'tutor-card',
    props: {
        tutor: Object,
    }
}
</script>

<style>
.vericon {
    background-color:rgb(255, 250, 250, 75%);
    position: relative;
    border-top-right-radius: 40% ;
    margin-bottom: -87px;
    margin-right: -40px;
    padding: 10px;
    width: 40px;
}

.tutor-name {
    color: #499FF6;
    font-size: 1rem;
    font-weight: 600;
    padding-top: 5px;
    margin-bottom: -2px;
}

.tutor-info {
    color: #707070;
    font-size: .5rem;
    margin: 1px;
}

.tutor-tile {
    padding-bottom: 25px;
}

</style>