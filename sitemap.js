let btn = document.querySelector(".btn");
let url;
let xmlmiddle = ``;
btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("not ccliclinf");
    url = document.querySelector(".url").value;
    let xmlTpp= `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    let xmlLast = `</urlset>`;
    
    let newmid = `<url>

    <loc>${url}</loc>

    <lastmod>2005-01-01</lastmod>

    <changefreq>monthly</changefreq>

    <priority>0.8</priority>

 </url>`;
    xmlmiddle = xmlmiddle + newmid;
    document.querySelector(".url").value= "";
    let mygist = document.
    console.log(xmlmiddle)
});

