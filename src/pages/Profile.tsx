
import React from 'react';
import { CreditCard, Image as ImageIcon, History, Settings } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="py-8 px-10 h-full w-full animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-500">Manage your account and view your transformations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-transformania-pale-purple rounded-full flex items-center justify-center mb-4">
                  <span className="text-transformania-purple text-xl font-bold">JD</span>
                </div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500 mb-4">john.doe@example.com</p>
                
                <div className="w-full flex items-center justify-center gap-4 mt-2">
                  <div className="flex flex-col items-center">
                    <p className="text-xs text-gray-500">Joined</p>
                    <p className="font-medium">Feb 2023</p>
                  </div>
                  <div className="h-8 border-r border-gray-200"></div>
                  <div className="flex flex-col items-center">
                    <p className="text-xs text-gray-500">Transforms</p>
                    <p className="font-medium">248</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Credits
                  </h3>
                  <span className="text-xl font-bold">120</span>
                </div>
                
                <button className="w-full py-2 bg-transformania-button-primary text-white rounded-lg hover:bg-transformania-button-hover transition-colors mt-2">
                  Buy More Credits
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-transformania-purple" />
                Recent Transformations
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Transformation ${item}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="px-3 py-1.5 bg-white rounded-md text-sm font-medium">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-transformania-purple hover:text-transformania-button-hover text-sm font-medium">
                  View All Transformations
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <History className="w-5 h-5 text-transformania-purple" />
                Activity History
              </h3>
              
              <div className="space-y-4">
                {[
                  { action: "Background Removed", image: "beach_portrait.jpg", date: "2 hours ago" },
                  { action: "Image Restored", image: "family_photo.jpg", date: "Yesterday" },
                  { action: "Object Removed", image: "city_view.jpg", date: "3 days ago" },
                  { action: "Credits Purchased", amount: "50 credits", date: "1 week ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-medium">{'amount' in activity ? `${activity.action}: ${activity.amount}` : `${activity.action}: ${activity.image}`}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                    {'image' in activity && (
                      <button className="text-xs text-transformania-purple hover:text-transformania-button-hover font-medium">
                        View
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
