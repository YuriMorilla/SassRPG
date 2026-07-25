# Fichas RPG — Sistema de grupos, fichas e inventário

Sistema web para mesas de RPG: grupos (campanhas), fichas de personagem, inventário e catálogo de itens. O mestre é o único que edita fichas e inventários; jogadores só visualizam as próprias.

**O que tem:** login, grupos com código de convite, painel do mestre (editar fichas + criar itens + montar inventário), visão do jogador (somente leitura).

**O que NÃO tem (de propósito, pra você adicionar depois):** ícones de item, imagens, rolagem de dados, chat, etc.

---

## 1. Criar o projeto no Firebase (grátis)

1. Acesse https://console.firebase.google.com e crie um projeto novo.
2. No menu lateral, vá em **Build → Authentication → Sign-in method** e ative **E-mail/senha**.
3. Vá em **Build → Firestore Database → Criar banco de dados**. Escolha modo de produção (as regras já estão prontas no arquivo `firestore.rules`).
4. Vá em **Configurações do projeto → Geral**, role até "Seus apps", clique no ícone `</>` (Web), registre um app (pode ser sem Firebase Hosting).
5. Copie o objeto `firebaseConfig` que aparece e cole em `js/firebase-config.js`, substituindo os valores `"COLE_AQUI"`.

## 2. Publicar as regras de segurança

No console do Firebase, vá em **Firestore Database → Regras**, apague o conteúdo e cole o conteúdo de `firestore.rules`. Clique em **Publicar**.

Essas regras garantem que:
- só o mestre de um grupo pode editar fichas e itens desse grupo;
- jogadores só enxergam grupos dos quais fazem parte;
- um jogador só cria a própria ficha (vazia) uma vez, ao entrar no grupo — depois disso só o mestre edita.

## 3. Hospedar no GitHub Pages

```bash
git init
git add .
git commit -m "Sistema de fichas RPG"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

No repositório do GitHub: **Settings → Pages → Branch: main / (root) → Save**.
Depois de alguns minutos o site fica em `https://SEU-USUARIO.github.io/SEU-REPO/`.

> Importante: como é um site estático, as chaves do Firebase em `firebase-config.js` ficam visíveis publicamente — isso é normal e esperado no Firebase (a segurança real vem das regras do Firestore, não do sigilo das chaves).

## 4. Como usar

1. Cada pessoa cria uma conta em `index.html` (e-mail + senha).
2. Quem for mestrar clica em **Criar grupo** — vira mestre automaticamente e recebe um código de convite.
3. O mestre compartilha o código com os jogadores.
4. Jogadores entram em **Entrar em um grupo** com o código.
5. No painel do mestre: aba **Personagens** para editar ficha/atributos/PV/PM/inventário de cada jogador; aba **Itens** para criar o catálogo de itens da campanha (nome, tipo, peso, valor, descrição).
6. Jogadores acessam sua própria página (somente leitura) com ficha e inventário atualizados em tempo real conforme o mestre edita.

## Estrutura de dados (Firestore)

```
grupos/{grupoId}
  nome, codigo, mestreId, mestreNome
  membros/{uid}        → nome, papel ("mestre" | "jogador")
  fichas/{uid}          → nome, classe, nivel, pv, pvMax, pm, pmMax,
                           atributos {forca, destreza, constituicao, inteligencia, sabedoria, carisma},
                           anotacoes, inventario [{itemId, quantidade}]
  itens/{itemId}        → nome, tipo, peso, valor, descricao
```

## Próximos passos sugeridos (fora do escopo por enquanto)

- Ícones/imagens de item
- Rolagem de dados
- Chat da mesa
- Histórico de alterações na ficha
