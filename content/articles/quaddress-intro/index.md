---
title: "spatially mapping derivative content to original documents"
date: 2022-06-01  
tags:
- historical-research
- digitization
- metadata 
---

Quadrant Addressing or *Quaddressing* provides an intuitive and consistent way to make relative spatial references to an original, two dimensional artifact (primarily for documents such as a printed text, photographs, etc.) regardless of its size or shape, or whether the artifact is physical or digital. Quaddressing relies on imprecision to aid human judgement instead of relying on highly precise measurements of varying units across different types of documents, thereby greatly increasing the ease and efficiency of both recording and interpretation across all documents for both human actors and code. 

<!--more-->

Often while doing historical research and publishing my findings, I capture and display a smaller piece of information from an authoritative source. Actual examples include:

  - quoting a single sentence in a newspaper article, when the newspaper is in a larger format with many other articles on the same page,
  - taking not only full photographs of handwritten documents, but also photographing each page in sections for greater detail, and
  - cropping a photo to "zoom in" on one aspect of it, such as showing a single person's face among an otherwise unordered group of people in a photo, or showing several city blocks from a much larger map that might itself not have a visible coordinate system or other spatial reference points.

In each of these cases, much of the context of the original and the relationship of the part to the whole is missing, at least to some degree. It is one of my fundamental goals to assist people in discovering, accessing, and understanding the original documents, whether physical or digital. To that end, I have been experimenting with an approach that would allow me to simply and easily add metadata to individual images that would provide an intuitive way to guide people back to their positions in the original documents. 

My approach is to use a simple addressing system that can be applied uniformly to any kind of document, regardless of the size or shape of that document, or whether it is print or digital. The approach scales depending on individual needs and can be easily and efficiently encoded and decoded, by both humans and code. I call this addressing system quaddressing.

Beginning with populating the negative use case: if a derivative represents the entire area of the original, its quaddress is "0". To specify an area within the document, simply divide the current division into quadrants, beginning with the entire area: 

<figure class="image"> 
{{< inline-svg "1d-grid.svg" >}}
<figcaption></figcaption>
</figure> 

As greater precision is needed, divide each quadrant in the current/highest division into additional quadrants, thus creating a new current/highest division:

<figure class="image"> 
{{< inline-svg "2d-grid.svg" >}}
<figcaption></figcaption>
</figure> 

The original quadrants are shown by the major grid, the added division by the minor grid.

This approach provides a clear and consistent method for achieving greater precision by adding an arbitrary number of divisions that can then be referenced in the metadata with an arbitrarily long string of integers:
 
<pre><code>
image.quaddress = "43";
</code></pre>

<figure class="image"> 
{{< inline-svg "2d-43-grid.svg" >}}
<figcaption></figcaption>
</figure> 

Essentially, quaddresses are a textual description of visual data. Quaddresses in citations may be abbreviated as in the following real-world example:

<figure>

> — 11 Nov 1937, "In Tribute to Emily Mills", The Ithaca Journal, Ithaca NY, p2, q212, newspapers.com.

</figure>

