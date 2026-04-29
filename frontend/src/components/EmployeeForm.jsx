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
    <div>
        <h3 className="font-medium mb-6">Personal Information</h3>
    </div>

    </form>
  )
}

export default EmployeeForm
