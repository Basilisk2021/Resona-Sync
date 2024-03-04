"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();
  console.log(useSocket);
  if (!isConnected) {
    return (
      <Badge 
        variant="outline" 
        className="bg-yellow-600 text-white border-none"
      >
        ขาดการเชื่อมต่อ
        {/* Fallback: Polling every 1s */}
      </Badge>
    )
  }

  return (
    <Badge 
      variant="outline" 
      className="bg-emerald-600 text-white border-none"
    >
      เชื่อต่อแล้ว
      {/* Live: Real-time updates */}
    </Badge>
  )
}