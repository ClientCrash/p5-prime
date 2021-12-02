function setup() { 

  createCanvas(800, 800); 

  background(0); 

} 

a=0 

b=0 

  

  

function isPrime(num) { 

  for(var i = 2; i < num; i++) 

    if(num % i === 0) return 0; 

  return 255; 

} 

  

  

  

function draw() { 

   

  if(a<800){ 

    while(b<800){ 

      z=(800*a)+b 

      p = isPrime(z) 

      stroke(p,p,p) 

       

      line(a+1,b+1,a,b) 

       

      b+=1 

       

    } 

    b=0 

    a+=1 

  }else{ 

    a=0 

  } 

} 
