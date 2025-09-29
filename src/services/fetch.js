async function getData(edpoint) {
    try {
        const peticion = await fetch(`http://localhost:3001/${edpoint}`,{ 
           method: "GET",
           headers: {
              "Content-Type": "application/json"
           },

        }); 

        const respuesta = await peticion.json()
        console.log(respuesta);
         return respuesta 
        
    } catch (error) {
        console.error (error);
        
    }
}
   
export {getData}

async function postData(edpoint, obj) {
    try {
        const peticion = await fetch(`http://localhost:3001/${edpoint}`,{
           method: "POST",
           headers: {
              "Content-Type": "application/json"
           },

          body: JSON.stringify(obj)
        }); 

        const respuesta = await peticion.json()
        console.log(respuesta);
         return respuesta 
        
    } catch (error) {
        console.error (error);
        
    }
}
export {postData}

async function putData(edpoint, obj) {
    try {
        const peticion = await fetch(`http://localhost:3001/${edpoint}`,{
           method: "PUT",
           headers: {
              "Content-Type": "application/json"
           },

          body: JSON.stringify(obj)
        }); 

        const respuesta = await peticion.json()
        console.log(respuesta);
         return respuesta 
        
    } catch (error) {
        console.error (error);
        
    }
}
export {putData}

async function deleteData(edpoint, obj) {
    try {
        const peticion = await fetch(`http://localhost:3001/${edpoint}`,{
           method: "DELETE",
           headers: {
              "Content-Type": "application/json"
           },

          body: JSON.stringify(obj)
        }); 

        const respuesta = await peticion.json()
        console.log(respuesta);
         return respuesta 
        
    } catch (error) {
        console.error (error);
        
    }
}
export {deleteData}

