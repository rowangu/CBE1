import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  BarChart3,
  BookOpen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  role: "teacher" | "student" | "parent" | "admin";
  onNavigate?: (path: string) => void;
  activePath?: string;
}

export function AppSidebar({ role, onNavigate, activePath = "/" }: AppSidebarProps) {
  const menuItems = {
    teacher: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/" },
      { title: "My Classes", icon: Users, path: "/classes" },
      { title: "Competencies", icon: GraduationCap, path: "/competencies" },
      { title: "Assessments", icon: ClipboardCheck, path: "/assessments" },
      { title: "Attendance", icon: Calendar, path: "/attendance" },
      { title: "Messages", icon: MessageSquare, path: "/messages" },
      { title: "Analytics", icon: BarChart3, path: "/analytics" },
    ],
    student: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/" },
      { title: "My Progress", icon: GraduationCap, path: "/progress" },
      { title: "Portfolio", icon: BookOpen, path: "/portfolio" },
      { title: "Assessments", icon: ClipboardCheck, path: "/assessments" },
      { title: "Messages", icon: MessageSquare, path: "/messages" },
      { title: "Fees", icon: CreditCard, path: "/fees" },
    ],
    parent: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/" },
      { title: "Children", icon: Users, path: "/children" },
      { title: "Performance", icon: GraduationCap, path: "/performance" },
      { title: "Attendance", icon: Calendar, path: "/attendance" },
      { title: "Messages", icon: MessageSquare, path: "/messages" },
      { title: "Fees & Payments", icon: CreditCard, path: "/fees" },
    ],
    admin: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/" },
      { title: "Students", icon: Users, path: "/students" },
      { title: "Teachers", icon: GraduationCap, path: "/teachers" },
      { title: "Classes", icon: BookOpen, path: "/classes" },
      { title: "Finances", icon: CreditCard, path: "/finances" },
      { title: "Analytics", icon: BarChart3, path: "/analytics" },
      { title: "Settings", icon: Settings, path: "/settings" },
    ],
  };

  const items = menuItems[role];

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">CBE School</span>
            <span className="text-xs text-muted-foreground capitalize">{role}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activePath === item.path}
                    data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate?.(item.path);
                      }}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
