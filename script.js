// Scroll progress bar
window.addEventListener("scroll", () => {
  const s = document.documentElement.scrollTop;
  const h =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.getElementById("sp").style.width = (s / h) * 100 + "%";
});

// Scroll reveal
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("vis"), i * 70);
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

// Skill bars animate
const bobs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target
          .querySelectorAll(".sbf")
          .forEach((f) => (f.style.transform = `scaleX(${f.dataset.w})`));
        bobs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);
document.querySelectorAll(".sbars").forEach((el) => bobs.observe(el));

// Mobile hamburger
document.getElementById("hbg").addEventListener("click", () => {
  const nl = document.getElementById("nl");
  const open = nl.style.display === "flex";
  nl.style.cssText = open
    ? ""
    : "display:flex;flex-direction:column;position:fixed;top:60px;left:0;right:0;background:rgba(6,9,16,0.98);padding:24px 30px;gap:18px;border-bottom:1px solid rgba(255,255,255,0.06);z-index:999;";
});

// EmailJS init
(function () {
  emailjs.init("f5sMgMrP8zgnoJdfq");
})();

function doSend(b) {
  var name = document.getElementById("from_name").value.trim();
  var email = document.getElementById("from_email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  b.disabled = true;
  b.innerHTML = '<i class="fas fa-spinner fa-spin"></i>&nbsp; Sending...';

  emailjs
    .send("service_el0szkt", "template_1xfilwr", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    })
    .then(
      function () {
        b.innerHTML = '<i class="fas fa-check"></i>&nbsp; Sent Successfully!';
        b.style.background = "#22c55e";
        document.getElementById("from_name").value = "";
        document.getElementById("from_email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        setTimeout(function () {
          b.innerHTML = '<i class="fas fa-paper-plane"></i>&nbsp; Send Message';
          b.style.background = "";
          b.disabled = false;
        }, 3000);
      },
      function (err) {
        console.error("EmailJS error:", err);
        b.innerHTML = '<i class="fas fa-times"></i>&nbsp; Failed. Try Again.';
        b.style.background = "#ef4444";
        setTimeout(function () {
          b.innerHTML = '<i class="fas fa-paper-plane"></i>&nbsp; Send Message';
          b.style.background = "";
          b.disabled = false;
        }, 3000);
      },
    );
}

// Dynamic role typing
(function () {
  var roles = [
    "Python Fullstack",
    "Django Developer",
    //"Flask Developer",
    "Web Developer",
    "Python Developer",
  ];
  var el = document.getElementById("dynRole");
  if (!el) return;
  var ri = 0,
    ci = 0,
    deleting = false;
  function type() {
    var current = roles[ri];
    if (!deleting) {
      el.textContent = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  el.style.cssText =
    "border-right:2px solid var(--cyan);padding-right:3px;animation:blink 0.7s step-end infinite;";
  type();
})();
