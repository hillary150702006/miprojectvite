import db from './db.json';


let localDb = JSON.parse(JSON.stringify(db));

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
       
        if (localDb[edpoint]) {
            console.log('Using local db for', edpoint);
            return localDb[edpoint];
        }
        throw error;
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
        if (localDb[edpoint]) {
            localDb[edpoint].push(obj);
            console.log('Added to local db for', edpoint);
        }
        return obj;
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
        throw error;
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
        throw error;
    }
}
export {deleteData}
