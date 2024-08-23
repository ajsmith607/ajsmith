const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let output = "";
for (let a=0; a < alpha.length; a++) {
   output += `<figure class="image" style="display: inline-block"> 
{{< inline-svg "glyphs/${alpha[a]}.svg" >}}
<figcaption style="text-align: center; margin: 0">${alpha[a]}</figcaption>
</figure>
`;
}
console.log(output);




