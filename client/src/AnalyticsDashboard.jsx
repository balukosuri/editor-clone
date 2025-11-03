import React from 'react';

function AnalyticsDashboard() {
  return (
    <div className="flex h-screen font-display bg-background-light dark:bg-background-dark">
      {/* SideNavBar */}
      <aside className="w-64 flex-shrink-0 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark">
        <div className="flex h-full flex-col p-4">
          <div className="flex items-center gap-3 p-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUWE_WpNW6-E6JIfq_SRd8cdKAaZk7IRLNBw9GrP2K4wPoxPSUOXMaT448IATgHiH0AkrntlGlPYJ4B2gkN7QL258Mx3IlmshkPU3gm0SZQJau2wEpzJligI6xkY0IwfMiSE_dtv3Lr5hlRrkcgcBLU8SbFnQ9MVPGrezU9JsC_XDQXSbYed8zS9fUZ7Xb-QCKyD8gScim7TMwKVE34bWhWA-9VXnegKu22XsYtnRwYRswLd0W8mgfEJrowSZR9tLahRuDImASNG4")'}}></div>
            <div className="flex flex-col">
              <h1 className="text-text-light dark:text-text-dark text-base font-semibold leading-normal">Project Alpha</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Docs &amp; Guides</p>
            </div>
          </div>
          <nav className="mt-4 flex flex-col gap-1 flex-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <span className="material-symbols-outlined">description</span>
              <p className="text-sm font-medium leading-normal">Documentation</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
              <span className="material-symbols-outlined">analytics</span>
              <p className="text-sm font-medium leading-normal">Analytics</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <span className="material-symbols-outlined">code</span>
              <p className="text-sm font-medium leading-normal">API Reference</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium leading-normal">Users</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </a>
          </nav>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <span className="material-symbols-outlined">help</span>
              <p className="text-sm font-medium leading-normal">Help &amp; Support</p>
            </a>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight">Documentation Insights</h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Chips / Global Filters */}
            <div className="flex gap-2">
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-700 px-4">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Last 7 Days</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4">
                <p className="text-sm font-medium leading-normal">Last 30 Days</p>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-700 pl-4 pr-3">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Custom Range</p>
                <span className="material-symbols-outlined">calendar_today</span>
              </button>
            </div>
            <div className="w-px h-6 bg-border-light dark:bg-border-dark"></div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 bg-slate-200 dark:bg-slate-700 text-text-light dark:text-text-dark gap-2 text-sm font-medium leading-normal min-w-0 px-2.5">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlZ5AUA7qCtl6Xm3dAbHxCh5QpZ2oKR9c2xWs0XNs6Ftu1LWLnQt6pxtVchaCaQ5H1eXVNMMXnCrnKiZItRFXhOn9al6OKfUrUyCzzYSWHs1ttSwO-wZ_0ACEG_Yma00743-yPvDDNxSg2gB5dOxW5Fiv3sV7UcMTUo6E7eS2K5xptp4xw7orzmw8puTGl0F7Eck29s_r3SJTHgR3bVZFLTKObQzKjlz7V8nxaefBzRT6CuRvIG_kfLP5khjN2b0IxJlnljyFS_As")'}}></div>
          </div>
        </header>
        {/* Dashboard Grid */}
        <div className="p-8">
          {/* Stats / KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
              <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">Total Page Views</p>
              <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">125,430</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-success text-lg">arrow_upward</span>
                <p className="text-success text-sm font-medium leading-normal">5.2%</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">vs last month</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
              <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">Unique Visitors</p>
              <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">82,192</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-success text-lg">arrow_upward</span>
                <p className="text-success text-sm font-medium leading-normal">2.1%</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">vs last month</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
              <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">Avg. Time on Page</p>
              <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">2m 45s</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-danger text-lg">arrow_downward</span>
                <p className="text-danger text-sm font-medium leading-normal">1.5%</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">vs last month</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
              <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">Feedback Score</p>
              <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">92%</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-success text-lg">arrow_upward</span>
                <p className="text-success text-sm font-medium leading-normal">0.8%</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">vs last month</p>
              </div>
            </div>
          </div>
          {/* Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            {/* Line Chart */}
            <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 xl:col-span-2">
              <p className="text-text-light dark:text-text-dark text-lg font-semibold leading-normal">Page Views Over Time</p>
              <div className="flex min-h-[300px] flex-1 flex-col gap-8 py-4">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 500 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 490 25V150H0V109Z" fill="url(#paint0_linear_chart)"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 490 25" stroke="#4A90E2" strokeLinecap="round" strokeWidth="3"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                      <stop stopColor="#4A90E2" stopOpacity="0.2"></stop>
                      <stop offset="1" stopColor="#4A90E2" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-around -mt-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Week 1</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Week 2</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Week 3</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Week 4</p>
              </div>
            </div>
            {/* Donut Chart */}
            <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
              <p className="text-text-light dark:text-text-dark text-lg font-semibold leading-normal">User Engagement</p>
              <div className="flex-1 flex items-center justify-center min-h-[300px] relative">
                <svg className="size-64" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#D0021B" strokeDasharray="8, 100" strokeWidth="3"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#7ED321" strokeDasharray="92, 100" strokeDashoffset="-8" strokeWidth="3"></path>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl font-bold text-text-light dark:text-text-dark">92%</span>
                  <span className="text-slate-500 dark:text-slate-400">Helpful</span>
                </div>
              </div>
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-success"></div>
                  <span className="text-sm text-text-light dark:text-text-dark">Helpful</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-danger"></div>
                  <span className="text-sm text-text-light dark:text-text-dark">Not Helpful</span>
                </div>
              </div>
            </div>
          </div>
          {/* Table & List Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Top Pages Table */}
            <div className="rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex flex-col">
              <h3 className="text-text-light dark:text-text-dark text-lg font-semibold leading-normal mb-4">Top 10 Most Viewed Pages</h3>
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-border-light dark:border-border-dark sticky top-0 bg-card-light dark:bg-card-dark">
                    <tr>
                      <th className="py-2 px-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Page</th>
                      <th className="py-2 px-3 text-sm font-semibold text-slate-500 dark:text-slate-400 text-right">Views</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/getting-started</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">12,482</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/api/authentication</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">9,831</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/guides/first-request</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">7,612</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/guides/error-handling</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">6,903</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/api/endpoints/users</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">5,110</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/changelog</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">4,554</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">/faq</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">3,209</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Top Search Queries */}
            <div className="rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex flex-col">
              <h3 className="text-text-light dark:text-text-dark text-lg font-semibold leading-normal mb-4">Top Search Queries</h3>
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-border-light dark:border-border-dark sticky top-0 bg-card-light dark:bg-card-dark">
                    <tr>
                      <th className="py-2 px-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Query</th>
                      <th className="py-2 px-3 text-sm font-semibold text-slate-500 dark:text-slate-400 text-right">Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">"API key"</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">2,410</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">"pagination"</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">1,988</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark flex items-center gap-2">"webhooks" <span className="text-xs font-semibold bg-danger/10 text-danger px-2 py-0.5 rounded-full">No Results</span></td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">1,502</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">"rate limit"</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">1,134</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">"user permissions"</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">957</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark flex items-center gap-2">"sdk" <span className="text-xs font-semibold bg-danger/10 text-danger px-2 py-0.5 rounded-full">No Results</span></td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">812</td></tr>
                    <tr><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark">"authentication"</td><td className="py-3 px-3 text-sm text-text-light dark:text-text-dark text-right font-medium">766</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AnalyticsDashboard;
