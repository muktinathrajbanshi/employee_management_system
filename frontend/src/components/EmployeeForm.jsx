import { useNavigate } from "react-router-dom"

const EmployeeForm = ({initialData, onSuccess, onCancel}) => {

    const navigate = useNavigate()
    const isEditMode = !!initialData

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <div>
      
    </div>
  )
}

export default EmployeeForm
