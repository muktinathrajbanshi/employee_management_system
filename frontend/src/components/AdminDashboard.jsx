import { UsersIcon } from "lucide-react"

const AdminDashboard = ({ data }) => {

    const stats = [
         {
            icon: UsersIcon,
            value: data.totalEmployees,
            label: "Total Employees",
            description: "Active workforce",
        },
    ]

  return (
    <div>
      
    </div>
  )
}

export default AdminDashboard
