<template>
  <div class="services" id="services">
    <h2 class="heading1">Services</h2>
    <div class="services-container">
      <div class="service-box">
        <div class="service-info">
          <h4>Ui Designer</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            beatae quisquam ratione excepturi nesciunt quam porro voluptates,
            error odit magni blanditiis facilis, enim deserunt dignissimos
            tempora. Suscipit voluptatem cumque doloremque?
          </p>
        </div>
      </div>
      <div class="service-box">
        <div class="service-info">
          <h4>FrontEnd Developer</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            beatae quisquam ratione excepturi nesciunt quam porro voluptates,
            error odit magni blanditiis facilis, enim deserunt dignissimos
            tempora. Suscipit voluptatem cumque doloremque?
          </p>
        </div>
      </div>
      <div class="service-box">
        <div class="service-info">
          <h4>Vue Developer</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            beatae quisquam ratione excepturi nesciunt quam porro voluptates,
            error odit magni blanditiis facilis, enim deserunt dignissimos
            tempora. Suscipit voluptatem cumque doloremque?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesView",
};
</script>

<style scoped>
:root {
  --bg-color: #080808;
  --second-bg-color: #131313;
  --text-color: white;
  --main-color: #00ffee;
}
.services{
    background:var(--bg-color);
    color: black;
}
.servicex h2{
    margin-bottom: 5rem;
    color:white;

}
.services-container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    gap:2.5rem;
    padding: 0 5rem;
}
.service-box {
background-color: var(--main-color);
height:300px;
border-radius: 3rem;
border: 5px solid transparent;
cursor:pointer;
transition: 0.4s ease-in-out;

}
.service-box:hover{
    background: black;
    color: white;
    /* border:5px solid var(--main-color); */
    transform: scale(1.03);
}
.service-box .service-info{
    display: flex;
    flex-direction: column;
    text-align: left;
    max-height: 200px;
    justify-content: left;
    align-items: baseline;
    padding:5rem;
}
.service-info h4{
    font-size:3rem;
    font-weight:800;
    line-height:1;

}
.service-info p{
font-size:1.6rem;
font-weight:600;
max-height:100px;
line-height: 1.7;
margin: auto;
}
.heading1{
    color:white;
    font-size: 8rem;
    text-align: center;
    padding: 5rem 0;
}
@media(max-width: 1285px){
.services-container{
    padding-bottom: 7rem;
    grid-template-columns: repeat(2,1fr);
    margin: 0 5rem;
}
}
@media(max-width:991px){
    .services{
        padding:10rem 3% 2rem;
        padding-bottom: 7rem;
    }
}
@media(max-width:895px){
  .services h2{
    margin-bottom: 3rem;

  }
  .services-container{
    grid-template-columns: repeat(1,1fr);
  }
}
</style>
