<template>
  <div>
    
    <div class="container tutor-head">
      <div class="row">
        <router-link class="col-2" v-bind:to="{ name: 'home' }">
          <img  class="back-nav" src="../assets/LChevIcon.svg" alt="">
        </router-link>
        <div class="col-8">
          <img class="edu-img" src="../assets/eduIcon.svg" alt="">
          <h1 class="tutors-h1">tutors</h1>
        </div>
        <div class="col-2">
        </div>
      </div>
    </div>
  
    <div class="container" >
      <div class="row">
      <router-link class="col-6 detail-link" v-for="tutor in $store.state.tutors" v-bind:key="tutor.id" v-bind:to="{ name: 'tutor-details', params: {id: tutor.id}}">
        <tutor-card  v-bind:tutor="tutor" />
      </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import TutorCard from '@/components/TutorCard.vue';

export default {
  name: "tutors",
  components: {
    TutorCard
  }
}
</script>

<style>
.back-nav {
  background-color: #EAEAEA;
  padding: 10px;
  border-radius: 50px;
  width: 40px;
  height: 40px;

}
.tutor-head {
  padding-top: 30px;
  padding-bottom: 30px;
  text-decoration: none;
}

.edu-img {
  padding-bottom: 10px;
}

.tutors-h1 {
  font-weight: 600;
  color: #499FF6;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detail-link {
  text-decoration: none;
}


</style>