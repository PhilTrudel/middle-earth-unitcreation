!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();let e=document.querySelector(".magic"),t=document.querySelector(".item"),o=document.querySelector(".lessMagic"),n=document.querySelector(".lessItem"),l=document.querySelector(".addHero"),r=document.querySelector(".removeHero");e.addEventListener("click",(function(){const e=document.createElement("tr");e.className="text-center",e.innerHTML='\n    <th scope="row"><input type="text" class="form-control" placeholder="Power"></th>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="..."></td>',document.getElementById("tableMagic").appendChild(e)})),t.addEventListener("click",(function(){const e=document.createElement("tr");e.className="text-center",e.innerHTML='\n    <th scope="row"><input type="text" class="form-control" placeholder="Item"></th>\n    <td><input type="text" class="form-control" placeholder="..."></td>',document.getElementById("tableItem").appendChild(e)})),l.addEventListener("click",(function(){const e=document.createElement("tr");e.className="text-center",e.innerHTML='\n    <th scope="row"><input type="text" class="form-control-xs" placeholder="Hero"></th>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0/9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>\n    <td><input type="text" class="form-control" placeholder="0-9"></td>',document.getElementById("tableHero").appendChild(e)})),o.addEventListener("click",(function(){const e=document.getElementById("tableMagic");e.removeChild(e.lastElementChild)})),n.addEventListener("click",(function(){const e=document.getElementById("tableItem");e.removeChild(e.lastElementChild)})),r.addEventListener("click",(function(){const e=document.getElementById("tableHero");e.removeChild(e.lastElementChild)}));
