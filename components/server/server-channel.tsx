"use client";

import { 
  Channel, 
  ChannelType, 
  MemberRole,
  Server
} from "@prisma/client";
import { Edit, MessageCircleMore,  Mic, Trash, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";
import { ModalType, useModal } from "@/hooks/use-modal-store";
import { classNames } from "uploadthing/client";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}

const iconMap = {
  [ChannelType.TEXT]: MessageCircleMore,
  [ChannelType.AUDIO]: Mic,
  [ChannelType.VIDEO]: Video,
}

export const ServerChannel = ({
  channel,
  server,
  role
}: ServerChannelProps) => {
  const { onOpen } = useModal();
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[channel.type];

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/channels/${channel.id}`)
    
  }

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { channel, server });
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-[#30E3CA] transition mb-1",
        params?.channelId === channel.id && "bg-[#40514E] "
      )}
    > 
      <Icon className="flex-shrink-0 w-5 h-5 text-black  group-hover:text-white    transition" /> 
      <p className={cn(
        "line-clamp-1 font-semibold text-sm text-black group-hover:text-white   transition",
        params?.channelId === channel.id && "text-primary" 
      )}>
        {channel.name}
      </p>
      {channel.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={(e) => onAction(e, "editChannel")}
              className="hidden group-hover:block w-4 h-4 text-black hover:text-white "
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              onClick={(e) => onAction(e, "deleteChannel")}
              className="hidden group-hover:block w-4 h-4 text-black hover:text-white "
            />
          </ActionTooltip>
        </div>
      )}
      {channel.name === "general" && (
        <div className="ml-auto w-4 h-4 text-black   transition">
          
        </div>

      )}

    </button>
    
  )
}