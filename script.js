// console.log("helooo");
// const arr=[1,2,3,4];
// const [a,b,c,d]=arr;
// // console.log(a,b,c,d)

const restaurant={
    name: 'The central jail',
    location:'bhatta bazar',
    categories:['indian','nepalis', 'channies','vegetian'],
    starter:['Focacia','mushroom','garlic'],
    mainmenu:['chikan masala','butter panner','daal chawal'],
    openigHours:{
        thu:{
            open:11,
            close:23,
        },
       fri:{
        open:10,
        close:22,
       },
       sat:{
        open:9,
        close:21
       },
    },
    
    order:function(starterindex,mainmenuindex){
        return [this.starter[starterindex],this.mainmenu[mainmenuindex]];
   },
   orederDelivery:function(obj){
    obj.starterindex=1;
    obj.mainmenuindex=0;

      console.log(`your statter is ${starter[obj.starterindex]}, maincourse ${mainmenu[obj.mainmenuindex]},
         to ${obj.add} at ${obj.time}`);
   },
   
};

const menu=[...restaurant.starter,...restaurant.mainmenu];
for(const [i,j] of menu.entries()){
    // console.log(`${i+1} : ${j}`);
    console.log(i,j);
}


// const{name}=restaurant;
// console.log(name);
// const {open:o,close:c}=restaurant.openigHours.fri
// console.log(o,c);


//---------------Destructuring Object-----
// let {sat,...otherdays}=restaurant.openigHours;
// console.log(sat);
// console.log(otherdays);

//----------- reest and spread--

// function sum(...arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }console.log(sum);
// }

// sum(1,2);
// sum(1,2,3,4,5,6,7,8);
// sum(1,2,3,4,5);
// let x=[1,2,3,4,5,6];
// sum(...x);
//-------OR----
// console.log(null || 'helo');
// //----AND---        
// console.log(1 && '');


// console.log(restaurant.order(1,0));
// const {openigHours,starter,mainmenu}=restaurant;
// console.log(openigHours,starter,mainmenu);

// const {menu=[],starter:st=[]}=restaurant;
// console.log(menu,st);

// const ob={
//     add:'bihar',
//     starterindex:0,
//     mainmenuindex:1,
//     time:'10:20'
// };
// // restaurant.orederDelivery(ob);
// const ob1={
//     add:'purnea',
//     time:"22:00"
// }
// restaurant.orederDelivery(ob1);






// let arr=[101,2,[44,55]];
// let [i,j,r]=arr;
// console.log(i,j,...r);





















// const arr1=[1,2,3,4,5];
// const [a,,b,c,...first]=arr1;
// console.log(a,b,c,first);
// const newmenu=[...restaurant.mainmenu,'salade','papad'];
// // console.log(newmenu);
// const newMainmenu=[...restaurant.mainmenu,
//     ...restaurant.starter];
// console.log(newMainmenu);
// console.log(...restaurant.mainmenu);
// console.log(...restaurant.starter);
// console.log(...restaurant.categories);
// console.log(...restaurant);
// console.log("stater and main menu ",...restaurant.starter,
// ...restaurant.mainmenu);
// const nam="pranav";
// const nm=[...nam];
// console.log(nm);

// const product=[
// prompt("first prodect"),
// prompt("second prodect"),
// prompt("third prodect")
// ]
// restaurant.orderPasts(product[0],product[1],product[2])
// restaurant.orderPasts(...product);
// console.log(product);

// const newrestaurent={founded:2020,...restaurant,owner:"unknown"}
// console.log(newrestaurent);
// const copyrestaurent={...restaurant};
// copyrestaurent.name='hotel koski'
// console.log(copyrestaurent);
// console.log(restaurant.name);

// const {menu=[],name,openigHours,starter}=restaurant;
// console.log(name,openigHours,starter,menu);
// const {name:resName,openigHours:openhrs=["not found"],starter:st,menu:mnu=[]}=restaurant;
// console.log(resName,openhrs,st,mnu);

//-------Destructure Object---------//
 
// const {fri:{open:op,close:cl}}= restaurant.openigHours;
// console.log(op,cl);

// let ordobj={
//     addres:"india",
//     time:"23:33",
//     mainindex:2,
//     statterindex:1,
// };


// let ordobj={
//     addres:"india",
//     time:"23:33",
//     statterindex:1,
// };
// restaurant.orderDelivery(ordobj);

// const arr=[7,8,9];
// const badarr=[1,2,3,arr];
// const [i,j,l,[a,b,c]]=badarr
// console.log(i,j,l,a,b,c);




//--------Destructur Array------------------
// const arr=[1,2,3];
// const[,,z]=arr;
// console.log(z);

// const[first,,second]=restaurant.categories;
// console.log(second,first);
// const [starter ,mainmenu]=restaurant.order(1,1);
// console.log(starter,mainmenu);

// const brr=[1,3,[55,77]];
// const[i,,[j,k]]=brr;
// console.log(i,j,k);

// const[a=14,b=12,c=11]=[1,2];
// console.log(a,b,c);




