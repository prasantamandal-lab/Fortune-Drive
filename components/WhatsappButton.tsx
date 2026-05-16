export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918114763522"
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 transition duration-300 p-4 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.6)]">

        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-10 h-10"
        />

      </div>
    </a>
  );
}