window.onload=function(){
    //头部
    let tou=document.getElementsByClassName('gouwu')[0];
    console.log(tou)
    let toub=document.getElementsByClassName('gouwu-bom')[0];
    let toup=toub.getElementsByTagName('p')[0]

    tou.onmouseover=function(){
        toub.style.height='100px';
        toub.style.display='block';
    }
     tou.onmouseout=function(){
        toub.style.height='0';
        toub.style.display='none';

    }

    //导航
    let navc=document.getElementsByClassName('nav-center')[0];
    let nlis=navc.getElementsByTagName('li');
    let nbom=navc.getElementsByClassName('nav-bottom');
    for(let i=0;i<nlis.length-2;i++){
        nlis[i].onmouseover=function(){
            nbom[i].style.display='block';
            // nbom[i].style.height='200px';
            

        }
        nlis[i].onmouseout=function(){
            nbom[i].style.display='none';
            // nbom[i].style.height='0';
        }
    }
    //banner
	let list=document.getElementsByClassName('list')[0];
	let lis=list.getElementsByTagName('li');
	let right=list.getElementsByClassName('right-right');
	//
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			right[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			right[i].style.display='none';
		}
	}
	//////////////////////////////////////////
	let ban=document.getElementsByClassName('banner')[0];
	let liss=ban.getElementsByTagName('li');
	let btn=document.getElementsByClassName('btn-list')[0];
	let liss1=btn.getElementsByTagName('li');
	let big=document.getElementsByClassName('big-box')[0];
	let lefts=big.getElementsByClassName('banner-left')[0];
	let rights=big.getElementsByClassName('banner-right')[0];
     ////////////////////////////////////////
     let num=0;
     let t  = setInterval(run,3000);
     big.onmouseover=function(){
     	clearInterval(t);
     }
     big.onmouseout=function(){
        t=setInterval(run,3000);
     }
     /////////////////////////////////////////
    //  let now=0;
    //    for(let i=0;i<liss1.length;i++){
    //    	liss1[i].onclick=function(){
    //    		liss1[now].style.background='#77777e';
       		
    //    		liss[now].style.display='none';
    //    		liss[i].style.display='block';
    //    		liss1[i].style.background='#fff';
    //    		now=i;
       		
    //     }

    // }
    for(let i=0;i<liss.length;i++){
    	liss1[0].style.background='#fff';
	 	liss1[i].onclick=function(){
	 		for(let i=0;i<liss1.length;i++){
	 	   liss1[i].style.background='#98979B';
	 	   animate(liss[i],{opacity:0});
	 	}
		
	 	   liss1[i].style.background='#fff';
           animate(liss[i],{opacity:1});
	 	  
	 	   num=i;
 	}
    }
    /////////////////////////////////////////
      let flag=true;
      lefts.onclick=function(){
        if(!flag){
            return;
        }
      	runl();
        flag=false;
      }
      rights.onclick=function(){
        if(!flag){
            return;
        }
      	run();
         flag=false;
      }
    ///////////////////////////////////////////
     function run(){
     	 num++;
     	if(num==liss.length){
     		num=0;
     	}
     	for(let i=0;i<liss.length;i++){
     		liss1[i].style.background='#77777e';
           animate(liss[i],{opacity:0});
     		
     	}
           animate(liss[num],{opacity:1},function(){
            flag=true;
           });
       
        liss1[num].style.background='#fff';
     
     }
      function runl(){
     	 num--;
     	if(num<0){
     		num=liss.length-1;
     	}
     	for(let i=0;i<liss.length;i++){
     		liss1[i].style.background='#77777e';
           animate(liss[i],{opacity:0});
     		
     	}
           animate(liss[num],{opacity:1},function(){
            flag=true;
           });
       
        liss1[num].style.background='#fff';
     
     }
     ////////////////////////////////////////////
    let b=document.getElementsByClassName('big-box1')[0];
    let bm=b.getElementsByClassName('box-bottom')[0];
    let le=b.getElementsByClassName('left')[0];
    let lei=le.getElementsByTagName('i')[0];
    let ri=b.getElementsByClassName('right')[0];
    let rii=ri.getElementsByTagName('i')[0];
    
        rii.onclick=function(){
        bm.style.marginLeft='-1240px';
        rii.style.color='#b0b0b0';
        lei.style.color='#000';

        
        } 
   
        lei.onclick=function(){
        bm.style.marginLeft='0px';
        rii.style.color='#000';
        lei.style.color='#b0b0b0';
         

        }

   setInterval(function(){
      bm.style.marginLeft='-1240px';
      bm.style.transition='all ease 1s';
       lei.style.color='#000';
       rii.style.color='#b0b0b0';
    },4000);
   setInterval(function(){
      bm.style.marginLeft='0';
       bm.style.transition='all ease 1s';
       lei.style.color='#b0b0b0';
       rii.style.color='#000';
    },8000);
   
  
}