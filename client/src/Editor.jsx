import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import axios from 'axios';

function Editor({ documentId }) {
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (documentId) {
      const fetchDocument = async () => {
        try {
          const { data } = await axios.get(`/documents/${documentId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
          setTitle(data.title);
          setMarkdown(data.content);
        } catch (error) {
          console.error('Failed to fetch document:', error);
        }
      };
      fetchDocument();
    }
  }, [documentId]);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleSave = async () => {
    const data = { title, content: markdown };
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    try {
      if (documentId) {
        await axios.put(`/documents/${documentId}`, data, { headers });
      } else {
        await axios.post('/documents', data, { headers });
      }
    } catch (error) {
      console.error('Failed to save document:', error);
    }
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark font-display text-[#1F2937] dark:text-white">
      {/* TopNavBar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-b-[#282e39] px-6 py-3 bg-background-light dark:bg-background-dark flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Project Docs</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-[#9da6b9]">
            <span className="material-symbols-outlined text-base text-green-500">check_circle</span>
            <span>Saved</span>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <a className="text-sm font-medium leading-normal hidden md:block" href="#">Docs</a>
          <a className="text-sm font-medium leading-normal hidden md:block" href="#">API Reference</a>
          <a className="text-sm font-medium leading-normal hidden md:block" href="#">Guides</a>
          <div className="flex gap-2">
            <button onClick={handleSave} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-[#282e39] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Save Draft</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Publish</span>
            </button>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC709TKMCtMa0nP8gui_YOyHGPO3KoUvucOd1dBgOMpFT-7a7Z85nBzV5l_0KZSk_HudTChZFLL8fiWWCRgR5CT9lehppTHVFAvVXDmzNOLmEQruzRTnq9M60cTi6bwU9XKztV8kq-UN1DQpzAnu4ywpsangofOqPHXtzKkZF1G2njII2mRjkQXmIxGbEctKarQeGKtPTmOeo1Pew0kL_40v3N4Hs3WW4Ao6qX-904Q5cyYy5lnsAf0zci8nd8spL2qH4O4fta-m7Y")'}}></div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar */}
        <aside className="flex-shrink-0 w-64 border-r border-gray-200 dark:border-[#282e39] bg-background-light dark:bg-background-dark p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="relative px-2 mb-2">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9da6b9]">search</span>
                <input className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-200/50 dark:bg-[#282e39] border-none focus:ring-2 focus:ring-primary text-sm placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]" placeholder="Search..." type="text"/>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">book</span>
                <p className="text-sm font-medium leading-normal">Getting Started</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">download</span>
                <p className="text-sm font-medium leading-normal">Installation</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-xl !fill-1">lightbulb</span>
                <p className="text-sm font-medium leading-normal">Core Concepts</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">settings</span>
                <p className="text-sm font-medium leading-normal">Advanced</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">warning</span>
                <p className="text-sm font-medium leading-normal">Troubleshooting</p>
              </div>
            </div>
          </div>
          <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Add Page</span>
          </button>
        </aside>
        {/* Main Content: Editor and Preview */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Editor Panel */}
          <div className="flex flex-col overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-[#282e39] sticky top-0 bg-background-light dark:bg-background-dark z-10">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 mb-4">
                <a className="text-sm text-gray-500 dark:text-[#9da6b9] font-medium leading-normal" href="#">Project Name</a>
                <span className="text-sm text-gray-500 dark:text-[#9da6b9] font-medium leading-normal">/</span>
                <a className="text-sm text-gray-500 dark:text-[#9da6b9] font-medium leading-normal" href="#">Core Concepts</a>
                <span className="text-sm text-gray-500 dark:text-[#9da6b9] font-medium leading-normal">/</span>
                <span className="text-sm text-gray-800 dark:text-white font-medium leading-normal">Main Feature</span>
              </div>
              {/* TextField */}
              <input
                className="form-input w-full min-w-0 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none p-0 text-3xl font-bold leading-tight placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                placeholder="Enter your page title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* ToolBar */}
            <div className="flex justify-between gap-2 px-6 py-3 border-b border-gray-200 dark:border-[#282e39] sticky top-[105px] bg-background-light dark:bg-background-dark z-10">
              <div className="flex gap-1">
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">format_bold</span></button>
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">format_italic</span></button>
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">link</span></button>
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">format_list_bulleted</span></button>
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">code</span></button>
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">image</span></button>
                <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]"><span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">table</span></button>
              </div>
            </div>
            {/* Editing Area */}
            <div className="p-6 flex-1">
              <textarea
                className="w-full h-full min-h-[500px] bg-transparent border-none focus:ring-0 resize-none text-base leading-relaxed placeholder:text-gray-400 dark:placeholder:text-[#9da6b9] p-0"
                placeholder="Start writing your content here..."
                value={markdown}
                onChange={handleMarkdownChange}
              ></textarea>
            </div>
          </div>
          {/* Preview Panel */}
          <div className="hidden lg:flex flex-col overflow-y-auto bg-gray-50 dark:bg-black/20 border-l border-gray-200 dark:border-[#282e39]">
            <div className="p-6 flex items-center justify-between border-b border-gray-200 dark:border-[#282e39] sticky top-0 bg-gray-50 dark:bg-background-dark z-10">
              <h3 className="font-semibold">Live Preview</h3>
              <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#282e39]">
                <span className="material-symbols-outlined text-xl text-gray-500 dark:text-white">close</span>
              </button>
            </div>
            <div
              className="p-8 prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={getMarkdownText()}
            >
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Editor;
