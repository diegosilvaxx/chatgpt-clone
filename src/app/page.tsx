"use client";
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Chat } from "../../types/Chat";
import { ChatArea } from "@/components/ChatArea";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: "chat",
    title: "chat",
    messages: [
      {
        id: "99",
        author: "me",
        body: "Opa,tudo bem?",
      },
      {
        id: "100",
        author: "ai",
        body: "Tudo otimo no que posso te ajudar?",
      },
    ],
  });

  const closeSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  const handleClearConversations = () => {};

  const handleNewChat = () => {};
  const handleSendMessage = () => {};
  
  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>

      <section className="flex flex-col w-full">
        <Header
          openSideBar={closeSidebar}
          title={`bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer onSendMessage={handleSendMessage}/>
      </section>
    </main>
  );
};

export default Page;
