import { Inngest } from "inngest";
import Attendance from "../models/Attendance.js";
import Employee from "../models/Employee.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "mtech-ems" });

// Auto Check-out for employees
const autoCheckOut = inngest.createFunction(
  { id: "auto-check-out"},
  { event: "/employee/check-out" },
  async ({ event, step }) => {
    const { employeeId, attendanceId } = event.data;

    // Wait for 9 hours
    await step.sleepUntil("wait-for-the-9-hours", new Date(new Date().getTime() + 9 * 60 * 60 * 1000))

    // get Attendance data
    let attendance = await Attendance.findById(attendanceId)

    if (!attendance?.checkOut){
        // get Employee data
        const employee =  await Employee.findById(employeeId)

        // Send reminder email

        // After 10 hours, mark attendance as checked out with status "LATE".
    }
  },
);

// Create an empty array where we'll export future Inngest functions
export const functions = [];