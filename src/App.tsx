import React,{useState} from 'react';
import './App.css';
import { Item } from './Item';
interface NewItem{
  id:number;
  item:string;
  complete:boolean;
}
const App:React.FC=()=> {
const [item,setItem]=useState<string>("");
const [complete,setComplete]=useState<boolean>(false);
const [list,setList]=useState<NewItem[]>([]);
const [editId,setEditId]=useState<number>(0);

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const newItem={
    id:Math.random(),
    item,
    complete
  }
  if(item && editId===0)
  {
    setList([...list,newItem]);
    setItem("");
    setComplete(false);
  }
  else if(item && editId)
  {
    setList(list.map(el=>{
      if(el.id===editId)
      {
        return {...el,
        item:item}
      }
      return el;
    }))
    setItem("");
    setComplete(false);
    setEditId(0);
  }

}

const editItem=(id:number):void=>{
  const editItem:any=list.find(el=>el.id===id);
  console.log(editItem);
   setItem(editItem.item);
   setEditId(editItem.id);
}
const deleteItem=(id:number):void=>{
  setList(list.filter(el=>el.id!==id));
}
const completeItem=(id:number):void=>{
  setList(list.map(el=>{
    if(el.id===id)
    {
      return {...el,
      complete:!el.complete}
    }
    return el;
  }))
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
      <button>Add Item</button>
    </form>
    <Item list={list} deleteItem={deleteItem}
    completeItem={completeItem} setItem={setItem}
    editItem={editItem}
    />
   
    </>
  );
}

export default App;
