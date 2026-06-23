import { useEffect,useState } from "react";
import { useInView } from "react-intersection-observer";

const stats=[
{value:24,suffix:"+",label:"Years of Excellence"},
{value:5000,suffix:"+",label:"Students Mentored"},
{value:30,suffix:"+",label:"Students Per Batch"},
{value:100,suffix:"%",label:"Parent Satisfaction"}
];

const Counter=({end,suffix=""})=>{

const [count,setCount]=useState(0);
const {ref,inView}=useInView({triggerOnce:true,threshold:.5});

useEffect(()=>{

if(!inView) return;

let start=0;
const duration=2000;
const step=end/(duration/16);

const update=()=>{

start+=step;

if(start<end){
setCount(Math.floor(start));
requestAnimationFrame(update);
}else{
setCount(end);
}

};

requestAnimationFrame(update);

},[inView,end]);

return(
<span ref={ref}>
{count}{suffix}
</span>
);

};


const Stats=()=>{

return(

<section className="bg-primary py-18">

<div className="max-w-7xl mx-auto px-5">

<div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

{stats.map((item,index)=>(

<div
key={index}
className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md"
>

<h3 className="text-4xl font-bold text-accent">
<Counter end={item.value} suffix={item.suffix}/>
</h3>

<p className="mt-3 text-sm font-medium text-white/70">
{item.label}
</p>

</div>

))}

</div>

</div>

</section>

);

};

export default Stats;