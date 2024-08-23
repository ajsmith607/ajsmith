---
title: "Pip: Minimal Two-Dimensional Chess Piece Set"
date: "2024-08-02"
tags: 
- design 
- chess 
---

This article explores a concept for minimal, two-dimensional chess pieces for use in digital environments. I wanted to create a *functional* approach, in which the design of each piece represents its capabilities instead of its name. Similar in appearance to the faces of dice, the arrangement of pips reflects each piece's legal movement pattern.  

<!--more-->

{{< figure src="/articles/minimal-chess-pieces/pip-logo.svg" width="60%" >}}

<figure>
<pre>
<strong>pip</strong> (<em>noun</em>): one of the dots used on dice and dominoes to indicate numerical value
</pre>
<figcaption>
– <a href=”https://www.merriam-webster.com/dictionary/pip”>pip</a>, merriaum-webster.com.
</figcaption>
</figure>


{{< figure src="/articles/minimal-chess-pieces/minimal-chess-pieces.svg" width="100%" class="image" >}}

Example piece sets I see in systems like Lichess, appear to orient all pieces upright and facing the same direction, which is logical, as each player not only sees the board oriented to them, but the pieces themselves are oriented to each player. In other words, each player sees their own accurate, but distinctly configured version of the same board optimized for their perspective in which, for example,  all four knights face the same direction and are oriented upright to each player viewing the board, which greatly aids piece identification in a two dimensional environment. 
 
<div style="background-color: white; color: #554b45; padding: 3px 24px 24px 48px; margin: 48px 0 48px 0">
{{< figure src="/articles/minimal-chess-pieces/Chess_board_blank.svg" width="600px" class="image" caption="— AAA_SVG_Chessboard_and_chess_pieces_04.svg: ILA-boySCD_algebraic_notation.png: Klinderivative work: Beao, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" >}}
</div>

Given the abstract nature of my approach, I wanted to explore having the knights and bishops facing complementary ways; as they are depicted above, the knights and bishops all face inward and are oriented toward the opposing army. I believe that this does not significantly impact piece recognition due to the simple, abstract nature of the pip notation, in which each piece has a distinctive, easily discernible pattern/shape, easily recognized even when rotated or flipped, coupled with the strong connection between the pip configuration of each piece to its legal movement pattern. That knights and bishops are oriented toward the opposing army may actually aid piece recognition.

I believe this functional approach *can* result in more intuitive piece identification, and also provide an educational benefit for new players, even if my specific implementation of such an approach is not ideal.

Keep in mind that a system that this piece set might be implemented in may not be able to accommodate displaying pieces oriented differently, such as I have shown above.

I had considered alternate markings for each piece, including lines and arrows, or small squares instead of circles for the pips. Using squares instead of circular pips would be the most logical alternative, as it would be a natural reflection of the larger chess board pattern, but I ultimately concluded that this similarity would actually work against an instant recognition of the piece. I reasoned circles provide meaningful contrast to the board pattern that improves piece legibility. Also, at least in the West where dice games are common from childhood, we have an almost intuitive, Gestalt recognition of the collective pattern represented by the arrangement of the pips, and any deviation from the common standard will only weaken this ability and impede recognition.

The complete code for the image above, making use of SVG patterns and reusable symbols, as well as CSS variables: 

<pre><code>
{{< get-file-contents "minimal-chess-pieces.svg" >}}
</code></pre>

