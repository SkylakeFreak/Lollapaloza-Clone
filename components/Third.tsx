import React, { useEffect, useState } from 'react'
import {Aclonica, Anton, Averia_Sans_Libre, Golos_Text, Jockey_One, Luckiest_Guy, Noto_Sans, Pacifico, Prompt, Rock_Salt, Rubik_Broken_Fax, Rubik_Maps, Ubuntu, Unica_One} from "@next/font/google";

const anton=Anton({
    subsets:["latin"],
    weight:'400'
  })
  const golo=Golos_Text({
    subsets:["latin"],
    weight:'500'
  })  
function Third() {
  const convertedColors = [
    "text-[rgb(253,242,247)]",
    "text-[rgb(250,215,230)]",
    "text-[rgb(247,188,214)]",
    "text-[rgb(244,161,197)]",
    "text-[rgb(241,134,181)]",
    "text-[rgb(238,107,164)]",
    "text-[rgb(235,80,148)]",
  ];
  
    const [isFixed, setIsFixed] = useState(false);
    
    const [choose, setChoose] = useState("text-[rgb(255,255,255)]");
const [choose1, setChoose1] = useState("text-[rgb(255,255,255)]");
const [choose2, setChoose2] = useState("text-[rgb(255,255,255)]");
const [choose3, setChoose3] = useState("text-[rgb(255,255,255)]");
const [choose4, setChoose4] = useState("text-[rgb(255,255,255)]");
const [choose5, setChoose5] = useState("text-[rgb(255,255,255)]");
const [choose6, setChoose6] = useState("text-[rgb(255,255,255)]");
const [choose7, setChoose7] = useState("text-[rgb(255,255,255)]");
const [choose8, setChoose8] = useState("text-[rgb(255,255,255)]");
const [choose9, setChoose9] = useState("text-[rgb(255,255,255)]");
const [choose10, setChoose10] = useState("text-[rgb(255,255,255)]");
const [choose11, setChoose11] = useState("text-[rgb(255,255,255)]");
const [choose12, setChoose12] = useState("text-[rgb(255,255,255)]");
const [choose13, setChoose13] = useState("text-[rgb(255,255,255)]");
const [choose14, setChoose14] = useState("text-[rgb(255,255,255)]");
const [choose15, setChoose15] = useState("text-[rgb(255,255,255)]");
const [choose16, setChoose16] = useState("text-[rgb(255,255,255)]");
const [choose17, setChoose17] = useState("text-[rgb(255,255,255)]");
const [choose18, setChoose18] = useState("text-[rgb(255,255,255)]");
const [choose19, setChoose19] = useState("text-[rgb(255,255,255)]");
const [choose20, setChoose20] = useState("text-[rgb(255,255,255)]");
const [choose21, setChoose21] = useState("text-[rgb(255,255,255)]");
const [choose22, setChoose22] = useState("text-[rgb(255,255,255)]");
const [choose23, setChoose23] = useState("text-[rgb(255,255,255)]");
const [choose24, setChoose24] = useState("text-[rgb(255,255,255)]");
const [choose25, setChoose25] = useState("text-[rgb(255,255,255)]");
const [choose26, setChoose26] = useState("text-[rgb(255,255,255)]");
const [choose27, setChoose27] = useState("text-[rgb(255,255,255)]");
const [choose28, setChoose28] = useState("text-[rgb(255,255,255)]");
const [choose29, setChoose29] = useState("text-[rgb(255,255,255)]");
const [choose30, setChoose30] = useState("text-[rgb(255,255,255)]");
const [choose31, setChoose31] = useState("text-[rgb(255,255,255)]");
const [choose32, setChoose32] = useState("text-[rgb(255,255,255)]");
const [choose33, setChoose33] = useState("text-[rgb(255,255,255)]");
const [choose34, setChoose34] = useState("text-[rgb(255,255,255)]");
const [choose35, setChoose35] = useState("text-[rgb(255,255,255)]");
const [choose36, setChoose36] = useState("text-[rgb(255,255,255)]");
const [choose37, setChoose37] = useState("text-[rgb(255,255,255)]");
const [choose38, setChoose38] = useState("text-[rgb(255,255,255)]");
const [choose39, setChoose39] = useState("text-[rgb(255,255,255)]");
const [choose40, setChoose40] = useState("text-[rgb(255,255,255)]");
const [choose41, setChoose41] = useState("text-[rgb(255,255,255)]");
const [choose42, setChoose42] = useState("text-[rgb(255,255,255)]");

const clickme = (e: any) => {
  setChooseColorWithDelay(setChoose, e);
};

const clickme1 = (e: any) => {
  setChooseColorWithDelay(setChoose1, e);
};

const clickme2 = (e: any) => {
  setChooseColorWithDelay(setChoose2, e);
};

const clickme3 = (e: any) => {
  setChooseColorWithDelay(setChoose3, e);
};

const clickme4 = (e: any) => {
  setChooseColorWithDelay(setChoose4, e);
};
const clickme5 = (e: any) => {
  setChooseColorWithDelay(setChoose5, e);
};
const clickme6 = (e: any) => {
  setChooseColorWithDelay(setChoose6, e);
};
const clickme7 = (e: any) => {
  setChooseColorWithDelay(setChoose7, e);
};
const clickme8 = (e:any) => {
  setChooseColorWithDelay(setChoose8, e);
};

const clickme9 = (e: number) => {
  setChooseColorWithDelay(setChoose9, e);
};

const clickme10 = (e: number) => {
  setChooseColorWithDelay(setChoose10, e);
};

const clickme11 = (e: number) => {
  setChooseColorWithDelay(setChoose11, e);
};

const clickme12 = (e: number) => {
  setChooseColorWithDelay(setChoose12, e);
};

const clickme13 = (e: number) => {
  setChooseColorWithDelay(setChoose13, e);
};

const clickme14 = (e: number) => {
  setChooseColorWithDelay(setChoose14, e);
};

const clickme15 = (e: number) => {
  setChooseColorWithDelay(setChoose15, e);
};

const clickme16 = (e: number) => {
  setChooseColorWithDelay(setChoose16, e);
};

const clickme17 = (e: number) => {
  setChooseColorWithDelay(setChoose17, e);
};

const clickme18 = (e: number) => {
  setChooseColorWithDelay(setChoose18, e);
};

const clickme19 = (e: number) => {
  setChooseColorWithDelay(setChoose19, e);
};

const clickme20 = (e: number) => {
  setChooseColorWithDelay(setChoose20, e);
};

const clickme21 = (e: number) => {
  setChooseColorWithDelay(setChoose21, e);
};

const clickme22 = (e: number) => {
  setChooseColorWithDelay(setChoose22, e);
};

const clickme23 = (e: number) => {
  setChooseColorWithDelay(setChoose23, e);
};

const clickme24 = (e: number) => {
  setChooseColorWithDelay(setChoose24, e);
};

const clickme25 = (e: number) => {
  setChooseColorWithDelay(setChoose25, e);
};

const clickme26 = (e: number) => {
  setChooseColorWithDelay(setChoose26, e);
};

const clickme27 = (e: number) => {
  setChooseColorWithDelay(setChoose27, e);
};

const clickme28 = (e: number) => {
  setChooseColorWithDelay(setChoose28, e);
};

const clickme29 = (e: number) => {
  setChooseColorWithDelay(setChoose29, e);
};

const clickme30 = (e: number) => {
  setChooseColorWithDelay(setChoose30, e);
};

const clickme31 = (e: number) => {
  setChooseColorWithDelay(setChoose31, e);
};

const clickme32 = (e: number) => {
  setChooseColorWithDelay(setChoose32, e);
};

const clickme33 = (e: number) => {
  setChooseColorWithDelay(setChoose33, e);
};

const clickme34 = (e: number) => {
  setChooseColorWithDelay(setChoose34, e);
};

const clickme35 = (e: number) => {
  setChooseColorWithDelay(setChoose35, e);
};

const clickme36 = (e: number) => {
  setChooseColorWithDelay(setChoose36, e);
};

const clickme37 = (e: number) => {
  setChooseColorWithDelay(setChoose37, e);
};

const clickme38 = (e: number) => {
  setChooseColorWithDelay(setChoose38, e);
};
const clickme39 = (e: number) => {
  setChooseColorWithDelay(setChoose39, e);
};
const clickme40 = (e: number) => {
  setChooseColorWithDelay(setChoose40, e);
};
const clickme41 = (e: number) => {
  setChooseColorWithDelay(setChoose41, e);
};
const clickme42 = (e: number) => {
  setChooseColorWithDelay(setChoose42, e);
};
// const all=()=>{
//   clickme(100);
//   clickme1(300);
//   clickme2(500);
//   clickme3(700);
//   clickme4(800);
//   clickme5(900);

// }

const setChooseColorWithDelay = (setChooseFunction: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: string): void; }, e: number) => {
  const delays = [0, 100, 200, 300, 400, 500, 600];
  delays.forEach((delay, index) => {
    setTimeout(() => {
      setChooseFunction(convertedColors[index]);
    }, e + delay);
  });
};
useEffect(() => {
  let clickMeExecuted = false;
  let clickMeExecuted1 = false;
  let clickMeExecuted2 = false;
  let clickMeExecuted3 = false;
  let clickMeExecuted4 = false;
  let clickMeExecuted5 = false;
  let clickMeExecuted6 = false;
let clickMeExecuted7 = false;
let clickMeExecuted8 = false;
let clickMeExecuted9 = false;
let clickMeExecuted10 = false;
let clickMeExecuted11 = false;
let clickMeExecuted12 = false;
let clickMeExecuted13 = false;
let clickMeExecuted14 = false;
let clickMeExecuted15 = false;
let clickMeExecuted16 = false;
let clickMeExecuted17 = false;
let clickMeExecuted18 = false;
let clickMeExecuted19 = false;
let clickMeExecuted20 = false;
let clickMeExecuted21 = false;
let clickMeExecuted22 = false;
let clickMeExecuted23 = false;
let clickMeExecuted24 = false;
let clickMeExecuted25 = false;
let clickMeExecuted26 = false;
let clickMeExecuted27 = false;
let clickMeExecuted28 = false;
let clickMeExecuted29 = false;
let clickMeExecuted30 = false;
let clickMeExecuted31 = false;
let clickMeExecuted32 = false;
let clickMeExecuted33 = false;
let clickMeExecuted34 = false;
let clickMeExecuted35 = false;
let clickMeExecuted36 = false;
let clickMeExecuted37 = false;
let clickMeExecuted38 = false;
let clickMeExecuted39 = false;
let clickMeExecuted40 = false;
let clickMeExecuted41 = false;
let clickMeExecuted42 = false;



  function handleScroll() {
    const scrollThreshold = 1300;
    if (window.scrollY<4500){
      setshow(true);

    }
    
    if (window.scrollY>4550){
      setshow(false)

    }
    if (window.scrollY <1600) {
      setshow(true)
      setChoose("text-[rgb(255,255,255)]");
setChoose1("text-[rgb(255,255,255)]");
setChoose2("text-[rgb(255,255,255)]");
setChoose3("text-[rgb(255,255,255)]");
setChoose4("text-[rgb(255,255,255)]");
setChoose5("text-[rgb(255,255,255)]");
setChoose6("text-[rgb(255,255,255)]");
setChoose7("text-[rgb(255,255,255)]");
setChoose8("text-[rgb(255,255,255)]");
setChoose9("text-[rgb(255,255,255)]");
setChoose10("text-[rgb(255,255,255)]");
setChoose11("text-[rgb(255,255,255)]");
setChoose12("text-[rgb(255,255,255)]");
setChoose13("text-[rgb(255,255,255)]");
setChoose14("text-[rgb(255,255,255)]");
setChoose15("text-[rgb(255,255,255)]");
setChoose16("text-[rgb(255,255,255)]");
setChoose17("text-[rgb(255,255,255)]");
setChoose18("text-[rgb(255,255,255)]");
setChoose19("text-[rgb(255,255,255)]");
setChoose20("text-[rgb(255,255,255)]");
setChoose21("text-[rgb(255,255,255)]");
setChoose22("text-[rgb(255,255,255)]");
setChoose23("text-[rgb(255,255,255)]");
setChoose24("text-[rgb(255,255,255)]");
setChoose25("text-[rgb(255,255,255)]");
setChoose26("text-[rgb(255,255,255)]");
setChoose27("text-[rgb(255,255,255)]");
setChoose28("text-[rgb(255,255,255)]");
setChoose29("text-[rgb(255,255,255)]");
setChoose30("text-[rgb(255,255,255)]");
setChoose31("text-[rgb(255,255,255)]");
setChoose32("text-[rgb(255,255,255)]");
setChoose33("text-[rgb(255,255,255)]");
setChoose34("text-[rgb(255,255,255)]");
setChoose35("text-[rgb(255,255,255)]");
setChoose36("text-[rgb(255,255,255)]");
setChoose37("text-[rgb(255,255,255)]");
setChoose38("text-[rgb(255,255,255)]");
setChoose39("text-[rgb(255,255,255)]");
setChoose40("text-[rgb(255,255,255)]");
setChoose41("text-[rgb(255,255,255)]");
setChoose42("text-[rgb(255,255,255)]");

      
    }  
    if (window.scrollY > scrollThreshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
      clickMeExecuted = false;
clickMeExecuted1 = false;
clickMeExecuted2 = false;
clickMeExecuted3 = false;
clickMeExecuted4 = false;
clickMeExecuted5 = false;
clickMeExecuted6 = false;
clickMeExecuted7 = false;
clickMeExecuted8 = false;
clickMeExecuted9 = false;
clickMeExecuted10 = false;
clickMeExecuted11 = false;
clickMeExecuted12 = false;
clickMeExecuted13 = false;
clickMeExecuted14 = false;
clickMeExecuted15 = false;
clickMeExecuted16 = false;
clickMeExecuted17 = false;
clickMeExecuted18 = false;
clickMeExecuted19 = false;
clickMeExecuted20 = false;
clickMeExecuted21 = false;
clickMeExecuted22 = false;
clickMeExecuted23 = false;
clickMeExecuted24 = false;
clickMeExecuted25 = false;
clickMeExecuted26 = false;
clickMeExecuted27 = false;
clickMeExecuted28 = false;
clickMeExecuted29 = false;
clickMeExecuted30 = false;
clickMeExecuted31 = false;
clickMeExecuted32 = false;
clickMeExecuted33 = false;
clickMeExecuted34 = false;
clickMeExecuted35 = false;
clickMeExecuted36 = false;
clickMeExecuted37 = false;
clickMeExecuted38 = false;
clickMeExecuted39 = false;
clickMeExecuted40 = false;
clickMeExecuted41 = false;
clickMeExecuted42 = false;

      
      
    }
    if (!clickMeExecuted && window.scrollY > 1800) {
      clickme(100); 
      clickMeExecuted = true; 
  }
  if (!clickMeExecuted1 && window.scrollY > 1860) {
      clickme1(100); 
      clickMeExecuted1 = true; 
  }
  if (!clickMeExecuted2 && window.scrollY > 1920) {
      clickme2(100); 
      clickMeExecuted2 = true; 
  }
  if (!clickMeExecuted3 && window.scrollY > 1980) {
      clickme3(100); 
      clickMeExecuted3 = true; 
  }
  if (!clickMeExecuted4 && window.scrollY > 2040) {
      clickme4(100); 
      clickMeExecuted4 = true; 
  }
  if (!clickMeExecuted5 && window.scrollY > 2100) {
      clickme5(100); 
      clickMeExecuted5 = true; 
  }
  if (!clickMeExecuted6 && window.scrollY > 2160) {
      clickme6(100); 
      clickMeExecuted6 = true; 
  }
  if (!clickMeExecuted7 && window.scrollY > 2220) {
      clickme7(100); 
      clickMeExecuted7 = true; 
  }
  if (!clickMeExecuted8 && window.scrollY > 2280) {
      clickme8(100); 
      clickMeExecuted8 = true; 
  }
  if (!clickMeExecuted9 && window.scrollY > 2340) {
      clickme9(100); 
      clickMeExecuted9 = true; 
  }
  if (!clickMeExecuted10 && window.scrollY > 2400) {
      clickme10(100); 
      clickMeExecuted10 = true; 
  }
  if (!clickMeExecuted11 && window.scrollY > 2460) {
      clickme11(100); 
      clickMeExecuted11 = true; 
  }
  if (!clickMeExecuted12 && window.scrollY > 2520) {
      clickme12(100); 
      clickMeExecuted12 = true; 
  }
  if (!clickMeExecuted13 && window.scrollY > 2580) {
      clickme13(100); 
      clickMeExecuted13 = true; 
  }
  if (!clickMeExecuted14 && window.scrollY > 2640) {
      clickme14(100); 
      clickMeExecuted14 = true; 
  }
  if (!clickMeExecuted15 && window.scrollY > 2700) {
      clickme15(100); 
      clickMeExecuted15 = true; 
  }
  if (!clickMeExecuted16 && window.scrollY > 2760) {
      clickme16(100); 
      clickMeExecuted16 = true; 
  }
  if (!clickMeExecuted17 && window.scrollY > 2820) {
      clickme17(100); 
      clickMeExecuted17 = true; 
  }
  if (!clickMeExecuted18 && window.scrollY > 2880) {
      clickme18(100); 
      clickMeExecuted18 = true; 
  }
  if (!clickMeExecuted19 && window.scrollY > 2940) {
      clickme19(100); 
      clickMeExecuted19 = true; 
  }
  if (!clickMeExecuted20 && window.scrollY > 3000) {
      clickme20(100); 
      clickMeExecuted20 = true; 
  }
  if (!clickMeExecuted21 && window.scrollY > 3060) {
      clickme21(100); 
      clickMeExecuted21 = true; 
  }
  if (!clickMeExecuted22 && window.scrollY > 3120) {
      clickme22(100); 
      clickMeExecuted22 = true; 
  }
  if (!clickMeExecuted23 && window.scrollY > 3180) {
      clickme23(100); 
      clickMeExecuted23 = true; 
  }
  if (!clickMeExecuted24 && window.scrollY > 3240) {
      clickme24(100); 
      clickMeExecuted24 = true; 
  }
  if (!clickMeExecuted25 && window.scrollY > 3300) {
      clickme25(100); 
      clickMeExecuted25 = true; 
  }
  if (!clickMeExecuted26 && window.scrollY > 3360) {
      clickme26(100); 
      clickMeExecuted26 = true; 
  }
  if (!clickMeExecuted27 && window.scrollY > 3420) {
      clickme27(100); 
      clickMeExecuted27 = true; 
  }
  if (!clickMeExecuted28 && window.scrollY > 3480) {
      clickme28(100); 
      clickMeExecuted28 = true; 
  }
  if (!clickMeExecuted29 && window.scrollY > 3540) {
      clickme29(100); 
      clickMeExecuted29 = true; 
  }
  if (!clickMeExecuted30 && window.scrollY > 3600) {
      clickme30(100); 
      clickMeExecuted30 = true; 
  }
  if (!clickMeExecuted31 && window.scrollY > 3660) {
      clickme31(100); 
      clickMeExecuted31 = true; 
  }
  if (!clickMeExecuted32 && window.scrollY > 3720) {
      clickme32(100); 
      clickMeExecuted32 = true; 
  }
  if (!clickMeExecuted33 && window.scrollY > 3780) {
      clickme33(100); 
      clickMeExecuted33 = true; 
  }
  if (!clickMeExecuted34 && window.scrollY > 3840) {
      clickme34(100); 
      clickMeExecuted34 = true; 
  }
  if (!clickMeExecuted35 && window.scrollY > 3900) {
      clickme35(100); 
      clickMeExecuted35 = true; 
  }
  if (!clickMeExecuted36 && window.scrollY > 3960) {
      clickme36(100); 
      clickMeExecuted36 = true; 
  }
  if (!clickMeExecuted37 && window.scrollY > 4020) {
      clickme37(100); 
      clickMeExecuted37 = true; 
  }
  if (!clickMeExecuted38 && window.scrollY > 4080) {
      clickme38(100); 
      clickMeExecuted38 = true; 
  }
  if (!clickMeExecuted39 && window.scrollY > 4140) {
      clickme39(100); 
      clickMeExecuted39 = true; 
  }
  if (!clickMeExecuted40 && window.scrollY > 4200) {
      clickme40(100); 
      clickMeExecuted40 = true; 
  }
  if (!clickMeExecuted41 && window.scrollY > 4260) {
      clickme41(100); 
      clickMeExecuted41 = true; 
  }
  if (!clickMeExecuted42 && window.scrollY > 4320) {
      clickme42(100); 
      clickMeExecuted42 = true; 
  }
  
  

  }

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); 

  console.log(isFixed);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY<1600){
        clickclick();

      }
      if (window.scrollY>1600){
        clickclick1();

      }

      console.log(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [flag1,setflag1]=useState(true);
  function clickclick(){
    setflag1(false);
    

  }
  function clickclick1(){
    setflag1(true);
    

  }
  const [show,setshow]=useState(true);

  
  return (
    
    
    <div className='h-[2200px] bg-sp flex justify-center text-center'>
      
        {show&&<div style={anton.style} className={`text-white ${isFixed? 'text-white fixed top-40 left-0 right-0 transition-all':""}`}>
            <p style={golo.style} className={`text-4xl mt-[10%]`}>WHAT IS LOLLAPALOOZA?</p>
            {/* <p onClick={clickme} className={` text-4xl ${choose} transition-all md:text-8xl mt-8 `}>4 DAYS OF THE WORLD'S</p> */}
            <div className='md:text-8xl text-4xl mt-8 flex justify-center text-white'>
              <p  className={`${flag1&&choose} transition-all tracking-custom`}>4</p>
              <p className={`${choose1} transition-all`} >D</p>

              <p className={`${choose2} transition-all`}  >A</p>
              <p className={`${choose3} transition-all`}>Y</p>
              <p className={`${choose4} transition-all`}>'</p>
              <p className={`${choose5} transition-all tracking-custom`}>S</p>
              <p className={`${choose6} transition-all`}>O</p>
              <p className={`${choose7} transition-all tracking-custom`}>F</p>
              <p className={`${choose8} transition-all`}>T</p>
              <p className={`${choose9} transition-all`}>H</p>
              <p className={`${choose10} transition-all tracking-custom`}>E</p>
              <p className={`${choose11} transition-all`}>W</p>
              <p className={`${choose12} transition-all`}>O</p>
              <p className={`${choose13} transition-all`}>R</p>
              <p className={`${choose14} transition-all`}>L</p>
              <p className={`${choose15} transition-all`}>D</p>
            </div>
            {/* <p onClick={clickme} className={`text-4xl md:text-8xl `}>BEST MUSIC IN THE</p> */}
            <div className='md:text-8xl text-4xl mt-8 flex justify-center'>
              <p className={`${choose11} transition-all`}>B</p>
              <p className={`${choose16} transition-all`}>E</p>
              <p className={`${choose17} transition-all`}>S</p>
              <p className={`${choose18} transition-all tracking-custom`}>T</p>
              <p className={`${choose19} transition-all`}>M</p>
              <p className={`${choose20} transition-all`}>U</p>
              <p className={`${choose21} transition-all`}>S</p>
              <p className={`${choose22} transition-all`}>I</p>
              <p className={`${choose23} transition-all tracking-custom`}>C</p>
              <p className={`${choose24} transition-all`}>I</p>
              <p className={`${choose25} transition-all tracking-custom`}>N</p>
              <p className={`${choose26} transition-all`}>T</p>
              <p className={`${choose27} transition-all`}>H</p>
              <p className={`${choose28} transition-all`}>E</p>
            </div>
            {/* <p onClick={clickme} className={`text-4xl md:text-8xl `}>HEART OF CHICAGO</p> */}
            <div className='md:text-8xl text-4xl mt-8 flex justify-center'>
              <p className={`${choose29} transition-all`}>H</p>
              <p className={`${choose30} transition-all`}>E</p>
              <p className={`${choose31} transition-all`}>A</p>
              <p className={`${choose32} transition-all`}>R</p>
              <p className={`${choose33} transition-all tracking-custom`}>T</p>
              <p className={`${choose34} transition-all`}>O</p>
              <p className={`${choose35} transition-all tracking-custom`}>F</p>
              <p className={`${choose36} transition-all`}>C</p>
              <p className={`${choose37} transition-all`}>H</p>
              <p className={`${choose38} transition-all`}>I</p>
              <p className={`${choose39} transition-all`}>C</p>
              <p className={`${choose40} transition-all`}>A</p>
              <p className={`${choose41} transition-all`}>G</p>
              <p className={`${choose42} transition-all`}>O</p>
            </div>
        </div>}
        {/* <button onClick={clickme} className={choose}><h1 className='transition-all'>Text</h1></button> */}
        
        

    </div>
  )
}

export default Third