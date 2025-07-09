---
title: "quaddresses: imprecision in practice"
date: 2025-07-08
tags:
- historical-research
- digitization
- metadata 
---

After significant time using quaddresses in a real application, I reflect on their effectiveness and propose refinements.  

<!--more-->

Quaddresses are a minimal approach to spatially referencing areas of documents based on an implicit grid that accommodates two dimensional objects of arbitrary size, shape, or level of detail. For a fuller introduction to quaddresses, see {{% pagelink "quaddress-intro" %}}.

## general reflections on efficiency

In my historical research, newspaper content is my most consistent source of rich information, so extra effort in their handling has an outsized impact on my productivity. Consider these relevant factors:

  -  Newspaper pages are a large format that is densely packed with data, and citations may reference just a few words within a page, requiring significant effort to relocate the original text on the page.

  - Newspapers are formatted in columns, that is to say, they are grid based layouts and therefore inherently compatible with quaddresses, making them more convenient and accurate.

In practice, determining and recording quaddresses does not add significant time or effort to the research process. When downloading newspaper content, I save the images with a file naming convention that not only facilitates file organization, but also directly supports metadata encoding as part of my semi-automated digitization workflow.

As I am saving newspaper images, recording quaddresses is a natural extension of recording page numbers, already part of my file naming convention. Supporting software I wrote to populate metadata files by parsing image filenames was easily extended to parse quaddresses similarly to existing page number parsing code. Likewise, the content management code that displays this metadata in my published work was trivially easily to modify for quaddresses. Even when considered on a larger scale, the ongoing time costs of accommodating quaddresses is negligible.

But quaddresses save significant time when relocating content within a newspaper page, and positively impact my productivity at all scales, as they drastically reduce the amount of content irrelevant to my immediate purpose that I must visually scan to relocate the referenced data.

## edge cases

Quaddresses are intentionally imprecise and rely on human judgement of an implicit grid. These factors can lead to inaccuracy of recording, primarily, but also of resolving. But quaddresses are also inherently tolerant of such possible inaccuracies.

Because the grid used is implicit and based on human judgement, even an accurately recorded quaddress may mismatch a resolver's expectations. I think quaddress users will intuitively understand that the quaddresses should be treated as indistinct or "fuzzy" at the edges due to differences in human judgement. This imprecision does not greatly diminish the primary benefit of quaddresses, reducing the scan area of a document when locating cited data.

Consider for example, the following lettered reference points. B is clearly ambiguous, but it is also possible that someone might assign A the quaddress of 22 rather than 21, and similarly, someone might assign C to 21 rather than 22. 

<figure class="image"> 
{{< inline-svg "abc.svg" >}}
<figcaption></figcaption>
</figure> 

As a proposed best practice, I resist thinking of quaddresses as *containing* the data, and instead treat quaddresses as the space where the content *starts*. For use cases where the user wants to use quaddresses to specify containment, quaddress ranges should be considered, as discussed in the referenced introductory article.

But even this best practice can lead to false impressions. If I "accurately" assign q21 to B, at least in Western cultures, the resolver will likely start in the upper right of q21, some distance away from B, but an "inaccurate" quaddress of 22 would likely lead the resolver to B more quickly for the same reason. But perhaps this speculation only further suggests that inaccuracies and mismatched expectations may largely average out over time.

In addition to treating quaddress boundaries as "fuzzy" the best way to mitigate these possible issues is within the intended design of quaddresses themselves: if you need to specify a smaller area of focus, add more divisions. Now, I could still mistakenly assign q221 to A instead of q212, but even with just one additional division, the scan area has been drastically reduced, so the quaddress should work as intended, not as a way to precisely locate a piece of content, but as a way to reduce the scan area so that a resolver can quickly move to the right area of the document at which point, the content should be quickly identifiable without further effort. If this doesn't accurately describe a given quaddress, that strongly indicates a need for additional divisions. 

## corners and centers

Notice that one consequence of quaddresses is that consecutive, repeating numbers refer to the corresponding corner within the containing quaddress, immediately prior to the repetition. The more repetitions of a number, the more it indicates that the area referenced is closer to the indicated corner of the "lowest" (?) containing quaddress, farther from its center. Once this is understood, certain quaddresses become even more easily resolved. 

One might also want a shorthand way of expressing that something is near the center of a quaddress. More than just a convenience, the meeting of all four quadrants also increases the likelihood that a quaddress may be inaccurately assigned based on different actors' judgements of the fuzzy quaddress edges, although again, this is mitigated by adding divisions.

An existing mechanism in the design of quaddresses can be easily and intuitively extended to suit the purpose of more easily referencing the center of a quaddress. 

Q0 is understood to be the default quaddress that refers to the entire document, or more accurately stated, q0 encompasses the entire first division. In most cases, this can be implied by an empty/missing quaddress. If I want to draw focus more specifically the center, I can simply add divisions to this scheme in a "bulls-eye" pattern, although for consistency, I have used squares:

<figure class="image"> 
{{< inline-svg "000.svg" >}}
<figcaption></figcaption>
</figure> 

This of course can be used to refer to any quaddress center. Again, recognize that the following are equivalent:

> q212 = q2120

The 0 at the end simply means the quaddress encompases the entire quaddress, or more explicitly stated, the 0 refers to the  entire next division of that quaddress, as additional numbers in quaddresses indicate additional divisions. Consistent with Q0, this signifier is redundant and implied and can be simply left off. But of course, I can continue this referencing scheme to focus on the center of q212 by adding another division: q21200. 

Recall that quaddresses can be of arbitrary length on a per-use basis, even when referencing the same artifact with quaddresses of different sizes.

Also note a design consequence: it does not make sense to make non-zero/quadrant references after zero/center references within a single quaddress. Another way to say this is that all quaddresses end with either an implicit or explicit 0.

My intuition is that center references are more likely to be useful at higher/fewer specified dimensions.  
