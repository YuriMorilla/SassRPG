# Fichas RPG — Sistema de grupos, fichas D&D 5e e inventário

**Arquivos:** `index.html` (login), `grupos.html` (campanhas), `mestre.html` (edição), `jogador.html` (visualização), `firebase-config.js`, `dnd-dados.js`, `style.css`, `firestore.rules`.

Todos os arquivos ficam na **raiz** do repositório (sem subpastas) para funcionar direto no GitHub Pages.

## Ficha implementada (D&D 5ª edição)

Cabeçalho (nome, classe, nível, antecedente, raça, tendência, XP) · 6 atributos com modificador calculado · bônus de proficiência · inspiração · testes de resistência · as 18 perícias com proficiência · sabedoria passiva · CA, iniciativa, deslocamento · PV atual/máximo/temporário · dados de vida · testes contra a morte · ataques e magias · traços, ideais, ligações, defeitos · outras proficiências · inventário.

Só o mestre edita (aba **Personagens** em `mestre.html`); o jogador só visualiza em `jogador.html`, atualizado em tempo real.

## Configuração

1. Firebase Console → Authentication → ative E-mail/senha.
2. Firestore Database → crie o banco.
3. Cole suas chaves em `firebase-config.js`.
4. Cole o conteúdo de `firestore.rules` em Firestore → Regras → Publicar.
5. Suba tudo para a raiz do repositório no GitHub e ative Pages em Settings → Pages.

## Próximos passos sugeridos (fora do escopo por enquanto)

Ícones/imagens de item, rolagem de dados, chat, regras de segurança mais restritas.
