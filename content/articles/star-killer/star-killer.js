function rounddown (value) { return (value) ? parseFloat(value.toFixed(2)) : value ;} 
function degstorads (degrees) { return degrees * (Math.PI / 180); }

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

function getvertices(radius=5, order=5, scalingfactor=1) {
    let degrees = 360/order;
    let radians = degstorads(degrees);
    radius = radius * scalingfactor;

    let vertices = [];
    // first vertex is fixed at top, center 
    let [firstvertexx, firstvertexy] = [centerx, rounddown(centery - radius)];
    vertices.push([firstvertexx, firstvertexy].join(","));
    for (var i = 1; i < order; i++) {
        let angle = radians * i ;
        let x = rounddown(centerx + radius * Math.sin(angle));
        let y = rounddown(centery - radius * Math.cos(angle));
        vertices.push([x, y].join(","));
    }
    return vertices.join(" ");
}

function sortvertices(vertices, step=2) {
    vertices = vertices.split(" ");
    const newvertices = [vertices[0]]; 
    let pairedIndex = step;
    for (let i = 0; i < vertices.length; i++) {
      // get index of paired element, wrapping end or array using modulus 
      pairedIndex = pairedIndex % vertices.length;
      newvertices.push(vertices[pairedIndex]);
      pairedIndex = pairedIndex + step;
    }
    return newvertices.join(" ");
}

function rotateVertices(vertices, centerX, centerY, angle) {
    vertices = vertices.split(" ");
    let rotatedVertices = [];
    for (let i = 0; i < vertices.length; i++) {
        let [x, y] = vertices[i].split(",");
        let rotatedX = centerX + (x - centerX) * Math.cos(angle) - (y - centerY) * Math.sin(angle);
        let rotatedY = centerY + (x - centerX) * Math.sin(angle) + (y - centerY) * Math.cos(angle);
        rotatedVertices.push([rounddown(rotatedX), rounddown(rotatedY)].join(","));
    }
    return rotatedVertices.join(" ");
}

function drawpolygon(radius=5, order=5, step=1, depthlevel=1, style="") {
    const polygon = document.createElementNS(svgns, "polygon");
    let currentScaling = depthlevel == 1 ? startscale : startscale / Math.pow(scalefactor, depthlevel - 1);
    let points = getvertices(radius, order, currentScaling);
    points = sortvertices(points, step);
    if (depthlevel % 2 == 0) { points = rotateVertices(points, centerx, centery, degstorads(180)); }
    polygon.setAttribute("points", points);
    polygon.setAttribute("class", style);
    return polygon;
}

function fullalgorithm(svg, maxdepth=depth ) {
    for (let level = 1; level <= maxdepth; level++) {
        if (level == depth) {
            let pentagon= drawpolygon(radius, order, 1, level, "pentagonfill");
            svg.appendChild(pentagon);
            let star = drawpolygon(radius, order, 2, level, "pentagramfillwhite");
            svg.appendChild(star);
        } else {
            let pentagram = drawpolygon(radius, order, 2, level);
            svg.appendChild(pentagram);
        }
    }
}

const depth = 2;
let radius = 5;
let order = 5;

let [centerx, centery] = [radius, radius];
const startscale = 1;
const phi = 1 + Math.sqrt(5) / 2;
const scalefactor = phi + 1  ;

