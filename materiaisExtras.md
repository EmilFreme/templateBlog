---
title: Materiais Extras
course: "Materiais Extras"
coursepath: "_extras"
layout: classContent
---

# Materiais extras!

Nesta sessão você irá encontrar diversos materiais que podem ser utilizados nas
mais diversas aulas ministradas no laborátorio.

Caso tenha sugestões não exite em entrar em contado com a equipe:


> - **Programas:** Engenharias [Insper](https://www.insper.edu.br/)
> - **Equipe:**
> 	- Prof. Luciano Soares \<lpsoares at insper.edu.br\>
> 	- Téc. Pedro Emil Freme \<pedrohepf at insper.edu.b\>
> 	- Téc. Willian Rodrigues \<willianrsl at insper.edu.br\>

## Repositórios diversos:

### Áudio
>[http://ccmixter.org/](http://ccmixter.org/)
>
>[https://freemusicarchive.org/](https://freemusicarchive.org/)
>
>[http://teknoaxe.com/Home.php](http://teknoaxe.com/Home.php)
>
>[https://www.silvermansound.com/](https://www.silvermansound.com/)
>
>[https://99sounds.org/](https://99sounds.org/)
>
>[https://www.audiomicro.com/](https://www.audiomicro.com/)
>
>[https://www.filmstocks.com/](https://www.filmstocks.com/)
>
>[https://www.freesfx.co.uk/](https://www.freesfx.co.uk/)
>
>[https://gamesounds.xyz/](https://gamesounds.xyz/)
>
>[https://bedroomproducersblog.com/2019/03/27/sonniss-gdc-2019-audio-bundle/](https://bedroomproducersblog.com/2019/03/27/sonniss-gdc-2019-audio-bundle/)
>
>[https://www.partnersinrhyme.com/](https://www.partnersinrhyme.com/)
>
>[https://library.soundfield.com/](https://library.soundfield.com/)
>
>[https://soundbible.com/](https://soundbible.com/)
>
>[https://www.soundeffectsplus.com/](https://www.soundeffectsplus.com/)
>
>[http://www.soundgator.com/](http://www.soundgator.com/)
>
>[https://www.zapsplat.com/](https://www.zapsplat.com/)
>
>[https://incompetech.com/music/](https://incompetech.com/music/)
>
{:style="column-count:3"}
<hr>

### 2D Assets

>[https://craftpix.net/](https://craftpix.net/)
>
>[https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=9&sort_by=count&sort_order=DESC](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=9&sort_by=count&sort_order=DESC)
>
>[https://gameartpartners.com/](https://gameartpartners.com/)
>
>[https://kenney.nl/assets?q=2d](https://kenney.nl/assets?q=2d)
>
>[https://game-icons.net/](https://game-icons.net/)
>
>[https://www.reinerstilesets.de/](https://www.reinerstilesets.de/)
>
>[https://www.gameart2d.com/freebies.html](https://www.gameart2d.com/freebies.html)
>
>[https://itch.io/game-assets/free/tag-2d](https://itch.io/game-assets/free/tag-2d)
>
>[https://assetstore.unity.com/2d](https://assetstore.unity.com/2d)
{:style="column-count:3"}
<hr>



### 3D Assets

>[https://gallery.autodesk.com/](https://gallery.autodesk.com/)
>
>[https://www.thingiverse.com/](https://www.thingiverse.com/)
>
>[https://nasa3d.arc.nasa.gov/](https://nasa3d.arc.nasa.gov/)
>
>[https://www.instructables.com/](https://www.instructables.com/)
>
>[https://assetstore.unity.com/3d](https://assetstore.unity.com/3d)
>
>[https://3dwarehouse.sketchup.com/?hl=en](https://3dwarehouse.sketchup.com/?hl=en)
>
>[https://www.tinkercad.com/things/](https://www.tinkercad.com/things/)
>
>[https://sketchfab.com/](https://sketchfab.com/)
>
>[https://www.cgtrader.com/](https://www.cgtrader.com/)
>
>[https://www.turbosquid.com/](https://www.turbosquid.com/)
>
>[https://grabcad.com/](https://grabcad.com/)
>
>[https://3d.si.edu/](https://3d.si.edu/)
>
>[https://cults3d.com/en](https://cults3d.com/en)
>
>[https://free3d.com/](https://free3d.com/)
>
>[https://3dsky.org/](https://3dsky.org/)
>
>[https://www.myminifactory.com/](https://www.myminifactory.com/)
>
>[https://b2b.partcommunity.com/community/partcloud/index](https://b2b.partcommunity.com/community/partcloud/index)
>
>[https://www.bibliocad.com/en/](https://www.bibliocad.com/en/)
>
>[https://www.stlfinder.com/](https://www.stlfinder.com/)
>
>[https://3dexport.com/](https://3dexport.com/)
>
>[https://3dmdb.com/](https://3dmdb.com/)
>
>[https://pinshape.com/](https://pinshape.com/)
>
>[https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=10&sort_by=count&sort_order=DESC](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=10&sort_by=count&sort_order=DESC)
>
>[https://thangs.com/](https://thangs.com/)
>
>[https://kenney.nl/](https://kenney.nl/)
{:style="column-count:3"}
<hr>

{% assign cc = site.courses | where: "course", page.course %}
{% assign itchio = cc | where: "section", "Itch.io" %}
{% assign unity = cc | where: "section", "Unity" %}

## ![Itch.io](https://static.itch.io/images/logo-black-new.svg){:height="50px"}
<div style="column-count:3;">
{%for unityLink in itchio %}
<a href="{{unityLink.url}}" style="margin:1em; display:block; font-size:14pt">{{unityLink.title}}</a>

{%endfor%}
</div>
<hr>

## ![Unity](https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Unity_2021_logo.svg/1200px-Unity_2021_logo.svg.png){:height="50px"}

<div style="column-count:3;">
{%for unityLink in unity %}
<a href="{{unityLink.url}}" style="margin:1em; display:block; font-size:14pt">{{unityLink.title}}</a>

{%endfor%}
</div>
<hr>

## ![Unreal](https://public.boxcloud.com/api/2.0/internal_files/809821477808/versions/866775169808/representations/png_paged_2048x2048/content/1.png?access_token=1!uGFemNJDC24O0jbgWPCWg0nrl4LY2VjCzi9rPFUjHAaDRckqmQvtXnLsTWtbBDVKaxHQMI6Wzq025Gkjskh14V2gOzLmkH5sLRB-ZuuUClStwBSVHv6hWqF4-vgM0ihWmGjCsBEKIchy2ow9wIM-2fsNrItmQbkGcmx6sX7b-Hbbkxxxalc3Bj01mCO92YB2njn-umGb4ugNloqkYLDM1Hd8IilSLWeJGsl0zl4mBiL9gx3ULVSqheR3gXPGh7T3dUb9KXg--c3ZD9KnXSPhgO9OCK9jAuerHVnhhtoHVFnBgn6e57GBjEic2moTca0xetFtxhHLuJiMVSVpeIfR7ekaydnGDq-91DRcWLkDO_-OWqsrTSEk0uz0YbMOZQGgbrsu5n47-47I4V9ZezhjJaNHrda-CwUPBBd5yprt3hkUcgDv8Ujv1P7Bu6w9oZXat_eyJtk94TIx_ol2HT2Y0ahkC_6wRMFfOsH8z3Oe2auY2FGE7ym5ir3HOlGJPRp2QD0nb4sbwj6pBrSOneeOimxaqOrcb36rfdNCxeM6a7k4m7dOGzcsw6If-AFSW4Sd1LP5&shared_link=https%3A%2F%2Fepicgames.ent.box.com%2Fs%2Fc2m8idcyejqvg5mjf4e2q73b7jbaghft&box_client_name=box-content-preview&box_client_version=2.80.0){:height="50px"}

## ![Godot](https://godotengine.org/themes/godotengine/assets/press/logo_large_color_light.png){:height="50px"}



