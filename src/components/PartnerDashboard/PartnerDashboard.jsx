// import { useLocation, useNavigate } from 'react-router-dom';
// import DashboardOverview from '../DashboardOverview/DashboardOverview';
// import TaskList from '../TaskList/TaskList';
// import EarningsHistory from '../EarningsHistory/EarningsHistory';
// import FeedbackSection from '../FeedbackSection/FeedbackSection';
// import Notifications from '../Notifications/Notifications';
// import ProfileManagement from '../ProfileManagement/ProfileManagement';

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
//     { date: '2024-09-01', amount: 50 },
//     { date: '2024-09-10', amount: 75 },
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
//     <div>
//       <h2 className="text-2xl font-bold">Welcome to Your Dashboard!</h2>
//       {userDetails ? (
//         <div className="mt-4">
//           <h3 className="text-xl">User Details:</h3>
//           <p><strong>UserID:</strong> {userDetails.UserID}</p>
//           <p><strong>Name:</strong> {userDetails.name}</p>
//           <p><strong>Phone:</strong> {userDetails.phone}</p>
//           <p><strong>Email:</strong> {userDetails.email}</p>
//           <p><strong>Category:</strong> {userDetails.category}</p>
//         </div>
//       ) : (
//         <p>No user details found. Please log in.</p>
//       )}

//       <DashboardOverview stats={stats} />
//       <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} earnings={earnings} />
//       <EarningsHistory earnings={earnings} />
//       <FeedbackSection feedback={feedback} />
//       <Notifications notifications={notifications} />
//       <ProfileManagement userData={userDetails} updateProfile={updateProfile} />

//       <button 
//         className="bg-red-500 text-white py-2 px-4 rounded mt-4"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
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
    { date: '2024-09-01', amount: 50 },
    { date: '2024-09-10', amount: 75 },
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
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Welcome to Your Dashboard!</h2>

      {/* User Details Box */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
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

      {/* Components in a 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dashboard Overview */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-center">
          <DashboardOverview stats={stats} />
        </div>

        {/* Task List */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-center">
          <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} earnings={earnings} />
        </div>

        {/* Earnings History */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-center">
          <EarningsHistory earnings={earnings} />
        </div>

        {/* Feedback Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-center">
          <FeedbackSection feedback={feedback} />
        </div>

        {/* Notifications */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-center">
          <Notifications notifications={notifications} />
        </div>

        {/* Profile Management */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-center">
          <ProfileManagement userData={userDetails} updateProfile={updateProfile} />
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-6">
        <button 
          className="bg-red-500 text-white py-2 px-6 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default PartnerDashboard;
