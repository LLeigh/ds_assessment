<template>
    <div>
        <tutor-details v-bind:tutor="theTutor"/>
    </div> 
</template>

<script>
import TutorDetails from '../components/TutorDetails.vue';

export default {
    components: {
        TutorDetails,

    },
    computed: {
        theTutor() {
            return this.$store.state.tutors.find(t => t.id == this.$route.params.id);     
        }
    }
}
</script>

<style>

</style>