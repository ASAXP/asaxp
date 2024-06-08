"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React, { ElementRef } from "react";

type StoryRowProps = {
  storyId: number;
  description: string;
  storyPoint: number;
  checked: boolean;
};

export default function StoryRow({
  storyId,
  description,
  storyPoint,
  checked = false,
}: StoryRowProps) {
  const [modify, setModify] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(description);
  const checkboxRef = React.useRef<ElementRef<"button">>(null);

  return (
    <div className="flex items-center gap-2">
      <Checkbox ref={checkboxRef} />
      <span className="font-bold">{storyId}</span>
      {modify ? (
        <div className="flex gap-1 grow">
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setModify(false);
            }}
          >
            O
          </Button>
          <Button onClick={() => setModify(false)}>X</Button>
        </div>
      ) : (
        <p className="grow">{inputValue}</p>
      )}
      <Badge>{storyPoint}</Badge>
      <Button onClick={() => setModify(true)}>수정</Button>
    </div>
  );
}
