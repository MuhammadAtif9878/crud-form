
let arr = [];

function addItem() {

  window.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {

  e.preventDefault();
  
  const Name = document.getElementById("Name");
  const Email = document.getElementById("Email");
  const password = document.getElementById("password");
  const userData = {
    Name: Name.value,
    Email:Email.value,
    password: password.value
  };
  arr.push(userData);
  console.log("🚀 ~ file: Index.js:21 ~ handleSubmit ~ userData:", userData)

  viewItems(arr);

  window.removeEventListener("submit", handleSubmit);
  document.getElementById("resetForm").reset();
}





function viewItems(arr) {

  let data = ""

  arr.forEach((item, index) => {
  
 data = data +

      `
    <tr id="row_${index}">
  <td>
        ${item.Name}
  </td>
  <td> 
        ${item.Email}
  </td>
  <td> 
        ${item.password}
  </td>
  <td> 
      <a onclick="updateData(${index})" type="button" id="username"   class="btn btn-warning btn-sm delete" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a> 
      <a onclick="deleteData(${index})" id="password" class="btn btn-danger btn-sm delete">Delete</a>

  </td>
  </tr>
  `
  });
  let table = document.getElementById("table");
  table.innerHTML = data;
};

function updateData(index) {

  const result = arr.find((value, id) => {
    return id == index;
    

  });

  console.log(result, 'result')

  // const result=arr.find((value, id) => {
  //   return id==index

  // });

  console.log("🚀 ~ file: Index.js:66 ~ updateData ~ result:", result)
  console.log("🚀 ~ file: Index.js:65 ~ updateData ~ index:", arr)
  let data
  data = 


    `
             <div class="form-group">
             <label for="Name">Name</label>
             <input type="Name" id="NameUpdate" value="${result.Name}"  class="form-control"  placeholder="Enter name">
             
           </div>
           <div class="form-group">
             <label for="exampleInputEmail1">Email address</label>
             <input type="Email"id="EmailUpdate" value="${result.Email}" class="form-control"  placeholder="Enter email">
             
           </div>
           <div class="form-group">
             <label for="exampleInputPassword1"> Password</label>
             <input type="password" class="form-control" id="passwordUpdate" value="${result.password}" placeholder="Enter password">
           </div>

           

           <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           <a type="button" onclick="updateDataHandler(${index})" class="btn btn-primary" data-bs-dismiss="modal" >Change data</a> 
         
         </div>    
         
    `
  let table = document.getElementById("Modal");
  table.innerHTML = data;
}



var updateDataHandler = (id) => {
  console.log(id)
  const Name = document.getElementById("NameUpdate");
 
  const Email = document.getElementById("EmailUpdate");

  const password = document.getElementById("passwordUpdate");

  arr = arr.map((item, i) => {
    if (i == id){
      return {
        Name: Name.value,
        Email: Email.value,
        password: password.value
      }
    } else {
      return item
    }
      
  })
  
 
  console.log(arr, '______')
  let table = document.getElementById(`row_${id}`);

  let data = 
  
  ` <td>
    ${Name.value}
</td>
 <td>
    ${Email.value}
</td>
<td> 
    ${password.value}
</td>
<td> 
     <a onclick="updateData(${id})" type="button" id="Name"  class="btn btn-warning btn-sm delete" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a> 
     <a onclick="deleteData(${id})" id="password" class="btn btn-danger btn-sm delete">Delete</a>

</td>`
  table.innerHTML = data;
 

}




function deleteData(id) {

  arr.splice(id, 1);

  viewItems(arr)
}


































// var slectedrow = null;



// // show alert 

// function showalert(message,className) {
     
//     const div = document.createElement('div')
//     div.className = `alert alert-${className}`


//     div.appendChild(document.createTextNode(message))
//     const container = document.querySelector('.container');
//     const main = document.querySelector(".main");
//     container.insertBefore(div,main);
//     setTimeout(() => 
//         document.querySelector('.alert').remove(), 3000);
// }

// // clear all fields

// function clearfields() {
//     document.querySelector('Name').value="";
//     document.querySelector('Email').value="";
//     document.querySelector('password').value="";
// }

// //  add data 



//     document.querySelector("#submit-formt").addEventListener("submit" , (e)=>{


//         //get form value

//         const Name= document.querySelector("#Name").value;
//         const Email= document.querySelector("#Email").value;
//         const password = document.querySelector("#password").value;



//        // validate

//        if (Name === "" || Email === "" || password === "") {
//            showalert(" please fill in all fields" , "danger")
//        }else{

//         if (slectedrow ==null) {
//             const list = document.querySelector("#Email-list");
//             const row = document.createElement("tr"); 

//             row.innerHTMl=`
//             <td>${Name}</td>
//             <td>${Email}</td>
//             <td>${password}</td>

//             <a href=" #" class="btn btn-warning btn-sm edit">Edit</a> /
//             <a href=" #" class="btn btn-danger btn-sm delete">Delete</a> 

//             `;

//             list.appendChild(row);
//             slectedrow=null;
//             showalert("Email added", "succesful")
//         }else{
//            slectedrow.children[0].textContent= Name;
//            slectedrow.children[1].textContent= Email;
//            slectedrow.children[2].textContent= password;
//            slectedrow=null;
//            showalert(" Email is info" , "info")
//         }
//         clearfields();
//        }
//     })


//      // edit data 

//      document.querySelector("#Email-list").addEventListener("click", (e) =>{
//         target.e.target;
//         if(target.className.contains('Edit')){
//         slectedrow = target.parentElement.parentElement;
        
//         document.querySelector("#Name").value = slectedrow.children[0].textContent;
//         document.querySelector("#Email").value = slectedrow.children[1].textContent;
//         document.querySelector("#password").value = slectedrow.children[2].textContent;
//         }
//      })



//     //delete data

// document.querySelector('#Email-list').addEventListener('click', (e)=>{
//     target= e.target;
//     if(target.className.contains('delete')){
//         target.parentElement.parentElement.remove();
//         showalert(" Email data Deleted ","danger");
        

//     }
// })