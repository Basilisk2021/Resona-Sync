"use client";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

export const SelectOptionModal = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  const isModalOpen = isOpen && type === "selectOption";
  const { onOpen } = useModal();

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gradient-to-b from-emerald-500 from-10% to-[#11999E] to-90% shadow-2xl shadow-cyan-500/50 border-none">
        <DialogHeader className="font-bold text-white text-xl"> 
          Select your option
        </DialogHeader>
        <div className=" grid grid-cols-1 gap-4 pl-20 pr-20 ">
          <Button
            onClick={() => onOpen("createServer")}
            className="rounded-full"
          >
            Create Server
          </Button>
           <Button className="rounded-full">
            
            <a 
              href="https://drive.google.com/file/d/1WGV2QkOXMIUYXDUIuHPyQ2t1x_tMC5Ny/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Manual
            </a>
          </Button> 
        </div>
      </DialogContent>
    </Dialog>
  );
};
