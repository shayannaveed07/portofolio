<template>
  <div id="app">
    <Portfolio></Portfolio>
    <HomeComponentVue ></HomeComponentVue>
    <EducationVue></EducationVue>
    <ServicesVue></ServicesVue>
    <ContactVue></ContactVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'
import HomeComponentVue from './components/HomeComponent.vue'
import EducationVue from './components/Education.vue'
import ServicesVue from "./components/Services.vue"
import ContactVue from './components/Contact.vue'
import FooterVue from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Portfolio,
    HomeComponentVue,
    EducationVue,
    ServicesVue,
    ContactVue,
    FooterVue
  },
  
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  border:none;
  outline: none;
  scroll-behavior: smooth;
  font-family: "Poppins",sans-serif;
}
:root{
  --bg-color:#080808;
  --second-bg-color:#131313;
  --text-color:white;
  --main-color:#00ffee
  }
  html{
    font-size: 60%;
    overflow-x: hidden;
    background: var(--bg-color);
    color: var(--text-color)
  }
  @media(max-width:1285px){
    html{
      font: size 55%;
    }
  }
</style>
