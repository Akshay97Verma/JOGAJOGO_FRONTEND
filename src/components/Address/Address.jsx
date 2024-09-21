const Address = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold">Save or Edit Your Address</h2>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Address"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="City"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button className="bg-green-500 text-white py-2 px-4 rounded">Save Address</button>
        </form>
      </div>
    );
  };
  
  export default Address;
  