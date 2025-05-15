"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Users,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

interface Order {
  id: string;
  customer: string;
  product: string;
  status: string;
  date: string;
  amount: string;
}

const orders: Order[] = [
  {
    id: "1",
    customer: "John Doe",
    product: "ROX01",
    status: "Pending",
    date: "2024-03-15",
    amount: "$45,000",
  },
  {
    id: "2",
    customer: "Jane Smith",
    product: "ROX01",
    status: "Completed",
    date: "2024-03-14",
    amount: "$45,000",
  },
  {
    id: "3",
    customer: "Mike Johnson",
    product: "ROX01",
    status: "Processing",
    date: "2024-03-13",
    amount: "$45,000",
  },
];

export default function AdminPage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen pt-20">
      <div className="container-fluid py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="p-4">
              <nav className="space-y-2">
                <Button
                  variant={activeTab === "dashboard" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("dashboard")}
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  {t("admin.dashboard")}
                </Button>
                <Button
                  variant={activeTab === "orders" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {t("admin.orders")}
                </Button>
                <Button
                  variant={activeTab === "customers" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("customers")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  {t("admin.customers")}
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  {t("admin.settings")}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {t("admin.logout")}
                </Button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === "dashboard" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-2xl font-bold mb-6">{t("admin.dashboard")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{t("admin.totalOrders")}</h3>
                    <p className="text-3xl font-bold">150</p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{t("admin.totalCustomers")}</h3>
                    <p className="text-3xl font-bold">1,200</p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{t("admin.totalRevenue")}</h3>
                    <p className="text-3xl font-bold">$6.75M</p>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeTab === "orders" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">{t("admin.orders")}</h1>
                  <div className="flex space-x-4">
                    <Input
                      type="text"
                      placeholder={t("admin.searchOrders")}
                      className="w-64"
                    />
                    <Button>{t("admin.addOrder")}</Button>
                  </div>
                </div>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("admin.orderId")}</TableHead>
                        <TableHead>{t("admin.customer")}</TableHead>
                        <TableHead>{t("admin.product")}</TableHead>
                        <TableHead>{t("admin.status")}</TableHead>
                        <TableHead>{t("admin.date")}</TableHead>
                        <TableHead>{t("admin.amount")}</TableHead>
                        <TableHead>{t("admin.actions")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.product}</TableCell>
                          <TableCell>{order.status}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              {t("admin.view")}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </motion.div>
            )}

            {activeTab === "customers" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-2xl font-bold mb-6">{t("admin.customers")}</h1>
                <Card className="p-6">
                  <p className="text-gray-500">{t("admin.comingSoon")}</p>
                </Card>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-2xl font-bold mb-6">{t("admin.settings")}</h1>
                <Card className="p-6">
                  <p className="text-gray-500">{t("admin.comingSoon")}</p>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 