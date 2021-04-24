<template>
  <div>
    
      <router-link v-bind:to="{ name: 'home' }">
        <img  src="../assets/LChevIcon.svg" alt="">
      </router-link>

    <div class="tutor-head">
      <img src="../assets/eduIcon.svg" alt="">
      <h1 class="tutors-h1">tutors</h1>
  </div>
  <div class="container" >
    <div class="row">
    <router-link class="col-6" v-for="tutor in $store.state.tutors" v-bind:key="tutor.id" v-bind:to="{ name: 'tutor-details', params: {id: tutor.id}}">

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
.tutor-head {
  padding-top: 30px;
  padding-bottom: 40px;
}
.tutors-h1 {
  font-weight: 600;
  color: #499FF6;
  font-size: 20px;
  /* line-height: 2; */
  text-transform: uppercase;
}


</style>