
const testimonial = [
  {
    id: 0,
    name: "Tanya Sinclair",
    role: "UX Designer",
    copy: ' \" I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future. \" ',
    image: "images/image-tanya.jpg"
  },
  {
    id: 1,
    name: "John Tarkpor",
    role: "Junior Fron-end Developer",
    copy: ' \" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \" ',
    image: "images/image-john.jpg"
}];

var i = 0;

//LOAD INITIAL TESTIMONIAL
function loadData(){
  document.querySelector("#name").innerHTML = testimonial[0].name;
  document.querySelector("#role").innerHTML = testimonial[0].role;
  document.querySelector("#copy").innerHTML = testimonial[0].copy;
  document.querySelector("#profile").setAttribute("src", testimonial[0].image);
  i = testimonial[0].id;
}

//LOAD PREVIOUS or NEXT TESTIMONIAL
function changeProfile(i){
  document.querySelector("#name").innerHTML = testimonial[i].name;
  document.querySelector("#role").innerHTML = testimonial[i].role;
  document.querySelector("#copy").innerHTML = testimonial[i].copy;
  document.querySelector("#profile").setAttribute("src", testimonial[i].image);
}

//Initiate first profile
loadData();

document.querySelector("#prevBtn").addEventListener("click", function(){
  i--;
  if (i < 0){
    i = testimonial.length-1;
  }
  changeProfile(i);
});
document.querySelector("#nextBtn").addEventListener("click", function(){
  i++;
  if (i > testimonial.length-1){
    i = 0;
  }
  changeProfile(i);
});
