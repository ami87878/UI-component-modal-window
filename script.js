'use strict';

const selFunc=function(selector){

 return document.querySelector(selector);


};


const selAllFunc=function(selectors){

 return document.querySelectorAll(selectors);


};

//  const addHidden=function(element){     //ravesh khodam



//     element.addEventListener(`click`,function(){

//         modal.classList.add('hidden');
//         overlay.classList.add(`hidden`);
    
//  });

//  };




const modal= selFunc(`.modal`);



const overlay=selFunc(`.overlay`);


const closeModal=selFunc(`.close-modal`);

const showModal=selAllFunc(`.show-modal`);

for( let n=0;n<showModal.length;n++){


showModal[n].addEventListener('click',function(){


modal.classList.remove('hidden');
overlay.classList.remove(`hidden`)


});

}


//closing modal 



const closeFunc=function(){

    modal.classList.add('hidden');
    overlay.classList.add(`hidden`);



};



closeModal.addEventListener(`click`,closeFunc);

//any where besides close button

overlay.addEventListener(`click`,closeFunc);





// addHidden(overlay);
// addHidden(closeModal);






document.addEventListener(`keydown`,function(parametr){

  if(parametr.key=== `Escape`){
    // modal.classList.add('hidden');
    // overlay.classList.add(`hidden`);
    closeFunc();
  }



    
    })
    
    

