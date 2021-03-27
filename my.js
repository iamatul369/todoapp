let ch = [];
function update(){
    let tit = document.getElementById("title").value ;
    let desc = document.getElementById("description").value;
    
    
    if(localStorage.getItem('itemJson') == null)
    {
        arr =[];
        arr.push([tit,desc]);
        localStorage.setItem('itemJson',JSON.stringify(arr));
    }
    else
    {
        arrstr= localStorage.getItem('itemJson');
        arr= JSON.parse(arrstr);
        arr.push([tit,desc]);
        localStorage.setItem('itemJson',JSON.stringify(arr));
    }
    updatetab();
    ref();

}

function updatetab (){
    if(localStorage.getItem ('itemJson')== null )
    {
        arr = []
        localStorage.setItem('itemJson',JSON.stringify(arr));
    }
    else{
   
    arrstr= localStorage.getItem('itemJson');
    arr=JSON.parse(arrstr);
    }
 
   let  tb= document.getElementById("tb");
     let str = "";
    arr.forEach((element , index) => {

        str += `
            <tr>
            <th scope=row>${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary"   onclick="deleted(${index})"  >Delete</button><button class="btn btn-primary" onclick="updt(${index})">Update</button></td>
            </tr>
        `;
        
    });
    tb.innerHTML= str;
   
}

function updt(item){
    arrstr=localStorage.getItem('itemJson');
    arr = JSON.parse(arrstr);
    console.log(item);
    arr.forEach((element , index) => {
        if(item == index)
        {
            document.getElementById("title").value=element[0];
            document.getElementById("description").value=element[1];
        }
        ch.push(item); //i am pushing index of the current post to update it by using a global array
        console.log("hii",ch[0]);
     
    });
}
function updt1()
{
    let im=ch[0];
    arr.forEach((element , index) => {
         if(im == index)
             {
                let t =document.getElementById("title").value;
                let d = document.getElementById("description").value;
                console.log(t,d);
                arr.splice(im,1,[t,d]);
                localStorage.setItem('itemJson',JSON.stringify(arr));
            }
        });
          
        updatetab();
        ref();
        ch.pop();
}

let addb = document.getElementById("add1");
addb.addEventListener("click",update);
updatetab();

let upd1 = document.getElementById("upd");
upd1.addEventListener("click",updt1);

function deleted(item){
    console.log("deleted",item);
    arrstr=localStorage.getItem('itemJson');
    arr=JSON.parse(arrstr);
    arr.splice(item,1);
    localStorage.setItem('itemJson',JSON.stringify(arr));
    updatetab();
}

function clearstor(){
    if (confirm("r u sure to clear all!!!!")) {
        localStorage.clear();
        console.log("cleared sucessfully");
        updatetab();
    }
}

function ref(){
    window.location.reload();
}
