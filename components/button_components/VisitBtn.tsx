"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const VisitBtn = ({ shareUrl }: { shareUrl: string }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, "_blank");
      }}>
        Visit
    </Button>
  );
}

export default VisitBtn;