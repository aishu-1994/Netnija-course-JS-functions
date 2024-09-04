const courseList = document.querySelector(".course-list");
const highest = document.querySelector(".highest");
getCourses();
async function getCourses() {
  const res = await fetch("./details.json");
  const data = await res.json();
  console.log(data);
  showCourses(data);
}

function showCourses(courses) {
  console.log(courses);
  courseList.innerHTML = " ";
  courses.forEach((course) => {
    const {
      Image,
      CourseName,
      courseLink,
      Description,
      Source,
      Rating,
      Duration,
      scores,
      popups,
      firstprice,
      secondprice,
    } = course;

    const courseEl = document.createElement("div");

    courseEl.classList.add("course");

    courseEl.innerHTML = `
      
        <div class="course-list-container">

         
          <div class="course-module">
            <div class="course-card">
              <div class="course-card-img-container">
                <img src="${Image}"/>
       </div>

              <div class="course-card-main-content">
                <a href="${courseLink}">
                  <h3>${CourseName}</h3>
                </a>
                <h4>
                 ${Description}
                </h4>
                <div class="course-card-instructor">
                  The <strong>Net</strong>
                  <strong>Ninja</strong> (Shaun pelling)
                </div>
                <div class="starrating">
                  <span class="point">${Rating[0]}</span>
                  <img src="${Rating[1]}" />
                  <span class="numbers">${Rating[2]}</span>
                  <div class="levels">
                    ${Duration}
                  </div>
                  <span class="highest">${scores}</span>

   </div>
  
  



    
                 <div class="prices">
      <div class="first">${firstprice}</div>
        <div class="second">${secondprice}</div>
      </div>

<div class="popup">

<div class="popup-heading"><h2>What you'll learn</h2></div>

<p class="one">${popups[0]}</p>
<p class="two">${popups[1]}</p>
<p class="three">${popups[2]}</p>
<div class="addto-Cart"><h2>Add to Cart</h2></div>
<div class="circle"></div>
<i class="fa fas-heart"></i>
</div>

                
              </div>
            </div>
          </div>
        </div>
      
    `;

    courseList.appendChild(courseEl);
  });
  const coursecontent = document.querySelectorAll(".course-card-main-content");

  coursecontent.forEach((element) => {
    const popup = element.querySelector(".popup");

    element.addEventListener("mouseover", () => {
      popup.classList.add("popup-show");
    });

    element.addEventListener("mouseout", () => {
      popup.classList.remove("popup-show");
    });
    popup.addEventListener("mouseover", () => {
      popup.classList.add("popup-show");
    });
    popup.addEventListener("mouseout", () => {
      popup.classList.remove("popup-show");
    });
  });
}

const categories = document.querySelector(".nav-categories");
const hovsection = document.querySelector(".hove-section");

categories.addEventListener("mouseover", () => {
  hovsection.classList.add("hove-section-active");
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});

categories.addEventListener("mouseout", () => {
  hovsection.classList.remove("toggle-hovesection-active");
});

hovsection.addEventListener("mouseover", () => {
  hovsection.classList.add("hove-section-active");
});

hovsection.addEventListener("mouseout", () => {
  hovsection.classList.remove("hove-section-active");
});

const udbusiness = document.querySelector(".udbusiness");
const toggleUdbusiness = document.querySelector(".toggle-Udbusiness");
const udteach = document.querySelector(".udteach");
const toggleUdteach = document.querySelector(".toggle-Udteach");

udbusiness.addEventListener("mouseover", () => {
  hovsection.classList.remove("hove-section-active");
  toggleUdteach.classList.remove("toggle-Udteach-active");
  toggleUdbusiness.classList.add("toggle-Udbusiness-active");
});

udbusiness.addEventListener("mouseout", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});
toggleUdbusiness.addEventListener("mouseover", () => {
  toggleUdbusiness.classList.add("toggle-Udbusiness-active");
});
toggleUdbusiness.addEventListener("mouseout", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});

udteach.addEventListener("mouseover", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
  toggleUdlearning.classList.remove("toggle-Udlearning-active");

  toggleUdteach.classList.add("toggle-Udteach-active");
});
udteach.addEventListener("mouseout", () => {
  toggleUdteach.classList.remove("toggle-udteach-active");
});
toggleUdteach.addEventListener("mouseover", () => {
  toggleUdteach.classList.add("toggle-Udteach-active");
});

toggleUdteach.addEventListener("mouseout", () => {
  toggleUdteach.classList.remove("toggle-Udteach-active");
});

const udlearning = document.querySelector(".udlearning");
const toggleUdlearning = document.querySelector(".toggle-Udlearning");

