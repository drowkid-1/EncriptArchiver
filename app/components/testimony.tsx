"use client";
import Image from "next/image";
import Link from "next/link";
import { Props } from "next/script";
import React, { PropsWithChildren } from "react";

const TwitterHandle: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-blue-500">{children}</span>;
};

const Author: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <Link target="_blank" rel="noopener noreferrer" href={href} className="duration-150 text-zinc-200 hover:text-zinc-50">
    {children}
  </Link>
);

const Title: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="text-sm duration-150 text-zinc-500 hover:text-zinc-300"
  >
    {children}
  </Link>
);

export const Testimonials = () => {
  const posts: {
    content: React.ReactNode;
    link: string;
    author: {
      name: React.ReactNode;
      title?: React.ReactNode;
      image: string;
    };
  }[] = [
    {
      content: (
        <div>
          <p>
            EncriptArchiver es una herramienta online que permite tener un mayor control cuando se requiere compartir algún documento, archivo, cuenta, contraseña etc.
          </p>
          <p>
            ¿Cómo lo logra?, muy sencillo, déjame te explico.
          </p>
          <br />
          <p>Encripta tu documento con un protocolo AES-GCM, sí, con la misma estructura que un proxy pues al subir tu archivo o escribirlo, genera automáticamente un enlace el cual al ingresar, va a redireccionar a este sitio con un ID el cual es el único que podrá desencriptar el archivo y contiene dígitos y letras que sumadas son alrededor de 15.</p>
          <br />
          <p>El ID se genera aleatoriamente y no guardamos los mismos, no tenemos tanto espacio.👏</p>
        </div>
      ),
      link: "https://lalo.my.to",
      author: {
        name: <Author href="https://lalo.my.to">DrowKid</Author>,
        title: <Title href="#">CEO @drowkid-1</Title>,
        image: "https://avatars.githubusercontent.com/u/127297730?v=4",
      },
    },
    {
      content: (
        <div>
          <p>Soy DrowKid y soy disque desarrollador y disque programador pero cuando tengo ganas.</p>
  
          <p>Tengo otras herramientas como chatbots, traductores de codigos html python etc, generadores ccs y de correos y más..</p>
        </div>
      ),
      link: "https://github.com/drowkid-1/", 
      author: { 
        name: <Author href="https://github.com/drowkid-1/">GitHub</Author>, 
        title: <Title href="https://instagram.com/lalo_01dk/">Instagram</Title>, 
        image: "https://avatars.githubusercontent.com/u/127297730?v=4", 
      }, 
    }, 
    { 
      content: ( 
        <div> 
          <p> Puedes checar mis apps para android en <TwitterHandle>drowapps.bswc.net</TwitterHandle>👏!  O haz click en: </p> 
        </div> 
      ), 
      link: "https://drowapps.bswc.net", 
      author: 
      { 
        name: <Author href="https://drowapps.bswc.net/">DrowApps</Author>, 
        image: "https://avatars.githubusercontent.com/u/127297730?v=4", 
      },
    },
  ];

  return (
    <section className="container mx-auto">
      <ul role="list" className="grid max-w-2xl grid-cols-1 gap-16 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex flex-col justify-between duration-150 border rounded border-zinc-500/30 hover:border-zinc-300/30 hover:bg-zinc-900/30 group"
          >
            <Link href={post.link} className="whitespace-pre-line text text-zinc-500 p-6">
              {post.content}
            </Link>
            <div className="relative flex items-start justify-between p-6 duration-150 border-t bg-zinc-900/40 border-zinc-500/30 group-hover:border-zinc-300/30">
              <div>
                <div className="text-base font-display text-zinc-200">{post.author.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{post.author.title}</div>
              </div>
              <div className="overflow-hidden rounded-full bg-zinc-50">
                <Image className="object-cover h-14 w-14" src={post.author.image} alt="" width={56} height={56} />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
