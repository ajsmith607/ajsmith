---
title: "Exploring the Brookton Star Killer"
date: 2024-10-10
draft: true
tags: 
- historical-research
---

The Brookton Star Killer was a postal stamp cancelling mark used from 28 Jul 1885 to 12 May 1889 during the appointment of Postmaster Edward Hallock Mills in the hamlet of Brookton (now Brooktondale), Town of Caroline, Tompkins County New York. This article explores the design of the Star Killer, and a recreation is attempted and documented.

<!--more-->

<figure>

> A postmark is a postal marking made on an envelope, parcel, postcard or the like, indicating the place, date and time that the item was delivered into the care of a postal service, or sometimes indicating where and when received or in transit. Modern postmarks are often applied simultaneously with **the cancellation or killer** that marks postage stamps as having been used. Sometimes a postmark alone is used to cancel stamps, and the two terms are often used interchangeably. 

<figcaption>
<cite>

— [Postmark](https://en.wikipedia.org/wiki/Postmark), Wikipedia.org. Emphasis added.

</cite>
</figcaption>   
</figure>


180 degree rotations vs 72 degree (or for any regular polygon, rotation = one central angle) rotation: both are correct, 180 degrees is conceptually clearer.



{{< figure src="/articles/star-killer/1.jpg" class="image" >}}
{{< figure src="/articles/star-killer/comp1.jpg" class="image" >}}
{{< figure src="/articles/star-killer/comp2.jpg" class="image" >}}
{{< figure src="/articles/star-killer/best-comp.jpg" class="image" >}}


The shape of Edward Mills' "star killer" can be recreated with mathematical precision by using a simple recursive algorithm to create symmetrical shapes at each step that are related geometrically by the golden ratio.

Edward Hallock Mills, born 25 Mar 1819, Smithtown NY, died 01 Jan 1908 Brookton, NY.

28 Jul 1885 to 12 May 1889



<script src="/articles/star-killer/star-killer.js"></script>
<script src="/articles/star-killer/steps.js"></script>
<style>
.killer-container svg {
    display: block;
    background-color: white;
    fill: none;
    stroke: black;
    stroke-linecap: round; 
    stroke-linejoin: round; 
}
.killer-container polygon { stroke-width: 1; }
.killer-container .med { stroke-width: .5; }
.killer-container .light { stroke-width: .25; }
.killer-container .thin { stroke-width: .125; }
.killer-container .superthin { stroke-width: .06125; }
.killer-container .red { stroke: red; }
.killer-container .pentagonfill { fill: black; }
.killer-container .pentagramfillblack { stroke-width: 0; fill: black; }
.killer-container .pentagramfillwhite { stroke-width: 0; fill: white; }
</style>


The Star Killer used black ink, so for simplicity, I will call the foreground stroke color black and the background canvas color white, understanding that in terms of the physical stamp, the "background" is negative space. To simplify the math, the canvas size will be 10 units square, and all inputs will be integers. The initial scale is one. 

For an *n* sided regular polygon:

  - The size of all central angles from the center point can be derived by the formula *360°/n*: 360°/5 = **72°**.
  - The size of all internal angles at each vertex can be derived by the formula *((n-2) x 180°) / n*: ((5-2) x 180°) / 5 = **108°**.

Any regular polygon can be drawn programmatically using a recursive algorithm where the exit condition is returning to the starting point.

---

phi itself is inherently recursive, self similar, which gives inherently aestetically pleasing.

unique self-similar properties of phi, it can itself defined recursively:

phi = 1 + (1/phi) 

phi can be expressed as an infinite continued fraction: you can infinitely express phi as a sum of 1 and its reciprocal.

phi = 1 + (1/phi) 
phi = 1 + (1/ (1 + (1/ (1 + (1/phi...)))) 



also: 1/phi = phi - 1



0.618 (phi - 1) is the reciprocal of phi:

1/phi ≈ 0.618.

1.618 x 0.618 ≈ 1.000

phi contains both itself and its reciprocal


Phi applies to a line is divided in two parts, such that the ratio of the whole line to the longer part is the same ratio as the longer part to the shorter part. The reciprocal (0.618) is the ratio of the shorter part to the longer part.

Pentagons and Pentagrams: In a regular pentagon, the ratio of a diagonal to a side length is ϕ. In a pentagram inscribed in a pentagon, the smaller pentagon formed inside the pentagram also has side lengths in proportion to the original pentagon by ϕ, leading to an infinite series of self-similar pentagons.



The five points of the star are located on the circumference of a circumscribed circle. This circle defines the largest circle that can fit within the outer vertices of the star.

Bounding circle for placement of the points.

Golden ratio between the lengths of the outer edges and diagonals.

A pentagram is a star polygon formed by extending the sides of a pentagon and connecting every second point (instead of adjacent points).

Star polygons can have different numbers of points (e.g., 6-pointed stars, 7-pointed stars, etc.).

Star polygons are typically non-convex, meaning they have sections where the interior angles exceed 180° and their lines intersect.

A regular pentagon is a simple, convex polygon with five equal sides and no intersections.

A star polygon is a more complex, self-intersecting shape formed by connecting non-adjacent vertices of a polygon, often resulting in a star-like pattern.

 a pentagram is indeed a type of star polygon.

A star polygon is defined as a polygon that forms a star-like shape through self-intersection, where its sides cross one another. The pentagram is one of the simplest and most well-known examples of a star polygon.

Pentagram as a Star Polygon:
The pentagram is formed by connecting every second vertex of a regular pentagon, creating a 5-pointed star with intersecting lines.
It is also called a {5/2} star polygon in mathematical notation, where 5 refers to the number of vertices and 2 refers to the number of steps between each connected vertex (i.e., skipping one vertex to create the star).

Characteristics of the Pentagram as a Star Polygon:
Five vertices and five sides, but the sides intersect at points inside the shape.

Self-intersecting, meaning the lines cross through the interior of the figure.

It is a non-convex polygon because some interior angles are greater than 180° (due to the intersections).

The shape you’re describing—the outline of a regular pentagram (5-pointed star) but filled instead of having internal connecting lines—can still be considered a star polygon, but more specifically, it's often referred to as a filled star or a convex star in casual terms.

However, when speaking in precise geometric terms:

1. Regular Star Polygon:
A regular star polygon refers specifically to star shapes that are self-intersecting and formed by connecting non-adjacent vertices of a regular polygon, like a pentagram. The lines inside are key to its definition.
Without the internal lines, it's technically not a regular star polygon, because a regular star polygon includes those intersecting diagonals as an essential characteristic.
2. Convex Hull of a Pentagram or Star Shape:
If you fill the shape without drawing the internal connecting lines, the shape becomes the convex hull of the star’s points. The "convex hull" is the smallest convex polygon that encloses all the outer points (vertices).

This results in a filled star shape, which is sometimes casually called a filled star polygon, but it's no longer a "regular" star polygon in the formal geometric sense.

In this case, filled star or convex star shape might be more appropriate terms for the visual you’re describing, rather than "regular star polygon."

Shared Vertices

Both the regular pentagon and the filled star share the same five outer vertices. These points are located on the circumference of a circumscribed circle, meaning they are equidistant from a common center.

For both shapes, these points form a regular, symmetric arrangement, spaced at equal angular intervals (72 degrees apart around the center).


Relationship of Inner and Outer Geometry

The regular pentagon is the convex hull of the pentagram’s vertices, meaning it is the smallest convex polygon that can fully enclose the points of the star.

In contrast, the filled star includes the concave regions formed by the points of the star that extend outward beyond the regular pentagon. It captures the entirety of the star's outer outline.

The angles at the tips of the star in the filled star are acute (36°), compared to the larger angles (108°) of the regular pentagon.

Symmetry

Both shapes exhibit 5-fold rotational symmetry and reflective symmetry. However, the filled star has additional symmetry in its outward spikes and concave recesses.

A regular pentagon is a closed, convex shape formed by connecting adjacent vertices of a regular 5-point configuration.

A filled star (derived from a pentagram) uses the same vertices but connects non-adjacent points, forming a concave, self-intersecting shape. The filled star encompasses both the central area and the concave outer regions formed by the arms of the star.

The regular pentagon is a subset of the filled star’s geometry, serving as the convex boundary that encloses the star's tips. The filled star is a more complex extension of the pentagon, emphasizing the concave and self-intersecting nature of the star polygon.

The vertices of the outer pentagram are the same vertices that form a circumscribed regular pentagon. These points lie on a common circle and are equally spaced by 72 degrees.


Outer Pentagon:

The vertices of the outer pentagram are the same vertices that form a circumscribed regular pentagon. These points lie on a common circle and are equally spaced by 72 degrees.
Interior Lines (Diagonal Connections):

When the pentagram is drawn by connecting every second vertex, the lines intersect in the center of the shape. These intersections occur at specific points inside the pentagram that form another regular pentagon.
The vertices of this inner pentagon are where the internal diagonal lines (formed by the star) cross each other.
Regularity of the Inner Pentagon:

This inner pentagon is a scaled-down, rotated version of the outer pentagon.
It has the same angles (108° at each vertex) and the same relative proportions as the outer pentagon, making it a regular pentagon.
The side lengths of the inner pentagon are proportional to those of the outer pentagon, determined by the golden ratio.
Golden Ratio:

The pentagram is rich in golden ratio relationships. The lengths of the diagonals forming the pentagram and the sides of the pentagons are in a golden ratio (approximately 1:1.618). This ratio also governs the relationship between the side lengths of the inner and outer pentagons.
Visual Summary:
The outer pentagon defines the boundary of the star.
The interior diagonals that form the star create a smaller regular pentagon in the center.
The entire figure (pentagram) exhibits multiple layers of symmetry and proportionality, linking the outer and inner pentagons.

The scale difference between the outer and inner pentagons in a regular pentagram is governed by the golden ratio, approximately 
ϕ≈1.618.

Specifically:

The side length of the inner pentagon is 1/φ times the side length of the outer pentagon.
Inversely, the side length of the outer pentagon is φ times the side length of the inner pentagon.
Formula:
If the side length of the outer pentagon is 
𝑆
𝑜
𝑢
𝑡
𝑒
𝑟
S 
outer
​
 , then the side length of the inner pentagon 
𝑆
𝑖
𝑛
𝑛
𝑒
𝑟
S 
inner
​
  is:

𝑆
𝑖
𝑛
𝑛
𝑒
𝑟
=
𝑆
𝑜
𝑢
𝑡
𝑒
𝑟
𝜙
S 
inner
​
 = 
ϕ
S 
outer
​
 
​
 
where 
𝜙
ϕ is the golden ratio, approximately 
1.618
1.618.

In Numbers:
The inner pentagon is about 0.618 times (or approximately 61.8%) the size of the outer pentagon.
This scale factor is intrinsic to the pentagram due to its geometric relationships with the golden ratio.
Summary:
The inner pentagon is smaller than the outer pentagon by a factor of 0.618 (inverse of the golden ratio).
The outer pentagon is larger by a factor of the golden ratio 
𝜙
≈
1.618
ϕ≈1.618.



ϕ

---

In the context of a {5/2} polygon (a star polygon), the number 2 is called the step or density.

Explanation:
A {n/k} polygon is a star polygon with n vertices, where k is the step or density.
The step (or density) refers to how many vertices you skip when drawing the polygon.
In a {5/2} polygon, you start at one vertex and connect it to the vertex that is 2 steps away, rather than the immediate next vertex. This process creates the star shape instead of a simple polygon.


Use Trigonometric Relationships:

If the pentagram is drawn inside a circle of radius 
𝑟
r, the inner pentagon is also regular and its vertices lie on a smaller concentric circle.
The ratio of the side length of the inner pentagon to the side length of the outer pentagon is determined by the golden ratio (
𝜙
=
1.618...
ϕ=1.618...).
The distance from the center to the inner pentagon vertices is approximately 
𝑟
/
𝜙
r/ϕ.
This gives you the radius of the inner pentagon's circumscribed circle.
Calculate Inner Pentagon Vertices:

Once you know the radius of the inner pentagon’s circumscribed circle, the vertices can be calculated using the same trigonometric approach you used to find the outer pentagon's vertices. The only difference is that you use the smaller radius (i.e., 
𝑟
/
𝜙
r/ϕ).


The inner pentagon vertices lie on a smaller circle inside the outer pentagram.
The radius of this smaller circle is approximately 
𝑟
𝜙
ϕ
r
​
 , where:
𝑟
r is the radius of the outer circle that the pentagram is inscribed in.
𝜙
ϕ is the golden ratio, which is approximately 1.618.
Therefore, the inner pentagon radius is smaller by a factor of the golden ratio.




phi: balance and harmony

self-similarity, fractal-like structures, geometric shapes repeat a different scales

repeated indefinitely, infinitely

depth, representation of infinity, infinite possibilities

mirror reflection on either side of the y-axis (vertical symmetry) 
vertical bisection, implies dividing at center

ensured by top vertex, 12 o'clock position, top, center
simplifies math, use trig fcns to calculate remaining vertices relative to the first point, no other transformation is needed. 

scale radius and rotate 180



"The circle is inscribed within the square, sharing the same center point, with the circle's diameter equal to the square's width. The circle touches the midpoints of all four sides of the square."

an "inscribed circle" does not imply that the circle is the same size as its bounding box. Instead, it means that the circle fits perfectly inside a given shape, touching all sides of the shape (or bounding box) at specific points, but not necessarily filling the entire bounding box.

Key Points:
An inscribed circle is a circle that is tangent to all sides of the shape, such as a square or polygon, meaning it touches the edges without crossing them.
The bounding box of an inscribed circle is typically a square or rectangle that fully contains the circle, but the circle itself is smaller than the bounding box, since the bounding box must accommodate the outermost points of the circle.



In a regular pentagram, the inner pentagon that emerges from the intersection of the star's lines is rotated by 36 degrees relative to the outer pentagon.

Why 36 Degrees?
The outer pentagon is inscribed within a circle, and the vertices of the pentagon are spaced 72 degrees apart (360° ÷ 5 = 72°).
In a pentagram, each outer vertex connects to the second nearest vertex, skipping one vertex. This creates an internal pentagon, which is rotated because its vertices are determined by the intersections of the star’s lines.
The internal pentagon is rotated by half of the angle between two consecutive vertices of the outer pentagon, which is 36 degrees (72° ÷ 2 = 36°).
Thus, the inner pentagon formed by the intersecting lines of the pentagram is rotated 36 degrees with respect to the outer pentagon.

Summary:
The inner pentagon is rotated by 36 degrees compared to the outer pentagon.




In this theoretical recursion, each successive inner pentagon and pentagram remains a perfect regular shape, preserving the proportions and angles of the original, despite being progressively smaller.
The limiting factor is that the sizes of the pentagons and pentagrams approach zero as you iterate deeper into the recursion, but they never quite disappear, meaning you can continue the process indefinitely in a purely mathematical sense.

Symbolism of the Pentagram
The pentagram has been used as a symbol across various cultures and philosophies, often connected to notions of balance, harmony, and the relationship between the finite and the infinite. The golden ratio's connection to the pentagram strengthens this symbolism because the golden ratio is often interpreted as a mathematical expression of perfect balance.
In ancient Greece, the Pythagoreans viewed the pentagram as a symbol of mathematical perfection, since it represents an ideal proportion. The presence of the golden ratio in the pentagram was likely central to this reverence.
4. Mathematical Symmetry and Proportionality
The pentagram showcases multiple layers of symmetry: rotational symmetry of order 5, reflective symmetry, and scaling symmetry between the inner and outer pentagons.
This proportionality creates a pleasing visual balance. The smaller inner pentagon is geometrically proportional to the outer one, and the golden ratio ensures that this scaling is both mathematically exact and aesthetically satisfying.
5. Application in Design and Architecture
The golden ratio is often used in art, architecture, and design because it is believed to create visually appealing compositions. The pentagram, with its intrinsic golden ratio scaling, is frequently employed in design elements where balance and proportion are key.
In classical architecture, such as the Parthenon in Greece, the golden ratio appears in the proportions of structures. The pentagram serves as a natural geometric tool for designers seeking to apply these proportions.
6. Philosophical and Mystical Interpretations
The pentagram's connection to the golden ratio has led to various philosophical and mystical interpretations. The golden ratio is sometimes seen as a link between the finite and the infinite, with the pentagram serving as a visual embodiment of this idea. The self-similarity of the inner and outer pentagons reinforces this concept of recursive harmony.
In some spiritual traditions, the pentagram represents the five elements (earth, air, fire, water, and spirit) in perfect harmony, and the golden ratio's presence in the pentagram can symbolize the balance between these elements.
7. Geometric Perfection
The geometric perfection of the pentagram, combined with the golden ratio, makes it a powerful educational tool for studying symmetry, proportion, and the golden ratio itself.
It serves as a concrete example of how mathematical relationships manifest in geometry and how these relationships are tied to deeper aesthetic and philosophical ideas.
8. Recursive Geometry in Nature
The golden ratio and the recursive nature of the pentagram are reflected in natural growth patterns. The golden ratio appears in biological systems such as phyllotaxis (the arrangement of leaves on a plant stem), flower petal arrangement, and spiral shells. The scaling between the outer and inner pentagons mimics the way natural forms often repeat at different scales in a proportional manner.
Summary of Implications:
The scaling relationship governed by the golden ratio between the outer and inner pentagons gives the pentagram its intrinsic aesthetic and symbolic appeal.
This scaling creates self-similarity, reminiscent of fractal structures found in nature and art.
The pentagram serves as a rich geometric and mathematical tool, deeply connected to symmetry, proportion, and harmony.
It has been used in symbolism, architecture, and design to convey a sense of balance and beauty, with the golden ratio being central to this application.



> (1 + √5) / 2 ≈ 1.6180339887498949...

The outer outline of the star killer is a five pointed.

This will be illustrated with vector graphics encoded in SVG, and the as components are discussed and added to the drawing, they will be emphasized with darker strokes. 


To simplify the math, I define a viewport 10x10 units as the outer bounding box. 

<div class="cols">
<figure id="pentagononly" class="killer-container">  <figcaption> Pentagon only. </figcaption></figure>
<script> pentagononly("med", 225); </script>

<figure id="pentagramonly" class="killer-container">  <figcaption> Pentagram only. </figcaption></figure>
<script> pentagramonly("med", 225); </script>

<figure id="staronly" class="killer-container">  <figcaption> star only. </figcaption></figure>
<script> staronly("med", 225); </script>
</div>

<div class="killer-container">
<div> step 0 </div>
<div id="step0"></div> <script> step(0); </script>
<div> step 1 </div>
<div id="step1"></div> <script> step(1); </script>
<div> step 2 </div>
<div id="step2"></div> <script> step(2); </script>
<div> step 3 </div>
<div id="step3"></div> <script> step(3); </script>
<div> step 4 </div>
<div id="step4"></div> <script> step(4); </script>
<div> step 5 </div>
<div id="step5"></div> <script> step(5); </script>

Obviously, this can continue infinitely.

<figure id="step6"></figure> <script> step(6); </script>

And it can be infinite in either direction. If the largest pentagram fills the canvas, that pentagram could be inscribed within any number of other pentagrams whose structures are completely outside the canvas. 


communication of depth

The Star Killer has a recursion depth of two, the minimum depth logically necessary for a recursive loop (or any loop). 

The following variables specify the shapes and the recursion depth:

  - the **radius** of the shapes, which is also  used to derive the canvas size,
  - the **vertices**, or the number of points in the polygon, 
  - the **steps**, or 
  - the **depth** or the number of recursive loops to perform. 

The recursive logic is simply:

  1. draw a regular pentagram, then reduce the scale current scaling factor by ϕ + 1,
  2. repeat until the exit condition (when the number of levels is equal to recursion depth). 

On the exit condition:

  1. draw a regular pentagon (steps -1) and fill with the foreground color,
  2. draw a regular pentagram with zero stroke and filled with the background color, resulting in a regular star polygon.

The complete Star Killer uses a relative thick stroke:

<div id="step100"></div> <script> step(100); </script>
</div>

The precise stroke thickness was determined by making a visual comparison between the recreated Star Killer appropriately scaled and overlaid onto actual examples of the original killer.  


pentagons and pentagrams

In a regular pentagon, the length of a diagonal is phi times the length of the side, a unique relationship among regular polygons.

The relationship of the side lengths between inner and outer pentagons is phi.


In a pentagram, if you take a line segment and divide it by the intersection point of another line, the two segments created will have a ratio of 𝜙 ϕ: 

long-seg/short-seg = phi

5 fold rotational symmetry, which can be found in nature in starfish, flower petals and pinecones.


<figure>

> Regular star polygons can be created by connecting one vertex of a regular p-sided simple polygon to another vertex, non-adjacent to the first one, and continuing the process until the original vertex is reached again.[5] Alternatively, for integers p and q, it can be considered as being constructed by connecting every qth point out of p points regularly spaced in a circular placement.[6] For instance, in a regular pentagon, a five-pointed star can be obtained by drawing a line from the 1st to the 3rd vertex, from the 3rd to the 5th vertex, from the 5th to the 2nd vertex, from the 2nd to the 4th vertex, and from the 4th to the 1st vertex.

<figcaption> 
<cite>
https://en.wikipedia.org/wiki/Star_polygon
– [5] https://en.wikipedia.org/wiki/Regular_polygon

</cite>
</figcaption>
</figure>



---
explain further 

A pentagon is any polygon with five vertices and five edges. 

A regular polygon:
  - equilateral: equal side lengths
  - equiangular: equal internal angles (the angles between adjacent sides)
  - equidistant vertices from the center. The distances from the center of the polygon to each vertex is the same and equal to the radius of the polygon's circumscribed circle.


whereas a pentagon can be called a {5/1} polygon (where the 1 is typically implied), a pentagram is a {5/2} polygon.


regular pentagon is a specific kind of convex pentagon with 5 equal sides and 5 equal angles

In the context of a pentagon, lines connecting non-adjacent vertices are called "diagonals".

  central angle: 72 or 2pi/5 (the angle between two vertices with respect to the center)

  internal angle 108

a pentagram is a star (self intersecting) polygon with five vertices

phi in pentagon is present not just in the proportions of sides and diagonals, but the angles and symmetry of the pentagon.


The radius of the circle and the sides and diagonals of the pentagon will have a relationship that governed by 𝜙 ϕ. The connection between the number 5 and 𝜙 ϕ is mathematically grounded in trigonometric identities, such as:

cos (pi/5) = phi/2



 Golden Triangles and the Pentagon:
A golden triangle is an isosceles triangle where the ratio of the longer side to the shorter side is 
𝜙
ϕ.
These triangles can be found within a regular pentagon and pentagram:
If you draw a line from the center of a regular pentagon to any vertex, it creates a golden triangle.
A pentagram is composed of five overlapping golden triangles, with each vertex of the star being the tip of a golden triangle.



. Algebraic Properties of 𝜙 ϕ and the Pentagon:
The relationship between 𝜙 ϕ and the pentagon can also be derived algebraically through the solution to a quadratic equation that arises in the pentagon's geometry:

x^2 -x = 1
x^2 - x - 1 = 0

 , which is directly tied to the ratios found in the pentagon’s side lengths and diagonals.
