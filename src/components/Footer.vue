<template>
  <div class="footer">
    <div class="social">
        <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <ul class="list">
        <li>
            <a href="#">FAQ</a>
        </li>
        <li>
            <a href="#">Services</a>
        </li>
        <li>
            <a href="#">About Me</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
    </ul>
  
  </div>
</template>

<script>
export default {
name:"FooterView"
}
</script>

<style scoped>
:root{
  --bg-color:#080808;
  --second-bg-color:#131313;
  --text-color:white;
  --main-color:#00ffee
  }
  .footer{
    position: relative;
    bottom:0;
    padding: 40px 0;
    background-color: var(--second-bg-color);
  }
  .footer .social{
    text-align: center;
    padding-bottom:25px;
    color:var(--main-color);

  }
  .footer .social a{
 text-decoration: none;
 font-size:25px;
 color:var(--main-color);
 border:2px solid var(--main-color);
 width:42px;
 height: 42px;
 line-height: 42px;
 display: inline-block;
 text-align: center;
 border-radius: 50%;
 margin:0 10px;
 transition: 0.3s ease-in-out;
  }
  .footer .social a:hover{
    transform: scale(1.2)translateY(-10px);
    background-color: var(--main-color);
    color: black;
    box-shadow: 0 0 25px var(--main-color);
  }
  .footer ul{
    margin-top:0;
    padding:0;
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 0;
    text-align: center;
    

  }
  .footer ul li a{
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
    color: white;
  }
  .footer ul li a:hover{
    border-bottom:3px solid var(--main-color);

  }
  .footer ul li{
    display: inline-block;
    padding:0 15px;
  }
  @media(max-width:991px){
   .footer{
    padding: 2rem 3%;
   }
  }
</style>