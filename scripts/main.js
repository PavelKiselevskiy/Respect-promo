document.addEventListener("DOMContentLoaded", function () {
  const f = new Swiper(".swiper", {
    loop: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: !0,
      renderBullet: function (n, t) {
        return '<span class="' + t + '">' + (n + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: !0,
    },
  });
  let n = document.querySelectorAll(".custom-box"),
    t = document.querySelectorAll(".custom-btn");
  for (let t = 0; t < n.length; t++) {
    let u = n[t].querySelector(".custom-p");
    var i = u.scrollHeight,
      r = n[t].querySelector(".custom-btn");
    i < 70 && r.classList.add("custom-btn-hidden");
  }
  t.forEach((n) =>
    n.addEventListener("click", () => {
      const t = n.parentNode;
      t.classList.toggle("custom-box-open");
    })
  );
  new Accordion(".accordion-container");

  const u = document.querySelectorAll('a[href*="#"]');
  for (let n of u)
    n.addEventListener("click", function (t) {
      t.preventDefault();
      const i = n.getAttribute("href").substr(1);
      document
        .getElementById(i)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });


});
