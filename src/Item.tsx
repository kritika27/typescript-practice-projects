import React,{Dispatch, SetStateAction} from 'react';

interface ItemProps{
  list:List[];
  deleteItem(id:number):void;
  completeItem(id:number):void;
  setItem:Dispatch<SetStateAction<string>>;
  editItem(id:number):void;
}
   
   interface List {
    id: number;
    item: string;
    complete:boolean;
   }
export const Item:React.FC<ItemProps> = ({list,deleteItem,completeItem,setItem,editItem}:ItemProps) => {
 
 
    return (
    <div>
        {
        list.map(({id,item,complete}:List)=>{
          return(
            <div key={id}>
                {!complete && <p>{item}</p>}
              {complete && <p style={{textDecorationLine:"line-through",textDecorationColor:"green"}}>{item}</p>}
              <button onClick={()=>completeItem(id)}>Mark as Complete</button>
              <button onClick={()=>editItem(id)}>Edit</button>
              <button onClick={()=>deleteItem(id)}>Delete</button>
              </div>
          )
        })
    }
    </div>
  )
}
