<template>
  <div>
   <div class=" container text-center m-3 Banner_Banner__10cWB">
                <span>
                    🎉
                    <!-- -->
                    <b>
                        <u>
                            <a href="/Exclusive">Join</a>
                        </u>
                    </b>
                    <!-- -->
                    today, to get early access to our closed Beta and Get exclusive offers 🎊
                </span>
            </div>
  <compHeader/>
<router-view></router-view>
  </div>
</template>
<script>
import compHeader from './Components/Header'
export default {
   components:{
    compHeader
    
  },
}
</script> 

<style>
body {
  font-family: 'Roboto', sans-serif;
  
}
div{
  font-size: 18px;
}
</style>