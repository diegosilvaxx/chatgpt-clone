import { useState } from "react";
import { Chat } from "../../types/Chat";
import IconChatLeft from "./icons/IconChatLeft";
import IconTrash from "./icons/iconTrash";

type Props = {
  chatItem: Chat;
  active: boolean;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

export const SidebarChatButton = ({
  active,
  chatItem,
  onClick,
  onDelete,
  onEdit,
}: Props) => {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [titleInput, setTitleInput] = useState(chatItem.title);

  return (
    <div
      className={`flex items-center rounded-md p-3 text-sm cursor-pointer
    hover:bg-gray-500/10 ${active ? "bg-gray-500/20" : "bg-transparent"}`}
    >
      <div className="mr-3">
        {!deleting && <IconChatLeft width={16} height={16} />}
        {deleting && <IconTrash width={16} height={16} />}
      </div>

      <div className="flex-1 text-sm overflow-x-hidden">
        {editing && (
          <input
            className="w-full bg-transparent text-sm outline-none border border-blue-500"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};
