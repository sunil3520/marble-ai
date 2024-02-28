const TabLoader = () => {
  return (
    <div className="flex flex-col gap-2 w-48 border-2 rounded-lg p-2 bg-white">
      <div className="bg-slate-100 skeleton h-4 w-[80%]"></div>
      <div className="bg-slate-100 skeleton h-4 w-full"></div>
    </div>
  );
};

export default TabLoader;
