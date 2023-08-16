export const TeamCard = () => {
  return (
    <div className="w-64 max-w-xs bg-gray-100 border border-gray-200 rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <div className="flex flex-col items-center py-10">
            <img className="w-28 h-28 mb-3 rounded-full shadow-lg" src="https://wallpapers.com/images/featured-full/naruto-profile-pictures-sa1tekghfajrr928.jpg" alt="Bonnie image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">CodTrees</h5>
            <span className="text-sm text-gray-500 ">Visual Designer</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
            <i className="bi bi-twitter text-black text-2xl hover:text-darkBlue transition-all duration-300 cursor-pointer"></i>
            <i className="bi bi-linkedin text-black text-2xl hover:text-darkBlue transition-all duration-300 cursor-pointer"></i>
            <i className="bi bi-envelope text-black text-2xl hover:text-darkBlue transition-all duration-300 cursor-pointer"></i>
            </div>
        </div>
    </div>
  )
}
