export const photoNotes={
 0:{name:'긴 복도',anchor:[.652,.573],vp:[.652,.573],axis:.652,lines:[[.03,.98,.652,.573],[.985,.98,.652,.573],[.03,.03,.652,.573],[.98,.03,.652,.573]],layers:[[.42,.9],[.55,.69],[.652,.573]]},
 2:{name:'겨울 호수의 나무',anchor:[.42,.49],axis:.42,lines:[[.03,.57,.43,.57]],layers:[[.32,.81],[.6,.61],[.57,.42]]},
 4:{name:'마당으로 통하는 아치',anchor:[.607,.53],axis:.607,frame:[.463,.225,.296,.48],lines:[[.025,.78,.28,.68]],layers:[[.13,.58],[.605,.49],[.61,.585]]},
 7:{name:'해변의 인물과 노을',anchor:[.817,.525],subject:[.772,.45,.095,.16],balance:[[.438,.425],[.817,.525]],lines:[[.01,.436,.985,.46]],layers:[[.48,.88],[.82,.53],[.44,.43]]},
 10:{name:'산·숲·호수',anchor:[.566,.14],axis:.566,lines:[[.01,.624,.9,.602]],layers:[[.45,.87],[.5,.5],[.566,.14]]},
 11:{name:'산악 호수와 전경 바위',anchor:[.576,.186],lines:[[.01,.675,.31,.54],[.88,.79,.696,.52]],layers:[[.48,.86],[.47,.63],[.576,.186]]}
};
export const topics=[
 {id:'thirds',name:'삼분할',photos:[2,7],tool:'crop',guide:'thirds',goal:'주요 피사체를 삼분할 교차점 가까이에 배치하도록 크롭하세요. 그 배치가 주변 공간을 얼마나 남기는지 비교하세요.',theory:'화면을 가로·세로 3등분한 선과 교차점은 배치의 출발점입니다. 교차점에 맞추는 것 자체가 좋은 사진을 보장하지는 않습니다.'},
 {id:'center',name:'중앙 구도',photos:[4,0],tool:'crop',guide:'center',goal:'아치 또는 복도의 강조점을 화면 중앙 가까이 배치하도록 크롭해 보세요.',theory:'중앙 배치는 시선을 집중시키고 정면성·안정감을 줄 수 있습니다. 주변 정보가 잘리는 비용도 함께 확인하세요.'},
 {id:'symmetry',name:'대칭',photos:[4,0],tool:'line',guide:'none',goal:'사진의 구조적 중심축을 위에서 아래로 그으세요. 좌우가 완전히 같지 않은 부분도 살펴보세요.',theory:'대칭은 좌우·상하 형태의 대응입니다. 중심축이 있다는 것과 사진 전체가 완벽한 대칭이라는 것은 다릅니다. 예시 축은 구조를 읽는 참고선입니다.'},
 {id:'vanishing',name:'소실점',photos:[0],tool:'point',guide:'none',goal:'복도의 길게 이어지는 선들이 모이는 소실점 부근을 터치하세요.',theory:'3D 공간에서 평행한 선은 원근 투영에서 한 점으로 모여 보일 수 있습니다. 그 소실점이 화면 중앙에 있을 필요는 없습니다.'},
 {id:'leading',name:'리딩라인',photos:[0,11],tool:'line',guide:'none',goal:'시선을 안쪽으로 이끄는 선을 2개 그으세요. 복도에서는 벽·바닥 경계, 호수에서는 물가 경계를 살펴보세요.',theory:'리딩라인은 시선의 경로로 읽을 수 있는 선입니다. 반드시 직선이거나 소실점으로 모일 필요는 없습니다. 이 연습에서는 대표 경계를 직선으로 근사합니다.'},
 {id:'golden',name:'황금분할',photos:[2,7],tool:'crop',guide:'golden',goal:'피사체의 강조점을 황금분할 교차점 가까이 배치하도록 크롭하세요. 삼분할과 차이를 비교해 보세요.',theory:'황금비 φ≈1.618로 나눈 위치는 약 38.2%와 61.8%입니다. 삼분할보다 중앙에 가깝습니다. 이 비율도 배치 선택지 중 하나입니다.'},
 {id:'spiral',name:'황금나선',photos:[2,7,11],tool:'point',guide:'spiral',goal:'강조하고 싶은 피사체를 찍고 나선 가이드를 그곳에 놓아 보세요. 실제 사진의 선이 나선을 따르는지, 억지로 끼워 맞추는지도 비교하세요.',theory:'이 가이드는 90°마다 반지름이 φ배 커지는 로그 나선의 근사 표시입니다. 표시한 점이 실제 피사체에 가까운지만 확인하며, 사진이 황금나선 구도라고 자동 판정하지 않습니다.'},
 {id:'frame',name:'프레임 속 프레임',photos:[4],tool:'box',guide:'none',goal:'뒤쪽 공간을 둘러싸는 아치의 프레임 영역을 사각형으로 표시하세요.',theory:'문·창·아치·나뭇가지처럼 장면 안의 경계가 또 하나의 프레임을 만들 수 있습니다. 여기서는 곡선 아치를 사각형 영역으로 근사합니다.'},
 {id:'negative',name:'여백',photos:[7],tool:'crop',guide:'none',goal:'인물 왼쪽에 넓은 공간을 남기도록 크롭하세요. 인물이 프레임에서 잘리지 않게 유지하세요.',theory:'빈 공간은 방향감·거리감·고립감 등을 만들 수 있습니다. 이 문제는 왼쪽 여백을 실험하는 과제이며, 사진 속 실제 동작 방향을 정답으로 단정하지 않습니다.'},
 {id:'balance',name:'시각적 균형',photos:[7],tool:'point',guide:'none',goal:'밝은 노을과 어두운 인물, 두 관심 영역을 차례로 찍으세요. 작은 인물도 명암 대비로 무게를 가질 수 있다는 점을 비교하세요.',theory:'시각적 무게는 크기뿐 아니라 명암·색·얼굴·의미 등에 좌우됩니다. 이 연습은 두 후보 영역을 찾는 것이며 감정이나 균형의 좋고 나쁨을 자동 채점하지 않습니다.'},
 {id:'depth',name:'전경·중경·배경',photos:[11,10,2],tool:'point',guide:'none',goal:'전경 → 중경 → 배경 순서로 3곳을 찍으세요. 가까운 바위·물, 중간 호수·숲, 먼 산을 구분해 보세요.',theory:'겹침·상대 크기·질감·공기 원근 등이 깊이를 전달합니다. 2D 사진에서의 층 구분은 해석을 포함하므로 예시 영역은 대표 후보입니다.'}
];
export function photoTask(serial,topicId){const topic=topics.find(t=>t.id===topicId)||topics[(serial-1)%topics.length];const id=topic.photos[Math.floor((serial-1)/topics.length)%topic.photos.length];return{serial,topic,id,mirror:Math.floor((serial-1)/(topics.length*3))%2===1};}
export function viewPoint(p,crop){return[(p[0]-crop.x)/crop.w,(p[1]-crop.y)/crop.h];}
export function cropFor(anchor,target,scale=.8){const x=Math.max(0,Math.min(1-scale,anchor[0]-target[0]*scale)),y=Math.max(0,Math.min(1-scale,anchor[1]-target[1]*scale));return{x,y,w:scale,h:scale};}
export const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
export function iou(a,b){const overlap=Math.max(0,Math.min(a[0]+a[2],b[0]+b[2])-Math.max(a[0],b[0]))*Math.max(0,Math.min(a[1]+a[3],b[1]+b[3])-Math.max(a[1],b[1]));return overlap/(a[2]*a[3]+b[2]*b[3]-overlap||1);}
