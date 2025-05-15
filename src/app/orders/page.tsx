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
  Search,
  Filter,
  Download,
  Printer,
  Eye,
} from "lucide-react";

interface Order {
  id: string;
  customer: string;
  product: string;
  status: string;
  date: string;
  amount: string;
  trackingNumber: string;
}

const orders: Order[] = [
  {
    id: "1",
    customer: "John Doe",
    product: "ROX01",
    status: "Pending",
    date: "2024-03-15",
    amount: "$45,000",
    trackingNumber: "TRK123456",
  },
  {
    id: "2",
    customer: "Jane Smith",
    product: "ROX01",
    status: "Completed",
    date: "2024-03-14",
    amount: "$45,000",
    trackingNumber: "TRK123457",
  },
  {
    id: "3",
    customer: "Mike Johnson",
    product: "ROX01",
    status: "Processing",
    date: "2024-03-13",
    amount: "$45,000",
    trackingNumber: "TRK123458",
  },
];

export default function OrdersPage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const statuses = Array.from(new Set(orders.map((order) => order.status)));

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !selectedStatus || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="container-fluid py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          {t("orders.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-center mb-8"
        >
          {t("orders.subtitle")}
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder={t("orders.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              {t("orders.filter")}
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              {t("orders.export")}
            </Button>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              {t("orders.print")}
            </Button>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={selectedStatus === null ? "default" : "outline"}
            onClick={() => setSelectedStatus(null)}
          >
            {t("orders.all")}
          </Button>
          {statuses.map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "default" : "outline"}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
            </Button>
          ))}
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("orders.orderId")}</TableHead>
                <TableHead>{t("orders.customer")}</TableHead>
                <TableHead>{t("orders.product")}</TableHead>
                <TableHead>{t("orders.status")}</TableHead>
                <TableHead>{t("orders.date")}</TableHead>
                <TableHead>{t("orders.amount")}</TableHead>
                <TableHead>{t("orders.trackingNumber")}</TableHead>
                <TableHead>{t("orders.actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.trackingNumber}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      {t("orders.view")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
} 