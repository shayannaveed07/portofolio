<template>
  <div class="contact" id="contact">
    <h2 class="heading2">Contact <span>Me</span>
    </h2>
    <form >
        <div class="input-group group">
            <div class="input-box">
                <input type="text" placeholder="Enter Full Name">
                <input type="email" placeholder="Enter Email">
                
            </div>
            <div class="input-box">
                <input type="number" placeholder="Enter Phone Number">
               <input type="text" placeholder="Subject">
                
            </div>
            <div class="input-group-2">
                <textarea cols="30" rows="10" placeholder="Your reviews"></textarea>
                <input type="submit" value="Send Mesage" class="btn">
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
name:"ContactView"
}
</script>

<style scoped>
:root{
  --bg-color:#080808;
  --second-bg-color:#131313;
  --text-color:white;
  --main-color:#00ffee
  }
span{
color:var(--main-color)
}
.group{
    display: flex;
    justify-content: center;
    gap: 10px;
}
.btn{
    display: inline-block;
    padding: 1rem 2.8rem;
    background: var(--main-color);
    box-shadow: 0 0 25px var(--main-color);
    border-radius: 4rem ;
    font-size: 1.6rem;
    color: black;
    border: 2px solid transparent;
    letter-spacing: 0.1rem;
    font-weight:600;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
}
.btn:hover{
    transform:scale(1.05);
    box-shadow: 0 0 50px var(--main-color   );
}
.contact{
    background-color: var(--bg-color);

}
.contact h2{
    margin-bottom:3rem;
    color:white;

}
.contact form{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:3rem;
    padding: 5rem 0;
    text-align: center;
}
.contact form .input-box{
display: flex;
justify-content: center;
flex-wrap: wrap;

}
.contact form .input-box input, 
.contact form textarea{
    width:100%;
    padding:2.5rem;
    font-size:1.8rem;
    color: var(--text-color);
    background: var(--second-bg-color);
    border-radius: 2rem;
    border:2px solid var(--main-color);
    margin:1.5rem 0;
    resize:none;

}
.contact form .btn{
    margin-top:2rem;

}
.heading2{
    color:white;
    font-size: 8rem;
    text-align: center;
    padding: 5rem 0;
}
@media(max-width:991px){
    .contact form{
        flex-direction: column;
    }
}
</style>