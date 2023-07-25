import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Link from "next/link"

const [showPassword, setShowPassword] = useState(false)
const [form, setForm] = useState({
  email: "",
  password: ""
})

// Type declaration pending
const handleOnChange = (event:any) => {
  setForm((prevData)=>({
    ...prevData,
    [event.target.name]: event.target.value
  }))
}

const handleOnSubmit = (event:any) => {

  // Redux dispatch pending
    // api call
    // redirect to dashboard
  event.preventDefault()
  console.log(form)

}

const LoginForm = () => {
  return (
    <div>
      <form className="mt-6 flex w-full flex-col gap-y-4" onSubmit={handleOnSubmit}>
        
        <label className="w-full"> <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5" >Email Address <sup>*</sup></p> 
        <input className="form-style w-full" onChange={handleOnChange} type="text" name="email" placeholder="Enter email address" />
        </label>

        <label className="relative"> <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5" >Password <sup>*</sup></p>
        <input  className="form-style w-full !pr-10" onChange={handleOnChange} type="password" name="password" placeholder="Enter password" />

        <span
        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        onClick={()=> setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link href="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
        </label>
        <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>

      </form>
    </div>
  )
}

export default LoginForm
