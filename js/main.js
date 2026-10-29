const form = document.getElementById('portfolioForm');
const status = document.getElementById('formStatus');
const myNumber = "2349156002887";

// 1. Formspree submit - works alone
form.addEventListener("submit", async (e)=>{
e.preventDefault();
let btn = document.getElementById('bookBtn');
btn.textContent = "Sending...";
btn.disabled = true;
let data = new FormData(form);
try{
  let res = await fetch(form.action, {method: form.method, body: data, headers: {'Accept': 'application/json'}});
  if(res.ok){
   window.location.href = `thank-you.html?name=${encodeURIComponent(document.getElementById('name').value)}`;
  } else {
   throw new Error();
  }
} catch{
  status.style.display="block";
  status.style.color="red";
  status.textContent="Failed to send. Please try WhatsApp.";
  btn.textContent="Submit Message";
  btn.disabled=false;
}
});

// 2. Separate WhatsApp chat - does NOT interfere with form
document.getElementById('whatsappBtn').addEventListener('click', (e)=>{
e.preventDefault();
let name = document.getElementById('name').value || "";
let msg = document.getElementById('message').value || "I want to discuss a website project";
let text = `Hi Kunmi! ${name}. ${msg} — Ref: Webpage`;
window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`, '_blank');
});
