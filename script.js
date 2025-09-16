const gallery = document.getElementById('gallery');
const albumModal = document.getElementById('albumModal');
const saveAlbum = document.getElementById('saveAlbum');
const albumName = document.getElementById('albumName');

// เปิด modal จาก icon ดินสอ
document.getElementById('addAlbum').onclick = () => {
  albumModal.style.display = 'flex';
};

// บันทึกอัลบั้ม
saveAlbum.onclick = () => {
  const name = albumName.value.trim();
  if (name) {
    const album = document.createElement('div');
    album.className = 'album';
    album.innerHTML = `
      <img src="https://picsum.photos/200/200?random=${Math.random()}" alt="">
      <p>${name}</p>
    `;
    gallery.appendChild(album);
  }
  albumName.value = '';
  albumModal.style.display = 'none';
};

// ปิด modal เมื่อคลิกนอกกล่อง
window.onclick = (e) => {
  if (e.target === albumModal) albumModal.style.display = 'none';
};

// ฟีเจอร์โน้ต + วาด
const noteArea = document.getElementById('noteArea');
const canvas = document.getElementById('noteCanvas');
const ctx = canvas.getContext('2d');
const drawColor = document.getElementById('drawColor');
const clearCanvas = document.getElementById('clearCanvas');

let drawing = false;

document.getElementById('addNote').onclick = () => {
  noteArea.style.display = 'flex';
};

function closeNote() {
  noteArea.style.display = 'none';
}

canvas.addEventListener('mousedown', () => { drawing = true; });
canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = drawColor.value;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

clearCanvas.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};