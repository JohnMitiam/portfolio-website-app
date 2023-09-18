import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <div className="bg-[#222325]">
        <Outlet />
      </div>
    </>
  );
};

export default App;
