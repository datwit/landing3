<template>
    <div class="absolute bottom-3 sign">
        <h4>Scroll down</h4>      
        <div class="arrow mx-auto"></div> 
    </div>
</template>

<style scoped>
div.arrow {  
  width: 30px;
  height: 30px;  
  border-bottom: 5px solid #00baff;
  border-right: 5px solid #00baff;
  transform: rotate(45deg);  
}
div.sign{
  transform: translateX(-50%);
  left: 50%;
}
/* 
 @keyframes bounce {
	0%, 20%, 50%, 80%, 100% {
     transform:translateY(0);
  }
	40% {
    transform:translateY(-30px);
  }
	60% {
    transform:translateY(-15px);
  }
} */

div.arrow:hover{  
  border-color: orange;
  /* animation:bounce 1s ease-in-out; */  
}
</style>

