// import { useLocation, useNavigate } from 'react-router-dom';
// import DashboardOverview from '../DashboardOverview/DashboardOverview';
// import TaskList from '../TaskList/TaskList';
// import EarningsHistory from '../EarningsHistory/EarningsHistory';
// import FeedbackSection from '../FeedbackSection/FeedbackSection';
// import Notifications from '../Notifications/Notifications';
// import ProfileManagement from '../ProfileManagement/ProfileManagement';
// import registeraspartner from '../RegisterAsPartner/RegisterAsPartner';
// const PartnerDashboard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userDetails = location.state?.userDetails;

//   const stats = { totalTasks: 5, completedTasks: 3, pendingTasks: 2 };
//   const tasks = [
//     { id: 1, name: 'Clean the house', status: 'completed' },
//     { id: 2, name: 'Grocery shopping', status: 'pending' },
//   ];
//   const earnings = [
//     { date: '2024-09-01', amount: 999 },
//     { date: '2024-09-10', amount: 999 },
//   ];
//   const feedback = [
//     { id: 1, message: 'Great service!', rating: 5 },
//     { id: 2, message: 'Very satisfied!', rating: 4 },
//   ];
//   const notifications = [
//     { id: 1, message: 'You have a new task assigned.' },
//     { id: 2, message: 'Payment received for your last job.' },
//   ];

//   const updateTaskStatus = (id) => {
//     console.log(`Update task ${id}`);
//   };

//   const updateProfile = (updatedData) => {
//     console.log('Profile updated:', updatedData);
//   };

//   const handleLogout = () => {
//     console.log("User logged out");
//     navigate('/'); 
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8">Welcome to Your Dashboard!</h2>
      
//       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
//         {userDetails ? (
//           <div>
//             <h3 className="text-xl font-semibold">User Details:</h3>
//             <p><strong>UserID:</strong> {userDetails.UserID}</p>
//             <p><strong>Name:</strong> {userDetails.name}</p>
//             <p><strong>Phone:</strong> {userDetails.phone}</p>
//             <p><strong>Email:</strong> {userDetails.email}</p>
//             <p><strong>Category:</strong> {userDetails.category}</p>
//           </div>
//         ) : (
//           <p>No user details found. Please log in.</p>
//         )}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <DashboardOverview stats={stats} />
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} earnings={earnings.map(earning => ({ ...earning, amount: `${earning.amount} Rs` }))} />
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <EarningsHistory earnings={earnings.map(earning => ({ ...earning, amount: `${earning.amount} Rs` }))} />
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <FeedbackSection feedback={feedback} />
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <Notifications notifications={notifications} />
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <Notifications registeraspartner={registeraspartner} />
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <ProfileManagement userData={userDetails} updateProfile={updateProfile} />
//         </div>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button 
//           className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PartnerDashboard;







import { useLocation, useNavigate } from 'react-router-dom';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import TaskList from '../TaskList/TaskList';
import EarningsHistory from '../EarningsHistory/EarningsHistory';
import FeedbackSection from '../FeedbackSection/FeedbackSection';
import Notifications from '../Notifications/Notifications';
import ProfileManagement from '../ProfileManagement/ProfileManagement';


const PartnerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userDetails = location.state?.userDetails;

  const stats = { totalTasks: 5, completedTasks: 3, pendingTasks: 2 };
  const tasks = [
    { id: 1, name: 'Clean the house', status: 'completed' },
    { id: 2, name: 'Grocery shopping', status: 'pending' },
  ];
  const earnings = [
    { date: '2024-09-01', amount: 999 },
    { date: '2024-09-10', amount: 999 },
  ];
  const feedback = [
    { id: 1, message: 'Great service!', rating: 5 },
    { id: 2, message: 'Very satisfied!', rating: 4 },
  ];
  const notifications = [
    { id: 1, message: 'You have a new task assigned.' },
    { id: 2, message: 'Payment received for your last job.' },
  ];

  const updateTaskStatus = (id) => {
    console.log(`Update task ${id}`);
  };

  const updateProfile = (updatedData) => {
    console.log('Profile updated:', updatedData);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate('/'); 
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome to Your Dashboard!</h2>
      
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        {userDetails ? (
          <div>
            <h3 className="text-xl font-semibold">User Details:</h3>
            <p><strong>UserID:</strong> {userDetails.UserID}</p>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Phone:</strong> {userDetails.phone}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Category:</strong> {userDetails.category}</p>
          </div>
        ) : (
          <p>No user details found. Please log in.</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <DashboardOverview stats={stats} />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} earnings={earnings.map(earning => ({ ...earning, amount: `${earning.amount} Rs` }))} />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <EarningsHistory earnings={earnings.map(earning => ({ ...earning, amount: `${earning.amount} Rs` }))} />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <FeedbackSection feedback={feedback} />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Notifications notifications={notifications} />
        </div>

        

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <ProfileManagement userData={userDetails} updateProfile={updateProfile} />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button 
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default PartnerDashboard;
