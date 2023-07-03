export default function Inputs() {
    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          Price
        </label>
        <div className="relative rounded-md shadow-sm">
          <input 
            type="text" 
            name="price" 
            id="price" 
            style={{border:"1px solid red", width:"100%"}} 
            className="block w-100 rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="0.00" />
        </div>
      </div>
    )
  }