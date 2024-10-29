import Image from "next/image";

export default function Contact() {
  const contacts = [
    {
      href: "https://github.com/khraosgenetor/",
      icon: "/svgs/icons8-github.svg",
      alt: "GitHub icon",
      label: "@khraosgenetor",
    },
    {
      href: "https://instagram.com/khraosgenetor/",
      icon: "/svgs/icons8-instagram.svg",
      alt: "Instagram icon",
      label: "@khraosgenetor",
    },
    {
      href: "https://discord.com/users/1219542034998628352",
      icon: "/svgs/icons8-discord.svg",
      alt: "Discord icon",
      label: "@khraos.genetor_",
    },
  ];

  return (
    <footer>
      <main className="flex flex-row gap-4 row-start-2 items-center justify-center">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <Image
              className="dark"
              src={contact.icon}
              alt={contact.alt}
              width={35}
              height={35}
            />
            {contact.label}
          </a>
        ))}
      </main>
    </footer>
  );
}
