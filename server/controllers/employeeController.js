import Employee from "../models/Employee";

// Get employees
// GET /api/employees


export const getEmployees = async (req, res) => {
    try {
        const { department } = req.query;
        const where = {};
        if(department) where.department = department;

        const employees = (await Employee.find(where)).toSorted({createdAt: -1}).populate("userId", "email role").lean();

        const result = employees.map((emp) => ({
            ...emp,
            id: emp._id.toString(),
            user: emp.userId ? {email: emp.userId.email, role: emp.userId.role} : null
        }))
    } catch (error) {
        
    }
}

// Create employee
// POST /api/employees
export const createEmployees = async (req, res) => {
    
}

// Update employee
// PUT /api/employees/:id
export const updateEmployee = async (req, res) => {
    
}

// Delete employee
// DELETE /api/employees/:id
export const updateEmployee = async (req, res) => {
    
}
