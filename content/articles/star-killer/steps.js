function step0(svg, style="light") {
    var square = document.createElementNS(svgns, "rect");
    square.setAttribute("width", radius * 2);
    square.setAttribute("height", radius * 2);
    square.setAttribute("class", style); 
    svg.appendChild(square);

    var circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("r", 0.1);
    circle.setAttribute("cx", centerx);
    circle.setAttribute("cy", centery);
    circle.setAttribute("class", style); 
    svg.appendChild(circle);

    var centercircle = document.createElementNS(svgns, "circle");
    centercircle.setAttribute("r", radius);
    centercircle.setAttribute("cx", centerx);
    centercircle.setAttribute("cy", centery);
    centercircle.setAttribute("class", style); 
    svg.appendChild(centercircle);
    
    var topcircle = document.createElementNS(svgns, "circle");
    topcircle.setAttribute("r", 0.1);
    topcircle.setAttribute("cx", radius);
    topcircle.setAttribute("cy", 0);
    topcircle.setAttribute("class", style + " red"); 
    svg.appendChild(topcircle);
}

function step1(svg, style="light") {
    step0(svg); 
    let pentagon = drawpolygon(radius, 5, 1, 1, style);
    svg.appendChild(pentagon);
}

function step2(svg, style="light") {
    step1(svg); 
    let pentagram = drawpolygon(radius, 5, 2, 1, style);
    svg.appendChild(pentagram);
}

function step3(svg, style="light") {
    step2(svg); 
    let pentagon = drawpolygon(radius, 5, 1, 2, style + " red");
    svg.appendChild(pentagon);
}

function step4(svg, style="light") {
    step3(svg); 
    let level3 = drawpolygon(radius, 5, 2, 2, style);
    svg.appendChild(level3);
    //let level4 = drawpolygon(radius, 5, 1, 3, "med red");
    //svg.appendChild(level4);
}

function step5(svg, style="light") {
    step2(svg); 
    let level3 = drawpolygon(radius, 5, 2, 2, style);
    svg.appendChild(level3);
    let level4 = drawpolygon(radius, 5, 1, 3, "thin red");
    svg.appendChild(level4);
}

function step6(svg, style="thin") {
    let maxdepth = 5;
    for (let level = 1; level <= maxdepth; level++) {
        if (level > 2 ) { style="superthin"; }
        let polygon = drawpolygon(radius, order, 2, level, style);
        svg.appendChild(polygon);
    }
}

function pentagononly(style="thin", svgsize=200) {
    let svg = initsvg("#pentagononly", svgsize);
    let pentagon = drawpolygon(radius, 5, 1, 1, style);
    svg.appendChild(pentagon);
}

function pentagramonly(style="thin", svgsize=200) {
    let svg = initsvg("#pentagramonly", svgsize);
    let pentagram = drawpolygon(radius, 5, 2, 1, style);
    svg.appendChild(pentagram);
}

function staronly(style="thin", svgsize=200) {
    let svg = initsvg("#staronly", svgsize);
    let star= drawpolygon(radius, 5, 2, 1, style + " pentagramfillblack");
    svg.appendChild(star);
}

function step(stepnum, svgsize=500) {
    let svg = initsvg("#step" + stepnum, svgsize);
    if (stepnum == 0) { step0(svg); }
    if (stepnum == 1) { step1(svg); }
    if (stepnum == 2) { step2(svg); }
    if (stepnum == 3) { step3(svg); }
    if (stepnum == 4) { step4(svg); }
    if (stepnum == 5) { step5(svg); }
    if (stepnum == 6) { step6(svg); }
    if (stepnum == 100) { fullalgorithm(svg); }
}

