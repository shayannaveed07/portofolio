<template>
  <div class="project">
      <div>
          <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          >
          <h2 class="text-center text-white heading3">My Projects</h2>
      <!-- Text slides with image -->
      <b-carousel-slide 
   
      >
      <template #img> 
           <img
            class="d-block img-fluid image"
            :src="image"
            alt="image slot"
          >
        </template></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide  >
        <template #img> 
           <img
            class="d-block img-fluid image"
            :src="image1"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <!-- <b-carousel-slide  >
        <template #img> 
           <img
            class="d-block img-fluid image"
            src="https://picsum.photos/1024/480/?image=58"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img> 
           <img
            class="d-block img-fluid image"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
<!-- 
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
  </div>
</template>

<script>
export default {
name:"ProjectsVue",
data() {
      return {
        slide: 0,
        sliding: null,
        image:"https://www.simpleimageresizer.com/_uploads/photos/2af582e4/Capture_2.jpg",
        image1:"https://eu-central.storage.cloudconvert.com/tasks/acf02845-4ec0-47c7-88ea-94a7cae740de/1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20241009%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20241009T131509Z&X-Amz-Expires=86400&X-Amz-Signature=294573dee8a3c7a50265d6bf93143158a6b251cefd504b0a4814290657fcc99a&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%221.jpg%22&response-content-type=image%2Fjpeg&x-id=GetObject"
      }
},
methods:{
    methods: {
      onSlideStart(slide) {
        this.sliding = true
        console.log(slide);
        
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide);
        
      }
    }
}
}   
</script>

<style scoped>
:root {
  --bg-color: #080808;
  --second-bg-color: #131313;
  --text-color: white;
  --main-color: #00ffee;
}
#carousel-1{
    background: rgb(0 0 0);
    text-shadow: rgb(51, 51, 51) 1px 1px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10rem
}  
.heading3{
    font-size: 8rem;
    margin-right:2rem;
    margin-bottom: 1rem;
    /* text-align: center; */
    /* margin: 5rem 0; */
}
 .image{
    border-radius: 50%;
    height:50rem;
    width:50rem;
    /* margin-left:-27rem */
    margin-left:33rem
}
.image:hover{
    /* background-color: var(--main-color); */
    box-shadow: 0 0 25px var(--main-color),
            0 0 50px var(--main-color),
            0 0 100px var(--main-color);
    /* transform: scale(1.1); */
    cursor: pointer;
}
</style>