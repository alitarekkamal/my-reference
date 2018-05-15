$(document).ready(function(){
  let family = [
    {"name":"ali", "age":28, "phone":"01007620515", "gender":"male"},
    {"name":"ahmed", "age":30, "phone":"0115789562", "gender":"male"},
    {"name":"ghadeer", "age":23, "phone":"0100658296", "gender":"female"},
    {"name":"sarah", "age":28, "phone":"01067556668", "gender":"female"},
    {"name":"fatma", "age":50, "phone":"01006599007", "gender":"female"}
  ];

//----------------USING FOR LOOP-------------------------

  for(let i = 0; i < family.length; i++){
    $(".for").append("<li>"+JSON.stringify(family[i])+"</li>");
  };
//-----------------USING FOREACH -------------------------

  family.forEach(function(person){
    $(".forEach").append("<li>"+JSON.stringify(person)+"</li>");
  });
//----------------- using arrow function------------------

  let names = family.map(person => "<li>"+person.name+"</li>");
  $(".arrow").append(names);
//--------------------Using Filter-----------------------

  const man = family.filter(function(age){
    $(".filter").append("<li>"+JSON.stringify(age.age)+"</li>");
  });
  const human = family.filter(function(family){
    if(family.name.length > 3){
      $(".new").append("<li>"+JSON.stringify(family.name)+"</li>");}
  });
//----------------------USING MAP-----------------------------

  let phone = family.map(function(person){
  $(".phone").append("<li>"+person.phone+"</li>");
  });
//------------------------using sort-------------------------

  let Age = family.map((person) => person.age);
  let sortAge = Age.sort((a, b) => a>b);
  $(".sort").append(sortAge);
  sortAge.forEach((ages) => $(".list").append("<li>"+ages+"</li>"));
  //-----------------------show gender--------------------------

  let genders = family.filter((male)=>{return male.gender ==="male"})
  let males = genders.forEach((male)=>{$(".male").append("<li>"+male.name+" is "+male.age+" years old</li>")});
});
