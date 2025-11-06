import React from 'react';
import { 
  Settings, 
  Clock, 
  ChevronRight, 
  HelpCircle,
  Star,
  Award,
  BookOpen,
  Lock,
  Lightbulb
} from 'lucide-react';

function TikTokShopSuccessPath() {
  return (
    <div className="rounded-lg py-[22px] p-6 bg-white mt-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center text-gray-900 text-xl font-semibold">
          <div className="bg-gray-100 w-7 h-7 flex items-center justify-center rounded-full p-1 mr-2 text-gray-600">
            <Lightbulb size={20} />
          </div>
          <span className="mr-4">TikTok Shop Success Path</span>
          <div className="inline-flex items-center text-sm  py-1 pl-1 pr-3 rounded-xl bg-[#e6e6e6] ">
            <Clock size={14} className="mr-1" />
            <span>10 days left</span>
          </div>
        </div>
        
        <button className="flex items-center text-gray-600 font-medium text-sm cursor-pointer">
          <span className="whitespace-nowrap ml-2">More</span>
          <ChevronRight size={16} className="text-gray-500 ml-1" />
        </button>
      </header>

      {/* Description */}
      <p className="mt-1 text-sm text-gray-600">
        Exclusively designed to help you make your first sales on TikTok Shop
      </p>

      {/* Main Content */}
      <div className="flex w-full bg-white mt-4 rounded-lg">
        {/* Rewards Section */}
        <div className="w-60 py-4 px-4 bg-gray-50 rounded-l-lg">
          <p className="text-sm font-semibold text-gray-900 mb-6">Rewards</p>
          
          <div className="flex flex-col items-start text-nowrap">
            {/* Main Reward */}
            <div className="flex flex-col items-center mb-6">
              <img 
                src="https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/0a55302f6103ef9aaf2531512fc726ca.png~tplv-aphluv4xwc-origin-image.image" 
                width="36" 
                height="36" 
                alt="Voucher"
                className="rounded"
              />
              <p className="mt-3 text-center text-sm">£100 in vouchers</p>
            </div>

            {/* Additional Rewards */}
            <div className="space-y-4">
              <div className="flex items-center max-w-[154px] mb-4">
                <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-yellow-100 to-amber-300 rounded flex items-center justify-center">
                  <Award size={16} className="text-amber-700" />
                </div>
                <span className="ml-3 text-xs font-semibold text-gray-600 line-clamp-2">
                  Graduate Certificate
                </span>
              </div>
              
              <div className="flex items-center max-w-[154px] mb-4">
                <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-50 to-blue-200 rounded flex items-center justify-center">
                  <BookOpen size={16} className="text-blue-600" />
                </div>
                <span className="ml-3 text-xs font-semibold text-gray-600 line-clamp-2">
                  Knowledge
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Missions Section */}
        <div className="flex-1 mb-4 mx-4">
          <header className="flex justify-between items-center mb-4">
            <p className="text-sm font-semibold">Missions</p>
            
            <div className="flex items-center">
              {/* Current Step */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center relative">
                  <span className="text-xs font-semibold text-white">1</span>
                </div>
                <span className="text-xs font-semibold text-blue-600 ml-1 mr-1">
                  <span>Optimise Your TikTok Shop</span>
                  <span className="ml-2">0<span className="text-gray-400">/1</span></span>
                </span>
              </div>

              {/* Locked Steps */}
              <div className="flex items-center ml-2">
                <Lock size={16} className="text-gray-400" />
              </div>
            </div>
          </header>

          {/* Missions List */}
          <section className="max-h-60 overflow-auto grid grid-cols-1 gap-3">
            {/* Mission 1 */}
            <section>
              <div className="rounded bg-white border border-gray-200">
                <section className="px-4 py-4 w-full">
                  <header className="flex justify-between mb-2 w-full">
                    <div className="text-gray-900 text-sm font-semibold w-full break-words line-clamp-1">
                      Check out the guide to set up your TikTok Shop
                    </div>
                    <HelpCircle size={14} className="flex-shrink-0 ml-2 mt-0.5 text-gray-400" />
                  </header>
                  
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    0<span className="text-gray-600"> Completed </span>(10 days left)
                  </div>
                  
                  <div className="flex mt-3 justify-between items-center">
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={14} className="mr-1" />
                      <div className="whitespace-nowrap">10 days left</div>
                    </div>
                    <button className="bg-white border border-gray-300 text-blue-600 text-xs font-semibold px-3 py-1 rounded ml-auto hover:bg-gray-50 transition-colors">
                      Start
                    </button>
                  </div>
                </section>
              </div>
            </section>

            {/* Mission 2 */}
            <section>
              <div className="rounded bg-white border border-gray-200">
                <section className="px-4 py-4 w-full">
                  <header className="flex justify-between mb-2 w-full">
                    <div className="text-gray-900 text-sm font-semibold w-full break-words line-clamp-1">
                      Set up free shipping - ideally, apply it across the entire store for maximum impact. Earn £20 in vouchers
                    </div>
                    <HelpCircle size={14} className="flex-shrink-0 ml-2 mt-0.5 text-gray-400" />
                  </header>
                  
                  <div className="flex items-center mb-3">
                    <div className="inline-flex relative text-gray-600 min-h-6 items-center mr-2">
                      <div className="w-6 h-6 absolute">
                        <img 
                          src="https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/0a55302f6103ef9aaf2531512fc726ca.png~tplv-aphluv4xwc-origin-image.image" 
                          className="mx-auto w-full h-full rounded"
                          alt="Voucher"
                        />
                      </div>
                      <div className="pl-6 pr-2 py-1 text-xs font-semibold rounded-r bg-amber-100 text-amber-700 items-center ml-3 leading-5">
                        £20 in vouchers
                      </div>
                    </div>
                    <p className="text-xs mt-2">
                      <span className="text-gray-400">
                        <span className="text-gray-900 text-blue-600">98%</span> rewards remaining
                      </span>
                    </p>
                  </div>
                  
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    0<span className="text-gray-600"> Completed </span>(10 days left)
                  </div>
                  
                  <div className="flex mt-3 justify-between items-center">
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={14} className="mr-1" />
                      <div className="whitespace-nowrap">10 days left</div>
                    </div>
                    <button className="bg-white border border-gray-300 text-blue-600 text-xs font-semibold px-3 py-1 rounded ml-auto hover:bg-gray-50 transition-colors">
                      Start
                    </button>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TikTokShopSuccessPath;