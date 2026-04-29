import { useNavigate } from "react-router-dom"

const EmployeeForm = ({initialData, onSuccess, onCancel}) => {

    const navigate = useNavigate()
    const isEditMode = !!initialData

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl animate-fade-in">
      
    {/* Personal Inormation  */}
    <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b
        border-slate-100">Personal Information</h3>
    </div>

    </form>
  )
}

export default EmployeeForm