udlearning.addEventListener("mouseover", () => {
  /*hideAllContents();*/
  toggleUdteach.classList.remove("toggle-Udteach-active");
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");

  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

udlearning.addEventListener("mouseout", () => {
  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

toggleUdlearning.addEventListener("mouseover", () => {
  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

toggleUdlearning.addEventListener("mouseout", () => {
  toggleUdlearning.classList.remove("toggle-Udlearning-active");
});

const udwishlist = document.querySelector(".udwishlist");
const toggleUdwishlist = document.querySelector(".toggle-udwishlist");
const udcartlist = document.querySelector(".udcartlist");
const toggleUdcartlist = document.querySelector(".toggle-udcartlist");
udwishlist.addEventListener("mouseover", () => {
  toggleUdlearning.classList.remove("toggle-Udlearning-active");
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");

  toggleUdwishlist.classList.add("toggle-udwishlist-active");
});

udwishlist.addEventListener("mouseout", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
});

toggleUdwishlist.addEventListener("mouseover", () => {
  toggleUdwishlist.classList.add("toggle-udwishlist-active");
});

toggleUdwishlist.addEventListener("mouseout", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
});

udcartlist.addEventListener("mouseover", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
  toggleUdbellicon.classList.remove("toggle-ubellicon-active");

  toggleUdcartlist.classList.add("toggle-udcartlist-active");
});

udcartlist.addEventListener("mouseout", () => {
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");
});
toggleUdcartlist.addEventListener("mouseover", () => {
  toggleUdcartlist.classList.add("toggle-udcartlist-active");
});

toggleUdcartlist.addEventListener("mouseout", () => {
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");
});

const udbellicon = document.querySelector(".udbellicon");
const toggleUdbellicon = document.querySelector(".toggle-udbellicon");

udbellicon.addEventListener("mouseover", () => {
  toggleUdbellicon.classList.add("toggle-udbellicon-active");
});
toggleUdbellicon.addEventListener("mouseover", () => {
  toggleUdbellicon.classList.add("toggle-Udbellicon-active");
});

toggleUdbellicon.addEventListener("mouseout", () => {
  toggleUdbellicon.classList.remove("toggle-Udbellicon-active");
});

udbellicon.addEventListener("mouseout", () => {
  toggleUdbellicon.classList.remove("toggle-udbellicon-active");
});

const udnameAS = document.querySelector(".name-AS");
const toggleUdnameAS = document.querySelector(".toggle-name");

udnameAS.addEventListener("mouseover", () => {
  toggleUdnameAS.classList.add("toggle-name-active");
});

toggleUdnameAS.addEventListener("mouseover", () => {
  toggleUdnameAS.classList.add("toggle-toggleUdnameAS-active");
});

toggleUdnameAS.addEventListener("mouseout", () => {
  toggleUdnameAS.classList.remove("toggle-toggleUdnameAS-active");
});
udnameAS.addEventListener("mouseout", () => {
  toggleUdnameAS.classList.remove("toggle-name-active");
});

/////////////////////////////////////////////////////////////////////

const upArrow = document.querySelector(".uparrow1");
console.log(upArrow);
const contentwrapper = document.querySelector(".panel-module-content-wrapper");
// console.log(contentwrapper);

upArrow.addEventListener("click", () => {
  console.log("123");

  // contentwrapper.classList.add("panel-module-content-wrapper-hidden");
  {
    contentwrapper.classList.contains("panel-module-content-wrapper-hidden")
      ? contentwrapper.classList.remove("panel-module-content-wrapper-hidden")
      : contentwrapper.classList.add("panel-module-content-wrapper-hidden");
  }
});

// const languagecontent = document.querySelectorAll(".language-content");

const panelmodule = document.querySelectorAll(".panel-module");
// const uparrowall = document.querySelector(".uparrow");
panelmodule.forEach((module, index) => {
  const uparrowall = module.querySelector(".uparrow");
  const languagecontent = module.querySelector(".language-content");
  // console.log(languagecontent);
  uparrowall.addEventListener("click", () => {
    console.log(index);
    {
      languagecontent.classList.contains("language-content-hidden")
        ? languagecontent.classList.remove("language-content-hidden") &&
          languagecontent.classList.add("language-content-show")
        : languagecontent.classList.add("language-content-hidden") &&
          languagecontent.classList.remove("language-content-show");
    }
  });
});

const btnbar = document.querySelector(".btn-bar");
const mobilename = document.querySelector(".mobile-name1");

const closebutton = document.querySelector(".close-btn");
console.log(closebutton);
//127.0.0.1:5502/index.html

http: btnbar.addEventListener("click", () => {
  mobilename.classList.add("mobile-name1-show");
  closebutton.classList.remove("close-btn-hidden");
  closebutton.classList.add("close-btn-show");
});

closebutton.addEventListener("click", () => {
  mobilename.classList.remove("mobile-name1-show");
  closebutton.classList.add("close-btn-show");
  closebutton.classList.remove("close-btn-show");
});
const btnside = document.querySelector(".mobile-btn-side");
const btnright = document.querySelector(".mobile-btn-right");
const menubar = document.querySelector(".mobile-menu");

btnright.addEventListener("click", () => {
  menubar.classList.add("mobile-menu-show");
});
btnside.addEventListener("click", () => {
  menubar.classList.remove("mobile-menu-show");
  mobilename.classList.add("mobile-name1-show");
});
const closebuttonmobile2 = document.querySelector(".close-btn-mobile");
console.log(closebuttonmobile2);
const headermobile = document.querySelector(".header-container-mobile");
const mainpage = document.querySelector(".main-page");
const results = document.querySelector(".results");
const btnfilter = document.querySelector(".btn-ud ");
const filtersidebar = document.querySelector(".filterpanel-sidebar");
btnfilter.addEventListener("click", () => {
  filtersidebar.classList.add("filterpanel-sidebar-show");
  results.classList.add("results-show");
  mainpage.classList.add("main-page-show");
  headermobile.classList.add("header-container-mobile-hidden");
  closebuttonmobile2.classList.add("close-btn-mobile-show");
});
closebuttonmobile2.addEventListener("click", () => {
  filtersidebar.classList.remove("filterpanel-sidebar-show");
  results.classList.remove("results-show");
  mainpage.classList.remove("main-page-show");
  headermobile.classList.remove("header-container-mobile-hidden");
  closebuttonmobile2.classList.remove("close-btn-mobile-show");
});

// const coursecard = document.querySelectorAll(".course-card");
// coursecard.forEach((cc) => {
// const maincontent = cc.getElementsByClassName("course-card-main-content");
// console.log(maincontent);
// maincontent[0].addEventListener("click", () => {
//   console.log("147");
// });

// });
