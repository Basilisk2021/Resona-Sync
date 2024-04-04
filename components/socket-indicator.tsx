"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Wifi,WifiOff } from 'lucide-react';


export const SocketIndicator = () => {
  const { isConnected } = useSocket();
  console.log(useSocket);
  if (!isConnected) {
    return (
<WifiOff  className=" text-red-600 border-none"></WifiOff> 

    )
  }

  return (
    <Wifi className=" text-emerald-600 border-none"></Wifi>
  )
}