import React from 'react';

function ApiReferenceEditor() {
  return (
    <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
      {/* SideNavBar / Left Column */}
      <aside className="flex w-72 flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
        <div className="flex h-16 shrink-0 items-center gap-3 border-b border-border-light dark:border-border-dark px-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt1i0joY4i8Sb0-cAftbPSgyy6K58BurNKKllb8iOLu80mGqxEiJLVJAN_E5jxawyRpN9VMCwN9qyQ0xE99yhnacRWjGoDLXFp0a48hG4LxZqfgwuP8Uw3zdvjp8sK1Z7lO5Swoerq7YdWWpBgDSBI31XRlWexhHXtQn44f6suRcnFZGOk86nUp4GfSJMUoGTNHEIkSeldBm03EkKiAD4Mq7PujBqp8Zql3R6O-XWHOR0cbYKwfvF8JuDXZ5F0vsY1YjwlR7s3p9g")'}}></div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold">Project Acme</h1>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">API Version 2.1</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            {/* SearchBar */}
            <label className="flex flex-col min-w-40 h-10 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-text-secondary-light dark:text-text-secondary-dark flex border-r-0 items-center justify-center pl-3 bg-background-light dark:bg-background-dark rounded-l-lg">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-sm focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border-none bg-background-light dark:bg-background-dark h-full placeholder:text-text-secondary-light placeholder:dark:text-text-secondary-dark px-2" placeholder="Find an endpoint..." value=""/>
              </div>
            </label>
            {/* SingleButton */}
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white gap-2 text-sm font-bold tracking-wide">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span className="truncate">Add Endpoint</span>
            </button>
            {/* Accordions */}
            <div className="flex flex-col">
              <details className="flex flex-col py-1 group" open="">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-sm font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">User Management</p>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
                </summary>
                <div className="flex flex-col pl-2">
                  <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary" href="#">
                    <span className="font-mono text-xs font-bold text-sky-500">POST</span>
                    <span>/users</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5" href="#">
                    <span className="font-mono text-xs font-bold text-emerald-500">GET</span>
                    <span>/users/{id}</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5" href="#">
                    <span className="font-mono text-xs font-bold text-orange-500">PUT</span>
                    <span>/users/{id}</span>
                  </a>
                </div>
              </details>
              <details className="flex flex-col py-1 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-sm font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">Products</p>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
                </summary>
              </details>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5" href="#">
              <span className="material-symbols-outlined text-[24px]">settings</span>
              <span>Settings</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5" href="#">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
              <span>Support</span>
            </a>
          </div>
        </div>
      </aside>
      <main className="flex-1 grid grid-cols-2 overflow-hidden">
        {/* Center Column: Editor */}
        <div className="flex flex-col overflow-y-auto">
          {/* PageHeading */}
          <div className="sticky top-0 flex flex-wrap items-center justify-between gap-4 p-6 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm z-10">
            <div className="flex min-w-72 flex-col gap-1">
              <h1 className="text-2xl font-bold leading-tight">Create a new user</h1>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Creates a new user account in the system.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">All changes saved</span>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal">
                <span className="truncate">Publish</span>
              </button>
            </div>
          </div>
          {/* Editor Form */}
          <div className="p-6 flex flex-col gap-8">
            {/* Endpoint Definition */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-36">
                  <select className="form-select w-full appearance-none rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark py-2 pl-3 pr-8 text-sm font-semibold text-sky-500 focus:border-primary focus:ring-primary">
                    <option>POST</option>
                    <option>GET</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                    <option>PATCH</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark text-[20px]">unfold_more</span>
                </div>
                <input className="form-input flex-1 rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm font-mono focus:border-primary focus:ring-primary" type="text" value="/v1/users"/>
              </div>
            </div>
            {/* Tabbed Interface */}
            <div>
              <div className="border-b border-border-light dark:border-border-dark">
                <nav aria-label="Tabs" className="-mb-px flex gap-6">
                  <a className="whitespace-nowrap border-b-2 border-primary px-1 py-3 text-sm font-medium text-primary" href="#">Parameters</a>
                  <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-3 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:border-gray-300 dark:hover:border-gray-600 hover:text-text-primary-light dark:hover:text-text-primary-dark" href="#">Responses</a>
                  <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-3 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:border-gray-300 dark:hover:border-gray-600 hover:text-text-primary-light dark:hover:text-text-primary-dark" href="#">Code Examples</a>
                </nav>
              </div>
              {/* Parameters Content */}
              <div className="pt-6 flex flex-col gap-6">
                <h3 className="text-base font-bold">Body Parameters</h3>
                <div className="grid grid-cols-[1fr_1fr_2fr_auto] gap-x-4 gap-y-2 items-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  <label className="font-semibold">Name</label>
                  <label className="font-semibold">Type</label>
                  <label className="font-semibold">Description</label>
                  <div></div>
                  {/* Parameter Row 1 */}
                  <input className="form-input w-full rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm focus:border-primary focus:ring-primary" type="text" value="email"/>
                  <div className="relative">
                    <select className="form-select w-full appearance-none rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark py-2 pl-3 pr-8 text-sm focus:border-primary focus:ring-primary">
                      <option>string</option>
                      <option>integer</option>
                      <option>boolean</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark text-[20px]">unfold_more</span>
                  </div>
                  <input className="form-input w-full rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm focus:border-primary focus:ring-primary" placeholder="User's email address" type="text"/>
                  <div className="flex items-center gap-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input checked="" className="sr-only peer" type="checkbox" value=""/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      <span className="ms-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Req.</span>
                    </label>
                  </div>
                  {/* Parameter Row 2 */}
                  <input className="form-input w-full rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm focus:border-primary focus:ring-primary" type="text" value="password"/>
                  <div className="relative">
                    <select className="form-select w-full appearance-none rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark py-2 pl-3 pr-8 text-sm focus:border-primary focus:ring-primary">
                      <option>string</option>
                      <option>integer</option>
                      <option>boolean</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark text-[20px]">unfold_more</span>
                  </div>
                  <input className="form-input w-full rounded-md border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm focus:border-primary focus:ring-primary" placeholder="User's password" type="text"/>
                  <div className="flex items-center gap-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input checked="" className="sr-only peer" type="checkbox" value=""/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      <span className="ms-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Req.</span>
                    </label>
                  </div>
                </div>
                <button className="flex max-w-max cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark gap-2 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  <span className="truncate">Add Parameter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Live Preview */}
        <div className="bg-background-light dark:bg-background-dark border-l border-border-light dark:border-border-dark overflow-y-auto">
          <div className="p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Create a new user</h1>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-sky-400/10 px-2 py-1 text-xs font-bold text-sky-400 ring-1 ring-inset ring-sky-400/20">POST</span>
                <code className="text-sm font-medium bg-gray-400/10 dark:bg-gray-400/20 px-2 py-1 rounded-md text-text-secondary-light dark:text-text-secondary-dark">/v1/users</code>
              </div>
              <p className="text-base text-text-secondary-light dark:text-text-secondary-dark pt-2">Creates a new user account in the system. This endpoint requires an email and password to successfully create a new user profile.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold">Body Parameters</h3>
              <div className="flex flex-col border border-border-light dark:border-border-dark rounded-lg">
                <div className="grid grid-cols-[1fr_1fr_2fr] p-4 border-b border-border-light dark:border-border-dark">
                  <div className="font-mono text-sm">
                    <span className="font-bold">email</span>
                    <span className="text-red-500">*</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary-light dark:text-text-secondary-dark">string</span>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">User's email address</p>
                </div>
                <div className="grid grid-cols-[1fr_1fr_2fr] p-4">
                  <div className="font-mono text-sm">
                    <span className="font-bold">password</span>
                    <span className="text-red-500">*</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary-light dark:text-text-secondary-dark">string</span>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">User's password</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold">Example Request</h3>
              <div className="bg-surface-dark rounded-xl overflow-hidden">
                <div className="flex items-center justify-between bg-zinc-800 px-4 py-2">
                  <span className="text-sm font-medium text-white">cURL</span>
                  <button className="text-zinc-400 hover:text-white">
                    <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  </button>
                </div>
                <pre className="p-4 text-sm text-white overflow-x-auto"><code className="font-mono">
                  curl --request POST \
                    --url https://api.acme.com/v1/users \
                    --header 'Content-Type: application/json' \
                    --data '{
                    "email": "user@example.com",
                    "password": "securepassword123"
                  }'
                </code></pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApiReferenceEditor;
