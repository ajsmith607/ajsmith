---
title: "cell: minimal geometric font"
date: 2024-07-24  
tags:
- design
- fonts
---

Cell is a minimal, geometric, sans-serif, monospace, all caps display font.

<!--more-->

{{< figure src="/articles/cell/logo.svg" width="500" class="image" >}}

(The Cell logo above uses Cell glyphs and draws inspiration from the abstract art of Piet Mondrian.)

The Cell font was created as part of the design of the [Wine Cube](https://ajsmith607.github.io/winecube/) project.

I sought to create a rectilinear geometric font for use with my Wine Cube project. Beginning with the basic proportions from that project, I originally started with a font that uniformly used 4 strokes in a 4x4 grid, with a 1:4 ratio of stroke thickness to stroke length. I kept making this initial concept more abstract, adjusting for visual clarity, etc. But the ultimate goal was to severely constrain the size of each glyph, use minimal strokes, and leverage negative space to hopefully create a unique minimal font.

For the mock-ups below, the font follows a few basic rules:

  1. Each glyph is defined within a 4x4 grid, thus monospaced.
  2. Each glyph is centered vertically and horizontally within a total 6x6 grid, resulting in 1 unit width border that naturally defaults to both tracking and leading two units in size.
  3. There are only horizontal and vertical lines; curves are squared and diagonals are implied by empty space.
  4. The thickness of inner strokes are half scale that of outer/edge strokes.
  5. Parallel lines are preferred over perpendicular lines.

{{< figure src="/articles/cell/grid-plan.svg" width="500" class="image" >}}

Aside from these rules, I used my judgement to make distinct and legible shapes. I purposely made certain groupings of letters similar transformations of each other. For example, B, E, M and W are represented by the same glyph rotated in the appropriate cardinal direction. The same is true of C, D, N and U. Several other glyphs are also closely related transformations: S and Z are the same basic glyph flipped horizontally. A variant of N is a 90 degree rotation of Z. And other, similar groupings exist.

Initially, I have only defined one set of letters, although I have created a number of variations that could be the basis for mixed cases.

The basic glyphs, currently only mocked up using SVG images:

<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/A.svg" >}}
<figcaption style="text-align: center; margin: 0">A</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/B.svg" >}}
<figcaption style="text-align: center; margin: 0">B</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/C.svg" >}}
<figcaption style="text-align: center; margin: 0">C</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/D.svg" >}}
<figcaption style="text-align: center; margin: 0">D</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/E.svg" >}}
<figcaption style="text-align: center; margin: 0">E</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/F.svg" >}}
<figcaption style="text-align: center; margin: 0">F</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/G.svg" >}}
<figcaption style="text-align: center; margin: 0">G</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/H.svg" >}}
<figcaption style="text-align: center; margin: 0">H</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/I.svg" >}}
<figcaption style="text-align: center; margin: 0">I</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/J.svg" >}}
<figcaption style="text-align: center; margin: 0">J</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/K.svg" >}}
<figcaption style="text-align: center; margin: 0">K</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/L.svg" >}}
<figcaption style="text-align: center; margin: 0">L</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/M.svg" >}}
<figcaption style="text-align: center; margin: 0">M</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/N.svg" >}}
<figcaption style="text-align: center; margin: 0">N</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/O.svg" >}}
<figcaption style="text-align: center; margin: 0">O</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/P.svg" >}}
<figcaption style="text-align: center; margin: 0">P</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/Q.svg" >}}
<figcaption style="text-align: center; margin: 0">Q</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/R.svg" >}}
<figcaption style="text-align: center; margin: 0">R</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/S.svg" >}}
<figcaption style="text-align: center; margin: 0">S</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/T.svg" >}}
<figcaption style="text-align: center; margin: 0">T</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/U.svg" >}}
<figcaption style="text-align: center; margin: 0">U</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/V.svg" >}}
<figcaption style="text-align: center; margin: 0">V</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/W.svg" >}}
<figcaption style="text-align: center; margin: 0">W</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/X.svg" >}}
<figcaption style="text-align: center; margin: 0">X</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/Y.svg" >}}
<figcaption style="text-align: center; margin: 0">Y</figcaption>
</figure>
<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/Z.svg" >}}
<figcaption style="text-align: center; margin: 0">Z</figcaption>
</figure>

In the future, I may create a true UFO font and release the code under an open source licence.
