import { Send } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-gradient-to-t from-emerald-300 from-10% to-emerald-500 to-90% shadow-2xl  flex items-center justify-center">
          <Send className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold text-zinc-600">
        {type === "channel" ? "Welcome to " : ""}{name} {" Room"}
      </p>
      <p className="text-zinc-600">
        {type === "channel"
          ? `This is the start of the ${name} channel.`
          : `This is the start of your conversation with ${name}`
        }
      </p>
    </div>
  )
}