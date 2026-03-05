const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log("iintersectuion observer", entry)

    if (entry.isIntersecting) console.log("appear")
  });
}, { threshold: 0 })
// }, { threshold: [0, 0.25, 0.75, 1] })

//threshold: cuanto del objecto es visible 0 - 1

const ad = document.querySelector(".ad");

observer.observe(ad);