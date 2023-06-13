// // import logo from './logo.svg';

// import AddItem from './AddItem';
// import Content from './Content';
// import Footer from './Footer';
// import Header from './Header';
// import { useState,useEffect } from 'react';
// import SearchItem from './SearchItem';


// function App() {
// // const API_URl ='http://localhost:3500/items';
//   const [items,setItems]= useState([]
//   );

//   const [newItem,setNewItem]=useState('')
  
//  const [search,setSearch]= useState('')
// const  [fetchError,setFetchError]=useState(null)
// const [isLoading,setIsLoading]= useState(true)


 

// useEffect(()=>{

//   JSON.parse(localStorage.getItem('todo_list'))

// // const fetchItems =async  ()=>{
// // try{
// //   const response =await fetch(API_URl);
// //   if(!response.ok)throw Error("Data Not Received");
// //   console.log(response);
// //   const listItems = await response.json();
// //   console.log(listItems);
// //   setItems(listItems);
// //   setFetchError(null)
// // }catch(err){
// //   setFetchError(err.message);
// // }finally{
// //   setIsLoading(false)
// // }

// // }

// // setTimeout(()=>{
// //   (async()=>await fetchItems() )()
// // },2000)
   
// },[])




// const addItem =(item)=>{
//   const id =items.length? items[items.length -1].id +1 :1;
//   const addNewItem ={id,checked:false,item}

//   const listItems =[...items,addNewItem]
//   setItems(listItems)
//   localStorage.setItem("todo_list",JSON.stringify(listItems))
  
// }



// const handleCheck =(id)=>{
//   const listItems =items.map((item)=>item.id===id ?{...item,checked:!item.checked}:item)
//   setItems(listItems)
//   localStorage.setItem("todo_list",JSON.stringify(listItems))
  
// }

// const handleDelete =(id)=>{
//   const listItems= items.filter((item)=>item.id !==id)
//   setItems(listItems)
//   localStorage.setItem("todo_list",JSON.stringify(listItems))

 
// }

// const handleSubmit =(e)=>{
//   e.preventDefault()
// if(!newItem) return;

//   console.log(newItem);
//   //add
//   addItem (newItem)
//   setNewItem('')
// }

//   return (
//     <div className='App'>
//      <Header  />

//      <AddItem
// newItem ={newItem}
// setNewItem ={setNewItem}
// handleSubmit ={handleSubmit}
// />

// <SearchItem
// search={search}
// setSearch={setSearch}
// />


//   <main> 
//   {isLoading && <p>Loading Items...</p>} 
// {fetchError && <p>{`Error: ${fetchError}`}</p>}
//  {!isLoading && fetchError &&  <Content
//     items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
//          handleCheck={handleCheck}
//         handleDelete= {handleDelete}

//       />}

// </main> 


//       <Footer
//        length ={items.length}
//       />
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';

import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';

function App() {
 const API_URL ='http://localhost:3500/item';
  const [items,setItems]= useState([])

  const [newItem,setNewItem]=useState('')
  
 const [search,setSearch]= useState('')
const [fetchError,setFetchError]= useState(null)
const [isLoading,setIsLoading]= useState(true)

 useEffect(()=>{
// (JSON.parse(localStorage.getItem('todo_list'))
    
// )
const fetchItems =async()=>{
  try{
const response =await  fetch(API_URL)
if(!response.ok) throw Error("Not Received")
const listItems = await response.json();
setItems(listItems);
setFetchError(null)
  }catch(err){
setFetchError(err.message)
  }finally{
    setIsLoading(false)
  }
  
}
setTimeout(()=>{
  (async()=>await fetchItems())()
},1000)


 },[])









const addItem =(item)=>{
  const id =items.length? items[items.length -1].id +1 :1;
  const addNewItem ={id,checked:false,item}

  const listItems =[...items,addNewItem]
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
  
}



const handleCheck =(id)=>{
  const listItems =items.map((item)=>item.id===id ?{...item,checked:!item.checked}:item)
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
  
}

const handleDelete =(id)=>{
  const listItems= items.filter((item)=>item.id !==id)
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))

 
}

const handleSubmit =(e)=>{
  e.preventDefault()
if(!newItem) return;

  console.log(newItem);
  //add
  addItem (newItem)
  setNewItem('')
}

  return (
    <div className='App'>
     <Header  />

     <AddItem
newItem ={newItem}
setNewItem ={setNewItem}
handleSubmit ={handleSubmit}
/>

<SearchItem
search={search}
setSearch={setSearch}
/>


   <main> 
   {isLoading && <p>Loading Items...</p>}
  
{!isLoading &&    <Content
    items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
         handleCheck={handleCheck}
        handleDelete= {handleDelete}

      />} 

 </main>
    


      <Footer
       length ={items.length}
      />
    </div>
  );
}

export default App;
