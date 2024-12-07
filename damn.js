function upclock()
{
    const n = new Date();
    let h = n.getHours();
    const mer = h >= 12 ? "PM" : "AM";
    h = h%12 || 12;
    h = h.toString().padStart(2,0);
    const m = n.getMinutes().toString().padStart(2,0);
    const s = n.getSeconds().toString().padStart(2,0);
    const time = `${h}:${m}:${s} ${mer}`;
    document.getElementById("hi").textContent = time;
}
upclock();
setInterval(upclock,1000);