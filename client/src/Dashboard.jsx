import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const { data } = await axios.get('/documents', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setDocuments(data);
      } catch (error) {
        console.error('Failed to fetch documents:', error);
      }
    };
    fetchDocuments();
  }, []);

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* SideNavBar */}
      <aside className="flex w-64 flex-col bg-white dark:bg-[#191e2b] border-r border-gray-200 dark:border-gray-800">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center px-3 py-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBi7Kuzfl62rwx3SXoOIiSzKhG_SoloSSqNujyi_JgftfVwuTfLMJqrXoXkMRQxadEcisFbg0Sit1GX3NdFtOUrGvKVkdkMitNdTnt2xQ4-POkRZfB6SDJgYBWCom1tAVfRS-9EqNktbHcqEHitwlEIkpYt7aNofa4yavCMc4iOAtO7JKLLuvueiD1chGrXADMwssP1dGjBwf9MDNDxb-dc6XsS6TtE2N07qhq5uWHcR5aaVo-o0pUCRdxuM3GaapHtA6m08GlA1jc")'}}></div>
              <div className="flex flex-col">
                <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">DocuSpace</h1>
                <p className="text-gray-500 dark:text-[#9da6b9] text-sm font-normal leading-normal">Workspace</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2 mt-4">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary" href="#">
                <span aria-hidden="true" className="material-symbols-outlined text-primary dark:text-primary text-2xl">dashboard</span>
                <p className="text-sm font-medium leading-normal">Dashboard</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
                <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">description</span>
                <p className="text-sm font-medium leading-normal">Documents</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
                <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">folder_open</span>
                <p className="text-sm font-medium leading-normal">Projects</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
                <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">bar_chart</span>
                <p className="text-sm font-medium leading-normal">Analytics</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
                <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">group</span>
                <p className="text-sm font-medium leading-normal">Team</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
                <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">settings</span>
                <p className="text-sm font-medium leading-normal">Settings</p>
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
              <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">help_center</span>
              <p className="text-sm font-medium leading-normal">Help Center</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg" href="#">
              <span aria-hidden="true" className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">logout</span>
              <p className="text-sm font-medium leading-normal">Log Out</p>
            </a>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* TopNavBar */}
        <header className="flex sticky top-0 items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <label className="flex flex-col min-w-40 !h-10 w-full max-w-md">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-400 dark:text-[#9da6b9] flex border-none bg-gray-200/50 dark:bg-gray-800/50 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-200/50 dark:bg-gray-800/50 h-full placeholder:text-gray-500 dark:placeholder:text-[#9da6b9] px-4 text-base font-normal leading-normal" placeholder="Search documentation..." value=""/>
            </div>
          </label>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <div className="flex gap-2">
              <a href="/editor" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Create New Document</span>
              </a>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white dark:bg-[#191e2b] text-gray-600 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white dark:bg-[#191e2b] text-gray-600 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">chat_bubble</span>
              </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKKRbHzKLyuTJBE2aydIsv2JLmajSDKvZnAA4YDZnvyeQKm996atyu-j2x1sqTxdhL-MIEHgLFYIPFL_GcQBs-7d8H85a-vHWK0zmQQePTIOIGRgQBjHgc_392Hv1W5QBHz3wuWc7ymfMwr-7jeZGBCFjdsyEuD_kwDVR-Pz2hEZxwCqwrTVl3GSJ5lpiyFIuCTXieEoRyrbuM9qlIMDxf9LSd7eUHvHb_LguwvK2dF3OKWrYgLPmoslASq1_D3iQ0ZyHRmOb1Fis")'}}></div>
          </div>
        </header>
        <div className="flex-1 p-10">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Good morning, Alex</p>
              <p className="text-gray-500 dark:text-[#9da6b9] text-base font-normal leading-normal">Here’s what’s happening with your projects today.</p>
            </div>
          </div>
          {/* Get Started Section */}
          <div className="mb-10">
            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Get Started</h2>
            {/* ImageGrid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-[#191e2b] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-4xl">add_box</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Create New Document</p>
                  <p className="text-gray-500 dark:text-[#9da6b9] text-sm font-normal leading-normal">Begin with a blank page.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-[#191e2b] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-4xl">grid_view</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Start from Template</p>
                  <p className="text-gray-500 dark:text-[#9da6b9] text-sm font-normal leading-normal">Browse pre-made layouts.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-[#191e2b] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-4xl">person_add</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Invite Team Member</p>
                  <p className="text-gray-500 dark:text-[#9da6b9] text-sm font-normal leading-normal">Collaborate with your team.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Documents & Project Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Documents Card */}
            <div className="lg:col-span-2">
              <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Continue where you left off</h2>
              <div className="bg-white dark:bg-[#191e2b] rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                  {documents.map((doc) => (
                    <li key={doc.id} className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span aria-hidden="true" className="material-symbols-outlined text-primary">draft</span>
                        <div>
                          <a href={`/documents/${doc.id}`} className="font-medium text-gray-900 dark:text-white">{doc.title}</a>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Project: Core API</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Edited {new Date(doc.updated_at).toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Project Activity Card */}
            <div>
              <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Latest Activity</h2>
              <div className="bg-white dark:bg-[#191e2b] rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYu8Mbl4mlQIPcO5_kpk-vaCfS9rSF9dJtXTNAnLLWFsZH2xyZ9Vy1bFy4zns5lSXwkA94giucvjkUr6wI2F1HWH_LQ4Pu8SL9Cp17NVzRvDDY8Lf_sslj4vebm9XcauTdCvPoFgl3z3p8KAw0EiIqAf8-WpNRy8HiYeOq7wjl3Xyzru7psHGZkoqqRC0DuZ-yFBs1F0kjtEpHM_iRhkZ-IzNCN66XfIk-FyQ8TRWCKC5GwF73twDGI64tkcEW7nlo7Zdd2z985eQ")'}}></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">Sarah</span> updated <span className="font-medium text-primary">'API Guide'</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">15 minutes ago</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkOiwbWLxkhiYn-8_wfhPkiByCNT_HwJgWRHwxseuxdbXJIuIHUNJdNyP5QnsEcT8eeRExa8oi9R0dEz61Ydq_FP_uL6vzijwWPOTtflnXsjKLDt0zZLF6-z7E9jsoYaOvsQjyJNTnSHr_5cqBiray0E98hmNDOAjYbzdChYKiOonHsUXPc2FodgbawB5v2j3H6wNvKb5cux2kNgFOC2t62A9JOV-l9pPY0N_QUy-9x-O57vBJNNHul_2FhqbEERRLDSCtaUuHCG8")'}}></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">Mike</span> left a comment on <span className="font-medium text-primary">'Installation'</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAG2r1jdwSKMg8PDj-9Q9_k1huQPfMlEGPXKB8-YS00TaDqWGLlauuHCtll-wjLDADumRq5Y_7Z2ITAJa0XOh0paLVUvE6GmbZiHqR-6XsPowwX0R89Jdb66OHbdRAkuJudUD4zonn_oqDpD4DjlWjVhrqHVxUqcTMTDccA4KCW-IRRFkauI-d4MGnLxFMQ2aIBVWx87Skb5xzu4mK7BVoC6AILlrW_1D76Sc_SY27ufVx4Kp947vd6BuePPposKCJadVcBadh_q7s")'}}></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">Emily</span> created a new project: <span className="font-medium text-primary">'Mobile SDK'</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV7dO_qocGDHwFW-tzxWHjoJy3hd3ieuH5tQMud0DodmWXNQShS81Jf_Sw-vU10HGzvKN0Hmzlby6fC1tLk6-FyX5jlLWQetuvpmiYI1Ph-0z2qqLRjVE2sjpgBYvcOm3bQkjj-cmU8L9SoIf0c-K52T_ydHRPF5zg0fngRGmTzUcEWWnl2fWcxevuPCMicVVMDeZRILT21dVv8jKAnemjDYMK0a1Oj4EeFt98LxMP4WGdAa4L49FRadcuOxA3pd-7kQ0XhbDh5IA")'}}></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">You</span> archived the document <span className="font-medium text-primary">'Old Style Guide'</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
