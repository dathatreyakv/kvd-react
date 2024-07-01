
const ContactUs = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Us Page: </h1>
      <form>
        <input type="text" className="border border-black m-2 p-2" placeholder="Name"/>
        <input type="text" className="border border-black m-2 p-2" placeholder="Message"/>
        <button type="button" className="border text-gray-600 border-black m-2 p-2 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs