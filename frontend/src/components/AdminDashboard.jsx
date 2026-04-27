import { Building2Icon, CalendarIcon, UsersIcon } from "lucide-react"

const AdminDashboard = ({ data }) => {

    const stats = [
        {
            icon: UsersIcon,
            value: data.totalEmployees,
            label: "Total Employees",
            description: "Active workforce",
        },
        {
            icon: Building2Icon,
            value: data.totalDepartments,
            label: "Departments",
            description: "Organization units",
        },
        {
            icon: CalendarIcon,
            value: data.todayAttendance,
            label: "Today's Attendance",
            description: "Checked in today",
        },
    ]

  return (
    <div>
      
    </div>
  )
}

export default AdminDashboard
