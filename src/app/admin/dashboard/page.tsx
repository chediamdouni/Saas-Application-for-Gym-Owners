import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/pages/dashboard-admin/overview";
import { RecentMembers } from "@/components/pages/dashboard-admin/recent-members";
import { CalendarDateRangePicker } from "@/components/pages/dashboard-admin/date-range-picker";
import { MembershipStats } from "@/components/pages/dashboard-admin/membership-stats";
import { GymCapacity } from "@/components/pages/dashboard-admin/gym-capacity";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Gym Management System Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="trainers">Trainers</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="drop-shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="flex flex-row items-center justify-center gap-3 text-sm font-medium">
                      <Image
                        src="https://img.icons8.com/?size=100&id=13561&format=png&color=000000"
                        alt="Icon"
                        width={20} // Adjust width as needed
                        height={20} // Adjust height as needed
                      />
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className="drop-shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="flex flex-row items-center justify-center gap-3 text-sm font-medium">
                      <Image
                        src="https://img.icons8.com/?size=100&id=mQhsFYuLHuQN&format=png&color=000000"
                        alt="Icon"
                        width={20} // Adjust width as needed
                        height={20} // Adjust height as needed
                      />
                      Active Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180 since last month
                    </p>
                  </CardContent>
                </Card>
                <Card className="drop-shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="flex flex-row items-center justify-center gap-3 text-sm font-medium">
                      <Image
                        src="https://img.icons8.com/?size=100&id=114449&format=png&color=000000"
                        alt="Icon"
                        width={20}
                        height={20}
                      />
                      Active Trainers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      +2 since last month
                    </p>
                  </CardContent>
                </Card>
                <Card className="drop-shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="flex flex-row items-center justify-center gap-3 text-sm font-medium">
                      <Image
                        src="https://img.icons8.com/?size=100&id=8Np27ZvQKYHf&format=png&color=000000"
                        alt="Icon"
                        width={20}
                        height={20}
                      />
                      Current Capacity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">73%</div>
                    <p className="text-xs text-muted-foreground">
                      +4% since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 drop-shadow-lg">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3 drop-shadow-lg">
                  <CardHeader>
                    <CardTitle>Membership Stats</CardTitle>
                    <CardDescription>
                      Distribution of membership types
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MembershipStats />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 drop-shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Members</CardTitle>
                    <CardDescription>
                      Latest member registrations and renewals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentMembers />
                  </CardContent>
                </Card>
                <Card className="col-span-3 drop-shadow-lg">
                  <CardHeader>
                    <CardTitle>Gym Capacity</CardTitle>
                    <CardDescription>
                      Real-time gym occupancy visualization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <GymCapacity />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
