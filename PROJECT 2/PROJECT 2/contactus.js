const handlesubmit = (e) => {
  e.preventDefault();
  let x = document.getElementById("username");
  let y = document.getElementById("email");
  let z = document.getElementById("subject");
  let q = document.getElementById("suggestion");
  fetch("http://localhost:5000/contactus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: x.value,
      email: y.value,
      subject: z.value,
      suggestion: q.value,
    }),
  })
    .then((res) => res.json())
    .then((ele) => {
      if (ele.success) {
        document.getElementById("myalert").style.display = "block";
        document.getElementById("alertdata").innerHTML = ele.message;
        setTimeout(() => {
          document.getElementById("myalert").style.display = "none";
          window.location.href = "index.html";
        }, 3000);
      } else {
        document.getElementById("myalert").style.display = "block";
        document.getElementById("alertdata").innerHTML = ele.message;
        setTimeout(() => {
          document.getElementById("myalert").style.display = "none";
          window.location.href = "index.html";
        }, 3000);
      }
    });
};

document.getElementById("contactform").addEventListener("submit", handlesubmit);
