"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SprintTableHeader() {
  return (
    <div className="flex items-center justify-end gap-4">
      <Badge>17</Badge>
      <Button>스프린트 완료</Button>
    </div>
  );
}
