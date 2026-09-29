# Bancada Mecatrônica

🇺🇸 [Read in English](README.md)

Uma caixa de ferramentas gratuita, em uma única página, para a oficina e a manutenção: calculadoras, guias, tabelas de referência, simuladores e **19 máquinas em 3D animadas**, cobrindo usinagem, elétrica, pneumática, hidráulica e Arduino/ESP32.

Funciona em qualquer navegador moderno, **sem instalar nada, sem conta e sem servidor**, e pode ser usada **offline**.

## O que tem

| Área | Destaques |
|---|---|
| **Oficina** | Torno, fresadora, CNC, furadeira e serra de fita · velocidade de corte, avanço e rotação · parâmetros por material · peso de material · custo de usinagem · torno cônico · ajustes e tolerâncias ISO 286 · tabelas de rosca · torque de aperto · engrenagens e polias · geradores de G-code (furos em círculo, faceamento, bolso, furação) · **visualizador de G-code** · manutenção preventiva, ordens de serviço e vida de ferramenta · folha de processo (imprime ou salva em PDF) · glossário |
| **Elétrica** | Lei de Ohm e circuitos básicos · potência trifásica e cabos · partida de motor (disjuntor, contator, térmico, cabo) · correção do fator de potência · queda de tensão · 4–20 mA e 0–10 V · PT100 e termopares · ligação NPN/PNP · encoder e inversor · **simulador de ladder** · animações de ondas, RC e estrela-triângulo |
| **Pneumática** | Força, velocidade e consumo de ar do cilindro · Kv de válvula · compressor e reservatório · ventosa e vácuo · símbolos ISO 1219 · simuladores de sequência e **eletropneumático** |
| **Hidráulica** | Força, velocidade e vazão do cilindro · potência de bomba e motor · motor hidráulico · acumulador · perda de pressão em mangueira · reservatório · óleos ISO VG |
| **Arduino / ESP32** | Pinos e protocolos (I2C, SPI, UART) · gerador de código (LED, motor de passo, HC-SR04, servidor web, MQTT e mais) · notas de C/C++ · gráfico serial ao vivo · **simulador de PID** |
| **Modelos 3D** | Torno, centro de usinagem, fresadora, torno CNC, furadeira, retificadora, serra de fita, fresadora CNC de pórtico, impressora 3D, robô cartesiano, braço robótico, prensa hidráulica, bomba de engrenagens, caixa de redução, compressor de pistão, motor trifásico, servomotor, painel elétrico e cilindro de dupla ação |

Cada modelo 3D tem uma legenda curta, os textos **"Como funciona"** e **"Onde é usada na indústria"**, **rótulos** das peças, **vista explodida**, controles de pausa e vista inicial, e uma galeria com miniaturas.

São cerca de 190 cartões, incluindo quizzes e um simulado de 15 questões com nota.

## Recursos

- Tela inicial com atalhos, favoritos e últimos cálculos
- Busca em todos os cartões, sem diferenciar acentos
- Favoritos, histórico de cálculos e links que abrem a calculadora já com os valores preenchidos
- Tema claro e escuro; milímetros ou polegadas
- Botões de copiar resultado e layout de impressão
- Exportar e importar dados (backup em JSON)
- Instalável como aplicativo (PWA) e utilizável offline

## Como funciona

- **Um único arquivo HTML.** O `index.html` reúne o conteúdo, os estilos e o JavaScript. Não há etapa de compilação, framework nem gerenciador de pacotes.
- **Os dados ficam no seu aparelho.** Favoritos, histórico, checklists, manutenção e configurações são salvos no `localStorage` do navegador. Nada é enviado a servidor algum.
- **Os modelos 3D** são construídos por código com o [three.js](https://threejs.org/) (r128). A biblioteca é carregada do arquivo `three.min.js` ao lado da página, com a CDN pública como plano B.
- **O modo offline** usa um service worker (`sw.js`) que guarda os arquivos no cache do navegador.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O aplicativo inteiro |
| `sw.js` | Service worker (cache offline) |
| `manifest.webmanifest` e `icon.svg` | Tornam a página instalável como aplicativo |
| `three.min.js` | *(opcional, você baixa)* cópia local do three.js para o 3D funcionar totalmente offline |
| `LICENSE` | Licença MIT |
| `README.md`, `README.pt-BR.md` | Esta documentação |

## Como baixar

**Opção A. Pelo GitHub** (se o projeto estiver publicado lá)
1. Abra a página do repositório, clique em **Code → Download ZIP** e descompacte.
2. Ou clone: `git clone <endereço-do-repositório>`.

**Opção B. Manualmente**
Salve `index.html`, `sw.js`, `manifest.webmanifest` e `icon.svg` na mesma pasta (junte o `LICENSE` e os READMEs se quiser).

## Como usar (início rápido)

Dê dois cliques em `index.html`. As calculadoras, guias e simuladores funcionam na hora. Os modelos 3D precisam do `three.js` (veja abaixo).

## Como usar offline

**1. Mais simples: abrir o arquivo, sem instalar nada**
1. Baixe o [three.min.js](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js) (botão direito → *Salvar link como…*) e salve com o nome `three.min.js` na **mesma pasta** do `index.html`.
2. Dê dois cliques em `index.html`. Tudo, inclusive os modelos 3D, funciona sem internet.

**2. Instalar como aplicativo no computador**
1. Abra um terminal na pasta do projeto e rode: `python -m http.server 8000` (no Mac ou Linux: `python3`).
2. Abra `http://localhost:8000` no Chrome ou no Edge.
3. Clique no ícone de **instalar** na barra de endereço. Depois do primeiro carregamento, o aplicativo também abre offline.

**3. Instalar no celular**
1. Publique a pasta em qualquer hospedagem com HTTPS (por exemplo, GitHub Pages ou Netlify).
2. Abra o endereço no Chrome (Android) ou no Safari (iOS) e escolha **Instalar aplicativo / Adicionar à tela inicial**.
3. Abra um modelo 3D uma vez com internet, para o navegador guardar o `three.js`. Depois disso ele funciona offline.

> O navegador guarda os dados **por endereço**. `file://`, `localhost` e um site têm favoritos e histórico separados. Use **Exportar dados** e **Importar dados**, no topo da página, para levá-los de um para o outro.

## Limitações

- Os valores das tabelas e calculadoras são típicos ou aproximados. Confira em dados de fabricante e em normas antes de confiar neles, principalmente no dimensionamento de componentes e em qualquer assunto de segurança.
- Simule sempre o G-code gerado antes de rodá-lo em uma máquina.
- Os modelos 3D são desenhos didáticos, não o CAD de um fabricante.

## Créditos e licença

Distribuído sob a [Licença MIT](LICENSE). Copyright (c) 2026 Thiagosystems.
A renderização 3D usa o [three.js](https://threejs.org/) (MIT), que não está incluído neste repositório.
