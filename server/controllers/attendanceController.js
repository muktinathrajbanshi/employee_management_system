import Employee from "../models/Employee";


// Clock in/out for employee
// POST /api/attendance
export const clockInOut = async (req, res) => {
    try {
        const session = req.session;
        const employee = await Employee
    } catch (error) {
        
    }
}

// Get attendance for employee
// GET /api/attendance
export const getAttendance = async (req, res) => {

}