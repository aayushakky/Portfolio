/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /* Active and remove menus*/
  const navLink = document.querySelectorAll(".nav__link");
  
  function linkAction() {
    //active link
  
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    //remove
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  /*  Scroll reveal*/
  
  // const sr = ScrollReveal({
  //   origin: "top",
  //   distance: "80px",
  //   reset: true,
  // });
  
  
  // sr.reveal('.about__container', {
  //   duration: 1000,
  //   easing: 'ease-in-out',
  //   scale: 0.2 
  // });
  
  /* Scroll Home */
  
  // sr.reveal(".home__title", {});
  // sr.reveal(".button", { delay: 200 });
  // sr.reveal(".home__img", { delay: 400 });
  // sr.reveal(".home__social-icon", { interval: 200 });
  
  // /* Scroll About */
  // sr.reveal(".about__img", {});
  // sr.reveal(".about__subtitle", { delay: 200 });
  // sr.reveal(".about__text", { delay: 400 });
  
  /* Scroll Skills */
  // sr.reveal(".skills__subtitle", {});
  // sr.reveal(".skills__text", { delay: 200 });
  // sr.reveal(".skills__data", { interval: 200 });
  // sr.reveal(".skills__img", { delay: 400 });
  
  /* Scroll Work */
  // sr.reveal(".work__img", { interval: 200 });
  
  /* Scroll Work */
  // sr.reveal(".contact__input", { interval: 0 });
  
  /* contact form */
  function submit_contact() {
    const con_name = document.forms["myForm"]["name_input"].value;
    const con_mail = document.forms["myForm"]["email_input"].value;
    const con_textarea = document.forms["myForm"]["textarea_input"].value;
    if (con_name == " " || con_mail == "" || con_textarea == "") {
      swal({
        text: "All Fields are Required",
        icon: "warning",
      });
  
      return false;
    } else if (
      con_mail.charAt(con_mail.length - 4) != "." &&
      con_mail.charAt(con_mail.length - 3) != "."
    ) {
      swal({
        text: "Invalid Email",
        icon: "warning",
      });
  
      return false;
    } else {
      swal({
        title: "Good job!",
        text: "Thank you for submitting",
        icon: "success",
      });
  
      document.getElementById("MyForm").reset();
      return true;
    }
  }
  
  // // animation text
  // const text1 = ['Developer','YouTuber',"UI Designer" , "Pythoneer"];
  // let count1 = 0;
  // let index1 = 0;
  
  // let letter1 = [''];
  
  // (function typeanimate(){
  
  //   if (count1 === text1.length){
  //     count1 = 0;
  //   }
  
  //   currentTex1 = text1[count1];
  //   letter1 = currentTex1.slice(0, ++index1);
  
  //   document.querySelector('.text-animation1').textContent=letter1;
  
  //   if(letter1.length === currentTex1.length){
  //     count1++;
  //     index1=0;
  //   }
  
  //   setTimeout(typeanimate, 320);
  // }());