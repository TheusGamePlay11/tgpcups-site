// Menu mobile
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger?.addEventListener('click', () => {
  if (!menu) return;
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.gap = '12px';
    menu.style.padding = '12px 0';
  }
});

// Ano dinâmico
document.getElementById('ano').textContent = new Date().getFullYear();

// Loja mock: você pode trocar pelos seus produtos reais
const produtos = [
  { id: 1, nome: 'Passe Premium', preco: 14.90, img: 'assets/preview_2.png' },
  { id: 2, nome: 'Skin Exclusiva', preco: 9.90, img: 'assets/preview_3.png' },
  { id: 3, nome: 'Moedas (Pack)', preco: 19.90, img: 'assets/preview_1.png' },
  { id: 4, nome: 'Inscrição Torneio', preco: 4.90, img: 'assets/preview_2.png' },
];

const lista = document.getElementById('lista-produtos');
function renderProducts(items){
  lista.innerHTML = items.map(p => `
    <article class="card">
      <img class="card__img" src="${p.img}" alt="${p.nome}" />
      <div class="card__body">
        <h3>${p.nome}</h3>
        <p class="muted">Entrega via Discord</p>
        <p class="price">R$ ${p.preco.toFixed(2)}</p>
        <button class="btn btn--sm" onclick="comprar(${p.id})">Comprar</button>
      </div>
    </article>
  `).join('');
}
renderProducts(produtos);

// Busca e ordenação
document.getElementById('busca').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  renderProducts(produtos.filter(p => p.nome.toLowerCase().includes(q)));
});
document.getElementById('ordenar').addEventListener('change', e => {
  const val = e.target.value;
  let arr = [...produtos];
  if (val === 'preco-asc') arr.sort((a,b)=>a.preco-b.preco);
  if (val === 'preco-desc') arr.sort((a,b)=>b.preco-a.preco);
  renderProducts(arr);
});

// Mock de compra
function comprar(id){
  const p = produtos.find(x=>x.id===id);
  if(!p) return;
  alert(`Para comprar "${p.nome}", você será redirecionado ao suporte. Envie o comprovante do Pix/QR Code no Discord.`);
  // Aqui você pode colocar o link do seu Discord:
  // window.open('https://discord.gg/SEU_LINK', '_blank');
}
