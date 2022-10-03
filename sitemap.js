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
    let xmlfinal = xmlTpp + xmlmiddle +xmlLast
    xmlfinal = xmlfinal.replaceAll(/</g,"&lt;")
    xmlfinal = xmlfinal.replaceAll(/>/g,"&gt;")
    document.querySelector(".url").value= "";
    btn.classList.toggle("disabled");
    let mygist = document.querySelector("tbody");
    mygist.innerHTML = `<tr>
    <td id="file-sitemap-xml-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td>
    <td id="file-sitemap-xml-LC1" class="blob-code blob-code-inner js-file-line">
    ${xmlfinal}
    
    </td>
  </tr>`;
    
    console.log(xmlfinal)
});
let btn1 =document.querySelector("#btn"); 
let link = document.querySelector(".url");
link.addEventListener("input",()=>{
  if(document.querySelector(".url").value === ""){
    console.log("empty");
    btn1.classList = "btn btn-primary disabled";
  }else{
    let re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/
    const result = link.value.match(re);
    if(result){
      btn1.classList.remove("disabled")

    }

    
  }
  

})


