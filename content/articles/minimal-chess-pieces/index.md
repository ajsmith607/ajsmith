---
title: "Pip: Minimal Two-Dimensional Chess Piece Set"
date: "2024-08-02"
tags: 
- design 
- chess 
---

This article explores a concept for minimal, two-dimensional chess pieces for use in digital environments. I wanted to create a *functional* approach, in which the design of each piece represents its capabilities instead of its name. Similar in appearance to the faces of dice, the arrangement of pips reflects each piece's legal movement pattern.  

<!--more-->

While obviously chess piece names enable *verbal* communication, it is less obvious that the typical *visual* representations of piece names is optimal for intuitive piece recognition during gameplay or study, particularly in two dimensional contexts, both print and digital. I therefore wanted to explore the possibilities and implications of a visual representation of each piece that would communicate its capabilities, its legal movement pattern, instead of its name. 

An individual chess board square is a small canvas on which to paint, and the desire to optimize intuitive visual recognition of each piece naturally led me to explore very simple, abstract ideas, which swiftly evolved to a notation that was immediately and obviously reminiscent of the faces of dice, and so I decided to explore the idea of dice as a more direct metaphor for my approach, to leverage existing cultural recognition of these patterns, which seemed to align very closely with my desired notation. This visual metaphor in turn inspired the name of the symbol set.

{{< figure src="/articles/minimal-chess-pieces/pip-logo.svg" width="60%" >}}

<figure>
<pre>

**pip** (*noun*): one of the dots used on dice and dominoes to indicate numerical value
</pre>

<figcaption>

