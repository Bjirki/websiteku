  /* Simple demo data */
  const books = [
    {
      id:1,
      title:'',
      author:'A.D',
      desc:'foto saat spin mll',
      image:'foto5.jpg' // akan tampil foto
    },
    {
      id:1,
      title:'',
      author:'A.D',
      desc:'foto saat di mts miffa',
      image:'foto2.jpg' // akan tampil foto
    },
    {
      id:1,
      title:'',
      author:'A.D',
      desc:'randommm',
      image:'foto4.jpg' // akan tampil foto
    },
    {
      id:1,
      title:'',
      author:'A.D',
      desc:'randomm',
      image:'foto3.jpg' // akan tampil foto
    }
  ];

  const grid = document.getElementById('grid');

  function renderBooks(list){
    grid.innerHTML='';
    list.forEach(b=>{
      const card = document.createElement('div');card.className='card';

      const cover = document.createElement('div');cover.className='cover';
      if (b.image) {
        cover.style.background = `url('${b.image}') center/cover no-repeat`;
      } else if (b.color) {
        cover.style.background = `linear-gradient(180deg, ${b.color[0]}, ${b.color[1]})`;
      } else {
        cover.style.background = `#ccc`; // kalau gak ada keduanya
      }

      cover.innerHTML = `
        <div style='display:flex;flex-direction:column;gap:6px'>
          <div class='title'>${b.title}</div>
          <div class='meta'>${b.author}</div>
        </div>
      `;

      const info = document.createElement('div');info.className='info';
      const btn = document.createElement('button');btn.className='read-btn';btn.textContent='1';
      btn.onclick = ()=>openReader(b);

      info.innerHTML = `<div style='font-size:12px;color:var(--muted)'>${b.desc}</div>`;
      info.appendChild(btn);

      card.appendChild(cover);
      card.appendChild(info);
      grid.appendChild(card);
    })
  }
  renderBooks(books);
</script>
  
    <script>
    document.getElementById("waktu").innerText = new Date().toLocaleTimeString();