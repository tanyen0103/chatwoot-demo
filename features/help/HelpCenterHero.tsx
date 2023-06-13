"use client"
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export default function HelpCenterHero() {
  return (
    <div className="text-center sm:flex sm:flex-col sm:align-center max-w-4xl mx-auto mt-11 mb-11 p-8">
      <div className="sm:flex sm:flex-col sm:align-center max-w-3xl mx-auto">
        <h1 className="mt-8 text-center text-3xl font-bold leading-8 tracking-tight text-slate-700 sm:text-5xl">
          <span className="block">Hey 👋, Welcome to our Help Desk.</span>
        </h1>
        <p className="mt-8 mb-4 max-w-md mx-auto text-lg text-slate-400 md:mt-5 md:text-xl md:max-w-xl lg:leading-relaxed">
          If you have questions, are confused, or just want to understand our
          product better – we&apos;ve got your back.
        </p>
        <p className="mt-8 text-center font-semibold text-lg text-slate-600 md:text-xl lg:leading-relaxed tracking-tight">
          You can type in your query below.
        </p>
        <div className="lg:container flex flex-col items-center m-auto">
          <div className="algolia-search flex justify-center pt-4 w-full -ml-4">
            <DocSearch
              appId="J9H34SLMKO"
              indexName="chatwoot"
              apiKey="6034d7c5310911e20c3fbb3b88111235"
            />
          </div>
        </div>
        <p className="mt-8 text-center text-lg text-slate-400 md:text-xl lg:leading-relaxed">
          <span>Or browse through the categories below.</span>
        </p>
      </div>
    </div>
  );
}
