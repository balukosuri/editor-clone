import React from 'react';

function TeamManagement() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#282e39] px-4 sm:px-6 lg:px-10 py-3 bg-white dark:bg-[#111318]">
          <div className="flex items-center gap-4 text-gray-800 dark:text-white">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Project Documentation</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
            <nav className="hidden sm:flex items-center gap-6">
              <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Documentation</a>
              <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Settings</a>
              <a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Team</a>
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Invite Member</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxDkgsfABA57KvfNH0sKYhvT0c_W1mE8nG1Ddg-jHhnpsv_imuBcn6__mWj05Wgv8WsBiQXftLXYg6HjgFVi0bBjeKUj4OuASMl1z66Atjx7QupOzoPGoo-XFIgQT72OtEj7kEIh5rVSw6EUBpkLCgNWA1apy6ucUnHnuqZsZftMBXKviPAWyUH5bjqiyDx348tMmzaKFDy4NLstYJglMWxf_XjwjFCxoag8t1_ivww23h9OcTZhrrdS3F4Qju5L7Txy0tTt9FSKw")'}}></div>
          </div>
        </header>
        <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto flex-1">
          <div className="layout-content-container flex flex-col gap-8 w-full">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-gray-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Manage Team Access</p>
                <p className="text-gray-500 dark:text-[#9da6b9] text-base font-normal leading-normal">Invite and manage collaborators for this project.</p>
              </div>
            </div>
            {/* ToolBar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-3 bg-white dark:bg-[#111318] border border-gray-200 dark:border-[#282e39] rounded-xl">
              <div className="relative w-full sm:max-w-xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">search</span>
                </div>
                <input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border-gray-300 dark:border-[#3b4354] rounded-lg text-gray-900 dark:text-white focus:ring-primary focus:border-primary" placeholder="Find members by name or email..." type="text"/>
              </div>
              <button className="flex w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
                <span className="material-symbols-outlined text-lg">add</span>
                <span className="truncate">Invite Member</span>
              </button>
            </div>
            {/* Table */}
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-[#3b4354] bg-white dark:bg-[#111318]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-[#1c1f27]">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-[#3b4354]">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDa1yAL0JLreTESiXS3OTJ1NUeJRU4XkVfHZt_0i_ea_e5pqmVdN3TxzMh5x8DSHxPT4Qr1_hD9HkaNgh9L-NSuQwP5_WsSQ6Gvspxzo0tYgQYePznNyGJD3vSDEjhaFslR-_uRtS2CsBR-bjMKw9W4xRetzQm2DBCKf50QKSvMu-NSSX-LU8ewVC5pfEyodrGK0hO8LMGnionR14AEuHI4pGtyOgLBNwz2FouUYSo06x10aLBmki_dB8rfC_ar3w4HJzTO2jhZSwQ")'}}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Olivia Rhye</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">olivia@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#9da6b9]">Admin</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                          <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                          <span className="material-symbols-outlined text-xl">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEQd3TGzJWY7DcSwVQWvX3B0H8rJGagz7k5pdIc_xUsNK6teLWk6pOck_eCeIEFBPAW4dfS-MnXTfrrFIWgDKEcMBaaY5HmtMWXduyybKY4CKtedYTY8UEj8rR3YtWIEUpyPH_B2lWN8YtKRu_COo5iwbpVg6lVi8bEQNNWv_C8R6JlhejF0D4g6iCIZdRrhkXwUnW_g2b6vAK8Ygw1bkdFFFgDo_EF62mrjjsJ7ioJNYgsiNslIFl31H-bAdvscKQJUj6kX4J-2c")'}}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Phoenix Baker</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">phoenix@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#9da6b9]">Editor</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                          <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                          <span className="material-symbols-outlined text-xl">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_3LSu-_GjUta1W0YW-2KtEsyiNDHq_cGN05t4VshG3reB0B7fSW37z-8FNfP232ks7KdAYfDiko7er40aGs1Rq5rSJ_0sladdbboWafZZLwgw7RAJiB_jVSKtZHcN12QgE-mjOT46En7bTgndAHR9zSPWprNtbs6iVQG25ohYj9MX2G1LSpd97h3u3lgdLiK76rC3gI7YWAPOcV6OpkUSibPQCFUcLP3ksip9mJnWbeUAigk_CzwY2JTj4GqGZ6kfnkc1nNvCnDY")'}}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Lana Steiner</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">lana@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#9da6b9]">Viewer</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                          <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                          <span className="material-symbols-outlined text-xl">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 aspect-square rounded-full size-10">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">mail</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">user@example.com</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Invitation sent</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#9da6b9]">Editor</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300">
                          <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-500" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg>
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                          <span className="material-symbols-outlined text-xl">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center py-4">
              <nav className="flex items-center gap-1">
                <a className="flex size-10 items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </a>
                <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-lg bg-primary" href="#">1</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] rounded-lg" href="#">2</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] rounded-lg" href="#">3</a>
                <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-500 dark:text-white" href="#">...</span>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] rounded-lg" href="#">8</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] rounded-lg" href="#">9</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] rounded-lg" href="#">10</a>
                <a className="flex size-10 items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </a>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeamManagement;
