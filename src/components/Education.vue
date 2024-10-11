<template>
  <div class="education" id="education">
    <h2 class="heading text-white">Work Experience</h2>
    <div class="timeline-items">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
          <div class="timeline-date">2020</div>
          <div class="timeline-content">
            <h3>Course of Videoediting</h3>
            <p>
              I have a course of Video editing i have a good grid with softwares like blender
              after effects
            </p>
          </div>
        
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
          <div class="timeline-date">2022</div>
          <div class="timeline-content">
            <h3>Internship in Nextpak</h3>
            <p>
              I have done an intership in nextpak in 2022 as a frontend developer
            </p>
          </div>
        
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
          <div class="timeline-date">2023</div>
          <div class="timeline-content">
            <h3>Amazon Va Internship</h3>
            <p>
              I Have done Internship in Ecomva as a Virtual Assitant in Amazon
            </p>
          </div>
        
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
          <div class="timeline-date">2024</div>
          <div class="timeline-content">
            <h3>Internship in Nextpak</h3>
            <p>
              I have done an intership in nextpak in 2022 as a frontend developer
            </p>
          </div>
        
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationView",
};
</script>

<style>
:root {
  --bg-color: #080808;
  --second-bg-color: #131313;
  --text-color: white;
  --main-color: #00ffee;
}
.heading{
    font-size: 8rem;
    text-align: center;
    margin: 5rem 0;
}
.education{
    padding: 10rem 12% 10rem;
    background: var(--second-bg-color);
}
.timeline-items{
    max-width:1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
.timeline-items::before{
    content:"";
    position: absolute;
    width:5px;
    height:100%;
    background-color: var(--main-color);
    left: calc(50% - 1px);

}
.timeline-item{
    margin-bottom: 40px;
    width:100%;
    position: relative;
}
.timeline-item:last-child{
    margin-bottom: 0;

}
.timeline-item:nth-child(odd){
    padding-right: calc(50% + 30px);
    text-align: right;
}
.timeline-item:nth-child(even){
    padding-left: calc(50% + 30px);
}
.timeline-dot{
    height: 21px;
    width: 21px;
    background-color: var(--main-color);
    box-shadow: 0 0 25px var(--main-color);
            
     position: absolute;
     left: calc(50% - 8px);
     border-radius: 50%;
     top:10px           
}
.timeline-date{
    font-size: 20px;
    font-weight: 800;
    color:white;
    margin: 6px 0 15px;
}
.timeline-content{
    background-color: var(--bg-color);
    border:3px solid var(--main-color);
    padding: 30px 50px;
    border-radius: 4rem;
    box-shadow: 0 0 25px var(--main-color);
    cursor:pointer;
    transition: 0.3s ease-in-out;

}
.timeline-content:hover{
    transform: scale(1.05);
    box-shadow:  0 0 25px var(--main-color);
}
.timeline-content h3{
    font-size: 20px;
    color:white;
    margin: 0 0 10px;
    font-weight: 500;
}
.timeline-content p{
    color:white;
    font-size:16px;
    font-weight: 300;
    line-height: 22px;

}
::-webkit-scrollbar{
    width: 5px;
   
}
::-webkit-scrollbar-thumb{
    background: rgb(121, 120, 120);
    border-radius: 2rem;
}
::-webkit-scrollbar-track{
    background-color: var(--bg-color);
    width:5px;
   
}
@media(max-width:991px){
    .education{
        padding:10rem 3% 2rem;
    }
    .timeline-items::before{
      left:7px;
    }
    .timeline-item:nth-child(odd){
      padding-right:0;
      text-align: left;

    }
    .timeline-item:nth-child(odd),
    .timeline-item:nth-child(even){
      padding-left: 37px;
    }
    .timeline-dot{
      left:0;
    }
}
</style>
