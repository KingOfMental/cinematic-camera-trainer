export const defaults = () => ({version:1,mode:'dolly',start:{x:0,y:1.6,z:12},end:{x:0,y:1.6,z:4},arc:90,focal:24,duration:6,track:true,yaw:0,pitch:0,ease:true,walk:true});
export function validate(s){
 if(!s || s.version!==1 || !['dolly','orbit'].includes(s.mode))throw Error('지원하지 않는 촬영 설정입니다.');
 for(const p of [s.start,s.end])for(const k of ['x','y','z'])if(!Number.isFinite(p?.[k]) || Math.abs(p[k])>100 || (k==='y'&&p[k]<0.3))throw Error('카메라 좌표 범위를 확인하세요.');
 for(const [k,min,max] of [['arc',-300,300],['focal',24,70],['duration',2,20],['yaw',-180,180],['pitch',-80,80]])if(!Number.isFinite(s[k])||s[k]<min||s[k]>max)throw Error('카메라 설정 범위를 확인하세요.');
 for(const k of ['track','ease','walk'])if(typeof s[k]!=='boolean')throw Error('잘못된 촬영 옵션입니다.');
 return structuredClone(s);
}
export function pose(s,t){
 const q=Math.max(0,Math.min(1,t)), u=s.ease?q*q*(3-2*q):q;
 if(s.mode==='dolly')return Object.fromEntries(['x','y','z'].map(k=>[k,s.start[k]+(s.end[k]-s.start[k])*u]));
 const r=Math.hypot(s.start.x,s.start.z), a=Math.atan2(s.start.x,s.start.z)+s.arc*Math.PI/180*u;
 return {x:r*Math.sin(a),y:s.start.y+(s.end.y-s.start.y)*u,z:r*Math.cos(a)};
}
export function orbitEnd(s){return pose({...s,ease:false},1);}
export function verticalFov(focal,aspect=16/9,sensorWidth=36){return 2*Math.atan(sensorWidth/aspect/(2*focal))*180/Math.PI;}
export function pathLength(s){return s.mode==='dolly'?Math.hypot(s.end.x-s.start.x,s.end.y-s.start.y,s.end.z-s.start.z):Math.hypot(Math.hypot(s.start.x,s.start.z)*s.arc*Math.PI/180,s.end.y-s.start.y);}
