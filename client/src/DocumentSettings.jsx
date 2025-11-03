import React from 'react';

function DocumentSettings() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      <div className="flex flex-1">
        <aside className="flex w-64 flex-col border-r border-slate-200/10 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAN_k9eAdnj_Bh5vudrGiaHG_aUh7hh9PtaVPFNRBvSVMtwR_3fQtzr0_wfsmvPvKNFAzWepCcLqu1xDCRons6Ys-Lw1XIDf9ovcEN4vIUtJJvVuYCh_Nq9_sFALiBNhniRO4mpH1LZrBDZze6zUh-6XALX3L0BvYcCAT9AdHQY_xoGygF1Ya7zh-uXcrr7mndZ8tIf4OeSG3AeXk0pU-rCER0oHrQ90_cu-0IuZdzmeNCMs6zDOQr18whRMgEC4d4Z2HtMym4tpu0")'}}></div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal">Project Docs</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Workspace</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined text-xl">settings</span>
                <p className="text-sm font-medium leading-normal">General</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-500/10" href="#">
                <span className="material-symbols-outlined text-xl">lock</span>
                <p className="text-sm font-medium leading-normal">Access Control</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-500/10" href="#">
                <span className="material-symbols-outlined text-xl">search</span>
                <p className="text-sm font-medium leading-normal">SEO</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-500/10" href="#">
                <span className="material-symbols-outlined text-xl">hub</span>
                <p className="text-sm font-medium leading-normal">Integrations</p>
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Document Settings</h1>
                <div className="flex items-center gap-2">
                  <button className="flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">Cancel</button>
                  <button className="flex items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-colors">Save Changes</button>
                </div>
              </div>
            </header>
            <div className="flex flex-col divide-y divide-slate-200/10">
              <section className="py-8">
                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-1">General</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Update your document's title and URL.</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Document Title</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-11 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-base font-normal leading-normal" value="Getting Started Guide"/>
                  </label>
                  <label className="flex flex-col">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">URL Slug</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-11 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-base font-normal leading-normal" value="getting-started-guide"/>
                  </label>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Full URL: https://projectdocs.com/docs/<span className="font-semibold text-slate-700 dark:text-slate-300">getting-started-guide</span></p>
              </section>
              <section className="py-8">
                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-1">Access Control</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Manage who can view this document.</p>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium">Make page public</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Anyone with the link can view this document.</p>
                    </div>
                    <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-slate-900 bg-primary" role="switch" type="button">
                      <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-50">
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium">Password Protection</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Only users with the password can view.</p>
                    </div>
                    <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-slate-900 bg-slate-200 dark:bg-slate-700" role="switch" type="button">
                      <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="py-8">
                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-1">SEO</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Configure how your document appears on search engines.</p>
                <div className="space-y-6">
                  <label className="flex flex-col">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">SEO Title</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-11 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-base font-normal leading-normal" value="How to Get Started with Our Amazing Product | Project Docs"/>
                  </label>
                  <label className="flex flex-col">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Meta Description</p>
                    <textarea className="form-textarea w-full resize-y rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 py-2 text-base font-normal leading-normal" rows="3">A comprehensive guide to help new users get started with our product, covering all the essential features and first steps.</textarea>
                  </label>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">Search Result Preview</p>
                    <div className="flex flex-col">
                      <span className="text-blue-600 text-lg dark:text-blue-400">How to Get Started with Our Amazing Product...</span>
                      <span className="text-green-700 text-sm dark:text-green-500">https://projectdocs.com/docs/getting-started-guide</span>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">A comprehensive guide to help new users get started with our product, covering all the essential features and first steps.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DocumentSettings;
