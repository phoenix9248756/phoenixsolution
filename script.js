// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reviews marquee: duplicate children for seamless loop
(function() {
  const track = document.querySelector('.reviews__track');
  if (!track) return;
  track.innerHTML = track.innerHTML + track.innerHTML; // duplicate
})();

// WhatsApp form sender
function sendWhatsApp(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const service = encodeURIComponent(document.getElementById('service').value.trim());
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  if(!name || !service || !message) return false;
  // Prefer primary number
  const phone = '923435647387';
  const text = `New inquiry from ${name}%0AService: ${service}%0A
${message}`;
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, '_blank');
  return false;
}
