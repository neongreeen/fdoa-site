// Wheel navigation only. Embla continues to handle real touch dragging.
// Use distance over a 60 ms window, not adjacent event magnitudes: Safari
// coalesces events and its momentum tail can contain doubled/tripled deltas.
// A completed pulse rearms only after decay and a sustained, substantial rise.
// 24 px rejects tiny reversals; 220 ms silence starts a fresh gesture.
function createWheelIntent(){
  let samples=[],direction=0,lastAt=-Infinity,total=0,issued=false,peak=0,trough=Infinity,falling=false,riseAt=null,opposite=0;
  function reset(){samples=[];direction=0;lastAt=-Infinity;total=0;issued=false;peak=0;trough=Infinity;falling=false;riseAt=null;opposite=0;}
  function feed(y,t){
    if(!Number.isFinite(y)||!Number.isFinite(t)||!y)return 0;
    const sign=Math.sign(y);let amount=Math.abs(y);
    if(t-lastAt>220){reset();direction=sign;}
    lastAt=t;
    if(sign!==direction){
      opposite+=amount;
      if(opposite<24)return 0;
      amount=opposite;reset();direction=sign;lastAt=t;
    }else opposite=0;
    samples.push({t,amount});samples=samples.filter(s=>t-s.t<=60);
    const strength=samples.reduce((sum,s)=>sum+s.amount,0)/60;
    total+=amount;
    if(!issued){
      if(total<24)return 0;
      issued=true;peak=strength;trough=strength;return direction;
    }
    peak=Math.max(peak,strength);
    if(!falling&&strength<peak*.65){falling=true;trough=strength;}
    if(falling){
      if(strength<trough){trough=strength;riseAt=null;}
      const rising=strength>Math.max(trough*1.8,trough+.4)&&strength>.6;
      if(!rising)riseAt=null;
      else if(riseAt===null)riseAt=t;
      else if(t-riseAt>=30){
        peak=strength;trough=strength;falling=false;riseAt=null;return direction;
      }
    }
    return 0;
  }
  return {feed,reset};
}
if(typeof module!=='undefined'&&module.exports)module.exports=createWheelIntent;
else window.FdoaWheelIntent=createWheelIntent;
