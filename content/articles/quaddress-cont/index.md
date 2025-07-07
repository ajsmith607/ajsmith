---
title: "quaddresses: imprecision in practice"
date: 2025-07-
tags:
- historical-research
- digitization
- metadata 
draft: true
---

After significant time using quaddresses in a real application, I reflect on their effectiveness and propose refinements.  

<!--more-->

Quaddresses are a minimal approach to spatially referencing areas of documents based on an implicit grid that accommodates two dimensional objects of arbitrary size, shape, or level of detail. For a fuller introduction to quaddresses, see {{% pagelink "quaddress-intro" %}}.

## general reflections on efficiency

In my historical research, newspaper content is my most consistent source of rich information, so extra effort in their handling has an outsized impact on my productivity. Consider these relevant factors:

  -  Newspaper pages are a large format that is densely packed with data, and citations may reference just a few words within a page, requiring significant effort to relocate the original text.

  - Newspapers are formatted in columns, that is to say, they are grid based layouts and therefore inherently compatible with quaddresses, making them more convenient and accurate.

In practice, determining and recording quaddresses does not add significant time or effort to the research process. When downloading newspaper content, I save the images with a file naming convention that not only facilitates file organization, but also directly supports metadata encoding as part of my semi-automated digitization workflow.

As I am saving newspaper images, recording quaddresses is a natural extension of recording page numbers, already part of my file naming convention. Supporting software I wrote to populate metadata files by parsing image filenames was easily extended to parse quaddresses similarly to existing page number parsing code. Likewise, the content management code that displays this metadata in my published work was trivially easily to modify for quaddresses. Even when considered on a larger scale, the ongoing time costs of accommodating quaddresses is negligible.

But quaddresses save significant time when relocating content within a newspaper page, and positively impact my productivity at all scales, as they drastically reduce the amount of content irrelevant to my immediate purpose that I must visually scan to relocate the referenced data.

## edge cases

Quaddresses are intentionally imprecise. This can lead to inaccuracy of recording particularly, but also of resolving. But quaddresses are also inherently tolerant of possible inaccuracies.

Consider for example, the following case, which, in which an item being referenced

<figure class="image"> 
{{< inline-svg "quaddress.svg" >}}
<figcaption></figcaption>
</figure> 

## possible refinements 

Notice that in quaddresses, consecutive, repeating numbers refer to a corner within those dimensions.

0 is understood to be the default quaddress that refers to the entire document. In most cases, this can be implied by an empty/missing quaddress.


