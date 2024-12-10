"use client"

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { redirect } from "next/navigation";

const items = [
  { value: "en", label: "Eng" },
  { value: "my", label: "Mal" },
  { value: "cn", label: "Chi" },
];

function LocalSwitcher() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = Cookies.get("locale");
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const handleLocaleChange = (value) => {
    setLocale(value);
    Cookies.set("locale", value, { expires: 7 }); 
    redirect('/login')
  };

  return (

   
    <Select   value={locale} onValueChange={handleLocaleChange}  >
      <SelectTrigger>
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
   
  );
}

export default LocalSwitcher;
