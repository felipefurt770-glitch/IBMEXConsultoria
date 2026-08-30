# Prompt para Claude Code — IBMEX Consultoria

Você está recebendo um projeto estático de landing page institucional da **IBMEX CONSULTORIA**.

## Objetivo
Validar tecnicamente, executar localmente e publicar o site em produção mantendo a identidade visual e o conteúdo fornecidos.

## Arquivos do projeto
- `index.html`
- `styles.css`
- `script.js`
- `logo-ibmex.png`
- `politica-de-privacidade.html`
- `sitemap.xml`
- `robots.txt`
- `conteudo-seo.csv`

## Regras importantes
1. Não alterar o nome fantasia: **IBMEX CONSULTORIA**.
2. Razão social: **IBMEC JR. CONSULTORIA BELO HORIZONTE**.
3. CNPJ: **05.279.790/0001-00**.
4. Manter todos os botões de WhatsApp apontando para **https://wa.me/5511986324895**.
5. Manter o endereço:
   **Rua Rio Grande do Norte, 300, 3º andar, Santa Efigênia, Belo Horizonte/MG, CEP 30130-130**.
6. Manter os telefones oficiais:
   **(31) 3201-1461** e **(31) 3271-5531**.
7. Manter o e-mail:
   **CERTIDOES@CONTABILIDADEDIAS.COM.BR**.
8. Preserve o layout premium, minimalista e responsivo nas cores escuras azul-marinho, preto, aço/prata e branco.
9. Não adicionar frameworks pesados sem necessidade. O projeto deve continuar rápido, simples e estático.
10. Não inventar depoimentos, clientes, números de faturamento, certificações, prêmios ou cases.

## Tarefas
1. Abra e revise todos os arquivos.
2. Valide HTML, CSS e JavaScript.
3. Teste a página em desktop, tablet e mobile.
4. Verifique:
   - menu mobile;
   - links internos;
   - links de telefone;
   - links de e-mail;
   - todos os links do WhatsApp;
   - carregamento do logo;
   - mapa;
   - aviso de privacidade;
   - página de Política de Privacidade.
5. Corrija somente erros técnicos ou pequenos problemas de responsividade/acessibilidade encontrados.
6. Otimize imagens sem perda visual relevante.
7. Garanta boa pontuação de Lighthouse, especialmente em:
   - Performance;
   - Accessibility;
   - Best Practices;
   - SEO.
8. Antes do deploy, pergunte ao operador qual será o domínio definitivo caso ainda esteja como `SEU-DOMINIO.com.br`.
9. Depois de receber o domínio:
   - substitua `SEU-DOMINIO.com.br` em `index.html`, `sitemap.xml` e `robots.txt`;
   - valide canonical, Open Graph e URLs do sitemap.
10. Execute localmente usando um servidor HTTP estático. Exemplos aceitáveis:
    - `python -m http.server 8080`
    - ou `npx serve .`
11. Faça um teste final navegando pelos arquivos servidos por HTTP, não apenas abrindo `file://`.
12. Publique em uma plataforma de hospedagem estática disponível e autenticada no ambiente. Preferência:
    - Vercel;
    - Netlify;
    - Cloudflare Pages;
    - GitHub Pages.
13. Se a CLI da plataforma escolhida estiver autenticada, faça o deploy de produção.
14. Se não houver autenticação, não solicite senha/token em texto. Informe o comando exato para o operador autenticar e, depois da autenticação, conclua o deploy.
15. Ao terminar, entregue:
    - URL pública;
    - plataforma usada;
    - domínio configurado;
    - resumo das validações;
    - eventuais pendências.

## Recomendação para Vercel
Se Vercel CLI estiver disponível e autenticada:
```bash
vercel --prod
```
Como o projeto é estático, mantenha a raiz do projeto como diretório público, sem build command e sem framework obrigatório.

## Critério de aceite
O trabalho só está concluído quando:
- a landing page abre por HTTPS;
- layout está correto em desktop e mobile;
- todos os CTAs funcionam;
- Política de Privacidade abre;
- `sitemap.xml` e `robots.txt` respondem publicamente;
- o domínio definitivo foi aplicado no SEO;
- não existem erros relevantes no console do navegador.
