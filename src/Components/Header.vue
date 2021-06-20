<template>
  <nav class="navbar navbar-expand-lg navbar-light  animate__animated animate__slideInDown">
 

  <router-link class="navbar-brand m-7" to="/"><img src="./Marketeer-logo-2-main-transparent.png" alt="markopolo logo" height="50" ></router-link>
  <button class="navbar-toggler mr-7" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
     <div class="container">
     <ul class="navbar-nav  m-auto">

      
        

       <router-link active-class="active" exact style="cursor:pointer" class="nav-item nav-link" tag="li" to="./Features.vue">Features</router-link>
       
        <router-link active-class="active" exact style="cursor:pointer" class="nav-item nav-link" tag="li" to="./Exclusive.vue">Exclusive Offers</router-link>
        
         <router-link active-class="active" exact style="cursor:pointer" class="nav-item nav-link" tag="li" to="/Blog">Blog</router-link>
         
          <router-link active-class="active" exact style="cursor:pointer" class="nav-item nav-link pd-4" tag="li" to="/Success">Success Story</router-link>
     
        
      
     
        
       </ul>
     </div>
   </div>
  
     
     <a href="https://app.markopolo.ai" target="_blank" ><button class="btn btn-primary btn-outline-black my-2 my-sm-0 " type="submit">Beta Login</button></a>
    
</nav>

</template>
 
 


<style  scoped>

ul .nav-item{
  color: black;
}
ul .active{
  color:crimson!important;
}
ul{
  font-size: 20px;
}
</style>

