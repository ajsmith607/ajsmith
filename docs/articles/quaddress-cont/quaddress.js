
const svgns = "http://www.w3.org/2000/svg";
function initsvg(svgcontainername, svgsize) {
    const padding = 1;
    let container = document.querySelector(svgcontainername);

    let svgs = container.getElementsByTagName("svg");
    for (var i = 0; i < svgs.length; i++) { svgs[i].remove(); }

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute('width', svgsize);
    svg.setAttribute('height', svgsize);
    let viewboxstartsize = radius * 2; 
    let beforepadding = 0 - padding;
    let afterpadding = viewboxstartsize + (padding * 2);
    svg.setAttribute('viewBox', [beforepadding, beforepadding, afterpadding, afterpadding].join(" "));

    container.prepend(svg);
    return svg;
}

function addLevel(svgcontainername, svgsize, divisionnumber) {
    let container = document.querySelector(svgcontainername);
    let svg = container.getElementByTagName("svg");

}
