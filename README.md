# TGP Cups — Site estático (HTML/CSS/JS)

Este repositório contém o site estático da TGP Cups, pronto para publicar em **GitHub Pages**, **Netlify** ou **Vercel**.

## Estrutura
- `index.html` — página principal
- `styles.css` — estilos (dark, gamer)
- `script.js` — menu mobile, lista de produtos mock, busca/ordenar
- `assets/` — imagens (você pode trocar por logo, favicons, banners)

## Como publicar (GitHub Pages)
1. Crie um repositório no GitHub (ex.: `tgpcups-site`).
2. Envie estes arquivos (drag & drop pela interface web).
3. Vá em **Settings → Pages → Deploy from a branch** e selecione a branch `main` e a pasta `/root`.
4. Aguarde o build. O link ficará em `https://seu-usuario.github.io/tgpcups-site`.

## Como publicar (Netlify)
1. Acesse https://app.netlify.com/ e clique **New site from Git**.
2. Conecte seu repositório e finalize. (ou arraste a pasta para o **Drop** em https://app.netlify.com/drop)

## Como publicar (Vercel)
1. Acesse https://vercel.com/ → **Add New... → Project**.
2. Importe seu repositório e finalize. (Framework: `Other`/Static)

## Personalização
- Substitua `assets/logo.png` e `assets/favicon.png` pela sua logo.
- Edite os textos das seções de torneios e contato.
- No `script.js`, troque o link do Discord e os produtos.

Bom deploy! 🚀
