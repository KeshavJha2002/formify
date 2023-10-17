"use client"
import React,{ useState,Dispatch,createContext,ReactNode,SetStateAction } from 'react'
import { FormElementInstance } from '../form_components/FormElements';

type DesignerContextType = {
  elements: FormElementInstance[];
  setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
  updateElement: (id: string, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

const DesignerContextProvider = ({ children }: { children:ReactNode }) => {
  const [elements,setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement,setSelectedElement] = useState<FormElementInstance|null>(null);

  const addElement = (index:number,element: FormElementInstance) => {
    setElements((prev)=>{
      const newElements = [...prev];
      newElements.splice(index,0,element);
      return newElements;
    });
  };

  const removeElement = (id:string) => {
    setElements((prev)=>{
      return (prev.filter((element)=>{return element.id!==id}))
    });
  };

  const updateElement = (id:string,element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((ele) => ele.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider value={{elements,setElements,selectedElement,addElement,removeElement,setSelectedElement,updateElement}}>
      {children}
    </DesignerContext.Provider>
  )
}

export default DesignerContextProvider
