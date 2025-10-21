---
draft: true
date: 2025-09-09
---

see 2025/70

My underlying design philosophy with this was to try to optimize both reading and writing for both humans and machines, and that while the design has to obviously adapt to the context to meet these goals, generally speaking, I would bias design trade-offs to favor reading over writing on the one axis, and humans over machines on the other axis. In this case, one of the primary ways I balanced these design tradeoffs with quaddresses was the intentional use of imprecision in encoding. So, while quaddresses may appear to point to a space on the artifact, from a purely functional perspective it does the inverse: it tells us what to ignore. The goal is to provide an easy, intuitive way to increase scanning efficiency for an item by giving us a limited area in which to look.

related concepts:
  - relative vs absolute addressing
  - constraining/framing
  - *exclusion*ary indexing vs. inclusion based
  - negative/open space in graphic design
  - apophatic definition, the actual function is the inverse of the apparent function
  - complementary space (instead of "inverse" characterization?) or contrapositive? (vs "negative/open")
  ! functions not as a pointer, but a filter (the resulting focus is a side-effect/by-product?)
  - emergent focus?
  - "Man-Computer Symbiosis" by J.C.R. Licklider (https://groups.csail.mit.edu/medg/people/psz/Licklider.html?utm_source=chatgpt.com)

I want to visually represent the design tradeoff's in quaddress, itself as a quadrant based chart that has two axes representing on one hand, the read/write aspect of the design, and on the other, the human/computer aspect. I also want to emphasize the relative default priorities on each axis:
  - human(h) over computer(c)
  - read(r) over write(w)
  
And taken together, priorities would be from human/read down to computer/write.

I am thinking that the two aspects would be like axes on a graph (or a similar organizational concept), and the resulting quadrants could be color coded to reflect priorities as well: highest priorities are darkest.


Axes:

   h
   |
r --- w
   | 
   c

key:
  - h: human
  - c: computer
  - r: read
  - w: write

Priorities:

rh | wh
-- | --
rc | wc

color codes:

b | g
-----
g | w

key:
  - b: black
  - g: gray
  - w: white

Gray or white axis lines? Basic pattern: 2 units high, 4 units wide, 3 unit gap, 2 per axis.

1 character, 3x3 drawn labels.

Trade-off have to be evaluated by the value they add to the design and the balance they strike with the other elements of the design. Not every quadrant will need to be explicitly addressed by the design. In the case of quaddresses, wc is already as simple as it can be as a by-product of the overall design. Therefore, nothing additional should be added to the design.
