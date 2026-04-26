import { CalendarIcon, FileTextIcon } from "lucide-react";

const EmployeeDashboard = ({data}) => { 
    const emp = data.employee;

    const cards = [
        {
            icon: CalendarIcon,
            value: data.currentMonthAttendance,
            title: "Days Present",
            subtitle: "This month",
        },
        {
            icon: FileTextIcon,
            value: data.currentMonthAttendance,
            title: "Days Present",
            subtitle: "This month",
        },

    ]

  return (
    <div>
      
    </div>
  )
}

export default EmployeeDashboard
