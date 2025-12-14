import { useState } from "react";

import ToDo from "./ToDo";
import { BlurInText } from "@/components/ui/blur-in-text";
// import { Card, CardContent } from "@/components/ui/glass/card";
import { ChartAreaInteractive } from "@/components/charts/ChartAreaInteractive";
import { Calendar } from "@/components/ui/calendar";
import { SignupForm } from "../components/login/SignupForm";
import { LoginForm } from "../components/login/LoginForm";
import { ChartBarMultiple } from "@/components/charts/ChartBarMultiple";

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="">
      <BlurInText
        text="Welcome to the Dashboard Page!"
        className="mb-6 text-center"
      />

      {/* card-1 */}
      <div className="border p-4 rounded-md shadow hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-lg font-semibold mb-2">Interactive Area Chart</h2>
        <p className="mb-4 text-sm text-gray-500">
          An example of an interactive area chart component.
        </p>
        <ChartAreaInteractive />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 ">
        {/* chart-2(todo card) */}
        <div className="border p-4 rounded-md shadow hover:scale-105 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-semibold mb-2  ">To-Do List</h2>
          <p className="mb-4 text-sm text-gray-500">This is basic TO-DO App.</p>

          <ToDo />
        </div>

        {/* card-3(Bar chart) */}
        <div className="border p-4 rounded-md shadow h-fit hover:scale-105 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-semibold mb-2">Interactive Bar Chart</h2>
          <p className="mb-4 text-sm text-gray-500">
            An example of an interactive bar chart component.
          </p>
          <ChartBarMultiple />
        </div>

        {/* card-4(calendar) */}
        <div className="border p-4 rounded-md shadow h-fit hover:scale-105 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-semibold mb-2">Calendar</h2>
          <p className="mb-4 text-sm text-gray-500">A Simple Calender</p>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm mx-auto mt-5"
            captionLayout="dropdown"
          />
        </div>

        {/* card-5(Signupu form) */}
        <div className="border p-4 rounded-md shadow h-fit hover:scale-105 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-semibold mb-2">Signup Form</h2>
          <p className="mb-4 text-sm text-gray-500">
            An example of an Signup page component.
          </p>
          <SignupForm />
        </div>

        {/* card-6(Login form) */}
        <div className="border p-4 rounded-md shadow h-fit hover:scale-105 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-semibold mb-2">Login Form</h2>
          <p className="mb-4 text-sm text-gray-500">
            An example of a login page component.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
