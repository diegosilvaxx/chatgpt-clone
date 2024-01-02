'use client'
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);  

  const closeSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  }

  const handleClearConversations = () => {
  }

  const handleNewChat = () => {
  }

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
      </section>
    </main>
  )
}

export default Page;