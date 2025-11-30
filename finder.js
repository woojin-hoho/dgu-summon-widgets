(function(){
  console.log("[DGU] Database finder loaded.");

  const container = document.getElementById("dgudb");
  if(!container){
    console.warn("[DGU] #dgudb container not found.");
    return;
  }

  container.innerHTML = `
    <div style="padding:10px;border:1px solid #ccc;">
      <h3>Database Finder (DGU)</h3>
      <input type="text" id="dgudb_input" placeholder="데이터베이스 이름 입력" 
        style="width:90%;padding:6px;">
      <button id="dgudb_btn" style="padding:6px;">검색</button>
      <div id="dgudb_results" style="margin-top:10px;"></div>
    </div>
  `;

  const input = document.getElementById("dgudb_input");
  const btn   = document.getElementById("dgudb_btn");
  const out   = document.getElementById("dgudb_results");

  // Summon 공개 API endpoint
  const SUMMON_API = "https://api.summon.serialssolutions.com/2.0.0";

  btn.onclick = async () => {
    let q = input.value.trim();
    if(!q){
      out.innerHTML = "<p>검색어를 입력하세요.</p>";
      return;
    }

    out.innerHTML = "<p>검색 중...</p>";

    try{
      const url =
        `${SUMMON_API}/search?q=${encodeURIComponent(q)}&s.q=Database`;

      let res = await fetch(url,{
        headers:{
          "Accept":"application/json",
        }
      });

      let json = await res.json();

      if(!json.documents || json.documents.length === 0){
        out.innerHTML = "<p>검색 결과 없음.</p>";
        return;
      }

      let html = "<ul>";

      json.documents.forEach(item=>{
        let name   = item.Title || "제목 없음";
        let link   = item.link || "";
        html += `<li><a href="${link}" target="_blank">${name}</a></li>`;
      });

      html += "</ul>";
      out.innerHTML = html;

    }catch(e){
      out.innerHTML = "<p>오류가 발생했습니다.</p>";
      console.error(e);
    }
  };
})();