– [pip](https://www.merriam-webster.com/dictionary/pip), merriaum-webster.com.

</figcaption>
</figure>


{{< figure src="/articles/minimal-chess-pieces/minimal-chess-pieces.svg" width="100%" class="image" >}}

Example piece sets I see in systems like Lichess, appear to orient all pieces upright and facing the same direction, which is logical, as each player not only sees the board oriented to them, but the pieces themselves are oriented to each player. In other words, each player sees their own accurate, but distinctly configured version of the same board optimized for their perspective in which, for example,  all four knights face the same direction and are oriented upright to each player viewing the board, which greatly aids piece identification in a two dimensional environment. 
 
<div style="background-color: white; color: #554b45; padding: 3px 24px 24px 48px; margin: 48px 0 48px 0">
{{< figure src="/articles/minimal-chess-pieces/Chess_board_blank.svg" width="600px" class="image" caption="— AAA_SVG_Chessboard_and_chess_pieces_04.svg: ILA-boySCD_algebraic_notation.png: Klinderivative work: Beao, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" >}}
</div>

Given the abstract nature of my approach, I wanted to explore having the knights and bishops facing complementary directions; as they are depicted above, the knights and bishops all face inward and are oriented toward the opposing army. I believe that this does not significantly impact piece recognition due to the simple, abstract nature of the pip notation, in which each piece has a distinctive, easily discernible pattern/shape, easily recognized even when rotated or flipped, coupled with the strong connection between the pip configuration of each piece to its legal movement pattern. That knights and bishops are oriented toward the opposing army may in fact aid piece recognition.

But keep in mind that a system that this piece set might be implemented in may not be able to accommodate displaying pieces oriented differently, such as I have shown above.

I had considered alternate markings for each piece, including lines and arrows, or small squares instead of circles for the pips. Using squares instead of circular pips would be the most logical alternative, as it would be a natural reflection of the larger chess board pattern, but I ultimately concluded that this similarity would actually work against quick piece recognition; I reasoned circles provide meaningful contrast to the board pattern that improves piece legibility. Also, at least in the West where dice games are common from childhood, we have an almost intuitive, Gestalt recognition of the collective pattern represented by the arrangement of the pips, and any deviation from the common standard will likely only weaken this ability and impede recognition.

Ultimately, I appreciated the simplicity of the pip notation, and the distinct balanced structures created by their arrangements, which are strongly reinforced by existing cultural knowledge and which greatly aids piece recognition.

The number of pips also aligns well with the standard relative value of pieces, and perhaps my approach could be refined to more directly reflect these. (But also, alternate valuation systems exit.)

<figure style="fill: white; max-width:350px">

| Symbol | Name | Value | Pips |
|:-----|:-----|:-----:|:-----:|
| <svg id="pawn" viewBox="0 0 10 10" width="40"> <circle cx="5" cy="4.5" r="1" /> <circle cx="5" cy="8" r="1" /> </svg> | pawn | 1 | 2 |
| <svg id="knight" viewBox="0 0 10 10" width="40" transform="rotate(-90)"> <circle cx="8" cy="2" r="1" /> <circle cx="2" cy="8" r="1" /> <circle cx="8" cy="8" r="1" /> </svg> | knight | 3 | 3 |
| <svg id="bishop" viewBox="0 0 10 10" width="40"> <circle cx="5" cy="5" r="1" /> <circle cx="2" cy="2" r="1" /> <circle cx="5" cy="5" r="1" /> <circle cx="8" cy="8" r="1" /> </svg> | bishop | 3 | 3 |
| <svg id="rook" viewBox="0 0 10 10" width="40"> <circle cx="2" cy="2" r="1" /> <circle cx="8" cy="2" r="1" /> <circle cx="2" cy="8" r="1" /> <circle cx="8" cy="8" r="1" /> </svg> | rook | 5 | 4 |
| <svg id="queen" viewBox="0 0 10 10" width="40"> <circle cx="2" cy="2" r="1" /> <circle cx="8" cy="2" r="1" /> <circle cx="5" cy="5" r="1" /> <circle cx="2" cy="8" r="1" /> <circle cx="8" cy="8" r="1" /> </svg> | queen | 9 | 5 |

</figure>

I believe this functional approach *can* result in more intuitive piece recognition, and also provide an educational benefit for new players, even if my specific implementation of such an approach is not ideal. 

But I can also easily imagine disadvantages of using my proposed piece set, for example, if a player is trained with the pip piece set, how well will they play with a more traditional piece set? And even if a player never uses another piece set, does this introduce the need for a translation step to bridge a gap between the visual representation of pieces and the names used to verbally communicate about them? (Although visual recognition of pieces is needed much more than verbal communication about them, so, one could argue for optimizing that, perhaps even if it introduces its own problems.) 

Or, approached another way, we could ask what, if anything, is lost when we deviate from more traditional visual representations of piece names? We are breaking the conceptual connection between a piece's visual representation and its name, and this connection has its own value. Chess is a game based on a metaphor of armies in battle, and the aesthetics of the game are an important way to express this metaphor; the game aesthetics are not mere ornamentation, but an important aspect of what makes the game interesting and fun. Notation that emphasizes the rules and structures of the game disconnects the player from its underlying metaphor.

And I believe these metaphors are organizing structures essential to enabling a human player to understand the rules of a game, as well as an important part of the experience of a game as such. On their own, there is no conceptual framework relating my pieces to each other as a set; the pieces only make sense as a set because within this context they are a translation of a well understood underlying idea. If we took someone with no knowledge of chess and instructed them in the rules of the game, using pip, but otherwise removing all cultural references to armies, etc., including the piece names, do we still have a game that is interesting and fun, do we even still have a game at all? While the rules are consistent and can be followed, played, and a winner and loser decided, what exactly was won or lost? An arbitrary, albeit consistent, set of rules was followed to its defined completion, but was a game played? 

Lacking metaphor as an organizing framework, metaphor must be added, and when looking for metaphors, we look at the world around us, and our cultural understanding of it. It seems to me it would be quite difficult to find metaphors for the rules of chess better than those it was specifically designed around.

The metaphor of chess is simple and elegant, as wars and hierarchical social and political power structures are universally understood. By leveraging existing cultural knowledge, the rules of chess are understood within existing conceptual structures so deeply engrained as to be intuitive.

Chess is also a special case because of its success, and in turn, its profound impact on human culture. Chess terms and phrases are commonly used even by non-players. So while pip was an interesting exploration for me, I think it may ultimately undermine what is an essential aspect of chess as we understand it, and is therefore, at least as I have envisioned it, it seems fundamentally un-chess-like.

Perhaps this is why every "minimal" or "abstract" chess piece set of which I am aware, are visual abstractions of piece names.

The complete code for pip, used in the image above, making use of SVG patterns and reusable symbols, as well as CSS variables: 

<figure>

<pre><code>
{{< get-file-contents "minimal-chess-pieces.svg" >}}
</code></pre>

</figure>


