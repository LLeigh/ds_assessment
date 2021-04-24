import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tutors: [
      {
        id: 1,
        fname: "Tyler",
        lname: "Nix",
        grades: "8th - 12th",
        subjects: "Math, Science",
        verified: true,
        about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
        resume: ["2010 Penn State - Math Major", "2014 University of Texas - Doctorate of Math", "2018 - McDonald’s - Lead Fry Cook"],
        certifications: ["Child Safety Check - PA - Passed", "COVID - NEGATIVE"],
      },
      {
        id: 6,
        fname: "Jerrod",
        lname: "Bluk",
        grades: "8th - 12th",
        subjects: "Math, Science",
        verified: true,
        about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
        resume: ["2010 Penn State - Math Major", "2014 University of Texas - Doctorate of Math", "2018 - McDonald’s - Lead Fry Cook"],
        certifications: ["Child Safety Check - PA - Passed", "COVID - NEGATIVE"],
      },
      {
        id: 3,
        fname: "Tina",
        lname: "Grey",
        grades: "8th - 12th",
        subjects: "Math, Science",
        verified: true,
        about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
        resume: ["2010 Penn State - Math Major", "2014 University of Texas - Doctorate of Math", "2018 - McDonald’s - Lead Fry Cook"],
        certifications: ["Child Safety Check - PA - Passed", "COVID - NEGATIVE"],
      },
      {
        id: 2,
        fname: "Stacy",
        lname: "Smith",
        grades: "8th - 12th",
        subjects: "Math, Science",
        verified: true,
        about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
        resume: ["2010 Penn State - Math Major", "2014 University of Texas - Doctorate of Math", "2018 - McDonald’s - Lead Fry Cook"],
        certifications: ["Child Safety Check - PA - Passed", "COVID - NEGATIVE"],
      },
      {
        id: 4,
        fname: "Tommy",
        lname: "Yang",
        grades: "8th - 12th",
        subjects: "English",
        verified: true,
        about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
        resume: ["2010 Penn State - Math Major", "2014 University of Texas - Doctorate of Math", "2018 - McDonald’s - Lead Fry Cook"],
        certifications: ["Child Safety Check - PA - Passed", "COVID - NEGATIVE"],
      },
      {
        id: 5,
        fname: "Alicia",
        lname: "Keys",
        grades: "8th - 12th",
        subjects: "Math, Science",
        verified: true,
        about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
        resume: ["2010 Penn State - Math Major", "2014 University of Texas - Doctorate of Math", "2018 - McDonald’s - Lead Fry Cook"],
        certifications: ["Child Safety Check - PA - Passed", "COVID - NEGATIVE"],
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  
});
