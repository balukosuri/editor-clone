import React from 'react';

function AlternativeEditor() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden font-display bg-background-light dark:bg-background-dark">
      <header className="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-zinc-200 dark:border-zinc-800 px-6 py-3">
        <div className="flex items-center gap-4 text-zinc-900 dark:text-white">
          <div className="text-primary size-7">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"></path>
              <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <a className="text-zinc-500 dark:text-zinc-400 text-sm font-medium" href="#">DocsWriter API</a>
            <span className="text-zinc-400 dark:text-zinc-500 text-sm">/</span>
            <span className="text-zinc-900 dark:text-white text-sm font-medium">Getting Started</span>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">Saved</p>
          </div>
          <button className="flex items-center gap-2 rounded bg-zinc-100 dark:bg-zinc-800 h-9 px-3 text-zinc-900 dark:text-white text-sm">
            <span className="material-symbols-outlined text-base">history</span>
            <span>main</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <div className="flex gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm font-medium">
              <span className="truncate">Save</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium">
              <span className="truncate">Publish</span>
            </button>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDaLnu9KWPGQiG_6QBGNd_MTYxNplIWlPviEPXFaO0MFhff9rqobvOKzFyJuu4nWwGSa96YCqrg3TiFYPh--1m9mhVI6bV-rsAuH0UkYgRnwsupTKrNiC5y8PBYxkyEEQkf3sShhNKCgp4nolXCKrYOMsg_RBqnNdHahZZq8UZWCgZ2LZ2h6FicBwtTCBF5_WuSOKQYEtWK3n5YBtyImFSzLafkxLQO1L24DpFDsB9s4-2oYe_2rjeEbn0wSFnm2z0fAMcTFkknKk")'}}></div>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 flex flex-col p-4">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col">
              <h1 className="text-zinc-900 dark:text-white text-sm font-semibold">Table of Contents</h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">Document structure</p>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400 text-lg">search</span>
              <input className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 h-9 pl-10 pr-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Filter pages..." type="text"/>
            </div>
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded" href="#">
                <span className="material-symbols-outlined text-xl">description</span>
                <p className="text-sm font-medium">Introduction</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined text-xl">flag</span>
                <p className="text-sm font-medium">Getting Started</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded" href="#">
                <span className="material-symbols-outlined text-xl">code</span>
                <p className="text-sm font-medium">API Reference</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded" href="#">
                <span className="material-symbols-outlined text-xl">download</span>
                <p className="text-sm font-medium">Installation</p>
              </a>
            </nav>
          </div>
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm font-medium">
            <span className="material-symbols-outlined text-base">add</span>
            <span className="truncate">Add New Page</span>
          </button>
        </aside>
        <div className="flex-1 grid grid-cols-2 overflow-hidden">
          <section className="flex flex-col overflow-hidden border-r border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between gap-2 p-2 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-1">
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">format_bold</span></button>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">format_italic</span></button>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">format_underlined</span></button>
                <div className="w-px bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">format_list_bulleted</span></button>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">format_list_numbered</span></button>
                <div className="w-px bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">data_object</span></button>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">link</span></button>
                <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"><span className="material-symbols-outlined text-xl">image</span></button>
              </div>
              <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
                <span className="material-symbols-outlined text-xl">fullscreen</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <textarea className="w-full h-full resize-none bg-transparent text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none leading-relaxed" placeholder="Start writing your documentation here..."># Getting Started

Welcome to the DocsWriter documentation. This guide will walk you through the basics of setting up your project and writing your first piece of documentation.

## Installation

To get started, you'll need to install our CLI tool. Open your terminal and run the following command:
              </textarea>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AlternativeEditor;
