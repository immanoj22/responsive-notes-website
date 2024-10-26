

function Addnote(){
    const newelement=document.createElement('div');
    newelement.innerHTML=`
               <div id="box"class="realboxper">

                <div id="textarea11" class="textarea11">
                    <textarea id="title" class="title" placeholder="Title"></textarea>
                    <button class="cancel"  type="button">&#x2715;</button>
                </div><hr>

                <div id="textarea2" class="textarea2">
                    <textarea id="para" class="para" placeholder="Type note"></textarea>
                </div>
                
            </div>`;

        document.getElementById("tot").appendChild(newelement);
        const textarea1=newelement.querySelector(".textarea2 textarea");
        const teaxttitle=newelement.querySelector(".textarea11 textarea");
        
        textarea1.addEventListener("keyup",(eve)=>{
            textarea1.style.height="50px";
            let scheight=eve.target.scrollHeight;
            textarea1.style.height=`${scheight}px`
        })
        
        teaxttitle.addEventListener("keyup",(eve)=>{
            teaxttitle.style.height="30px";
            let scheight1=eve.target.scrollHeight;
            teaxttitle.style.height=`${scheight1}px`

            
        })

        const closebtn=newelement.querySelector(".cancel");
        closebtn.addEventListener('click',function(){
            newelement.remove()
        })

       
    
}














































































































































