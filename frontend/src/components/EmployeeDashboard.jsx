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
            title: "Latest Payslip",
            subtitle: "Most recent payout",
        },

    ]

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Welcome, {emp?.firstName}!</h1>
        <p className="page-subtitle">
            {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {cards.map((card, index) => {
            <div key={index} className="card card-hover p-5 sm:p-6 relative overflow-hidden
            group flex items-center justify-center">
                <div>

                </div>
                <card.icon className="size-10 p-2.5 rounded-lg bg-slate-100
                text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600
                transition-colors duration-200" />
            </div>
        })}
      </div>
    </div>
  )
}

export default EmployeeDashboard