Quaddressessing is  a simple, intuitive, universally applicable tool of focus. The value to the human quaddress consumer is that it greatly constrains the scan area of the original document when locating the citation in context, at which point, human judgement can quickly and easily locate the original precisely. As with my approach to [mitime](http://thisismitime.com), I intentionally sacrifice precision for simplicity to increase both encoding and decoding efficiency. 

High precision is often not needed, and for human actors, makes both the metadata encoding and location resolution counter-productively complex. This approach is more efficient because it simply seeks to enhance human judgement rather than get in its way. Quaddresses are a tool of focus, not measurement. Encoding is estimated, decoding is approximated.

Quaddressing is simple and leverages the natural human ability to accurately estimate halves (and thus quarters), even of asymmetrical shapes. Many documents and artifacts are themselves based on implicit grids, such as columns in a newspaper, reference grids (and even the streets) on a map, and even the composition of photographs. 

So, as a general rule, use the lowest level of precision necessary to achieve the desired goal. In many cases, one or two divisions are sufficient, as again, we are only looking to aid human judgement by locating the content approximately. 

Consider a straightforward example, a person reading print newspapers, which are often formatted according to a grid consisting of eight columns. A two dimensional quaddress would be very easy for a human actor to judge, record and then use to relocate the content in context. A three dimensional quaddress would quite precisely locate the content, but would also be significantly more difficult to judge for encoding and decoding by human actors. Because quaddresses can have mixed specificity, higher precision can be used on a per-case basis where it is genuinely warranted. 

Greater precision may be genuinely desirable for very large, or very detailed originals from which multiple derivatives are created. The approach for implementing and interpreting quaddresses is the same regardless of how many divisions are used, and for non-human actors there is no theoretical upper limit to the degree of precision employed, and greater specificity has minimal impact on encoding and decoding performance.

Note too that this approach is compatible with mixed levels of precision on a per-item basis as needed. For example, given a collection of otherwise related images, one could decide to use one or two divisions for most derivatives while specifying higher divisions on other images as needed. There is no reason to do an up-front review of data to decide the highest level of precision likely to be needed across a collection, or in a publication, instead use mixed levels of specificity, only using higher divisions when absolutely necessary.

<pre><code>
collection1.image1.quaddress = "43";
collection1.image2.quaddress = "4321";
</code></pre>

And so it should be clear that quaddresses of different levels of specificity can be combined in multiple references to the same original as the relative proportions of the areas being referenced warrant it:

<pre><code>
collection1.image1.quaddress1 = "43";
collection1.image1.quaddress2 = "4321";
</code></pre>

This also illustrates that the length of the quaddress itself implies the number of divisions applied, and therefore, the relative square size of the individual quaddress, the scope of the referenced content within the original.

Additionally, different quaddress spaces can be applied to the derivatives themselves, such as specifying a location within a photo within a page. The photo would have its quaddress within the page, probably at a low specificity, and then a derivative image of the photo would have its own quaddress space, possibly having greater precision. 

Obviously, many originals will not be perfectly square, and it is important to remember that this approach is purposely an abstraction of a map. To interpret a quaddress against say, an 11x17 sheet a paper, one can easily make the adjustment because division by quadrants only requires accurately judging the approximate midpoints along an X and Y axis for an area, something that is very natural for everyone.

<figure class="image"> 
{{< inline-svg "2d-stretched-grid.svg" >}}
<figcaption></figcaption>
</figure> 

The same can be said of non-rectilinear originals. As long as the grid is imagined to be the same maximum width and maximum height of the original–that is to say, the grid encompasses the object’s minimum bounding box–the approach works, as again, using human judgement to apply the mapping is easily understood by anyone. 

<figure class="image"> 
{{< inline-svg "2d-irregular-grid.svg" >}}
<figcaption></figcaption>
</figure> 

The shape of the original artifact is one factor to consider when deciding to include higher divisions.

In my use cases, such as referencing text within an article on a newspaper page, I only need to specify the approximate starting point of the content. Nothing is gained by, for example, trying to encode the overall area the derivative image occupies. However, this use case and others can be very straightforwardly accommodated, as shown in these two divisional grid examples:

<pre><code>
# a single quaddress, already discussed
image.quaddress = "43";

# a range of quaddresses
image.quadrange = "14-34";

# multiple, possibly non-contiguous, quaddresses
# as a comma delimited string of integers
image.quaddresses = "12,22,43";

# multiple, possibly non-contiguous, quaddress ranges
image.quadranges = "14-34,22-44";

# etc.
</code></pre>

The following is a live demo illustrating quaddresses. For practical reasons, I have limited the demo to a maximum of four divisions:
 
{{< embed-fiddle "//jsfiddle.net/asmith607/c4pyzgaq/486/embed/result,js,html,css/" >}}

I believe that in most cases, two divisions are ideal to approximate locations and resolve quaddresses quickly. Three divisions is still manageable, but beyond that, resolving quaddresses starts becoming challenging and inefficient for human actors.

Notice that by their nature, quaddresses are sortable numerically, and if the number of divisions is constant, or alternately, the quaddresses are zero-padded, quaddresses are sortable lexicographically.
