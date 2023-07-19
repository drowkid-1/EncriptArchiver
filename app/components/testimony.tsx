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
            Sígueme en mis redes: https://lalo.my.to/:
          </p>
          <p>
            Gran parte de mis trabajos, apps, proyectos o herramientas son de código abierto, esto quiere decir que cualquiera puede crear una versión personalizada partiendo de la estructura inicial del mismo.
          </p>
          <br />
          <p>Puedes acceder a ellos ingresando a mi perfil de GitHub..</p>
          <br />
          <p>Nunca dejes de Aprender.👏</p>
        </div>
      ),
      link: "https://lalo.my.to",
      author: {
        name: <Author href="https://lalo.my.to">DrowKid</Author>,
        title: <Title href="#">CEO @discreet</Title>,
        image: "https://avatars.githubusercontent.com/u/135056994?s=400&u=3eec480692fa060d584e295bc9ca61dc904a991e&v=4",
      },
    },
    {
      content: (
        <div>
          <p>Soy DrowKid y soy disque desarrollador y disque programador pero cuando tengo ganas.</p>
  
          <p>Sígueme → https://lalo.my.to/</p>
        </div>
      ),
      link: "https://twitter.com/steventey/status/1615035241772482567?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1615035241772482567%7Ctwgr%5E1db44bb10c690189e24c980fcd787299961c34c6%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Fsteventey2Fstatus2F1615035241772482567widget%3DTweet", 
      author: { 
        name: <Author href="https://twitter.com/steventey">Steven Tey</Author>, 
        title: <Title href="https://vercel.com">Senior Developer Advocate at Vercel</Title>, 
        image: "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg", 
      }, 
    }, 
    { 
      content: ( 
        <div> 
          <p> Congratulations on the launch <TwitterHandle>@chronark_</TwitterHandle>👏! This is such a valuable product for developers. Icing on the cake is that it's open source! ✨ </p> 
        </div> 
      ), 
      link: "https://twitter.com/DesignSiddharth/status/1615293209164546048", 
      author: 
      { 
        name: <Author href="https://twitter.com/DesignSiddharth">@DesignSiddharth</Author>, 
        image: "https://pbs.twimg.com/profile_images/1613772710009765888/MbSblJYf_400x400.jpg", 
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
