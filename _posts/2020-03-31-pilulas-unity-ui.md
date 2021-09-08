---
title: "Pílulas #02: Unity - Canvas e UI"
layout: post
tags: pilulas unity3d
date: 2020-03-31
---

Uma parte importante da produção de um jogo é pensar na Interface de Usuário
(UI em inglês), e também a nossa hud (heads up display).

<!--more-->

Para que possamos fazer isso, as engines nos deixam com ferramentas próprias de
UI.

Na Unity é bastante comum acontecerem algumas confusões em relação a forma que
ela trabalha com isso, isso por que ela deixa os elementos do mundo e os
elementos da UI no mesmo espaço, e dessa forma muitos que estão começando a
aprender a ferramenta acabam utilizando alguns elementos de forma equivocada.

### Canvas e seus tipos

![Unity Canvas](/assets/img/20200331_Canvas.png)

Existem 3 modos de *render* do canvas na Unity, como pode ser visto na imagem
acima.

**ScrenSpace - Overlay** neste modo o canvas irá ser renderizado sobreposto a
todo o resto, independente da câmera que esteja usando, como uma "película"
colocada na frente de todas as câmeras (Fazendo um paralelo com o mundo real).

![Canvas overlay](/assets/img/20200331_Overlay.png)


**ScrenSpace - Camera** este modo funciona muito similar ao *Overlay*, contudo
funcionará para uma câmera específica que deveremos selecionar pelo Inspector


![Canvas Camera](/assets/img/20200331_Camera.png)

Retomando nossa analogia com o cinema, este modo seria uma película que apenas
uma das câmeras teria


![Canvas overlay](/assets/img/20200331_LeOverlay.png)

Nossa ultima opção **World Space** não será abordada nessa pílula, mas faremos
um post dedicado a ela. Podemos adiantar que a utilizaremos para interfaces que integrem o
mundo de nosso jogo.


### Tamanho

Um dos elementos que acabam confundido muito os novos usuários da Unity é o
tamanho que um canvas toma quando está nas opções **ScreenSpace**.

![Tamanho do Canvas](/assets/img/20200331_Tamanho.png)

Perceba que na imagem acima o canvas está representado **muito** maior que o
cenário do jogo, isso quando observarmos pela aba *Scene*.


![Tamanho do Canvas](/assets/img/20200331_Tamanho2.png)

Agora, se observarmos a aba *Game* percebemos que ele está tomando toda a tela,
como era o esperado.

### Elementos

Outra questão para prestar bastante atenção quando se estiver trabalhando com
o canvas, é que dentro de um canvas trabalharemos **apenas** com os elementos de UI


![Elementos de UI](/assets/img/20200331_Elementos.png)


---

Esse foi mais um post pílula, espero que seja de grande ajuda a quem estiver
começando.

Para maiores detalhes temos uma *playlist* criando um jogo apenas com Unity UI
que pode ser acessada abaixo.

[Unity | Pizza
Clicker](https://www.youtube.com/playlist?list=PLFaJXFgWCthmK89z6WZ210NJFFYKePgLn)

E também a documentação da Unity: [Unity UI
Docs](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/index.html)





