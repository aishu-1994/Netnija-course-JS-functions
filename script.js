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
  courseList.innerHTML = "";
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
      popup,
      firstprice,
      secondprice,
    } = course;

    const courseEl = document.createElement("div");

    courseEl.classList.add("course");

    courseEl.innerHTML = `
      <div class="course-list">
        <div class="course-list-container">
          <div class="course-module">
            <div class="course-card">
              <div class="course-card-img-container">
                <img src="${Image}" />
              </div>

              <div class="course-card-main-content">
                <a href="${courseLink}">
                  <h3>${CourseName}</h3>
                </a>
                <p>
                 ${Description}
                </p>
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
                 <div class="prices">
      <div class="first">${firstprice}</div>
        <div class="second">${secondprice}</div>
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    courseList.appendChild(courseEl);
  });
}
const categories = document.querySelector(".nav-categories");
const hovsection = document.querySelector(".hove-section");
console.log(categories);
categories.addEventListener("mouseover", () => {
  /*hideAllContents();*/
  console.log("qwe");
  hovsection.classList.add("hove-section-active");
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
  /*hideAllContents();*/
  console.log("qwe");
  toggleUdbusiness.classList.add("toggle-Udbusiness-active");
});
// udbusiness.addEventListener("mouseout", () => {
//   toggleUdbusiness.classList.remove("toggle-udbusiness-active");
// });

toggleUdbusiness.addEventListener("mouseover", () => {
  toggleUdbusiness.classList.add("toggle-Udbusiness-active");
});

toggleUdbusiness.addEventListener("mouseout", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});

udteach.addEventListener("mouseover", () => {
  /*hideAllContents();*/
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");

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
  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

udlearning.addEventListener("mouseout", () => {
  toggleUdlearning.classList.remove("toggle-udlearning-active");
});

toggleUdlearning.addEventListener("mouseover", () => {
  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

toggleUdlearning.addEventListener("mouseout", () => {
  toggleUdlearning.classList.remove("toggle-Udlearning-active");
});

const udwishlist = document.querySelector(".udwishlist");
const toggleUdwishlist = document.querySelector(".toggle-udwishlist");

udwishlist.addEventListener("mouseover", () => {
  /*hideAllContents();*/
  console.log("qwe");
  toggleUdwishlist.classList.add("toggle-udwishlist-active");
});

udwishlist.addEventListener("mouseout", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
});

toggleUdwishlist.addEventListener("mouseover", () => {
  toggleUdwishlist.classList.add("toggle-Udwishlist-active");
});

toggleUdwishlist.addEventListener("mouseout", () => {
  toggleUdwishlist.classList.remove("toggle-Udwishlist-active");
});

const udcartlist = document.querySelector(".udcartlist");
const toggleUdcartlist = document.querySelector(".toggle-udcartlist");

udcartlist.addEventListener("mouseover", () => {
  /*hideAllContents();*/
  console.log("qwe");
  toggleUdcartlist.classList.add("toggle-udcartlist-active");
});

udcartlist.addEventListener("mouseout", () => {
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");
});
toggleUdcartlist.addEventListener("mouseover", () => {
  toggleUdcartlist.classList.add("toggle-Udcartlist-active");
});

toggleUdcartlist.addEventListener("mouseout", () => {
  toggleUdcartlist.classList.remove("toggle-Udcartlist-active");
});

const udbellicon = document.querySelector(".udbellicon");
const toggleUdbellicon = document.querySelector(".toggle-udbellicon");

udbellicon.addEventListener("mouseover", () => {
  /*hideAllContents();*/
  console.log("qwe");
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
  /*hideAllContents();*/
  console.log("qwe");
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
