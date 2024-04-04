"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import Image from "next/image";
import qs from "query-string";


export const ImagePopUpModals = () => {
  const { isOpen, onClose, type, data} = useModal();
  const isModalOpen = isOpen && type === "imgPopUp";



  
  const handleClose = () => {
    onClose();
  };
  const { apiUrl, query } = data;
  const url = qs.stringifyUrl({
    url: apiUrl || "",
    query,
  });

  return (
      
      <Dialog open={isModalOpen} onOpenChange={handleClose} >
      <DialogContent className="bg-0 border-0 ">
        <Image
          src={url}
          alt=""
          width={500}
          height={500}
          
        />

      </DialogContent>
    </Dialog> 


  );
};
