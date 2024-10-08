<template>
  <div class="portfolio">
    <header class="header nav-links">
        <div></div>
        <a href="#home" class="logo">M Shayan 
            <span>Naveed</span>
        </a>
        <i class="fa-solid fa-bars" id="menu-icon" :menu="menu" @click="menubar"></i>
            <nav class="navbar" id="navbar">
                <a href="#home" class="active">Home</a>
                <a href="#education" >Education</a>
                <a href="#services" >Services</a>
                <a href="#contact" >Contact</a>
                
            </nav>
    </header>
  </div>
</template>

<script>
export default {
    name: 'PortfolioView',
    data(){
      return{
          image:"https://www.simpleimageresizer.com/_uploads/photos/8046b1ee/slack.jpg",
          menu: "",
        }
    },
  methods:{
    menubar(){
     
        document.querySelector('#menu-icon').classList.toggle('bx-x')
        document.querySelector(".navbar").classList.toggle('active')
    }
  }
};
</script>

<style scoped>
:root{
  --bg-color:#080808;
  --second-bg-color:#131313;
  --text-color:white;
  --main-color:#00ffee
  }
.nav-links a{
    text-decoration: none;
    
}
.header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    padding:4rem 12% 4rem;
    background-color: rgb(0, 0,0, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
}
 .logo{
    font-size: 3rem;
    color:var(--text-color);
    font-weight: 800;
    cursor:pointer;
    transition: 0.3s ease;
margin-right:35rem
    }
.logo:hover{
    transform: scale(1.1);
}
.logo span{
    text-shadow: 0 0 25px var(--main-color);
    color: var(--main-color);
}
.navbar a{
    font-size: 1.8rem;
    color: var(--text-color);
    margin-left:4rem;
    font-weight: 500;
    transition: 0.3s ease;
    border-bottom: 3px solid transparent    ;
}
.navbar a:hover,
.navbar a.active{
color:var(--main-color);
border-bottom: 3px solid var(--main-color);
}
#menu-icon{
    font-size: 3rem;
    color: var(--main-color);
    cursor:pointer;
    display: none;
}
@media(max-width:991px){
    .header{
        padding:2rem 3%;

    }
    .portfolio{
        padding:10rem 3% 2rem
    }
}
@media(max-width:895px){
    #menu-icon{
        display: block;
    }
    .navbar{
        position: absolute;
        top:100%;
        right:0;
        width:50%;
        padding:1rem 3%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(20px);
        border-bottom-left-radius: 2rem;
        border-left:2px solid var(--main-color);
        border-bottom: 2px solid var(--main-color);
        display: none;
    }
    .navbar .active{
        display: block;
    }
    .navbar a{
        display: block;
        font-size:2rem;
        margin:3rem 0;
        color:white;

    }
}
</style>
