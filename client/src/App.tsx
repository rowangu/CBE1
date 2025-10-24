import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import TeacherDashboard from "@/pages/TeacherDashboard";
import StudentDashboard from "@/pages/StudentDashboard";
import ParentDashboard from "@/pages/ParentDashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import StudentPortfolio from "@/pages/student/Portfolio";
import StudentAssessments from "@/pages/student/Assessments";
import StudentMessages from "@/pages/student/Messages";
import StudentFees from "@/pages/student/Fees";
import StudentProgress from "@/pages/student/Progress";
import TeacherClasses from "@/pages/teacher/Classes";
import TeacherCompetencies from "@/pages/teacher/Competencies";
import TeacherAssessments from "@/pages/teacher/Assessments";
import TeacherAttendance from "@/pages/teacher/Attendance";
import TeacherMessages from "@/pages/teacher/Messages";
import TeacherAnalytics from "@/pages/teacher/Analytics";
import ParentChildren from "@/pages/parent/Children";
import ParentPerformance from "@/pages/parent/Performance";
import ParentAttendance from "@/pages/parent/Attendance";
import ParentMessages from "@/pages/parent/Messages";
import ParentFees from "@/pages/parent/Fees";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

function Router() {
  //todo: remove mock functionality - role should come from authentication
  const [userRole, setUserRole] = useState<"teacher" | "student" | "parent" | "admin">("teacher");
  const [location, setLocation] = useLocation();

  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar 
          role={userRole} 
          onNavigate={handleNavigate}
          activePath={location}
        />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b bg-background">
            <div className="flex items-center gap-2">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" data-testid="button-role-switcher">
                    Switch Role: <span className="ml-1 font-semibold capitalize">{userRole}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Demo: Select Role</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => {
                      setUserRole("teacher");
                      setLocation("/");
                    }} 
                    data-testid="menu-role-teacher"
                  >
                    Teacher
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => {
                      setUserRole("student");
                      setLocation("/");
                    }} 
                    data-testid="menu-role-student"
                  >
                    Student
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => {
                      setUserRole("parent");
                      setLocation("/");
                    }} 
                    data-testid="menu-role-parent"
                  >
                    Parent
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => {
                      setUserRole("admin");
                      setLocation("/");
                    }} 
                    data-testid="menu-role-admin"
                  >
                    Administrator
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon" data-testid="button-notifications">
                <Bell className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Avatar className="h-8 w-8 cursor-pointer" data-testid="avatar-user">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {userRole[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6 bg-background">
            <Switch>
              {/* Teacher routes */}
              {userRole === "teacher" && (
                <>
                  <Route path="/" component={TeacherDashboard} />
                  <Route path="/classes" component={TeacherClasses} />
                  <Route path="/competencies" component={TeacherCompetencies} />
                  <Route path="/assessments" component={TeacherAssessments} />
                  <Route path="/attendance" component={TeacherAttendance} />
                  <Route path="/messages" component={TeacherMessages} />
                  <Route path="/analytics" component={TeacherAnalytics} />
                </>
              )}

              {/* Student routes */}
              {userRole === "student" && (
                <>
                  <Route path="/" component={StudentDashboard} />
                  <Route path="/progress" component={StudentProgress} />
                  <Route path="/portfolio" component={StudentPortfolio} />
                  <Route path="/assessments" component={StudentAssessments} />
                  <Route path="/messages" component={StudentMessages} />
                  <Route path="/fees" component={StudentFees} />
                </>
              )}

              {/* Parent routes */}
              {userRole === "parent" && (
                <>
                  <Route path="/" component={ParentDashboard} />
                  <Route path="/children" component={ParentChildren} />
                  <Route path="/performance" component={ParentPerformance} />
                  <Route path="/attendance" component={ParentAttendance} />
                  <Route path="/messages" component={ParentMessages} />
                  <Route path="/fees" component={ParentFees} />
                </>
              )}

              {/* Admin routes */}
              {userRole === "admin" && (
                <>
                  <Route path="/" component={AdminDashboard} />
                  <Route path="/students" component={AdminDashboard} />
                  <Route path="/teachers" component={AdminDashboard} />
                  <Route path="/classes" component={AdminDashboard} />
                  <Route path="/finances" component={AdminDashboard} />
                  <Route path="/analytics" component={AdminDashboard} />
                  <Route path="/settings" component={AdminDashboard} />
                </>
              )}

              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
