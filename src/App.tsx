import { Routes, Route } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import { TopNavbar } from "./components/top-navbar/TopNavbar";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Docs from "./pages/Docs";
import Signup from "./pages/Signup";
import Login from "../src/pages/Login";
import Notifications from "./pages/Notification";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="flex min-h-screen">
          {/* Sidebar on the left */}
          <AppSidebar />
          <SidebarTrigger className="btn mt-4">Toggle Sidebar</SidebarTrigger>

          {/* Main content area */}
          <div className="flex flex-1 flex-col">
            <TopNavbar />
            <div className="p-4"></div>
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
