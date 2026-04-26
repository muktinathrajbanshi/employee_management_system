import { CalendarIcon, DollarSignIcon, FileTextIcon } from "lucide-react";

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
            value: data.pendingLeaves,
            title: "Pending Leaves",
            subtitle: "Awaiting approval",
        },
        {
            icon: DollarSignIcon,
            value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.
            toLocaleString()}` : "N/A",
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
