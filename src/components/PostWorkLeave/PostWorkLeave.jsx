import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'; // Make sure to install this
import 'react-toastify/dist/ReactToastify.css';
import bgPic from '../../../public/p2.avif';
import { useThemeColors } from '../../utils/useThemeColor';
import { postWorkFeedback } from '../../redux/slice/user/postWorkFeedbackSlice';
import { fetchUserFeedback } from '../../redux/slice/user/fetchUserFeedbackSlice';

const PostWorkLeave = () => {
  const dispatch = useDispatch();
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);
  const feedbackData = useSelector((state) => state.postWorkFeedback)
  // console.log(feedbackData)

  const [leaves, setLeaves] = useState([]) || [];
  const [leaveType, setLeaveType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [status, setStatus] = useState('Pending');
  const [feedback, setFeedback] = useState('');
  const [reliefNeeded, setReliefNeeded] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddLeave = async (e) => {
    e.preventDefault();
    if (leaveType.trim() && startTime && endTime) {
      const newLeave = { leaveType, startTime, endTime, status, feedback, reliefNeeded };
      //   if (editingIndex !== null) {
      //     const updatedLeaves = leaves.map((leave, index) =>
      //       index === editingIndex ? newLeave : leave
      //     );
      //     setLeaves(updatedLeaves);
      //     setEditingIndex(null);
      //     toast.success('Leave updated successfully!');
      //   } else {
      //     setLeaves([...leaves, newLeave]);
      //     toast.success('Leave added successfully!');
      //   }
      //   resetForm();
      // } else {
      //   toast.error('All fields are required!');
      // }
      try {
        await dispatch(postWorkFeedback(newLeave)).unwrap();
        toast.success('Leave added successfully!');
        resetForm();
        callApiTofetchFeedbackData();
      } catch (error) {
        toast.error('Failed to add leave. Please try again.');
      }
    } else {
      toast.error('All fields are required!');
    }

  };

  const callApiTofetchFeedbackData = async () => {
    const result = await dispatch(fetchUserFeedback());
    console.log(result.payload.feedbacks);
    setLeaves(result?.payload?.feedbacks || []);
  }

  useEffect(() => {
    callApiTofetchFeedbackData();
  }, [])

  const handleEditLeave = (index) => {
    setLeaveType(leaves[index].leaveType);
    setStartTime(leaves[index].startTime);
    setEndTime(leaves[index].endTime);
    setStatus(leaves[index].status);
    setFeedback(leaves[index].feedback);
    setReliefNeeded(leaves[index].reliefNeeded);
    setEditingIndex(index);
  };

  const handleRemoveLeave = (index) => {
    const newLeaves = leaves.filter((_, i) => i !== index);
    setLeaves(newLeaves);
    toast.info('Leave removed!');
  };

  const resetForm = () => {
    setLeaveType('');
    setStartTime('');
    setEndTime('');
    setStatus('Pending');
    setFeedback('');
    setReliefNeeded(false);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgPic})` }}
    >
      <div className=" bg-opacity-90 rounded-lg shadow-md p-6 max-w-lg w-full" style={{ background: colors.secondbackground }}>
        <h2 className="text-2xl font-bold mb-4 text-center">Post-Work feedback</h2>

        <form onSubmit={handleAddLeave} className="mb-4 space-y-4">
          <input
            type="text"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            placeholder="Enter leave type"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            style={{ background: colors.cardBg }}
          />
          <div className="flex space-x-4">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              required
              style={{ background: colors.cardBg, }}
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              style={{ background: colors.cardBg }}

            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{ background: colors.cardBg }}

          >
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
            <option value="Denied">Denied</option>
          </select>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Leave feedback (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{ background: colors.cardBg }}

          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={reliefNeeded}
              onChange={() => setReliefNeeded(!reliefNeeded)}
              className="mr-2"
            />
            <label className="text-sm">Relief coverage needed?</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            {editingIndex !== null ? 'Update Leave' : 'Add Leave'}
          </button>
        </form>


        <div className="overflow-y-auto max-h-40"> {/* Set a fixed height and make it scrollable */}
          {leaves.map((leave, index) => (
            <li key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm mb-2">
              <h3 className="font-semibold">Leave Type: {leave.leaveType}</h3>
              <p className="text-sm text-gray-600">From: {leave.startTime} To: {leave.endTime}</p>
              <p className="text-sm text-gray-600">Status: {leave.status}</p>
              <p className="text-sm text-gray-600">Feedback: {leave.feedback || 'N/A'}</p>
              <p className="text-sm text-gray-600">Relief Needed: {leave.reliefNeeded ? 'Yes' : 'No'}</p>
              <div className="flex space-x-2 mt-2">
                <button onClick={() => handleEditLeave(index)} className="text-yellow-500 hover:text-yellow-700">
                  Edit
                </button>
                <button onClick={() => handleRemoveLeave(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </div>


        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default PostWorkLeave;
