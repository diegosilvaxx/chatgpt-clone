type Props = {
  onSendMessage: (message: string) => void;
};

export const Footer = ({ onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput onSend={onSendMessage} />
        <div className="">
          Feito pela B7web. Permitida a cópia e uso para qualquer fim. <br />
          <a href="https://b7web.com.br/fullstack" className="underline">
            Quer aprender a Programar? Clique aqui
          </a>
        </div>
      </div>
    </footer>
  );
};
