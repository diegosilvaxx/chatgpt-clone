import { Chat } from "../../types/Chat";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatPlaceholder } from "./ChatPlaceholder";

type Props = {
  chat: Chat | undefined;
}

export const ChatArea = ({chat}: Props) => {
  return(
<section className="flex-auto h-0 overflow-y-scroll">
  {!chat && <ChatPlaceholder/>}
  {chat && chat.messages.map(item => (
    <ChatMessageItem key={item.id} item={item}/>
  ))}
</section>
  ) ;
}