
//question 1
// function Nisha(name,callback){
//     console.log('Hi' + ' ' +name); 
//   callback();

// }
// function callMe(){
//     console.log('I am Callback function');
// }
// Nisha('Peter' , callMe);

   

// function multi(num1,num2){
  
//     return new Promise((res,rej)=>{
//         if((num1*num2)%5==0){
//             res("Yes");
//         }else{
//             rej("NO");
//         }
//     })
   
// }
// multi(2,5).then((res)=> 
// console.log(res)).catch((rej)=>
// console.log(rej));

// // //Question 2
// // // function callba(num){

// // //  setTimeout(() => {
// // //    console.log(num++);
// // //    setTimeout(()=>{

// // //      console.log(num++);
// // //      setTimeout(()=>{

// // //         console.log(num++);
// // //         setTimeout(()=>{
    
// // //             console.log(num++);
// // //             setTimeout(()=>{
        
// // //                 console.log(num++);
// // //                 setTimeout(()=>{
            
// // //                     console.log(num++);
// // //                     setTimeout(()=>{
                
// // //                         console.log(num++);
// // //                       },7000)
// // //                   },6000)
// // //               },5000)
// // //           },4000)
// // //       },3000)

// // //    },2000)
   
// // //  },1000)
// // // }
// // // callba(0);

// // //Question 3

// // function callba(num){

// //     return new Promise((res,rej) =>{



    
// //    })
// // // }
// // //    callba(0);

// // const printNumberPromise = ms => new Promise(resolve => setTimeout(resolve, ms)); 
// // let chain = Promise.resolve(); 
// // for (let count = 1; count <= 7; count++) { 
// //   chain = chain.then(() => { 
// //     console.log(count); 
// //     return printNumberPromise(count*1000); 
// //   }); 
// // }

// // const Pro=new Promise(function(res,rej)
// // {
// //     let result="yes";
// //     if(result=="yes"){
// //       res("Promise resolved")
// //     }else{
// //         rej("Promise rejected");
// //     }

// // })
// // Pro.then(function(data){
// //     console.log("Yes",data);
// // }).catch(function(err){
// //     console.log("YEs",err)
// // })

// //QUe 5.)

// // const hii=(name,myfun)=>{
// //     console.log(name);
// //     myfun();
// // }
// // const myfun=()=>{
// //     console.log("I'm callback function");
// // }
// // hii("Mrunali",myfun);

// //Que 

// let p1=()=>{
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
            
//             res("First");
//         },1000)
//     })
// }
// let p2=()=>{
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             res("Second");
//         },2000)
//     })
// }
// let p3=()=>{
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             res("Third");
//         },2000)
//     })
// }
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result)
//     console.log(result[0])
//     console.log(result[1])
//     console.log(result[2])


// })

//Que 6.
// function asyncfun1(cb){
//     setTimeout(()=>{
//       cb();
//     },1000);
//   }
//   function asyncfun2(cb){
//     setTimeout(()=>{
//       cb();
//     },2000);
//   }
//   function asyncfun3(cb){
//     setTimeout(()=>{
//       cb();
//     },3000);
//   }function asyncfun4(cb){
//     setTimeout(()=>{
//       cb();
//     },4000);
//   }

//   asyncfun1(function(){
//     console.log(1)
//     asyncfun2(function(){
//       console.log(2)
//       asyncfun3(function(){
//         console.log(3)
//         asyncfun4(function(){
//           console.log(4)
 
//         })
//       })
//     })
//   })

//Que 7.

